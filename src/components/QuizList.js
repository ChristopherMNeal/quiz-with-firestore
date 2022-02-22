import React from "react";
import Quiz from "./Quiz";
import { useSelector, connect } from "react-redux";
import { useFirestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";

function QuizList() {
  useFirestoreConnect([
    { collection: 'quizzes' }
  ]);

  const quizzes = useSelector((state) => state.ordered.quizzes);
  if (quizzes) {
  }
  if (isLoaded(quizzes)) {
    return (
      <React.Fragment>
        <hr />
        {quizzes.map((quiz) => {
          return (
            <Quiz
              quizName={quiz.quizName}
              author={quiz.author}
              key={quiz.id}
              id={quiz.id}
            />
          );
        })}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    );
  }
}

export default QuizList;
