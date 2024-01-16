import { useState, useEffect } from "react";
import { TodoItem } from "./TodoItem";

export function TodoList(props: Readonly<{ list: any }>) {
    const [todoList, setTodoList] = useState(props.list);

    useEffect(() => {
        setTodoList(props.list);
    }, [props.list]);

    return (
        <ul className="text-center">
            {todoList.map((todo_item: any) => (
                <TodoItem
                    key={todo_item.id}
                    id={todo_item.id}
                    title={todo_item.title}
                    isCompleted={todo_item.isCompleted}
                    todoListChanger={setTodoList}
                    todoList={todoList}
                />
            ))}
        </ul>
    );
}