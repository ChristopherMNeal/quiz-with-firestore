import React from "react";

function Result(props) {
  return (
    <React.Fragment>
      <h1>{props.result.resultTitle}</h1>
      <p>{props.result.description}</p>
    </React.Fragment>
  );
}

export default Result;
