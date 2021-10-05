import React from 'react';
import Square from './Square';

function Board({row, col, winnerSquares, squares, onClick }) {
    return (
      <div>
        {createBoard(row, col, winnerSquares, squares, onClick)}
      </div>
    );

}

function createBoard(row, col, winnerSquares, squares, onClick) {

  const board = [];
  //const sizeBoard = Math.sqrt(squares.length);
  let cellCounter = 0;
  for (let i = 0; i < row; i += 1) {
    const rows = [];
    for (let j = 0; j < col; j += 1) {
      rows.push(renderSquare(winnerSquares, squares, cellCounter++, onClick));
    }
    board.push(<div key={i} className="board-row">{rows}</div>);
  }

  return board;
};

function renderSquare(winnerSquares, squares, i, onClick) {
      
  const winnerClass =
  winnerSquares &&
  ( winnerSquares[0] === i ||
    winnerSquares[1] === i ||
    winnerSquares[2] === i ||
    winnerSquares[3] === i ||
    winnerSquares[4] === i )
    ? 'squarewinner' : 'square';

  return (
    <Square 
      winnerClass={winnerClass}
      key={i}
      value={squares[i]}
      onClick={() => onClick(i)}
    />
  );
}

export default Board
