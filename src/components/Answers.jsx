import React from "react";
import quizImage from "../assets/quiz-complete.png";
import { questions } from "./questions";
import "./css/answers.css"

function Answers({ userAnswers }) {
  return (
    <div className="winner">
      <img src={quizImage}></img>
      <h2>quiz completed!</h2>
      <ul>
        {userAnswers.map((answer,index) =>(
          <>
          <li className="number">{index + 1}</li>
          <li className="question">{questions[index].text}</li>
          {answer ? (
            <li className={answer === questions[index].answers[0] ? "success" : "error"}>{answer}</li>
          ):(
            <li className="skipped">Skipped</li>
          )}
          </>
        ))}
      </ul>
    </div>
  );
}

export default Answers;
