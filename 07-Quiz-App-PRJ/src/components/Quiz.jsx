import { useState } from "react";
import QUESTIONS from "../question.js";

export default function Quiz() {
  // const [activeQuestIndex, setActiveQuestIndex] = useState(0); //we can have like 1 question and many answer, the below state, or the computed value
  const [userAnswer, setUserAnswer] = useState([]);

  const activeQuestionIndex = userAnswer.length;

  function handleSelectAnswer(selectedAnswer) {
    setUserAnswer((prevAnswers) => {
      return [...prevAnswers, selectedAnswer];
    });
  }

  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {QUESTIONS[activeQuestionIndex].answers.map((answers) => (
            <li key={answers} className="answer">
              <button onClick={() => handleSelectAnswer(answers)}>
                {answers}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
