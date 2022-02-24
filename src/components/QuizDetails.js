import React from "react";
import Question from "./Question";
import Result from "./Result";
import { useSelector, connect } from "react-redux";
import { useFirestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";
import { useState } from "react";
import styled from "styled-components";

function QuizDetails(props) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentResultValue, setCurrentResultValue] = useState(0);

  const handleQuestionAnswered = (answerNumber) => {
    setCurrentResultValue(currentResultValue + answerNumber);
    setCurrentQuestion(currentQuestion + 1);
  };
  const handleEdit = () => props.handleEdit();
  const handleDeleteQuiz = () => props.handleDelete(props.id);
  
  useFirestoreConnect([{ collection: "quizzes", doc: props.id }]);
  const quizzes = useSelector((state) => state.ordered.quizzes);
  const quiz = quizzes.filter((quiz) => quiz.id === props.id);

  //styles
  const ButtonFlexDiv = styled.div `
    display: flex;
  `;

  const ButtonStyles = styled.button `
    padding: .5em 1em; 
    background-color: #a1cca2;
    border: none;
    border-radius: .5em;
    :hover {
      background-color:#4c6b4d;
      color: white; 
    }
  `;

  const WarningButtonStyles = styled.button `
    padding: .5em 1em;
    background-color: #824d4d;
    color: white;
    border: none;
    border-radius: .5em;
    margin-right: 1em;
    margin-left: auto;
    :hover {
      background-color:#611111;
      color: white; 
    }
  `;

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
          <hr/>
          <ButtonFlexDiv>
            <WarningButtonStyles onClick={handleDeleteQuiz}>Delete Quiz</WarningButtonStyles>
            <ButtonStyles onClick={handleEdit}>Edit Quiz</ButtonStyles>
          </ButtonFlexDiv>
        </React.Fragment>
      );
    }
  } else {
    return <h1>Loading...</h1>;
  }
}

export default QuizDetails;
