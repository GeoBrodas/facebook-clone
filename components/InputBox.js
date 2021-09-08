import { useSession } from 'next-auth/client';
import Image from 'next/image';

import { EmojiHappyIcon } from '@heroicons/react/outline';
import { CameraIcon, VideoCameraIcon } from '@heroicons/react/solid';
import { useRef, useState } from 'react';

import { db, storage } from '../firebase-config';
import firebase from 'firebase';

function InputBox() {
  const inputRef = useRef(null);
  const fileUploadRef = useRef(null);

  const [imageState, setImageState] = useState(null);

  const [session] = useSession();
  const { name, image } = session.user;

  function removeImage() {
    setImageState(null);
  }

  function sendPost(event) {
    event.preventDefault();
    if (!inputRef.current.value) return;

    db.collection('posts')
      .add({
        message: inputRef.current.value,
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((doc) => {
        if (imageState) {
          // upload image
          const uploadTask = storage
            .ref(`posts/${doc.id}`)
            .putString(imageState, 'data_url');
          removeImage();

          uploadTask.on(
            'state_change',
            null,
            (error) => console.error(error),
            () => {
              // after uploading completes ( progress can also be displayes --optional )
              storage
                .ref(`posts/${doc.id}`)
                .getDownloadURL()
                .then((url) => {
                  // setting the image url from the getDownloadUrl to the firestore database also by finding the document with doc.id
                  db.collection('posts').doc(doc.id).set(
                    {
                      postImage: url,
                    },
                    { merge: true }
                  );
                });
            }
          );
        }
      });

    inputRef.current.value = '';
  }

  function addImagePost(event) {
    // event.preventDefault();

    const reader = new FileReader(); // file reader api initialise

    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setImageState(readerEvent.target.result);
    };
  }

  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className="flex space-x-4 p-4 items-center">
        <Image
          className="rounded-full"
          alt={name}
          src={image}
          width={40}
          height={40}
          layout="fixed"
        />
        <form className="flex flex-1">
          <input
            ref={inputRef}
            className="outline-none rounded-full h-12 bg-gray-100 px-5 flex-grow"
            type="text"
            placeholder={`Watcha thinking ${name}?`}
          />
          <button className="hidden" type="submit" onClick={sendPost}>
            Submit
          </button>
        </form>

        {imageState && (
          <div
            onClick={removeImage}
            className="flex flex-col cursor-pointer filter hover:brightness-110 transition duration-150 transform hover:scale-105"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="h-10 object-contain"
              src={imageState}
              alt="preview"
            />
            <p className="text-xs text-red-500 text-center">Remove</p>
          </div>
        )}
      </div>

      <div className="flex justify-evenly p-3 border-t">
        <div className="input-icon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>

        <div
          onClick={() => fileUploadRef.current.click()}
          className="input-icon"
        >
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
          <input
            ref={fileUploadRef}
            onChange={addImagePost}
            type="file"
            hidden
          />
        </div>

        <div className="input-icon">
          <EmojiHappyIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
