import React, { Component } from "react";
import "../assets/style.css"
import "../assets/quiz.css"
import "../views/Quiz"
import { Col, Button, Form, FormGroup, Label, Input, Card } from 'reactstrap';
// import { Link } from "react-router-dom";
import API from '../utils/API';



class Quiz2 extends React.Component {
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
                    <h1 className="Quiz quizTitle"> Bicycle Knowledge</h1>
                    <FormGroup row>
                        <Label for="exampleSelect" sm={2}>Where were bicycles first introduced?</Label>
                        <Col sm={10}>
                            <Input type="select" name="select" id="exampleSelect" value={this.state.value} onChange={this.handleChange}>
                                <option className="correctAnswer">Europe</option>
                                <option>Germany</option>
                                <option>US</option>
                                <option>Brazil</option>
                                <option>China</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleSelect" sm={2}>What's the core of a bicycle called?</Label>
                        <Col sm={10}>
                            <Input type="select" name="select" id="exampleSelect" value={this.state.value1} onChange={this.handleChange1}>
                                <option>Bracket</option>
                                <option>Pedal</option>
                                <option className="correctAnswer">Frame</option>
                                <option>Wheel</option>
                                <option>Horn</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleSelect" sm={2}>What does the front fork hold?</Label>
                        <Col sm={10}>
                            <Input type="select" name="select" id="exampleSelect" value={this.state.value2} onChange={this.handleChange2}>
                                <option>The back wheel</option>
                                <option className="correctAnswer">The front wheel</option>
                                <option>The chain</option>
                                <option>The pedals</option>
                                <option>The back</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleSelect" sm={2}>What do bicycles use to reduce friction?</Label>
                        <Col sm={10}>
                            <Input type="select" name="select" id="exampleSelect" value={this.state.value3} onChange={this.handleChange3}>
                                <option>Rubber</option>
                                <option>Pedals</option>
                                <option>Brakes</option>
                                <option>Air resistance</option>
                                <option className="correctAnswer">Ball bearings</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleSelect" sm={2}>Which bicycle part doesn't have ball bearings?</Label>
                        <Col sm={10}>
                            <Input type="select" name="select" id="exampleSelect" value={this.state.value4} onChange={this.handleChange4}>
                                <option>Rear hub</option>
                                <option>Front hub</option>
                                <option>Pedals</option>
                                <option className="correctAnswer">Gear shift</option>
                                <option>Rear wheel</option>
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
export default Quiz2;