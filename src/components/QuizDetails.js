import React from "react";
import Question from "./Question";

const questionArray = [
  {
    quizName: "Trains?",
    author: "Skylar",
    questions: {
      0: {
        question: "bcjsbc",
        answer1: "nckca",
        answer2: "nckc",
        answer3: "cnvjxnv",
        answer4: "cnbjsdbncsd",
      },
      1: {
        question: "sbcsdf",
        answer1: "kcaetete",
        answer2: "kchi",
        answer3: "alksf",
        answer4: "LILJKJ",
      },
    },
  },
];

class QuizDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quizIndex: 0,
      resultsShowing: false,
    };
  }

  render() {
    const currentQuestionNumber = this.state.quizIndex;
    const currentQuestion = questionArray[0].questions[currentQuestionNumber];

    return (
      <React.Fragment>
        <Question
          questionNumber={currentQuestionNumber}
          question={currentQuestion}
        />
      </React.Fragment>
    );
  }
}

export default QuizDetails;
