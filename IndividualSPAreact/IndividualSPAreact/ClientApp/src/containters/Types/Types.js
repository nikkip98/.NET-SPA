import React, { Component } from "react";
import Items from "../../components/Items/Items";
import { Container, Col, Row } from "react-bootstrap";
import Submitquestion from "../../components/Forms/SubmitQuestion/SubmitQuestion";
import "./Types.css";

class Types extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], loading: true };

    this.clickHandler = this.clickHandler.bind(this);
  }

  async componentDidMount() {
    await fetch("api/Main/Items")
      .then(response => response.json())
      .then(data => {
        this.setState({ items: data, loading: false });
      });
  }

  clickHandler = id => {
    this.props.history.push("/type/" + id);
  };

  render() {
    return (
      <Container>
        <Row className="buffer"></Row>
        <Row className="buffer extramargin">
          <Col md={8}>
            <h1>Spørsmål og svar</h1>
            <br />
            <h3>
              Hva lurer du på? Velg tema og finn svar på alt fra hvem som kan få
              rabatt og hvordan du søker om refusjon til hvordan appen fungerer
              og hva slags bagasje du kan ta med om bord.
            </h3>
          </Col>
          <Col md={2}></Col>
          <Col md={2} className="border">
            <h3 className="h3">Se også:</h3>
            <p
              className="link"
              onClick={() => this.props.history.push("/forum")}
            >
              Spørsmål fra brukere
            </p>
          </Col>
        </Row>
        <Row className="buffer extramargin">
          {this.state.loading ? (
            <h2>Loading content...</h2>
          ) : (
            <Items
              history={this.props.history}
              items={this.state.items}
              clicked={this.clickHandler}
            />
          )}
        </Row>
        <Submitquestion className="fixed-row-bottom" />
      </Container>
    );
  }
}

export default Types;
