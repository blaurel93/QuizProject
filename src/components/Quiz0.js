import React, { Component } from "react";
import "../assets/style.css"
import "../assets/quiz.css"
import "../views/Quiz"
import { Col, Button, Form, FormGroup, Label, Input, Card } from 'reactstrap';
// import { Link } from "react-router-dom";


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
            answer1: this.state.value,
            answer2: this.state.value1,
            answer3: this.state.value2,
            answer4: this.state.value3,
            answer5: this.state.value4
        }
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
                                <option className="correctAnswer">Jalapenos are one of the best sources of vitamin C</option>
                                <option>Jalapenos are used as bullets</option>
                                <option>Jalapenos are not known to be spicy</option>
                                <option>The seeds in a jalapeno are the HOTTEST part of the pepper</option>
                                <option>Couldn't it be 5</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleSelect" sm={2}>What is crazy about jalapenos?</Label>
                        <Col sm={10}>
                            <Input type="select" name="select" id="exampleSelect" value={this.state.value1} onChange={this.handleChange1}>
                                <option>You cant grow jalapenos</option>
                                <option>Jalapenos can only grow in the desert</option>
                                <option>Jalapenos grow up to 6 feet long! But they shrink after picking</option>
                                <option className="correctAnswer">After harvest if Jalapenos are stored at 45°F they have a shelf life of up to 3-5 weeks</option>
                                <option>Jalapenos are dark blue</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleSelect" sm={2}>What can Jalapenos do??</Label>
                        <Col sm={10}>
                            <Input type="select" name="select" id="exampleSelect" value={this.state.value2} onChange={this.handleChange2}>
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
                            <Input type="select" name="select" id="exampleSelect" value={this.state.value3} onChange={this.handleChange3}>
                                <option>Bell peppers are the same as jalapenos</option>
                                <option className="correctAnswer">About 40,000 acres are dedicated for the cultivation of Jalapenos in Mexico</option>
                                <option>jalapenos are actually eggs from a green animal</option>
                                <option>Leprechauns try to steal them</option>
                                <option>They taste great with peanut butter!</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleSelect" sm={2}>Which is fun about jalapenos?</Label>
                        <Col sm={10}>
                            <Input type="select" name="select" id="exampleSelect" value={this.state.value4} onChange={this.handleChange4}>
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
                            
                                <Button type="submit" value="Submit">Submit</Button>
                            
                        </Col>
                    </FormGroup>
                </Form>
            </Card>
        )
    }
};
export default Quiz0;