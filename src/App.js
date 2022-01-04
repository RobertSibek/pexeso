import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { setVal } from "./utils/helpers.js";
import K from "./utils/constants.js";
import { useState } from "react";
import girlsArray, { shuffleArray } from "./data/girls.js";

localStorage.clear();
setVal(K.CLICK_COUNT, 0);

function App() {
  const [newGame, setNewGame] = useState(0);

  const resetHandler = () => {
    setVal("reset", Math.random());
    setNewGame(newGame + 1);
    girlsArray.forEach((girl) => {
      girl.visible = true;
    });
    girlsArray = shuffleArray(girlsArray);
    //TODO: Flip back all cards when resetting game
  };

  return (
    <div className="App">
      <div className="rounds">
        <div className="top-part">
          <h1>Rounds:</h1>
        </div>
        <div className="bottom-part"></div>
      </div>
      <div className="home">
        <HomeScreen resetGame={resetHandler} game={newGame} />
      </div>
      <div className="control">
        <div className="top-part">
          <h1>Game#{newGame}</h1>
        </div>
        <div className="bottom-part">
          <button onClick={resetHandler}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
