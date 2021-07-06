import { useState, Fragment } from "react";

const GameResult = ({ player1, player2 }) => {
  const [count, setPlayer] = useState({count1 : 0, count2: 0 });

  const addWin =(playerName) => {
    setPlayer({
        ...count,
      [playerName]: count[playerName] + 1,
    });
  };

  const winner=()=>{
    const { count1, count2 } = count;
    if (count['count1'] === count['count2']) return 'Tie';
    if (count['count1'] > count['count2']) {
        return player1
    } else {
        return player2
    }
  }

  return (
    <Fragment>
      <div className="player">
        <div className="player-wrap">
          <p>{player1}</p>
          <p>Win--{count['count1']} Times</p>
          <button onClick={()=>addWin("count1")}>AddWin1</button>
        </div>
        <div className="player-wrap">
          <p>{player2}</p>
          <p>Win--{count['count2']} Times</p>
          <button onClick={()=>addWin("count2")}>AddWin2</button>
        </div>
        <div>
            <h2>Winner Is : </h2>
            <h3><b>{winner()}</b></h3>
            <p>Win Differnce Is : {Math.abs(count['count1']-count['count2'])}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default GameResult;
