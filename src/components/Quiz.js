import React from "react";
import styled from "styled-components";

function Quiz(props) {
  const handleQuizClick = () => {
    props.onQuizClick(props.id);
  };

  const QuizItem = styled.div `
    border-top: .1em solid grey;
    padding-bottom: 2em;
    :hover {
      cursor: pointer;
      background-color: #ededed
    }
  `;

  const H2Style = styled.h2 `
    color: #446286;
  `;

  return (
    <QuizItem onClick={handleQuizClick}>
      <H2Style>{props.quizName}</H2Style>
      <h4>by: {props.author}</h4>
    </QuizItem>
  );
}

export default Quiz;
