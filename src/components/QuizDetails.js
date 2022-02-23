import React from "react";
import Question from "./Question";
import Result from "./Result";
import { useSelector, connect } from "react-redux";
import { useFirestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";

function QuizDetails(props) {

  useFirestoreConnect([{ collection: "quizzes", doc: props.id }]);
  const quizzes = useSelector((state) => state.ordered.quizzes);
  const quiz = quizzes.filter((quiz) => quiz.id == props.id);
  console.log(quiz);

  if (isLoaded(quizzes)) {
    return (
      <React.Fragment>
        <Question quiz={quiz[0]} />
      </React.Fragment>
    );
  } else {
    return <h1>Loading...</h1>;
  }
}

export default QuizDetails;
