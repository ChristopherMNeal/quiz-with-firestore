import React, { useState } from "react";
import { useFirestore } from "react-redux-firebase";

let questionCount = 0;

function NewQuizForm() {
  const firestore = useFirestore();

  const [questionArray, setQuestionArray] = useState([0]);

  const handleClick = (event) => {
    event.preventDefault();
    questionCount += 1;
    setQuestionArray([...questionArray, questionCount]);
  };

  function addQuizToFirestore(event) {
    event.preventDefault();
    // console.log(event.target.value);
    // let questionArray = [];
    // for (let i = questionCount; i >= 0; i--) {
    //   questionArray.push([`Question${i}`, `AnswerOne${i}`]);
    //   // questionArray.push({Question{i}: event.target.Question + i.value,})
    // }
    // console.log(questionArray);
    questionCount = 0;
    return firestore.collection("quizzes").add({
      quizName: event.target.title.value,
      author: "testauthor",
      resultOne: event.target.resultOne.value,
      resultOneDescription: event.target.resultOneDescription.value,
      resultTwo: event.target.resultTwo.value,
      resultTwoDescription: event.target.resultTwoDescription.value,
      resultThree: event.target.resultThree.value,
      resultThreeDescription: event.target.resultThreeDescription.value,
      resultFour: event.target.resultFour.value,
      resultFourDescription: event.target.resultFourDescription.value,
      Question0: event.target.Question0.value,
      AnswerOne0: event.target.AnswerOne0.value,
      AnswerTwo0: event.target.AnswerTwo0.value,
      AnswerThree0: event.target.AnswerThree0.value,
      AnswerFour0: event.target.AnswerFour0.value,
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

export default NewQuizForm;
