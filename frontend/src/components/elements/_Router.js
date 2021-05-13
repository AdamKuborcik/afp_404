import React from "react";
import Home from "../views/Home";
import ModifyBookPage from "../views/ModifyBookPage";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import NavBar from "./NavBar";
import DeleteBookPage from "../views/DeleteBookPage";
import ListBooks from "../views/ListBooks";
import {AddBookPage} from "../views/AddBookPage";

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
                        <Route exact path="/update">
                            <ModifyBookPage />
                        </Route>
                        <Route exact path="/delete">
                            <DeleteBookPage />
                        </Route>
                        <Route exact path={"/list"}>
                            <ListBooks/>
                        </Route>
                        <Route exact path={"/add"}>
                            <AddBookPage/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}
export default _Router