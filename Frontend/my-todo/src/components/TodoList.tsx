import { useState } from "react";
import { TodoItem } from "./TodoItem";

export function TodoList() {
    const todos = [
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
    const [todoList, settodoList] = useState(todos);

    return (
        <ul className="text-center">
            {todoList.map(todo_item => {
                return (<TodoItem key={todo_item.id} id={todo_item.id} title={todo_item.title} isCompleted={todo_item.isCompleted} todoListChanger={settodoList} todoList={todoList} />);
            })}
        </ul>

    );
}
