import React from "react";
import { Container, Row, Col } from "reactstrap";
import Highlight from "../components/Highlight";
import Loading from "../components/Loading";
import { useAuth0 } from "../react-auth0-spa";
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <Loading />;
  }
  //// THIS IS WHERE WE CAN DISPLAY WHAT ONLY PEOPLE WHO LOG IN CAN SEE ////
  return (
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
      <Card >
        <h2>Milks gone bad?</h2>
        <CardBody className="quizText0">
          <CardTitle>Like it sour?</CardTitle>
          <CardSubtitle>Utterly savvy</CardSubtitle>
          <CardText>Test your knowledge here!</CardText>
          
          
        </CardBody>
      </Card>


    </Container >
  );
};

export default Profile;
