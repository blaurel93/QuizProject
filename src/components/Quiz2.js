import React from "react";
import "../assets/style.css"
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Quiz2 = () => (
    <Form>
        <h1 className="Quiz"> Quiz 3</h1>
        <FormGroup row>
            <Label for="exampleSelect" sm={2}>What do you want to ask?</Label>
            <Col sm={10}>
                <Input type="select" name="select" id="exampleSelect">
                    <option>Answer 1</option>
                    <option>Bullshit 2 </option>
                    <option>Fuck me 3</option>
                    <option>Why 4</option>
                    <option>Couldn't it be 5</option>
                </Input>
            </Col>
        </FormGroup>
        <FormGroup row>
            <Label for="exampleSelect" sm={2}>What do you want to ask?</Label>
            <Col sm={10}>
                <Input type="select" name="select" id="exampleSelect">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Input>
            </Col>
        </FormGroup>
        <FormGroup row>
            <Label for="exampleSelect" sm={2}>What do you want to ask?</Label>
            <Col sm={10}>
                <Input type="select" name="select" id="exampleSelect">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Input>
            </Col>
        </FormGroup>
        <FormGroup row>
            <Label for="exampleSelect" sm={2}>What do you want to ask?</Label>
            <Col sm={10}>
                <Input type="select" name="select" id="exampleSelect">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Input>
            </Col>
        </FormGroup>
        <FormGroup row>
            <Label for="exampleSelect" sm={2}>What do you want to ask?</Label>
            <Col sm={10}>
                <Input type="select" name="select" id="exampleSelect">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
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