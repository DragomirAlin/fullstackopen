import logo from './logo.svg';
import './App.css';
import React from "react";

const Hello = () => {
    return (
        <div>
            <p>Hello world</p>
        </div>
    )
}

const App = () => {
    return (
        <div>
            <Hello />
            <Hello />
            <Hello />

            <Hello />
        </div>
    )
}

export default App;
