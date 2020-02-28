import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import SubmittedQuestions from "../../components/SubmittedQuestions/SubmittedQuestions";
import "./Forum.css";

class Forum extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [],
      loading: true
    };
  }

  async componentDidMount() {
    await fetch("api/Main/SubmittedQuestions")
      .then(response => response.json())
      .then(data => {
        this.setState({ questions: data, loading: false });
      });
  }

  render() {
    return (
      <Container>
        <Row className="forum-buffer">
          <Col md={8}>
            <h1>Forum</h1>

            <div className="Forum-div">
              {this.state.loading ? (
                <h2> Loading content...</h2>
              ) : (
                <SubmittedQuestions questions={this.state.questions} />
              )}
            </div>
          </Col>
          <Col md={2}></Col>
          <Col md={2}></Col>
        </Row>
      </Container>
    );
  }
}

export default Forum;
