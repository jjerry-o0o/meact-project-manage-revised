import { useRef } from "react";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";

export default function CreateProject({ onChangeView, onSave }) {
  const modal = useRef();

  const inputTitle = useRef(null);
  const inputDescription = useRef(null);
  const inputDueDate = useRef(null);

  function handleSaveProject() {
    const enteredTitle = inputTitle.current.value;
    const enteredDescription = inputDescription.current.value;
    const enteredDueDate = inputDueDate.current.value;

    if(
      enteredTitle.trim() === ''
      || enteredDescription.trim() === ''
      || enteredDueDate.trim() === ''
    ) {
      console.log("nana");
      modal.current.open();
      return;
    }

    onSave({
      title:enteredTitle,
      description:enteredDescription,
      dueDate:enteredDueDate
    });
  }

  return (
    <>
    <Modal ref={modal} buttonCaption="Okay">
      <h2 className="text-2xl text-neutral-800 font-extrabold my-4">Invalid Input</h2>
      <p className="text-neutral-600 font-semibold">Oops ... looks like you forgot to enter a value.</p>
      <p className="text-neutral-600 font-semibold">Please make sure you provide a valid value for every input field.</p>
    </Modal>
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button
            className="border border-neutral-300 rounded-md w-20 py-1.5"
            type="button" onClick={() => onChangeView("Empty")}>
            Cancel
          </button>
        </li>
        <li>
          <button
            type="button"
            className="text-white bg-black rounded-md w-20 py-1.5"
            onClick={handleSaveProject}
          >
            Save
          </button>
        </li>
      </menu>

      <div>
        <Input type="text" ref={inputTitle} label="Title"/>
        <Input ref={inputDescription} label="Description" textarea/>
        <Input type="date" ref={inputDueDate} label="Due Date"/>
      </div>
    </div>
    </>
  );
}
