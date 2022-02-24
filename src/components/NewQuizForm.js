import React, { useState } from "react";
import { useFirestore, withFirestore } from "react-redux-firebase";

let questionCount = 0;

function NewQuizForm(props) {
  const firestore = useFirestore();
  const auth = props.firebase.auth();

  const [questionArray, setQuestionArray] = useState([0]);

  const handleClick = (event) => {
    event.preventDefault();
    console.log(questionCount);
    questionCount += 1;
    setQuestionArray([...questionArray, questionCount]);
  };

  function addQuizToFirestore(event) {
    event.preventDefault();
    let questionObject = {};
    for (let i = questionCount; i >= 0; i--) {
      console.log(i);
      let currentObj = {
        [`Question${i}`]: [
          event.target[`Question${i}`].value,
          event.target[`AnswerOne${i}`].value,
          event.target[`AnswerTwo${i}`].value,
          event.target[`AnswerThree${i}`].value,
          event.target[`AnswerFour${i}`].value,
        ],
      };
      questionObject = {
        ...questionObject,
        ...currentObj,
      };
      console.log(questionObject);
    }
    questionCount = 0;
    props.onQuizCreate();
    return firestore.collection("quizzes").add({
      quizName: event.target.title.value,
      author: auth.currentUser.email,
      resultOne: event.target.resultOne.value,
      resultOneDescription: event.target.resultOneDescription.value,
      resultTwo: event.target.resultTwo.value,
      resultTwoDescription: event.target.resultTwoDescription.value,
      resultThree: event.target.resultThree.value,
      resultThreeDescription: event.target.resultThreeDescription.value,
      resultFour: event.target.resultFour.value,
      resultFourDescription: event.target.resultFourDescription.value,
      questions: { ...questionObject },
    });
  }

  return (
    <form onSubmit={addQuizToFirestore}>
      <label htmlFor="title">Quiz Title:</label>
      <input type="text" name="title" />

      <label htmlFor="resultOne">First possible result:</label>
      <input type="text" name="resultOne" />
      <label htmlFor="resultOneDescription">First Result Description</label>
      <textarea name="resultOneDescription" />

      <label htmlFor="resultTwo">Second possible result:</label>
      <input type="text" name="resultTwo" />
      <label htmlFor="resultTwoDescription">Second Result Description</label>
      <textarea name="resultTwoDescription" />

      <label htmlFor="resultThree">Third possible result:</label>
      <input type="text" name="resultThree" />
      <label htmlFor="resultThreeDescription">Third Result Description</label>
      <textarea name="resultThreeDescription" />

      <label htmlFor="resultFour">Fourth possible result:</label>
      <input type="text" name="resultFour" />
      <label htmlFor="resultFourDescription">Fourth Result Description</label>
      <textarea name="resultFourDescription" />

      {questionArray.map((questionNumber) => {
        return (
          <div>
            <label htmlFor={`Question${questionNumber}`}>
              Question {`${questionNumber + 1}`}:
            </label>
            <input type="text" name={`Question${questionNumber}`} />
            <label htmlFor={`AnswerOne${questionNumber}`}>Answer One:</label>
            <input type="text" name={`AnswerOne${questionNumber}`} />
            <label htmlFor={`AnswerTwo${questionNumber}`}>Answer Two:</label>
            <input type="text" name={`AnswerTwo${questionNumber}`} />
            <label htmlFor={`AnswerThree${questionNumber}`}>
              Answer Three:
            </label>
            <input type="text" name={`AnswerThree${questionNumber}`} />
            <label htmlFor={`AnswerFour${questionNumber}`}>Answer Four:</label>
            <input type="text" name={`AnswerFour${questionNumber}`} />
          </div>
        );
      })}

      <button onClick={handleClick}>Add Question</button>

      <button type="submit">Post New Quiz!</button>
    </form>
  );
}

export default withFirestore(NewQuizForm);
