import React from "react";
import Quiz from "./Quiz";
import { useSelector, connect } from "react-redux";
import { useFirestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";
import styled from "styled-components";

function QuizList(props) {
  useFirestoreConnect([
    { collection: 'quizzes' }
  ]);

  const onCreateClick = () => {
    props.onCreateClick();
  }

  const ButtonStyle = styled.button `
    font-size: 1.3rem;
    padding: .5em 1em;
    border: none;
    background-color: #c3ddfa;
    border-radius: .5em;
    margin-top: 1em;
    margin-bottom: 1em;
    : hover {
      background-color:#4d5c6e;
      color: white; 
    }
  `;

  const quizzes = useSelector((state) => state.ordered.quizzes);
  if (quizzes) {
  }
  if (isLoaded(quizzes)) {
    return (
      <React.Fragment>
        <ButtonStyle onClick={onCreateClick}>Create A Quiz</ButtonStyle>
        {quizzes.map((quiz) => {
          return (
            <Quiz
              onQuizClick={props.onQuizClick}
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
