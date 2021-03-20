
// depencencies
import React from "react";
// import components
import SinglePlayer from "../SinglePlayer/SinglePlayer";
import "./Players.css";

const Players = ({ players, buyPlayer }) => {
  return (
    <div className="players">
      {players.map((player) => (
        <SinglePlayer player={player} buyPlayer={buyPlayer} key={player.id} />
      ))}
    </div>
  );
};

// export
export default Players;
