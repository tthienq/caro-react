import React from 'react'

function Square({winnerClass, value, onClick}){
    return (
      <button className= {winnerClass} onClick={onClick} >
        {value}
      </button>
    );
}

export default Square
