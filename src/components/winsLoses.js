import React from "react";

function WinsLoses(props) {
  return (
    <div className="winsLoses">
      <h3>
        Wins: {props.wins}
      </h3>
      <h3>Loses: {props.loses}</h3>
    </div>
  );
}

export default WinsLoses;