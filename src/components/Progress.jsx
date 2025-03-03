import React, { useEffect, useState } from "react";

const TIMER = 8000;
function Progress({ questionIndex, setUserAnswers, userAnswers }) {
  const [remainingTime, setRemainingTime] = useState(TIMER);

  useEffect(() => {
    const timer = setTimeout(() => {
      setUserAnswers((prevElement) => {
        return [...prevElement, ""];
      });
    }, TIMER);

    return () => {
      clearTimeout(timer);
    };
  }, [userAnswers]);

  useEffect(() => {
    let interval;
    if (remainingTime >= 0) {
      interval = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 10);
      }, 10);
    }

    return () => {
      clearInterval(interval);
      if (questionIndex) {
        setRemainingTime(TIMER);
      }
    };
  }, [questionIndex]);

  return <progress value={remainingTime} max={TIMER}></progress>;
}

export default Progress;
