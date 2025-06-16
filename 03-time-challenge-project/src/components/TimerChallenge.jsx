import { useRef, useState } from "react";
import ResultModal from "./resultModal";

// let timer;
export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timerIsaActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    // setTimeRemaining(targetTime * 1000); //it can cause infinite loop, except with if condition
    dialog.current.open();
  }

  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }
  // const [timerStarted, setTimerStarted] = useState(false);
  // const [timerExpired, setTimerExpired] = useState(false);

  function handleStart() {
    //change from setTimeout to setInterval
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
      //prevTimeRemaining deduct -10 every 10 milisecond
      // setTimerExpired(true);
      // dialog.current.open();
    }, 10);
    // setTimerStarted(true);
  }

  function handleStop() {
    dialog.current.open();
    clearInterval(timer.current);
  }
  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      ></ResultModal>

      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second {targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsaActive ? handleStop : handleStart}>
            {timerIsaActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsaActive ? "active" : undefined}>
          {timerIsaActive ? "Time is running" : "Time is inactive"}
        </p>
      </section>
    </>
  );
}
