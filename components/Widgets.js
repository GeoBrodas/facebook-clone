import { MicrophoneIcon } from '@heroicons/react/outline';
import ComingUp from './ComingUp';
import WhatsNew from './WhatsNew';

function Widgets() {
  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
      <div className="flex justify-between text-gray-500 items-center mb-5">
        <h2 className="text-xl">DevSpeaks</h2>
        <MicrophoneIcon className="h-6" />
      </div>
      <div className="flex flex-col space-y-4">
        <WhatsNew />
        <ComingUp />
      </div>
    </div>
  );
}

export default Widgets;
