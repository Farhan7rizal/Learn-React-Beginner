import { useEffect, useState } from "react";

export default function QuestionTimer({ timeOut, onTimeOut }) {
  const [remainingTime, setRemainingTime] = useState(timeOut);

  // setTimeout(() => {
  //   //
  // }, timeOut); //from this to bellow

  useEffect(() => {
    console.log("SETTING TIMEOUT");
    setTimeout(onTimeOut, timeOut);
  }, [onTimeOut, timeOut]);

  useEffect(() => {
    console.log("SETTING Interval");
    setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
  }, []);

  return <progress id="question-time" max={timeOut} value={remainingTime} />;
}
