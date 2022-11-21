import React from "react";

function Scores(props) {
  return (
    <div className="the-scores">
      <h3>
        Target Scores: {props.targetDisp}
      </h3>
      <h3>Your Score: {props.yourScoreDisp}</h3>
    </div>
  );
}

export default Scores;
