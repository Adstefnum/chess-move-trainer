import React from 'react';
import { Link } from 'react-router-dom';
import Board from './components/Board';

const Game = () => {

  function handleMovePiece(){
    //
  }
 const squares = [];

for (let i = 0; i < 64; i++) {
  const color = (i + Math.floor(i / 8)) % 2 === 0 ? 'white' : 'gray';
  squares.push({ color });
}


const pieces = [
  { id: 1, type: 'rook', color: 'white' },
  { id: 2, type: 'knight', color: 'white' },
  { id: 3, type: 'bishop', color: 'white' },
  { id: 4, type: 'queen', color: 'white' },
  { id: 5, type: 'king', color: 'white' },
  { id: 6, type: 'bishop', color: 'white' },
  { id: 7, type: 'knight', color: 'white' },
  { id: 8, type: 'rook', color: 'white' },
  { id: 9, type: 'pawn', color: 'white' },
  { id: 10, type: 'pawn', color: 'white' },
  { id: 11, type: 'pawn', color: 'white' },
  { id: 12, type: 'pawn', color: 'white' },
  { id: 13, type: 'pawn', color: 'white' },
  { id: 14, type: 'pawn', color: 'white' },
  { id: 15, type: 'pawn', color: 'white' },
  { id: 16, type: 'pawn', color: 'white' },
  { id: 17, type: 'rook', color: 'black' },
  { id: 18, type: 'knight', color: 'black' },
  { id: 19, type: 'bishop', color: 'black' },
  { id: 20, type: 'queen', color: 'black' },
  { id: 21, type: 'king', color: 'black' },
  { id: 22, type: 'bishop', color: 'black' },
  { id: 23, type: 'knight', color: 'black' },
  { id: 24, type: 'rook', color: 'black' },
  { id: 25, type: 'pawn', color: 'black' },
  { id: 26, type: 'pawn', color: 'black' },
  { id: 27, type: 'pawn', color: 'black' },
  { id: 28, type: 'pawn', color: 'black' },
  { id: 29, type: 'pawn', color: 'black' },
  { id: 30, type: 'pawn', color: 'black' },
  { id: 31, type: 'pawn', color: 'black' },
  { id: 32, type: 'pawn', color: 'black' }
];


  return (
    <div className="flex flex-col h-screen">
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="text-white font-bold text-xl">
            Chess
          </Link>
          <Link to="/" className="text-white font-bold text-xl">
            Home
          </Link>
        </div>
      </nav>

<Board squares={squares} pieces={pieces} onMovePiece={handleMovePiece} /> 
    </div>
  );
};

export default Game;
