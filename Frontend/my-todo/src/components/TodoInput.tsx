export function TodoInput() {
    return (
        <div className="max-w-min">
            <form className="flex gap-2 ">
                <input className="border-2 border-purple-400 rounded-md px-4 py-1" type="text" placeholder="ex: Buy Apples ..." />
                <button className="bg-purple-400 px-4 py-1 rounded-md" type="submit"> ADD </button>
            </form>
        </div>);
}

