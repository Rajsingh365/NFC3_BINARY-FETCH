import React, { useState } from "react";

function GamePreferenceSkills() {
  const [gameName, setGameName] = useState("");
  const [gameRating, setGameRating] = useState("");
  const [games, setGames] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add the new game to the list
    setGames([...games, { name: gameName, rating: gameRating }]);
    
    // Clear the input fields
    setGameName("");
    setGameRating("");
  };

  return (
    <div className="game-preference-skills p-6 bg-gray-800 bg-opacity-70 backdrop-blur-md shadow-lg rounded-lg w-[65%] mx-auto">
      <h2 className="text-2xl font-bold text-white mb-4">Game Preference & Skills</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-lg text-white mb-2">Game Name:</label>
          <input
            type="text"
            value={gameName}
            onChange={(e) => setGameName(e.target.value)}
            className="border border-gray-500 rounded-lg px-3 py-2 w-full bg-gray-700 text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg text-white mb-2">Game Rating:</label>
          <input
            type="number"
            value={gameRating}
            onChange={(e) => setGameRating(e.target.value)}
            min="100"
            max="1000"
            className="border border-gray-500 rounded-lg px-3 py-2 w-full bg-gray-700 text-white"
          />
        </div>
        <button
          type="submit"
          className="bg-transparent border border-purple-500 text-purple-400 px-4 py-2 rounded-lg hover:bg-purple-400 hover:text-purple-900 transition"
        >
          Add Game
        </button>
      </form>

      {games.length > 0 && (
        <div className="mt-6 border-t border-gray-500 pt-4">
          <h3 className="text-lg font-semibold text-white">Your Games</h3>
          <div className="mt-2 bg-gray-900 bg-opacity-80 backdrop-blur-md p-4 rounded-lg">
            {games.map((game, index) => (
              <div key={index} className="mb-4 flex justify-between">
                <p className="text-gray-300">{game.name}</p>
                <p className="text-gray-300">{game.rating}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default GamePreferenceSkills;
