import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../assets/style.css"
import Highlight from "../components/Highlight";
import Loading from "../components/Loading";
import { useAuth0 } from "../react-auth0-spa";

const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <Loading />;
  }
  //// THIS IS WHERE WE CAN DISPLAY WHAT ONLY PEOPLE WHO LOG IN CAN SEE ////
  return (
    <Container className="mb-5">
      <Row className="align-items-center profile-header mb-5 text-center text-md-left profileSpace">
        <Col md={2}>
          <img
            src={user.picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </Col>
        <Col md>
          <h2>{user.name}</h2>
          <p className="lead text-muted">{user.email}</p>
        </Col>
      </Row>
      <Row>
        <Highlight>{JSON.stringify(user, null, 2)}</Highlight>
      </Row>
      <ul>
        <p>{user.nickname}</p>
        <p>username: {user.name}</p>
        <p>email: {user.email}</p>
        <p>nickname: {user.nickname}</p>
      </ul>

    </Container>
  );
};

export default Profile;
