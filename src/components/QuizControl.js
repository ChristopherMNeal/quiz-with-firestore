import React from "react";
import QuizList from "./QuizList";
import QuizDetails from "./QuizDetails";
import UserControl from "./UserControl";
import NewQuizForm from "./NewQuizForm";

function QuizControl() {
  return (
    <React.Fragment>
      <QuizList />
      <QuizDetails />
      <UserControl />
      <NewQuizForm />
    </React.Fragment>
  );
}

export default QuizControl;
