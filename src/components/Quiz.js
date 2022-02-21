import React from "react";

function Quiz(props) {
  return (
    <React.Fragment>
      <h2>{props.quizName}</h2>
      <h4>by: {props.author}</h4>
    </React.Fragment>
  );
}

export default Quiz;