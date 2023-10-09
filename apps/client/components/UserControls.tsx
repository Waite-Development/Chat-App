import { HiOutlineMicrophone, HiOutlineCog8Tooth } from "react-icons/hi2";
import { PiHeadphones } from "react-icons/pi";

export default function UserControls() {
  return (
    <div className="bg-slate-775 flex items-center gap-2 p-2">
      <div className="flex grow">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2680&q=80"
            className="max-w-10 h-10 rounded-full"
          />
          <span className="border-slate-750 absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 bg-emerald-500" />
        </div>
        <div className="flex flex-col justify-center pl-2">
          <div className="text-sm leading-tight">Dave Plugh</div>
          <div className="text-xs leading-tight text-gray-300">Online</div>
        </div>
      </div>
      <HiOutlineMicrophone className="text-xl" />
      <HiOutlineCog8Tooth className="text-xl" />
      <PiHeadphones className="text-xl" />
    </div>
  );
}
