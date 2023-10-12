import { HiHashtag } from "react-icons/hi";
import ChatMessageInput from "./ChatMessageInput";


export default function ServerChat() {
    return (
        <div className="flex flex-col h-screen flex-grow">
            <div className="flex text-lg items-center border-b-2 border-b-slate-800 p-3 gap-1">
                <HiHashtag className="text-xl" />
                general
            </div>
            <div className="flex flex-grow flex-col">
                <div className="flex flex-row p-2 items-center">
                    <div className="flex p-2">
                        <img
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2680&q=80"
                            className="max-w-10 h-10 rounded-full"
                        />
                    </div>
                    <div>
                        <h3 className="text-emerald-400 font-semibold">
                            Dave Plugh
                        </h3>
                        <p>
                            {'cs2 needs to fix its matchmaking :('}
                        </p>
                    </div>
                </div>
                <div className="flex flex-row p-2 items-center">
                    <div className="flex p-2">
                        <img
                            src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
                            className="max-w-10 h-10 rounded-full"
                        />
                    </div>
                    <div>
                        <h3 className="text-emerald-400 font-semibold">
                            BeefyMcFatCakes
                        </h3>
                        <p>
                            {'agreed'}
                        </p>
                    </div>
                </div>
            </div>
            <ChatMessageInput />
        </div>
    );
}