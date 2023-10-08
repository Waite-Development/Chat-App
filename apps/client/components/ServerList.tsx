import { HiPlus } from "react-icons/hi";

export default function ServerList() {
  return (
    <div className="flex flex-col gap-4 bg-slate-800 p-2">
      <div className="h-12 w-12 overflow-hidden rounded-full bg-[url('https://plus.unsplash.com/premium_photo-1692825695348-1203e9132c52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5Njc4NjkwNA&ixlib=rb-4.0.3&q=80&w=1080')] bg-cover" />
      <div className="h-12 w-12 overflow-hidden rounded-full bg-[url('https://images.unsplash.com/photo-1693928772322-6a17fabe4326?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5Njc4Nzk5Nw&ixlib=rb-4.0.3&q=80&w=1080')] bg-cover" />
      <div className="flex h-12 w-12 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-slate-700 text-4xl font-extralight text-emerald-400 hover:bg-emerald-400 hover:text-white">
        <HiPlus />
      </div>
    </div>
  );
}
