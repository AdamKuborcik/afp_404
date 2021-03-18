import React from "react";
import {Button, Form} from "react-bootstrap";

class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            passwd: ""
        };
        this.formOnChange = this.formOnChange.bind(this);
    }

    formOnChange(event){
        const {name,value} = event.target;
        this.setState({[name] : value});
    }

    render() {
        return (

            <Form>


            </Form>);
    }
}
export default LoginPage