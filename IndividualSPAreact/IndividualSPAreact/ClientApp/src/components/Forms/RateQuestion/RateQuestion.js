import React from "react";
import { Button } from "react-bootstrap";
import "../Forms.css";

const ratequestion = props => {
  const { ratingUp, ratingDown, voted, vote } = props;

  return (
    <div>
      <Button
        className="Button glyphicon glyphicon-thumbs-up btn-success"
        type="submit"
        onClick={() => vote(1)}
        disabled={voted}
      ></Button>{" "}
      {ratingUp}
      <Button
        className="Button glyphicon glyphicon-thumbs-down btn-danger"
        type="submit"
        onClick={() => vote(0)}
        disabled={voted}
      ></Button>{" "}
      {ratingDown}
    </div>
  );
};

export default ratequestion;
