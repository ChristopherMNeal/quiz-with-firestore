import React from "react";
import { Link } from "react-router-dom";

function Quiz(props) {
  const handleQuizClick = () => {
    props.onQuizClick(props.id)
  }

  return (
    <div onClick={props.handleQuizClick}>
      <Link to="/quizDetails">
        <h2>{props.quizName}</h2>
        <h4>by: {props.author}</h4>
      </Link>
    </div>
  );
}

export default Quiz;
