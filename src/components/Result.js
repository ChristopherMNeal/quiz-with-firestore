import React from "react";

function Result(props) {

  const finalResultCalculator = (number) => {
    console.log(number)
    const highestScore = Object.keys(props.quiz.questions).length * 3; // 9
    const dividedByFour = highestScore / 4; // 9/4 = 2.25
    if(number < dividedByFour) { // 0-2.25
      return 'resultOne'
    } else if (number < (dividedByFour * 2)) { // 2.25 - 4.5
      return 'resultTwo'
    } else if (number < (dividedByFour *3)) {
      return 'resultThree'
    } else {
      return 'resultFour'
    }
  }

  const finalResult = finalResultCalculator(props.resultNumber)

  return (
    <React.Fragment>
      <h1>Results</h1>
      <h1>{props.quiz[finalResult]}</h1>
      <p>{props.quiz[`${finalResult}Description`]}</p>
    </React.Fragment>
  );
}

export default Result;
