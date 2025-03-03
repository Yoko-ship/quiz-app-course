import React, { seState } from "react";
import "./css/interface.css";
import { questions } from "./questions";
import Progress from "./Progress";
import Answers from "./Answers";

function Interface() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestions = userAnswers.length;
  const quizIsComplete = activeQuestions === questions.length;

  const answerHandler = (answer) => {
    setUserAnswers((prevElement) => {
      return [...prevElement, answer];
    });
  };

  if (quizIsComplete) {
    return(
      <Answers userAnswers={userAnswers}/>
    )
  }
  const shuffledAnswers = [...questions[activeQuestions].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <>
      <div className="interface">
        <div className="inter">
          <Progress
            questionIndex={userAnswers}
            setUserAnswers={setUserAnswers}
            userAnswers={userAnswers}
          />
          <h2>{questions[activeQuestions].text}</h2>
          <ul>
            {shuffledAnswers.map((answer, index) => (
              <li key={index}>
                <button onClick={() => answerHandler(answer)}>{answer}</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Interface;
