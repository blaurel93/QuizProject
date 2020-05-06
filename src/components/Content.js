import React, { Component } from "react";



import { Row } from "reactstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../assets/style.css";
import "../assets/quiz.css";
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
// import contentData from "../utils/contentData";
///// THIS BELOW IS WHERE WE COULD PLACE ALL THE QUIZS /////

class Content extends Component {
  render() {
    return (
      <div className="next-steps my-5">
        <h2 className="my-5 text-center">Did you know?</h2>


        {/* HERE  UNDERNEATH  IS THE CONTENT AFTER THE LINE BREAK */}
        <div className="cardS">
          <Card className="boox imageQuiz0">
            <h2 className="smallText">Jalapeno's Quiz</h2>
            <CardBody>
              <CardTitle className="smallText">Oooh its hot!</CardTitle>
              <CardSubtitle className="smallText">Peppas</CardSubtitle>
              <CardText className="smallText">Test your knowledge here!</CardText>


            </CardBody>
          </Card>
          <Card className="boox imageQuiz0">
            <h2 className="smallText">Jalapeno's Quiz</h2>
            <CardBody>
              <CardTitle className="smallText">Oooh its hot!</CardTitle>
              <CardSubtitle className="smallText">Peppas</CardSubtitle>
              <CardText className="smallText">Test your knowledge here!</CardText>


            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}

export default Content;
