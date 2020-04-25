import React from "react";
import "../assets/style.css"
import "../assets/quiz.css"
import { Col, Button, Form, FormGroup, Label, Input, Card } from 'reactstrap';
import { Link } from "react-router-dom";


const Quiz3 = () => (
    <Card className="displayArea">
        <Form>
            <h1 className="Quiz quizTitle">Daa Bears</h1>
            <FormGroup row>
                <Label for="exampleSelect" sm={2}>Where do bears live?</Label>
                <Col sm={10}>
                    <Input type="select" name="select" id="exampleSelect">
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
                    <Input type="select" name="select" id="exampleSelect">
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
                    <Input type="select" name="select" id="exampleSelect">
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
                    <Input type="select" name="select" id="exampleSelect">
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
                    <Input type="select" name="select" id="exampleSelect">
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
                    <Link to="/quiz">
                        <Button>Submit</Button>
                    </Link>
                </Col>
            </FormGroup>
        </Form>
    </Card>
);
export default Quiz3;