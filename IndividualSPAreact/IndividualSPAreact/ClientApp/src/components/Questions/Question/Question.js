import React, { Component } from "react";
import "./Question.css";
import Ratequestion from "../../Forms/RateQuestion/RateQuestion";

class Question extends Component {
  constructor(props) {
    super(props);

    this.state = {
      voted: false,
      expanded: false,
      ratingUp: 0,
      ratingDown: 0
    };

    this.voteHandler = this.voteHandler.bind(this);
  }

  submitHandler = (ratingUp, ratingDown) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const options = {
      method: "POST",
      headers
    };

    const request = new Request(
      "api/Main/UpdateQuestion" +
        "/" +
        this.props.id +
        "/" +
        ratingUp +
        "/" +
        ratingDown,
      options
    );

    fetch(request);
  };

  expandedHandler = () => {
    let isExpanded = this.state.expanded;
    this.setState({ expanded: !isExpanded });
  };

  voteHandler = rate => {
    const voted = true;
    let ratingUp = this.state.ratingUp;
    let ratingDown = this.state.ratingDown;
    if (rate === 1) {
      ratingUp++;
      this.setState({ ratingUp, voted });
    }
    if (rate === 0) {
      ratingDown++;
      this.setState({ ratingDown, voted });
    }

    this.submitHandler(ratingUp, ratingDown);
  };

  componentDidMount() {
    this.setState({
      voted: this.props.voted,
      ratingUp: this.props.ratingUp,
      ratingDown: this.props.ratingDown
    });
  }

  render() {
    const { voted, ratingUp, ratingDown } = this.state;
    const { question, answer, id } = this.props;

    let output = (
      <div className="Question Box" onClick={this.expandedHandler}>
        {question}

        <i className="arrow glyphicon glyphicon-chevron-down"></i>
      </div>
    );

    if (this.state.expanded) {
      output = (
        <div className="Box">
          <div onClick={this.expandedHandler}>
            <div className="Question">
              {question}{" "}
              <i className="arrow glyphicon glyphicon-chevron-up"></i>
            </div>
            <div className="Answer">{answer}</div>
          </div>

          <div className="Vote">
            <Ratequestion
              voted={voted}
              vote={this.voteHandler}
              ratingUp={ratingUp}
              ratingDown={ratingDown}
              id={id}
            />
          </div>
        </div>
      );
    }

    return output;
  }
}

export default Question;
