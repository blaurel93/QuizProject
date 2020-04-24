import React from "react";
import "../assets/style.css"
import "../views/Quiz"
import { Col, Button, Form, FormGroup, Label, Input, Card } from 'reactstrap';
import { Link } from "react-router-dom";


const Quiz0 = () => (
    <Card className="displayArea">
        <Form>
            <h1 className="Quiz">How well do you know Jalapenos?</h1>
            <FormGroup row>
                <Label for="exampleSelect" sm={2}>Which of the following is true?</Label>
                <Col sm={10}>
                    <Input type="select" name="select" id="exampleSelect">
                        <option className="correctAnswer">Jalapenos are one of the best sources of vitamin C</option>
                        <option>Jalapenos are used as bullets</option>
                        <option>Jalapenos are not known to be spicy</option>
                        <option>The seeds in a jalapeno are the HOTTEST part of the pepper</option>
                        <option>Couldn't it be 5</option>
                    </Input>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="exampleSelect" sm={2}>Which of the following is true?</Label>
                <Col sm={10}>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>You cant grow jalapenos</option>
                        <option>Jalapenos can only grow in the desert</option>
                        <option>Jalapenos grow up to 6 feet long! But they shrink after picking</option>
                        <option className="correctAnswer">After harvest if Jalapenos are stored at 45°F they have a shelf life of up to 3-5 weeks</option>
                        <option>Jalapenos are dark blue</option>
                    </Input>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="exampleSelect" sm={2}>Which of the following is true?</Label>
                <Col sm={10}>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>jalapenos will blind you</option>
                        <option>Jalapenos can hit the woah</option>
                        <option className="correctAnswer">Jalapenos help lower blood pressure, fight migraine headaches and lose weight</option>
                        <option>Jalapeno Gigante II can grow up to 15 inches!!</option>
                        <option>They taste like chicken!</option>
                    </Input>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="exampleSelect" sm={2}>Which of the following is true?</Label>
                <Col sm={10}>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>Bell peppers are the same as jalapenos</option>
                        <option className="correctAnswer">About 40,000 acres are dedicated for the cultivation of Jalapenos in Mexico</option>
                        <option>jalapenos are actually eggs from a green animal</option>
                        <option>Leprechauns try to steal them</option>
                        <option>They taste great with peanut butter!</option>
                    </Input>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="exampleSelect" sm={2}>Which of the following is true?</Label>
                <Col sm={10}>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>Jalapenos are used as a dessert for kids!</option>
                        <option>Jalapenos rot your teeth</option>
                        <option>Jalapenos make your feet stink!</option>
                        <option>Jalapenos make you want to eat grass</option>
                        <option className="correctAnswer">August 19th is National Hot and Spicy Food Day</option>
                    </Input>
                </Col>
            </FormGroup>

            <FormGroup check row>
                <Col sm={{ size: 10, offset: 2 }}>
                    <Link to="/quiz">
                        <Button>Submit</Button>
                    </Link>
                </Col>
            </FormGroup>
        </Form>
    </Card>

);
export default Quiz0;