

export default function ChatMessageInput() {
    return (
        <form className="flex">
            <div className="flex flex-grow p-3">
                <textarea className="bg-slate-750 flex flex-grow rounded p-2" placeholder="Share a message..." rows={1} />
            </div>
        </form>
    );
}