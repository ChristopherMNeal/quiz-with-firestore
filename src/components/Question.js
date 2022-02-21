import React from "react";

function Question(props) {
  const { question, questionNumber } = props;
  return (
    <React.Fragment>
      <h1>
        <span>{questionNumber + 1}.</span>
        {question.question}
      </h1>
      <form>
        <input type="radio" id="0" name="question" value="0" />
        <label htmlFor="0">{question.answer1}</label>
        <input type="radio" id="1" name="question" value="1" />
        <label htmlFor="1">{question.answer2}</label>
        <input type="radio" id="2" name="question" value="2" />
        <label htmlFor="2">{question.answer3}</label>
        <input type="radio" id="3" name="question" value="3" />
        <label htmlFor="3">{question.answer4}</label>
        <button type="submit">submit</button>
      </form>
    </React.Fragment>
  );
}

export default Question;
