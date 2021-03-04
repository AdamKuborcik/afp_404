import React , { Component } from 'react'
import logo from "../../logo.svg";
class Home extends React.Component {
    render(){
        return(
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
        )
    }
}
export default Home