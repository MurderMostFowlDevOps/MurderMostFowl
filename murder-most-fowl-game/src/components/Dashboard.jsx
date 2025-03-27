import React from "react";
import { useState, useEffect } from "react";
import Gameplay from "./gameplay";


export default function Dashboard() {

  const [showGameplay, setShowGameplay] = useState(false);

  const returnToGame = () => {
    setShowGameplay(true)
  };

  if (showGameplay) {
    return <Gameplay/>;
  }

  return (
    <div className="my-10 w-1/2 flex flex-col items-center mx-auto">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Dashboard</h1>
      <p>Click below to go to the game.</p>
      <button 
        onClick={returnToGame}
        className="p-3 border-1 border-blue-700 text-blue-700 rounded-md mt-5"
      >
        Go to game!
      </button>
    </div>
  );
}