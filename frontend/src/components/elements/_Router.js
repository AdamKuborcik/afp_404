import React from "react";
import Home from "../views/Home";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import NavBar from "./NavBar";
import RegPage from "../views/RegPage";

class _Router extends React.Component {
    render(){
        return(
            <Router>
                <div>
                    <NavBar/>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/register">
                            <RegPage />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}
export default _Router