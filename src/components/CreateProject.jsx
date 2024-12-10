import { useRef } from "react";
import Input from "./Input.jsx";

export default function CreateProject({ onChangeView, onSave }) {
  const inputTitle = useRef(null);
  const inputDescription = useRef(null);
  const inputDueDate = useRef(null);

  return (
    <section className="float-left grow pt-32 pr-52">
      <div className="text-end space-x-2">
        <menu>
          <li>
            <button
              className="border border-neutral-300 rounded-md w-20 py-1.5"
              type="button" onClick={() => onChangeView("Empty")}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              type="button"
              className="text-white bg-black rounded-md w-20 py-1.5"
              onClick={() => onSave(inputTitle.current.value, inputDescription.current.value, inputDueDate.current.value)}
            >
              Save
            </button>
          </li>
        </menu>
      </div>

      <div>
        <Input label="Title" />
        <Input label="Description" textarea />
        <Input label="Due Date" />

        <label className="text-neutral-500 font-semibold mb-1">TITLE</label>
        <input ref={inputTitle} type="text" name="title"
               className="bg-neutral-200 border-b-2 border-neutral-300 w-full h-8 mb-4"/>
        <label className="text-neutral-500 font-semibold mb-1">DESCRIPTION</label>
        <textarea ref={inputDescription} name="description"
                  className="bg-neutral-200 border-b-2 border-neutral-300 w-full h-20 mb-4 pt-1 pl-2"></textarea>
        <label className="text-neutral-500 font-semibold mb-1">DUE DATE</label>
        <input ref={inputDueDate} type="date" name="dueDate"
               className="bg-neutral-200 border-b-2 border-neutral-300 w-52 h-8 pl-1"/>
      </div>
    </section>
  );
}
