import React, { useState } from "react";
import { useAuth0 } from "../react-auth0-spa";
import axios from "axios";
import "../assets/style.css";
import Quiz0 from "../components/Quiz0";
import Quiz1 from "../components/Quiz1";
import Quiz2 from "../components/Quiz2";
import Quiz3 from "../components/Quiz3";
import Quiz4 from "../components/Quiz4";



import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container
} from 'reactstrap';
import { Route, Link, Switch, HashRouter } from "react-router-dom";

function Quiz() {
    const { loading, user } = useAuth0();
    const [state, setState] = useState({
        Pa1: "",
        Pa2: "",
        ActiveQuiz: "ShowAll",
        DisplayQuiz: ""
    })

    const handleTyping = (e) => {

        console.log("we are typing", e.target.value)
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
        var submission = {}
        submission.user_email = user.user_email
        submission.answers = [state.Pa1, state.Pa2]
        axios.post("http://localhost:3001/savequiz", submission)
            .then(function () {
                console.log("were back from the backend")
            })
    }

    const Routes = () => (
        <Switch>
            <Route path="/quiz/Quiz0" component={Quiz0} />
            <Route path="/quiz/Quiz1" component={Quiz1} />
            <Route path="/quiz/Quiz2" component={Quiz2} />
            <Route path="/quiz/Quiz3" component={Quiz3} />
            <Route path="/quiz/Quiz4" component={Quiz4} />
        </Switch>
    );

    const handleSelectQuiz = (button) => {
        switch (button) {
            case 0:
                setState({ ActiveQuiz: "Quiz0" });
                console.log(state.ActiveQuiz)
                break;
            case 1:
                setState({ ActiveQuiz: "Quiz1" });
                console.log(state.ActiveQuiz)
                break;
            case 2:
                setState({ ActiveQuiz: "Quiz2" });
                console.log(state.ActiveQuiz)
                break;
            case 3:
                setState({ ActiveQuiz: "Quiz3" });
                console.log(state.ActiveQuiz)
                break;
            case 4:
                setState({ ActiveQuiz: "Quiz4" });
                console.log(state.ActiveQuiz)
                break;
            default:
                setState({ ActiveQuiz: "ShowAll" });
        }
    }

    console.log("this is our state", state)
    return (
        
            <Container>
                {/* {state.ActiveQuiz()}  CHECK THE STATE HERE       isthistrue  ?() : ()*/}
                <div className="cardS">

                    <Card className="boox">
                        <CardImg top width="100%" src="../assets/output-onlinepngtools.png" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>This is 0</CardTitle>
                            <CardSubtitle>Quiz 0</CardSubtitle>
                            <CardText>This is defiantly quiz 0</CardText>
                            <Link to="/quiz/Quiz0" onClick={() => { handleSelectQuiz(0) }}>
                                <u>Home</u>
                            </Link>
                        </CardBody>
                    </Card>
                    <Card className="boox">
                        <CardImg top width="100%" src="../assets/output-onlinepngtools.png" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>This is 1</CardTitle>
                            <CardSubtitle>Quiz 1</CardSubtitle>
                            <CardText>This is quiz 1</CardText>
                            <Link to="/quiz/Quiz1" onClick={() => { handleSelectQuiz(1) }}>
                                <u>Home</u>
                            </Link>
                        </CardBody>
                    </Card>
                    <Card className="boox">
                        <CardImg top width="100%" src="../assets/output-onlinepngtools.png" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>This is 2</CardTitle>
                            <CardSubtitle>QUiz 2</CardSubtitle>
                            <CardText>This quiz 2</CardText>    
                            <Link to="/quiz/Quiz2" onClick={() => { handleSelectQuiz(2) }}>
                                <u>Home</u>
                            </Link>
                        </CardBody>
                    </Card>
                    <Card className="boox">
                        <CardImg top width="100%" src="../assets/output-onlinepngtools.png" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>This is 3</CardTitle>
                            <CardSubtitle>Quiz 3</CardSubtitle>
                            <CardText>This quizx 3</CardText>
                            <Link to="/quiz/Quiz3" onClick={() => { handleSelectQuiz(3) }}>
                                <u>Home</u>
                            </Link>
                        </CardBody>
                    </Card>
                    <Card className="boox">
                        <CardImg top width="100%" src="../assets/output-onlinepngtools.png" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>This is 4</CardTitle>
                            <CardSubtitle>Quiz 4</CardSubtitle>
                            <CardText>This quiz 4</CardText>
                            <Link to="/quiz/Quiz4" onClick={() => { handleSelectQuiz(4) }}>
                                <u>Home</u>
                            </Link>
                        </CardBody>
                    </Card>
                </div>

                <div className="displayArea">
                <Routes />
                </div>

            </Container>
        

    )
}

export default Quiz;