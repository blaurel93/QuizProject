import React, { useState } from "react";
import "../assets/style.css"
import "../assets/quiz.css"
import { Col, Button, Form, FormGroup, Label, Input, Card } from 'reactstrap';
import { Link } from "react-router-dom";


class Quiz4 extends React.Component {
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
        console.log(quizResult);

    }

    render() {
        return (
            <Card className="displayArea">
                <Form onSubmit={this.handleSubmit}>
                    <h1 className="Quiz quizTitle">So you know fish?</h1>
                    <FormGroup row>
                        <Label for="exampleSelect" sm={2}>What feature sets fish apart from other water-dwelling animals?</Label>
                        <Col sm={10}>
                            <Input type="select" name="select" id="exampleSelect" value={this.state.value} onChange={this.handleChange}>
                                <option>Tailfin</option>
                                <option>Eyes</option>
                                <option>Fins</option>
                                <option>Gills</option>
                                <option className="correctAnswer">two-chambered heart</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleSelect" sm={2}>What's the proper term for the study of fish?</Label>
                        <Col sm={10}>
                            <Input type="select" name="select" id="exampleSelect" value={this.state.value1} onChange={this.handleChange1}>
                                <option>Fishology</option>
                                <option>Scalology</option>
                                <option className="correctAnswer">ichthyology</option>
                                <option>Swimology</option>
                                <option>Oceography</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleSelect" sm={2}>Which of the following is true about fish scales?</Label>
                        <Col sm={10}>
                            <Input type="select" name="select" id="exampleSelect" value={this.state.value2} onChange={this.handleChange2}>
                                <option>Scales can make music</option>
                                <option>Scales are alive</option>
                                <option>All fish are covered in scales.</option>
                                <option>Fish scales do not overlap.</option>
                                <option className="correctAnswer">Older fish have larger scales.</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleSelect" sm={2}>Which part of a fish's body does not help enhance its hearing?</Label>
                        <Col sm={10}>
                            <Input type="select" name="select" id="exampleSelect" value={this.state.value3} onChange={this.handleChange3}>
                                <option>Fins</option>
                                <option className="correctAnswer">Gills</option>
                                <option>Gas bladder</option>
                                <option>Lateral line</option>
                                <option>Ears</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleSelect" sm={2}>What is the largest fish?</Label>
                        <Col sm={10}>
                            <Input type="select" name="select" id="exampleSelect" value={this.state.value4} onChange={this.handleChange4}>
                                <option className="correctAnswer">Whaleshark</option>
                                <option>Humpback whale</option>
                                <option>Killer whale</option>
                                <option>Guppy</option>
                                <option>Jellyfish</option>
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
export default Quiz4;