import React from "react";
import "../assets/style.css"
import { Col, Button, Form, FormGroup, Label, Input, Card } from 'reactstrap';
import { Link } from "react-router-dom";


const Quiz1 = () => (
    <Card className="displayArea">
        <Form>
            <h1 className="Quiz">Its Organic & Non GMO....</h1>
            <FormGroup row>
                <Label for="exampleSelect" sm={2}>Which of the following is true?</Label>
                <Col sm={10}>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>Milk will never go bad</option>
                        <option>Nobody can drink milk</option>
                        <option className="correctAnswer">To make one gallon of ice cream, it takes 12 pounds of whole milk</option>
                        <option>Regular milk is not as healthy as organic regular milk</option>
                        <option>Only whole milk contains vitamin D</option>
                    </Input>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="exampleSelect" sm={2}>Which of the following is true?</Label>
                <Col sm={10}>
                    <Input type="select" name="select" id="exampleSelect">
                        <option className="correctAnswer">For the price, milk supplies more nutrients than juice</option>
                        <option>Flavored milk isn’t good for you due to added sugar</option>
                        <option>Soy, almond, coconut and rice beverages are healthier than real dairy milk</option>
                        <option>People who are sensitive to lactose should avoid milk and all dairy foods like cheese and yogurt</option>
                        <option>Farmers disregard the environment and use large amounts of pesticides</option>
                    </Input>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="exampleSelect" sm={2}>Which of the following is true?</Label>
                <Col sm={10}>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>Dairy cows are given unnecessary antibiotics, transferring antibiotics to the milk we drink</option>
                        <option>People should avoid milk because of hormones</option>
                        <option>Milk is made of solid iron</option>
                        <option className="correctAnswer">Pasteurized milk offers more health benefits than unpasteurized milk</option>
                        <option>Milk can be found in rocks!</option>
                    </Input>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="exampleSelect" sm={2}>Which of the following is true?</Label>
                <Col sm={10}>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>Milk builds strong bones</option>
                        <option className="correctAnswer">UK dairy farmers produce 14 billion litres of milk each year</option>
                        <option>Drinking milk can help you lose weight</option>
                        <option>Chicken contains milk!</option>
                        <option>Milk is “nature’s perfect food.”</option>
                    </Input>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="exampleSelect" sm={2}>Which of the following is true?</Label>
                <Col sm={10}>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>Milk is normally green</option>
                        <option>Milk cannot conduct electricity</option>
                        <option className="correctAnswer">It contains 90% water which helps to rehydrate the body</option>
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
export default Quiz1;