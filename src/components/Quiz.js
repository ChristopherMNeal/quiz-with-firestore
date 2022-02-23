import React from "react";

function Quiz(props) {
  const handleQuizClick = () => {
    props.onQuizClick(props.id);
  };

  return (
    <div onClick={handleQuizClick}>
      <h2>{props.quizName}</h2>
      <h4>by: {props.author}</h4>
    </div>
  );
}

export default Quiz;
