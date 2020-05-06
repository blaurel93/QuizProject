import React, { Component } from "react";
import "../assets/style.css"
import "../assets/quiz.css"
import "../views/Quiz"
import { Col, Button, Form, FormGroup, Label, Input, Card } from 'reactstrap';
// import { Link } from "react-router-dom";
import API from '../utils/API';
import { useAuth0 } from "../react-auth0-spa";
// const { value: firstName, bind: bindFirstName, reset: resetFirstName } = useInput('');
// const { value: lastName, bind: bindLastName, reset: resetLastName } = useInput('');
// const [state, setState] = useState({
//     value: "",
//     ActiveQuiz: "ShowAll",
//     DisplayQuiz: "",

// })



class Quiz0 extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange1 = this.handleChange1.bind(this);
        this.state = {
            value: '',
            value1: '',
            value2: '',
            value3: '',
            value4: '',
            numberCorrect: 0
        };

        // this.handleSubmit = this.handleSubmit.bind(this);

    }
    // handleScore = (e) => {
    //     e.preventDefault();
    //     var score = e.target.value.correct;
    //     console.log(score);
    // }
    // componentDidMount = () => {
    //     // console.log(this.state.);
    //     console.log("this is the quiz0 page")
    // }
    handleChange = (e) => {
        e.preventDefault();
        var selected = e.target.value
        this.setState({ value: selected })
        
    }
    handleChange1 = (e) => {
        e.preventDefault();
        var selected = e.target.value
        this.setState({ value1: selected })
        
    }
    handleChange2 = (e) => {
        e.preventDefault();
        var selected = e.target.value
        this.setState({ value2: selected })

    }
    handleChange3 = (e) => {
        e.preventDefault();
        var selected = e.target.value
        this.setState({ value3: selected })

    }
    handleChange4 = (e) => {
        e.preventDefault();
        var selected = e.target.value
        this.setState({ value4: selected })

    }

    handleSubmit = (event) => {
        event.preventDefault();
        const quizResult = {
            question1: this.state.value,
            question2: this.state.value1,
            question3: this.state.value2,
            question4: this.state.value3,
            question5: this.state.value4,
            numberCorrect: this.state.correct
        }
        API.create(quizResult);
        console.log(quizResult);

    }

    render() {
        return (
            <Card className="displayArea">
                <Form onSubmit={this.handleSubmit}>
                    <h1 className="Quiz quizTitle">How well do you know Jalapenos?</h1>
                    <FormGroup row>
                        <Label for="exampleSelect" sm={2}>Which fun fact is true?</Label>
                        <Col sm={10}>
                            <Input type="select" name="select" id="exampleSelect" value={this.state.value} onChange={this.handleChange}>
                                <option className="correctAnswer" correct={1}>Jalapenos are one of the best sources of vitamin C</option>
                                <option correct={0}>Jalapenos are used as bullets</option>
                                <option correct={0}>Jalapenos are not known to be spicy</option>
                                <option correct={0}>The seeds in a jalapeno are the HOTTEST part of the pepper</option>
                                <option correct={0}>Couldn't it be 5</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleSelect" sm={2}>What is crazy about jalapenos?</Label>
                        <Col sm={10}>
                            <Input type="select" name="select" id="exampleSelect" value={this.state.value1} onChange={this.handleChange1}>
                                <option correct={0}>You cant grow jalapenos</option>
                                <option correct={0}>Jalapenos can only grow in the desert</option>
                                <option correct={0}>Jalapenos grow up to 6 feet long! But they shrink after picking</option>
                                <option className="correctAnswer" correct={1}>After harvest if Jalapenos are stored at 45°F they have a shelf life of up to 3-5 weeks</option>
                                <option correct={0}>Jalapenos are dark blue</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleSelect" sm={2}>What can Jalapenos do??</Label>
                        <Col sm={10}>
                            <Input type="select" name="select" id="exampleSelect" value={this.state.value2} onChange={this.handleChange2}>
                                <option correct={0}>jalapenos will blind you</option>
                                <option correct={0}>Jalapenos can hit the woah</option>
                                <option className="correctAnswer" correct={1}>Jalapenos help lower blood pressure, fight migraine headaches and lose weight</option>
                                <option correct={0}>Jalapeno Gigante II can grow up to 15 inches!!</option>
                                <option correct={0}>They taste like chicken!</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleSelect" sm={2}>Which of the following is true?</Label>
                        <Col sm={10}>
                            <Input type="select" name="select" id="exampleSelect" value={this.state.value3} onChange={this.handleChange3}>
                                <option correct={0}>Bell peppers are the same as jalapenos</option>
                                <option className="correctAnswer" correct={1}>About 40,000 acres are dedicated for the cultivation of Jalapenos in Mexico</option>
                                <option correct={0}>jalapenos are actually eggs from a green animal</option>
                                <option correct={0}>Leprechauns try to steal them</option>
                                <option correct={0}>They taste great with peanut butter!</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleSelect" sm={2}>Which is fun about jalapenos?</Label>
                        <Col sm={10}>
                            <Input type="select" name="select" id="exampleSelect" value={this.state.value4} onChange={this.handleChange4}>
                                <option correct={0}>Jalapenos are used as a dessert for kids!</option>
                                <option correct={0}>Jalapenos rot your teeth</option>
                                <option correct={0}>Jalapenos make your feet stink!</option>
                                <option correct={0}>Jalapenos make you want to eat grass</option>
                                <option className="correctAnswer" correct={1}>August 19th is National Hot and Spicy Food Day</option>
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
export default Quiz0;