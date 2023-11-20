import React from 'react';
import "./App.css";

import { BrowserRouter , Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Login from './components/Login/Login';
import BookingPage from './components/BookingPage/BookingPage';

export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element = {<HomePage/>}/>
                    <Route path = "/HomePage" element = {<HomePage/>}/>
                    <Route path = "/Login" element = {<Login/>}/>
                    <Route path = "/BookingPage" element = {<BookingPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
