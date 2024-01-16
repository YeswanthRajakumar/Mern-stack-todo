import { useState } from "react";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

let todoList = [
  {
    "id": "1",
    "title": "Buy groceries",
    "isCompleted": true
  },
  {
    "id": "2",
    "title": "Finish work project",
    "isCompleted": false
  },
  {
    "id": "3",
    "title": "Go to the gym",
    "isCompleted": false
  },

];

export default function MyApp() {
  const [todos, setTodos] = useState(todoList);

  function addTodo(item: any) {
    let newList: any = todos.concat([item]);
    setTodos(newList);
    console.log("Added", newList);
    console.log("new list", todos);
  }


  return (
    <>
      <p className="font-bold	text-center mt-10 text-4xl" > Yet another Todo 📝</p>
      <div className="container border-2 border-gray-800 py-2 mx-auto w-96 bg-yellow-200 mt-12  rounded-md  items-center justify-center flex gap-5 flex-col">
        <TodoInput addhandler={addTodo} />
        <TodoList list={todos} />
      </div>
    </>


  );

}


