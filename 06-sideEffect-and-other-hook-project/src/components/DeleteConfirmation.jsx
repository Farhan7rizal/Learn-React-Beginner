import { useEffect, useState } from "react";

const TIMER = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  const [remainingTime, setRemainingTime] = useState(TIMER);
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("INTERVAL");
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    console.log("set timer");
    const timer = setTimeout(() => {
      onConfirm();
    }, TIMER); //without useEffect the setTimeout is always execute

    return () => {
      console.log("cleaning up timer");
      clearTimeout(timer);
    };

    //bc on JS function is never equal, even 100% same code, bc the dependencies [onConfirm], re-execute again so causes an infinite loop. app run again fn run again and soon. if setModalIsOpen(false) in handleRemovePlace remove, if we click and wait, the doom disapear( and pickedPlaces remove), until we no, it causes infinite loop.
    //the solution is to use hook in the handleRemovePlace() or onConfirm prop in the app, use callback hook
  }, [onConfirm]);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to delete this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <progress value={remainingTime} max={TIMER} />
    </div>
  );
}
