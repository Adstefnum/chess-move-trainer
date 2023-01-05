import React, { useState } from 'react';
import Square from './Square';
import Piece from './Piece';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../utils/constants';

const Board = ({ squares, pieces, onMovePiece }) => {
  const [draggedPiece, setDraggedPiece] = useState(null);

  const [, drop] = useDrop({
    accept: ItemTypes.PIECE,
    drop: (item) => {
      setDraggedPiece(null);
      onMovePiece(item.id, item.toSquare);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver()
    })
  });

  const renderSquare = (i) => {
    const square = squares[i];
    const piece = pieces[i];

    return (
      <Square
        key={i}
        color={square.color}
        ref={piece ? drop : null}
        onMouseDown={() => setDraggedPiece(piece)}
      >
        {piece && <Piece id={piece.id} type={piece.type} color={piece.color} />}
      </Square>
    );
  };

  return (
    <div className="flex flex-wrap">
      {squares.map(renderSquare)}
    </div>
  );
};

export default Board;
