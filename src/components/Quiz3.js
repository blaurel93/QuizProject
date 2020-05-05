import React, { useState } from "react";
import "../assets/style.css"
import "../assets/quiz.css"
import "../views/Quiz"
import { Col, Button, Form, FormGroup, Label, Input, Card } from 'reactstrap';
// import { Link } from "react-router-dom";
import API from '../utils/API';


class Quiz3 extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange1 = this.handleChange1.bind(this);
        this.state = {
            value: '',
            value1: '',
            value2: '',
            value3: '',
            value4: ''
        };

        // this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({ value: e.target.value })

    }
    handleChange1 = (e) => {
        e.preventDefault();
        this.setState({ value1: e.target.value })

    }
    handleChange2 = (e) => {
        e.preventDefault();
        this.setState({ value2: e.target.value })

    }
    handleChange3 = (e) => {
        e.preventDefault();
        this.setState({ value3: e.target.value })

    }
    handleChange4 = (e) => {
        e.preventDefault();
        this.setState({ value4: e.target.value })

    }

    handleSubmit = (event) => {
        event.preventDefault();
        const quizResult = {
            question1: this.state.value,
            question2: this.state.value1,
            question3: this.state.value2,
            question4: this.state.value3,
            question5: this.state.value4
        }
        API.create(quizResult);

        console.log(quizResult);

    }

    render() {
        return (
            <Card className="displayArea">
                <Form onSubmit={this.handleSubmit}>
                    <h1 className="Quiz quizTitle">Daa Bears</h1>
                    <FormGroup row>
                        <Label for="exampleSelect" sm={2}>Where do bears live?</Label>
                        <Col sm={10}>
                            <Input type="select" name="select" id="exampleSelect" value={this.state.value} onChange={this.handleChange}>
                                <option className="correctAnswer">North of equater</option>
                                <option>South of equater</option>
                                <option>Along the equater</option>
                                <option>Only madagascar</option>
                                <option>With Goldilocks</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleSelect" sm={2}>Which is the largest type of bear?</Label>
                        <Col sm={10}>
                            <Input type="select" name="select" id="exampleSelect" value={this.state.value1} onChange={this.handleChange1}>
                                <option>Grizzly bears</option>
                                <option>Polar bears</option>
                                <option className="correctAnswer">Kodiak bears</option>
                                <option>Black bears</option>
                                <option>Panda bears</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleSelect" sm={2}>What is a bear's strongest sense?</Label>
                        <Col sm={10}>
                            <Input type="select" name="select" id="exampleSelect" value={this.state.value2} onChange={this.handleChange2}>
                                <option className="correctAnswer">Smell</option>
                                <option>Sight</option>
                                <option>Speech</option>
                                <option>Touch</option>
                                <option>Hearing</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleSelect" sm={2}>Which is the only part of a bear's body that is unprotected from bee stings?</Label>
                        <Col sm={10}>
                            <Input type="select" name="select" id="exampleSelect" value={this.state.value3} onChange={this.handleChange3}>
                                <option>Paws</option>
                                <option>Butt</option>
                                <option>Toes</option>
                                <option>Eyes</option>
                                <option className="correctAnswer">Nose</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleSelect" sm={2}>How are sun bears different from other bears?</Label>
                        <Col sm={10}>
                            <Input type="select" name="select" id="exampleSelect" value={this.state.value4} onChange={this.handleChange4}>
                                <option>They have very shaggy fur.</option>
                                <option className="correctAnswer">They have a distinctive marking on their chest.</option>
                                <option>They have red fur.</option>
                                <option>They eat sunlight</option>
                                <option>They dont drink water</option>
                            </Input>
                        </Col>
                    </FormGroup>

                    <FormGroup check row>
                        <Col sm={{ size: 10, offset: 2 }}>

                            <Button type="submit" value="Submit">Submit</Button>

                        </Col>
                    </FormGroup>
                </Form>
            </Card>
        )
    }
};
export default Quiz3;