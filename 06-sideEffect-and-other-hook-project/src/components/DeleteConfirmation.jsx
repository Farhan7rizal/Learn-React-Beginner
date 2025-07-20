export default function DeleteConfirmation({ onConfirm, onCancel }) {
  return (
    <div>
      <h2>Are you sure?</h2>
      <p>Do you really want to delete this place?</p>
      <div>
        <button onClick={onCancel}>No</button>
        <button onClick={onConfirm}>Yes</button>
      </div>
    </div>
  );
}
