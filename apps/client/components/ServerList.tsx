type Server = {
  name: string;
  avatarUrl: string;
};

export default function ServerList() {
  return (
    <div className="flex flex-col gap-4 p-2 absolute top-0 bottom-0 bg-slate-800">
      <div className="rounded-full overflow-hidden h-14 w-14 bg-cover bg-[url('https://plus.unsplash.com/premium_photo-1692825695348-1203e9132c52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5Njc4NjkwNA&ixlib=rb-4.0.3&q=80&w=1080')]" />
      <div className="rounded-full overflow-hidden h-14 w-14 bg-cover bg-[url('https://images.unsplash.com/photo-1693928772322-6a17fabe4326?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5Njc4Nzk5Nw&ixlib=rb-4.0.3&q=80&w=1080')]" />
      <div className="rounded-full overflow-hidden h-14 w-14 flex items-center justify-center text-5xl font-extralight bg-slate-700 pb-2 cursor-pointer hover:bg-emerald-400 hover:text-white">+</div>
    </div>
  );
}
