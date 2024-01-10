export default function MyApp() {
  return (
    <div className="container py-2 mx-auto bg-yellow-200 mt-10  rounded-md  items-center justify-center flex gap-5 flex-col">
      <TodoInput />
      <TodoList />
    </div>

  );

}

function TodoList() {
  return (
    <ul className="text-center">
      <TodoItem title="Do the Math" />
      <TodoItem title="Water the garden" />
      <TodoItem title="Buy Pencils" />
    </ul>

  );
}

function TodoItem(props: { title: string }) {
  return <li className="mt-2">
    <div className="flex gap-2 py-1 px-2 justify-between">
      <p>{props.title}</p>
      <div className="flex gap-2">
      <button className="bg-blue-300  px-1 rounded-sm" type="submit"> Edit </button>
      <button className="bg-rose-300  px-1 rounded-sm" type="submit"> Delete </button>
      </div>
    </div>

  </li>;
}

function TodoInput() {
  return (
    <div className="max-w-min">
      <form className="flex gap-2 ">
        <input className="border-2 border-purple-400 rounded-md px-4 py-1" type="text" placeholder="ex: Buy Apples ..." />
        <button className="bg-purple-400 px-4 py-1 rounded-md" type="submit"> ADD </button>
      </form>
    </div>);
}
