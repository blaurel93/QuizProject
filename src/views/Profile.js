import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Highlight from "../components/Highlight";
import Loading from "../components/Loading";
import { useAuth0 } from "../react-auth0-spa";
import API from '../utils/API'
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import "../assets/quiz.css";

const Profile = () => {
  const { loading, user } = useAuth0();
  console.log(user, "autho user")



  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      loadData()
    }

    return () => isSubscribed = false;
  }, [user])

  const loadData = (isSubscribed) => {
    API.viewResults().then(function (data) {

      console.log('got these quized from db', data)
    })
  }
  //// THIS IS WHERE WE CAN DISPLAY WHAT ONLY PEOPLE WHO LOG IN CAN SEE ////
  return (
    <>
      {loading || !user ? <Loading /> :

        <Container className="mb-5a">
          <Row className="align-items-center profile-header mb-5 text-center text-md-middle profileSpace">
            <Col md={2}>
              <img
                src={user.picture}
                alt="Profile"
                className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
              />
            </Col>
            <Col md>
              <h2>
                <p className="lead2 text-muted">Hello {user.name} !</p>
              </h2>
            </Col>
          </Row>
          <div className="userInfo">
            <ul>
              <p>Username: {user.name} </p>
              <p>Email: {user.email}</p>
              <p>Nickname: {user.nickname}</p>
            </ul>
          </div>

          {/* THIS IS WHERE FILLER CARDS ARE  .... WHERE EVENTUALLY THE DB WILL REPLACE INFO */}

          <div className="cardS">
            <Card className="boox imageQuiz0">
              <h2 className="profScoreHead">Jalapeno's Quiz</h2>
              <CardBody className="quizText0">

                <CardSubtitle className="profScoreText">USER: JaketheSnake</CardSubtitle>
                <CardText className="profScoreText">SCORED: 80%</CardText>


              </CardBody>
            </Card>

            <Card className="boox imageQuiz1">
              <h2 className="profScoreHead">Milks gone bad?</h2>
              <CardBody className="quizText0">

                <CardSubtitle className="profScoreText">USER: JaketheSnake</CardSubtitle>
                <CardText className="profScoreText">SCORED: 80%</CardText>
                <CardText>Question 1: Correct</CardText>
                <CardText>Question 2: Incorrect</CardText>
                <CardText>Question 3: </CardText>
                <CardText>Question 4: </CardText>
                <CardText>Question 5: </CardText>

              </CardBody>
            </Card>
            <Card className="boox imageQuiz3">
              <h2 className="profScoreHead">Quizzly Bears?</h2>
              <CardBody className="quizText0">

                <CardSubtitle className="profScoreText">USER: JaketheSnake</CardSubtitle>
                <CardText className="profScoreText">SCORED: 80%</CardText>


              </CardBody>
            </Card>
            <Card className="boox imageQuiz0">
              <h2 className="profScoreHead">Utterly Savvy WHY DO WE HAVE THIS?</h2>
              <CardBody className="quizText0">

                <CardSubtitle className="profScoreText">USER: JaketheSnake</CardSubtitle>
                <CardText className="profScoreText">SCORED: 80%</CardText>


              </CardBody>
            </Card>
            <Card className="boox imageQuiz4">
              <h2 className="profScoreHead">Phish?</h2>
              <CardBody className="quizText0">

                <CardSubtitle className="profScoreText">USER: JaketheSnake</CardSubtitle>
                <CardText className="profScoreText">SCORED: 80%</CardText>


              </CardBody>
            </Card>
            <Card className="boox imageQuiz2">
              <h2 className="profScoreHead">But do you Bike?</h2>
              <CardBody className="quizText0">

                <CardSubtitle className="profScoreText">USER: JaketheSnake</CardSubtitle>
                <CardText className="profScoreText">SCORED: 80%</CardText>


              </CardBody>
            </Card>
            <Card className="boox imageQuiz1">
              <h2 className="profScoreHead">Utterly Savvy WHY DO WE HAVE THIS?</h2>
              <CardBody className="quizText0">

                <CardSubtitle className="profScoreText">USER: JaketheSnake</CardSubtitle>
                <CardText className="profScoreText">SCORED: 80%</CardText>


              </CardBody>
            </Card>
          </div>

        </Container >
      }
    </>
  );
};

export default Profile;
