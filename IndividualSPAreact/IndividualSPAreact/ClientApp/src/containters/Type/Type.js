import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Types/Types.css";
import "./Type.css";
import Questions from "../../components/Questions/Questions";
import Submitquestion from "../../components/Forms/SubmitQuestion/SubmitQuestion";
import Otherlinks from "../../components/OtherLinks/OtherLinks";

class Type extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {},
      questions: [],
      items: [],
      loading: true
    };
  }

  async componentDidMount() {
    await fetch("api/Main/Items")
      .then(response => response.json())
      .then(data => {
        this.setState({ items: data, loading: false });
        const items = data;
        const index = items.findIndex(i => {
          return i.id.toString() === this.props.match.params.id;
        });

        const item = items[index];
        const type = item.typeName;

        fetch("api/Main/Questions")
          .then(response => response.json())
          .then(data => {
            let qs = data;
            qs = qs.filter(q => q.typeName === type);
            this.setState({ questions: qs });
          });

        this.setState({
          item,
          loading: false,
          voted: false
        });
      });
  }

  clickHandler = id => {
    this.props.history.replace("/type/" + id);
    this.componentDidMount();
  };

  render() {
    return (
      <Container>
        <Row className="buffer"></Row>
        <Row className="buffer extramargin">
          <Col md={8}>
            <h1 className="h1">{this.state.item.type}</h1>
            <br></br>
            <h3>{this.state.item.text}</h3>
          </Col>
          <Col md={2}></Col>
          <Col md={2} className="border">
            <h3 className="h3">Se også:</h3>
            <Otherlinks items={this.state.items} clicked={this.clickHandler} />
          </Col>
        </Row>

        <Row className="buffer">
          {this.state.loading ? (
            <h2>Loading content...</h2>
          ) : (
            <Questions questions={this.state.questions} />
          )}
        </Row>

        <Submitquestion className="fixed-row-bottom" />
      </Container>
    );
  }
}

export default Type;
