import Image from 'next/image';

import { ChatAltIcon, ShareIcon, ThumbUpIcon } from '@heroicons/react/outline';

function PostCard(props) {
  const { name, message, email, timestamp, userimage, postImage } = props;

  return (
    <div className="flex flex-col">
      <div className="p-5 bg-white rounded-t-2xl mt-5 shadow-md">
        <div className="flex items-center space-x-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={userimage} width={40} height={40} alt={name} />
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-xs text-gray-400">
              {new Date(timestamp?.toDate()).toLocaleString()}
            </p>
          </div>
        </div>

        <p className="pt-4">{message}</p>
      </div>
      {postImage && (
        <div className="relative h-56 md:h-96 bg-white">
          <Image
            src={postImage}
            alt={message}
            objectFit="cover"
            layout="fill"
          />
        </div>
      )}

      {/* Fotter of PostCard */}
      <div className="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t">
        <div className="input-icon rounded-bl-2xl">
          <ThumbUpIcon className="h-4" />
          <p className="text-xs sm:text-base">Like</p>
        </div>
        <div className="input-icon rounded-none">
          <ChatAltIcon className="h-4" />
          <p className="text-xs sm:text-base">Comment</p>
        </div>
        <div className="input-icon rounded-br-2xl">
          <ShareIcon className="h-4" />
          <p className="text-xs sm:text-base">Share</p>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
