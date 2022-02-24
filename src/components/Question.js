import React from "react";
import styled from "styled-components";

function Question(props) {
  const { questions, currentQuestion } = props;

  const handleQuestionAnswered = (event) => {
    event.preventDefault();
    props.onQuestionAnswered(parseInt(event.target.question.value));
  };

  const InputSection = styled.div `
    margin-bottom: .5em;
    font-size: 1.5rem;
  `;

  const SubmitButton = styled.button `
    padding: .5em 1em;
    font-size: 1.3rem;
    background-color: #c3ddfa;
    border: none;
    border-radius: .5em;
    :hover {
      background-color:#4d5c6e;
      color: white; 
    }
  `;

  return (
    <React.Fragment>
      <h2>
        <span>{currentQuestion + 1}. </span>
        {questions[`Question${currentQuestion}`][0]}
      </h2>
      <form onSubmit={handleQuestionAnswered}>
        <InputSection>
        <input type="radio" id="0" name="question" value="0" />
        <label htmlFor="0">{questions[`Question${currentQuestion}`][1]}</label>
        </InputSection>
        <InputSection>
        <input type="radio" id="1" name="question" value="1" />
        <label htmlFor="1">{questions[`Question${currentQuestion}`][2]}</label>
        </InputSection>
        <InputSection>
        <input type="radio" id="2" name="question" value="2" />
        <label htmlFor="2">{questions[`Question${currentQuestion}`][3]}</label>
        </InputSection>
        <InputSection>
        <input type="radio" id="3" name="question" value="3" />
        <label htmlFor="3">{questions[`Question${currentQuestion}`][4]}</label>
        </InputSection>
        <SubmitButton type="submit">submit</SubmitButton>
      </form>
    </React.Fragment>
  );
}

export default Question;
