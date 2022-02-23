import React from "react";

function Question(props) {
  const { quiz } = props;
  
  return (
    <React.Fragment>
      <h1>{quiz.quizName}</h1>
      <h2>
        <span>1.</span>
        {quiz.Question0}
      </h2>
      <form>
        <input type="radio" id="0" name="question" value="0" />
        <label htmlFor="0">{quiz.AnswerOne0}</label>
        <input type="radio" id="1" name="question" value="1" />
        <label htmlFor="1">{quiz.AnswerTwo0}</label>
        <input type="radio" id="2" name="question" value="2" />
        <label htmlFor="2">{quiz.AnswerThree0}</label>
        <input type="radio" id="3" name="question" value="3" />
        <label htmlFor="3">{quiz.AnswerFour0}</label>
        <button type="submit">submit</button>
      </form>
    </React.Fragment>
  );
}

export default Question;
