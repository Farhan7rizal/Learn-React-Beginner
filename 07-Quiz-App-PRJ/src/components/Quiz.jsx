import { useCallback, useRef, useState } from "react";
import QUESTIONS from "../question.js";
import QuestionTimer from "./QuestionTimer.jsx";
import quizCompleteImg from "../assets/quiz-complete.png";
import Answers from "./Answers.jsx";
import Question from "./Question.jsx";
export default function Quiz() {
  // const [activeQuestIndex, setActiveQuestIndex] = useState(0); //we can have like 1 question and many answer, the below state, or the computed value
  // const [answerState, setAnswerState] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  // const activeQuestionIndex =
  //   answerState === "" ? userAnswers.length : userAnswers.length - 1;

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;
  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      // setAnswerState("answered");
      setUserAnswers((prevAnswers) => {
        return [...prevAnswers, selectedAnswer];
      });
      // setTimeout(() => {
      //   if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
      //     setAnswerState("correct");
      //   } else {
      //     setAnswerState("wrong");
      //   }
      //   setTimeout(() => {
      //     setAnswerState("");
      //   }, 2000);
      // }, 1000);
    },
    // [activeQuestionIndex]
    []
  );

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  ); //using both useCallback to not re execute the setTimeout

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="Trophy icon" />
        <h2>Quiz Completed</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
