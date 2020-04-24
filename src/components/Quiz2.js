import React from "react";
import "../assets/style.css"
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Quiz2 = () => (
    <Form>
        <h1 className="Quiz"> Quiz 3</h1>
        <FormGroup row>
            <Label for="exampleSelect" sm={2}>Where were bicycles first introduced?</Label>
            <Col sm={10}>
                <Input type="select" name="select" id="exampleSelect">
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
                <Input type="select" name="select" id="exampleSelect">
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
                <Input type="select" name="select" id="exampleSelect">
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
                <Input type="select" name="select" id="exampleSelect">
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
                <Input type="select" name="select" id="exampleSelect">
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
                <Button>Submit</Button>
            </Col>
        </FormGroup>
    </Form>
);
export default Quiz2;