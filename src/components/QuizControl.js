import React from "react";
import QuizList from "./QuizList";
import QuizDetails from "./QuizDetails";

function QuizControl() {
  return (
    <React.Fragment>
      <QuizList />
      <QuizDetails />
    </React.Fragment>
  );
}

export default QuizControl;
