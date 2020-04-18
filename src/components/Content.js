import React, { Component } from "react";

import { Row } from "reactstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import contentData from "../utils/contentData";
///// THIS BELOW IS WHERE WE COULD PLACE ALL THE QUIZS /////

class Content extends Component {
  render() {
    return (
      <div className="next-steps my-5">
        <h2 className="my-5 text-center">Heres some quizzes</h2>

      {/* HERE  UNDERNEATH  IS THE CONTENT AFTER THE LINE BREAK */}

        <Row className="d-flex justify-content-between">
          
          <card>
            <h1>Hello</h1>
            <p>this is a card</p>
          </card>
          
          <card>
            <h1>Hello</h1>
            <p>this is a card</p>
          </card>
          <card>
            <h1>Hello</h1>
            <p>this is a card</p>
          </card>
        </Row>
        <Row className="d-flex justify-content-between">
          <card>
            <h1>Hello</h1>
            <p>this is a card</p>
          </card>
          <card>
            <h1>Hello</h1>
            <p>this is a card</p>
          </card>
          <card>
            <h1>Hello</h1>
            <p>this is a card</p>
          </card>
        </Row>
      </div>
    );
  }
}

export default Content;
