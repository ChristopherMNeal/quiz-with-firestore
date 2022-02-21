import React from "react";
import Question from "./Question";
import Result from "./Result";

const questionArray = [
  {
    quizName: "Trains?",
    author: "Skylar",
    results: {
      0:{
        resultTitle: "You are A Train!",
        description:
          "trains! cnksncs ckdsnvlkv  vdksnvn  cvnksv m vnksn v vnvksvn kd",
      },
      1:{
        resultTitle: "nvnkskvsd",
        description:
          "vnkdnv knkdsnc cksmc csk v vdsmls vskv vs vkjsdnv vklcnvs v jk",
      },
      2:{
          resultTitle: "nvnkskvsd",
        description:
          "vnkdnv knkdsnc cksmc csk v vdsmls vskv vs vkjsdnv vklcnvs v jk",
      },
      3:{
        resultTitle: "nvnkskvsd",
        description:
          "vnkdnv knkdsnc cksmc csk v vdsmls vskv vs vkjsdnv vklcnvs v jk",
      },
    },
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
    const finalResult = questionArray[0].results[0];

    return (
      <React.Fragment>
        <Question
          questionNumber={currentQuestionNumber}
          question={currentQuestion}
        />
        <Result result={finalResult} />
      </React.Fragment>
    );
  }
}

export default QuizDetails;
