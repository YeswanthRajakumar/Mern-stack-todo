import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

export default function MyApp() {

  return (
    <>
      <p className="font-bold	text-center mt-10 text-4xl" > Yet another Todo 📝</p>
      <div className="container border-2 border-gray-800 py-2 mx-auto w-96 bg-yellow-200 mt-12  rounded-md  items-center justify-center flex gap-5 flex-col">
        <TodoInput />
        <TodoList />
      </div>
    </>


  );

}


