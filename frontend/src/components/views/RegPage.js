import React from "react";
import {Button, Form} from "react-bootstrap";

class RegPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            userName: "",
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
            <body  className="App-body">
            <div className={"loginForm"}>
            <Form>

                    <Form.Row>
                        <Form.Group  controlId={"formGridUserName"}>
                            <Form.Label> User Name </Form.Label>
                            <Form.Control required autoComplete="off"
                                          name="userName"
                                          type="text"
                                          value={this.state.userName}
                                          onChange={this.formOnChange}
                                          pattern="[A-Z a-z 0-9]*"
                                          placeholder="Enter username"/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group controlId={"formGridEmail"}>
                            <Form.Label> Email </Form.Label>
                            <Form.Control required autoComplete="off"
                                          name="email"
                                          type="email"
                                          value={this.state.email}
                                          onChange={this.formOnChange}
                                          placeholder="Enter Email"/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group  controlId={"formGridPasswd"}>
                            <Form.Label> Password </Form.Label>
                            <Form.Control required autoComplete="off"
                                          name="passwd"
                                          type="password"
                                          value={this.state.passwd}
                                          onChange={this.formOnChange}
                                          pattern="[A-Z a-z 0-9]*"
                                          placeholder="Enter Password"/>
                        </Form.Group>
                    </Form.Row>


                    <Button
                        disabled={this.state.email.length === 0 ||  this.state.userName === 0 || this.state.passwd === 0}
                        size={"sm"} variant="success" type="submit" >
                        Submit
                    </Button>

            </Form>
            </div>
            </body>);
    }
}
export default RegPage