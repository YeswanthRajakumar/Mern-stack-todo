import { useState } from "react";



export function TodoItem(props: Readonly<{ id: any, title: string, isCompleted: boolean, todoListChanger: any, todoList: any }>) {
    const [taskCompletedStatus, setTaskCompletedStatus] = useState(props.isCompleted);
    const changeTaskCompletedStatus = (event: any) => {
        setTaskCompletedStatus(event.target.checked);
    }
    const deleteTask = (id: any) => {
        let indexOfItemToDelete = -1;
        for (let i = 0; i < props.todoList.length; i++) {
            if (props.todoList[i].id === id) {
                indexOfItemToDelete = i;
                break;
            }
        }
        let newTodoList = [...props.todoList,];
        newTodoList.splice(indexOfItemToDelete, 1 );
        props.todoListChanger(newTodoList);
    }

    return <li className="mt-2">
        <div className="flex gap-2 py-1 px-2 justify-between">
            <div className="flex gap-2">
                <input type="checkbox" defaultChecked={props.isCompleted} onChange={changeTaskCompletedStatus} />
                <p className={taskCompletedStatus ? "line-through" : ""}>{props.title}</p>
            </div>
            <div className="flex gap-2">
                {
                    !taskCompletedStatus ? (
                        <button className="bg-blue-300  px-2 rounded-lg" type="submit"> Edit </button>
                    ) : null
                }
                <button className="bg-rose-300  px-2 rounded-lg" onClick={() => deleteTask(props.id)}> Delete</button>


            </div>
        </div>

    </li>;
}
