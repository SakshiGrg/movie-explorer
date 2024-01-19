import React from 'react';
import Home from './components/Home/Home';
import MovieDetails from './components/MovieDetails/MovieDetails';
import Error from './components/Error/Error';
import { Routes, Route } from 'react-router-dom';
import './App.css';

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="movie/:id" element={<MovieDetails />} />
                <Route path="*" element={<Error />} />
            </Routes>

            {/* <div className="container mx-auto bg-gray-200 rounded-xl">
                <p className="text-3xl text-gray-700 font-bold mb-5">Welcome</p>
                <p className="text-gray-500 text-lg">
                    React and Tailwindcss in action
                </p>
            </div> */}
        </>
    );
};

export default App;
