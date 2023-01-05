import React from 'react';

const Piece = ({ color, type }) => {
    const backgroundPosition =
        color === 'white'
            ? type === 'pawn'
                ? '0 0'
                : type === 'rook'
                    ? '-60px 0'
                    : type === 'knight'
                        ? '-120px 0'
                        : type === 'bishop'
                            ? '-180px 0'
                            : type === 'queen'
                                ? '-240px 0'
                                : type === 'king'
                                    ? '0 0'
                                    : '0 0'
            : type === 'pawn'
                ? '0 -60px'
                : type === 'rook'
                    ? '-60px -60px'
                    : type === 'knight'
                        ? '-120px -60px'
                        : type === 'bishop'
                            ? '-180px -60px'
                            : type === 'queen'
                                ? '-240px -60px'
                                : type === 'king'
                                    ? '-300px -60px'
                                    : '0 0';

    return (
        <img
            src="../images/sprites.png"
            alt={`Chess piece - ${color} ${type}`}
            className={`w-12 h-12 rounded-full ${type}`}
            style={{ backgroundPosition }}
        />
    );
};

export default Piece; 