import { useState, Fragment } from "react";
import GameResult from "../game-result/game-result.component";

const Player = () => {
  const [player, setPlayer] = useState({ player1: "", player2: "" });
  const [game, setGame] = useState(false);

  const handelChange = (event) => {
    const { name, value } = event.target;
    setPlayer({
        ...player,
      [name]: value,
    });
  };

  const submit = (e) => {
    setGame(true);
  };

  return (
    <Fragment>
      {!game && <div className="player">
        <form className="form" onSubmit={(e) => submit(e)}>
          <div className="form-group">
            <input
              type="text"
              name="player1"
              id="player1"
              onChange={handelChange}
              className="form-input"
            />
            <label htmlFor="player1">player1</label>
          </div>
          <div className="form-group">
            <input
              type="text"
              name="player2"
              id="player2"
              onChange={handelChange}
              className="form-input"
            />
            <label htmlFor="player1">player2</label>
          </div>
          <input type="submit" value="continue" />
        </form>
      </div>}
      {game && <GameResult player1={player['player1']} player2={player['player2']}></GameResult>}
    </Fragment>
  );
};

export default Player;
