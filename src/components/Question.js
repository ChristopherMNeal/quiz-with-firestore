import React from "react";

function Question(props) {
  const { questions, currentQuestion } = props;

  const handleQuestionAnswered = (event) => {
    event.preventDefault();
    props.onQuestionAnswered(parseInt(event.target.question.value));
  };

  return (
    <React.Fragment>
      <h2>
        <span>{currentQuestion + 1}</span>
        {questions[`Question${currentQuestion}`][0]}
      </h2>
      <form onSubmit={handleQuestionAnswered}>
        <input type="radio" id="0" name="question" value="0" />
        <label htmlFor="0">{questions[`Question${currentQuestion}`][1]}</label>
        <input type="radio" id="1" name="question" value="1" />
        <label htmlFor="1">{questions[`Question${currentQuestion}`][2]}</label>
        <input type="radio" id="2" name="question" value="2" />
        <label htmlFor="2">{questions[`Question${currentQuestion}`][3]}</label>
        <input type="radio" id="3" name="question" value="3" />
        <label htmlFor="3">{questions[`Question${currentQuestion}`][4]}</label>
        <button type="submit">submit</button>
      </form>
    </React.Fragment>
  );
}

export default Question;
