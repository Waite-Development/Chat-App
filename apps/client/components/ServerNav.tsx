import { HiHashtag } from "react-icons/hi";
import { PiSpeakerHighBold } from "react-icons/pi";
import UserControls from "./UserControls";
export default function ServerNav() {
  return (
    <div className="bg-slate-750 flex h-screen w-[250px] flex-col gap-3">
      <div className="border-b-2 border-b-slate-800 p-3 text-lg font-semibold">
        Server Name
      </div>
      <div className="text-md flex grow flex-col gap-2 p-2">
        <div className="flex items-center gap-2">
          <HiHashtag className="text-xl" />
          general
        </div>
        <div className="flex items-center gap-2">
          <HiHashtag className="text-xl" />
          random
        </div>
        <div className="flex items-center gap-2">
          <PiSpeakerHighBold className="text-xl" />
          voice channel
        </div>
      </div>
      <UserControls />
    </div>
  );
}
