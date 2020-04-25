import React from "react";
import "../assets/style.css"
import "../assets/quiz.css"
import { Col, Button, Form, FormGroup, Label, Input, Card } from 'reactstrap';
import { Link } from "react-router-dom";


const Quiz4 = () => (
    <Card className="displayArea">
        <Form>
            <h1 className="Quiz">So you know fish?</h1>
            <FormGroup row>
                <Label for="exampleSelect" sm={2}>What feature sets fish apart from other water-dwelling animals?</Label>
                <Col sm={10}>
                    <Input type="select" name="select" id="exampleSelect">
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
                    <Input type="select" name="select" id="exampleSelect">
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
                    <Input type="select" name="select" id="exampleSelect">
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
                    <Input type="select" name="select" id="exampleSelect">
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
                    <Input type="select" name="select" id="exampleSelect">
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
                    <Link to="/quiz">
                        <Button>Submit</Button>
                    </Link>
                </Col>
            </FormGroup>
        </Form>
    </Card>
);
export default Quiz4;