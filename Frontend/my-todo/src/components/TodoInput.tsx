import { FormEvent, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export function TodoInput(props: Readonly<{ addhandler: any }>) {
    const [todoInput, setTodoInput] = useState("")

    const handleInputChange = (event: FormEvent) => {
        let inputEventValue = (event.target as HTMLInputElement).value
        console.log("value ", inputEventValue);
        setTodoInput(inputEventValue)
    }


    const addTodoItem = (event: FormEvent): void => {
        event.preventDefault();
        let todoItem = {
            "id": uuidv4(),
            "title": todoInput.toString(),
            "isCompleted": false
        }

        props.addhandler(todoItem);
        setTodoInput("");
    }
    function isTodoInputEmpty(): boolean | undefined {
        return todoInput.trim().length == 0
    }

    return (
        <div className="max-w-min">
            <form className="flex gap-2 " onSubmit={addTodoItem}>
                <input className="border-2 border-purple-400 rounded-md px-4 py-1"
                    type="text"
                    placeholder="ex: Buy Apples ..."
                    onChange={handleInputChange}
                    value={todoInput}
                />

                <button className="bg-purple-400 px-4 py-1 rounded-md cursor-pointer"
                    type="submit"
                    disabled={isTodoInputEmpty()} > ADD </button>
            </form>
        </div>);
}
