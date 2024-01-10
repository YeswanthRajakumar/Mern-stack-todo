import { useState } from "react";



export function TodoItem(props: { id: any, title: string, isCompleted: boolean, todoListChanger: any, todoList: any }) {
    const [taskCompletedStatus, settaskCompletedStatus] = useState(props.isCompleted);
    const changeTaskCompletedStatus = (event: any) => {
        settaskCompletedStatus(event.target.checked);
    }
    const deleteTask = (id: any) => {
        let indexOfItemToDelete;
        for (let i = 0; i < props.todoList.length; i++) {
            if (props.todoList[i].id === id) {
                indexOfItemToDelete = i;
                break;
            }
        }

        props.todoList.splice(indexOfItemToDelete, 1);
        console.log(props.todoList);
        props.todoListChanger([...props.todoList]);
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
                        <>
                            <button className="bg-blue-300  px-2 rounded-lg" type="submit"> Edit </button>
                        </>
                    ) : null
                }
                <button className="bg-rose-300  px-2 rounded-lg" onClick={() => deleteTask(props.id)}> Delete</button>


            </div>
        </div>

    </li>;
}
