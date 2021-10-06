import React, { useState } from "react";
import Board from "./Board";

const calculateWinner = (squares, row, col) => {
  const lines = LinestoWinFiveChain(row, col);

  for (let i = 0; i < lines.length; i += 1) {
    const [a, b, c, d, e] = lines[i];
    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c] &&
      squares[a] === squares[d] &&
      squares[a] === squares[e]
    ) {
      return { winner: squares[a], winnerLine: lines[i] };
    }
  }

  return { winner: null, winnerLine: null };
};

const LinestoWinFiveChain = (row, col) => {
  let lines = [];

  for (let i = 0; i < row - 4; i++) {
    for (let j = 0; j < col; j++) {
      lines.push([
        i * col + j,
        (i + 1) * col + j,
        (i + 2) * col + j,
        (i + 3) * col + j,
        (i + 4) * col + j,
      ]);
    }
  }
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col - 4; j++) {
      lines.push([
        i * col + j,
        i * col + j + 1,
        i * col + j + 2,
        i * col + j + 3,
        i * col + j + 4,
      ]);
    }
  }
  for (let i = 0; i < row - 4; i++) {
    for (let j = 0; j < col - 4; j++) {
      lines.push([
        i * col + j,
        (i + 1) * col + j + 1,
        (i + 2) * col + j + 2,
        (i + 3) * col + j + 3,
        (i + 4) * col + j + 4,
      ]);
    }
  }
  for (let i = 4; i < row; i++) {
    for (let j = 0; j < col - 4; j++) {
      lines.push([
        i * col + j,
        (i - 1) * col + j + 1,
        (i - 2) * col + j + 2,
        (i - 3) * col + j + 3,
        (i - 4) * col + j + 4,
      ]);
    }
  }

  return lines;
};

const checkDraw = (squares) => {
  for (let i = 0; i < squares.length; i++) {
    if (!squares[i]) return false;
  }
  return true;
};

const getLocation = (move, col) => {

  const _row = (move - (move % col)) / col + 1;
  const _col = (move % col) + 1;
  return `[row: ${_row}, col: ${_col}]`;
};

function Game() {
  const [sizeBoard, setSizeBoard] = useState({ row: 10, col: 10 });
  const [historyState, setHistoryState] = useState([
    {
      squares: Array(sizeBoard.row * sizeBoard.col).fill(null),
    },
  ]);
  const [currentStepNumber, setCurrentStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {
    const history = historyState.slice(0, currentStepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (
      calculateWinner(squares, sizeBoard.row, sizeBoard.col).winner ||
      squares[i]
    ) {
      return;
    }
    squares[i] = xIsNext ? "X" : "O";
    setHistoryState(
      history.concat([
        {
          squares: squares,
          location: getLocation(i, sizeBoard.col),
          stepNumber: history.length,
        },
      ])
    );
    setCurrentStepNumber(history.length);
    setXIsNext(!xIsNext);
  }

  function rowHandleChange(e) {
    const size = parseInt(e);
    setSizeBoard({ row: size, col: sizeBoard.col });
    setHistoryState([
      {
        squares: Array(size * sizeBoard.col).fill(null),
      },
    ]);
    setCurrentStepNumber(0);
    setXIsNext(true);
  }

  function colHandleChange(e) {
    const size = parseInt(e);
    setSizeBoard({ row: sizeBoard.row, col: size });
    setHistoryState([
      {
        squares: Array(sizeBoard.row * size).fill(null),
      },
    ]);
    setCurrentStepNumber(0);
    setXIsNext(true);
  }

  function sortMoves() {
    setHistoryState(historyState.reverse());
    setCurrentStepNumber(historyState.length - 1 - currentStepNumber);
  }

  function newGame() {
    setSizeBoard({ row: sizeBoard.row, col: sizeBoard.col });
    setHistoryState([
      {
        squares: Array(sizeBoard.row * sizeBoard.col).fill(null),
      },
    ]);
    setCurrentStepNumber(0);
    setXIsNext(true);
  }

  function jumpTo(step) {
    setCurrentStepNumber(step);
    setXIsNext(step % 2 === 0);
  }

  const history = historyState;
  const current = history[currentStepNumber];
  const { winner, winnerLine } = calculateWinner(
    current.squares,
    sizeBoard.row,
    sizeBoard.col
  );
  const draw = checkDraw(current.squares);

  const moves = history.map((step, move) => {
    const style = currentStepNumber === move ? "button" : "";
    const location = step.location ? step.location : "";

    const desc = step.stepNumber
      ? "Go to move #" + step.stepNumber + location
      : "Go to game start";
    return (
      <li key={move}>
        <button className={`${style}`} onClick={() => jumpTo(move)}>
          {desc}
        </button>
      </li>
    );
  });

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else if (draw) {
    status = "Draw";
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <div className="game">     
      <div className="game-info">
        <div className="status">{status}</div>
        <div>
          <button className="menu" onClick={() => newGame()}>
            New Game
          </button>
          <label>Row: </label>
          <input
            type="number"
            value={sizeBoard.row}
            min="5"
            max="20"
            onChange={(e) => rowHandleChange(e.target.value)}
          />
          <label>Column: </label>
          <input
            type="number"
            value={sizeBoard.col}
            min="5"
            max="20"
            onChange={(e) => colHandleChange(e.target.value)}
          />
        </div>
        <button className="menu" onClick={() => sortMoves()}>
          Sort moves
        </button>
        <ol>{moves}</ol>
      </div>
      <div className="game-board">
        <Board
          row={sizeBoard.row}
          col={sizeBoard.col}
          winnerSquares={winnerLine}
          squares={current.squares}
          onClick={(location) => handleClick(location)}
        />
      </div>
    </div>
  );
}

export default Game;
