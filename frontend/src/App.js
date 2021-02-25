import logo from './logo.svg';
import './App.css';


import Button from "./Button";
import NavBar from "./component/element/NavBar";
import React from "react";

function App() {
  return (
    <div className="App">
        <header className="App-header">
            <NavBar/>
        </header>
        <body  className="App-body">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Opening page
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </body>
    </div>
  );
}

export default App;
