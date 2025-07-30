import { useRef } from "react";

export default function Answers({
  answers,
  selectedAnswer,
  answersState,
  onSelect,
}) {
  const shuffledAnswers = useRef(); //using ref instead new state, to avoiding bug
  // const [shuffledAnswers, setShuffledAnswers] = useState([]);

  if (!shuffledAnswers.current) {
    //this if for initial state
    // shuffledAnswers after if quizComplete, so the answer is exhausted
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cssClass = "";
        if (answersState === "answered" && isSelected) {
          cssClass = "selected";
        }
        // console.log("isSelected: " + isSelected);
        console.log("answer: " + answer);
        console.log("user answer: " + selectedAnswer);

        if (
          (answersState === "correct" || answersState === "wrong") &&
          isSelected
        ) {
          cssClass = answersState;
          console.log("answered state: " + answersState);
        }
        return (
          <li key={answer} className="answer">
            <button onClick={() => onSelect(answer)} className={cssClass}>
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
