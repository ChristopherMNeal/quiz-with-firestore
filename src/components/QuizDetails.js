import React from "react";
import Question from "./Question";
import Result from "./Result";
import { useSelector, connect } from "react-redux";
import { useFirestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";
import { useState } from "react";

function QuizDetails(props) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentResultValue, setCurrentResultValue] = useState(0);

  const handleQuestionAnswered = (answerNumber) => {
    setCurrentResultValue(currentResultValue + answerNumber);
    setCurrentQuestion(currentQuestion + 1);
    console.log(currentResultValue)
  };

  const handleDeleteQuiz = () => props.handleDelete(props.id);

  useFirestoreConnect([{ collection: "quizzes", doc: props.id }]);
  const quizzes = useSelector((state) => state.ordered.quizzes);
  const quiz = quizzes.filter((quiz) => quiz.id === props.id);

  if (isLoaded(quizzes)) {
    if (currentQuestion >= Object.keys(quiz[0].questions).length) {
      return <Result quiz={quiz[0]} resultNumber={currentResultValue} />;
    } else {
      return (
        <React.Fragment>
          <Question
            questions={quiz[0].questions}
            currentQuestion={currentQuestion}
            onQuestionAnswered={handleQuestionAnswered}

          />
          <button onClick={handleDeleteQuiz}>Delete</button>
        </React.Fragment>
      );
    }
  } else {
    return <h1>Loading...</h1>;
  }
}

export default QuizDetails;
