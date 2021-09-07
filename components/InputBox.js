import { useSession } from 'next-auth/client';
import Image from 'next/image';

function InputBox() {
  const [session] = useSession();
  const { name, image } = session.user;

  function sendPost() {}

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
            className="outline-none rounded-full h-12 bg-gray-100 px-5 flex-grow"
            type="text"
            placeholder={`Watcha thinking ${name}?`}
          />
          <button className="hidden" type="submit" onClick={sendPost}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default InputBox;
