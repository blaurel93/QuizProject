import React, { Component } from "react";

import { Row } from "reactstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  Card
} from 'reactstrap';
// import contentData from "../utils/contentData";
///// THIS BELOW IS WHERE WE COULD PLACE ALL THE QUIZS /////

class Content extends Component {
  render() {
    return (
      <div className="next-steps my-5">
        <h2 className="my-5 text-center">Heres some quizzes</h2>

      {/* HERE  UNDERNEATH  IS THE CONTENT AFTER THE LINE BREAK */}

        <Row className="d-flex justify-content-between">
          
          <Card>
            <h1>Hello</h1>
            <p>this is a Card</p>
          </Card>
          
          <Card>
            <h1>Hello</h1>
            <p>this is a Card</p>
          </Card>
          <Card>
            <h1>Hello</h1>
            <p>this is a Card</p>
          </Card>
        </Row>
        <Row className="d-flex justify-content-between">
          <Card>
            <h1>Hello</h1>
            <p>this is a Card</p>
          </Card>
          <Card>
            <h1>Hello</h1>
            <p>this is a Card</p>
          </Card>
          <Card>
            <h1>Hello</h1>
            <p>this is a Card</p>
          </Card>
        </Row>
      </div>
    );
  }
}

export default Content;
