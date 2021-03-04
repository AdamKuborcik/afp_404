import React from "react";
import {Button, Card, Col, Form} from "react-bootstrap";

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
            <Card className="border border-dark bg-dark text-white">
            <Card.Header>

            </Card.Header>
            <Form>
                <Card.Body>
                    <Form.Row>
                        <Form.Group as={Col} controlId={"formGridUserName"}>
                            <Form.Label>User Name</Form.Label>
                            <Form.Control required autoComplete="off"
                                          name="userName"
                                          type="text"
                                          value={this.state.userName}
                                          onChange={this.formOnChange}
                                          className="bg-dark text-white"
                                          placeholder="Enter username"/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId={"formGridEmail"}>
                            <Form.Label>Email</Form.Label>
                            <Form.Control required autoComplete="off"
                                          name="email"
                                          type="email"
                                          value={this.state.email}
                                          onChange={this.formOnChange}
                                          className="bg-dark text-white"
                                          placeholder="Enter Email"/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId={"formGridPasswd"}>
                            <Form.Label>Password</Form.Label>
                            <Form.Control required autoComplete="off"
                                          name="passwd"
                                          type="password"
                                          value={this.state.passwd}
                                          onChange={this.formOnChange}
                                          className="bg-dark text-white"
                                          placeholder="Enter Password"/>
                        </Form.Group>
                    </Form.Row>
                </Card.Body>
                <Card.Footer>
                    <Button
                        disabled={this.state.email.length === 0 ||  this.state.userName === 0 || this.state.passwd === 0}
                        size={"sm"} variant="success" type="submit" >
                        Submit
                    </Button>
                </Card.Footer>
            </Form>
        </Card>);
    }
}
export default RegPage