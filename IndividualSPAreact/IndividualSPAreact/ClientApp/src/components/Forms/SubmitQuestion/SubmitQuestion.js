import React, { Component } from "react";
import { Form, Container, Col, Row, Button } from "react-bootstrap";

class SubmitQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      name: "",
      mail: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const options = {
      method: "POST",
      headers
    };
    const request = new Request(
      "api/Main/SubmitQuestion/" +
        this.state.question +
        "/" +
        this.state.name +
        "/" +
        this.state.mail,
      options
    );

    fetch(request);

    this.setState({ question: "" });
    this.setState({ name: "" });
    this.setState({ mail: "" });
  };

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Container>
          <Row className="extra-padding">
            <Col>
              <h4 style={{ fontWeight: "bold" }}>
                Finner ikke det du lurer på?
              </h4>
              <h5>Send inn et spørsmål: </h5>
            </Col>
          </Row>
          <Row>
            <Form.Group controlId="formHorizontalText">
              <Form.Label>Navn:</Form.Label>
              <Form.Control
                required
                type="text"
                onChange={this.handleOnChange}
                name="name"
                value={this.state.name}
                placeholder="Navn"
              ></Form.Control>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group>
              <Form.Label>Email addresse:</Form.Label>
              <Form.Control
                required
                type="email"
                onChange={this.handleOnChange}
                name="mail"
                value={this.state.mail}
                placeholder="eksempel@eksempel.no"
              ></Form.Control>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group>
              <Form.Label>Spørsmål:</Form.Label>
              <Form.Control
                required
                type="text"
                onChange={this.handleOnChange}
                name="question"
                value={this.state.question}
                as="textarea"
                rows="3"
                placeholder="Skriv spørsmålet..."
              ></Form.Control>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group>
              <Button type="submit">Send inn</Button>
            </Form.Group>
          </Row>
        </Container>
      </Form>
    );
  }
}

export default SubmitQuestion;
