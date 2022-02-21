import React from "react";
import Quiz from "./Quiz";

const quizArray = [
  {
    quizName: "pokemon quiz",
    author: "Ash",
  },
  {
    quizName: "Train Quiz",
    author: "Skylar",
  },
];

function QuizList() {
  return (
    <React.Fragment>
      {quizArray.map((quiz) => {
        return <Quiz quizName={quiz.quizName} author={quiz.author} />;
      })}
    </React.Fragment>
  );
}

export default QuizList;
