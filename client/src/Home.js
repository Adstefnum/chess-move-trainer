import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex flex-col h-screen">
            <header className="bg-gray-800 p-4">
                <div className="container mx-auto flex items-center justify-between">
                    <Link to="/" className="text-white font-bold text-xl uppercase">
                        MOVE TRAINER
                    </Link>
                    <div className="flex">
                        <Link to="/game" className="btn btn-primary mr-4">
                            Play Chess
                        </Link>
                        <Link to="/donate" className="btn btn-secondary mr-4">
                            Donate
                        </Link>
                    </div>
                    <Link to="/login" className="btn btn-secondary">
                        Login
                    </Link>
                </div>
            </header>
            <main className="flex-1 p-4">
                <div className="container mx-auto">
                    <h1 className="text-3xl font-bold text-center mb-4">
                        Learn chess theory lines with spaced repetition practice
                    </h1>
                    <p className="text-xl mb-4">
                        Move Trainer uses the science of pattern recognition and spaced repetition to help you learn chess theory lines and improve your error correction through muscle memory.
                    </p>
                    <Link to="/game" className="btn btn-primary">
                        Start learning
                    </Link>
                </div>
            </main>
            <footer className="bg-gray-800 p-4 mt-auto">
                <div className="container mx-auto flex items-center justify-between text-white text-sm">
                    <div>Move Trainer &copy; {new Date().getFullYear()}</div>
                    <div>
                        Created by{' '}
                        <a
                            href="https://www.linkedin.com/in/stephen-adesina/"
                            className="underline hover:text-gray-400"
                        >
                            Stephen Adesina
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;
