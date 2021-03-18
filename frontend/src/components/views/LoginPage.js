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

                <Form.Row>
                    <Form.Group controlId={"formGridLoginEmail"}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control required autoComplete="off"
                                      name="email"
                                      type="email"
                                      value={this.state.email}
                                      onChange={this.formOnChange}
                                      placeholder="Please enter your email address:"/>
                    </Form.Group>
                </Form.Row>
                

            </Form>);
    }
}
export default LoginPage