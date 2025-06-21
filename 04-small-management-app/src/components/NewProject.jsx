import Input from "./Input";
export default function NewProject() {
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-0 my-4">
        <li>
          <button className="px-6 py-2 rounded-md bg-stone-50 text-stone-800 hover:bg-stone-200">
            Cancel
          </button>
        </li>
        <li>
          <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input label="Label"></Input>
        <Input label="Description" textarea={true}></Input>
        <Input label="Due Date"></Input>
      </div>
    </div>
  );
}
