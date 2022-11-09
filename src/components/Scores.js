import React from "react";

function Scores(props) {
  return (
    <div className="the-scores">
      <h3>
        Target Scores: {props.target}
      </h3>
      <h3>Your Score: {props.yourScore}</h3>
    </div>
  );
}

export default Scores;
