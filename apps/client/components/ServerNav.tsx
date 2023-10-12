import { HiHashtag } from "react-icons/hi";
import UserControls from "./UserControls";
export default function ServerNav() {
  return (
    <div className="bg-slate-750 flex h-screen w-[250px] flex-col gap-3">
      <div className="border-b-2 border-b-slate-800 p-3 text-lg font-semibold">
        Server Name
      </div>
      <div className="text-md flex grow flex-col gap-2 p-2">
        <div className="flex items-center gap-1 font-bold">
          <HiHashtag className="text-xl" />
          general
        </div>
        <div className="flex items-center gap-1">
          <HiHashtag className="text-xl" />
          random
        </div>
      </div>
      <UserControls />
    </div>
  );
}
