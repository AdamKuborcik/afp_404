import React , { Component } from 'react'
import logo from "../../logo.svg";
class Home extends React.Component {
    render(){
        return(
            <body  className="App-body">
            <div>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Üdvözöljük!</h1>
            <h2>Ez az alkalmazás a _404 navű afp csoport projektje</h2>
            <p>
                A projekt a könyvek egy adatbázisát kezeli
            </p>
            </div>
            </body>
        )
    }
}
export default Home