import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import { useState } from "react";
import QUESTION from "../question";

export default function Question({ index, onSelectAnswer, onSkipAnswer }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  function handleSelectAnswer(answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTION[index].answers[0] === answer,
      });

      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  }

  let answerState = "";
  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  }
  return (
    <div id="question">
      <QuestionTimer timeOut={10000} onTimeOut={onSkipAnswer} />
      <h2>{QUESTION[index].text}</h2>
      <Answers
        answers={QUESTION[index].answers}
        selectedAnswer={answer.selectedAnswer}
        answersState={answerState}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
}
