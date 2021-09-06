import { useSession } from 'next-auth/client';
import Image from 'next/image';

function InputBox() {
  const [session] = useSession();
  const { name, image } = session.user;

  return (
    <div>
      <div>
        <Image
          className="rounded-full"
          alt={name}
          src={image}
          width={40}
          height={40}
          layout="fixed"
        />
        <form className="flex flex-1">
          <input type="text" placeholder={`Watcha thinking ${name}`} />
        </form>
      </div>
    </div>
  );
}

export default InputBox;
