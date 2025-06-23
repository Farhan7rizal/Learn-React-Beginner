import { useRef } from "react";
import Input from "./Input";
export default function NewProject({ onAdd }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;
    // need pass data above back to app component
    // ...validation

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-0 my-4">
        <li>
          <button className="px-6 py-2 rounded-md bg-stone-50 text-stone-800 hover:bg-stone-200">
            Cancel
          </button>
        </li>
        <li>
          <button
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            onClick={handleSave}
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input ref={title} label="Label"></Input>
        <Input ref={description} label="Description" textarea={true}></Input>
        <Input ref={dueDate} type="date" label="Due Date"></Input>
      </div>
    </div>
  );
}
