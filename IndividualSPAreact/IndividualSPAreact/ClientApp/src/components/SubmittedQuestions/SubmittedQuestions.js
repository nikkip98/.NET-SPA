import React from "react";
import SubmittedQuestion from "./SubmittedQuestion/SubmittedQuestion";

const submittedQuestions = props => {
  return props.questions.map(q => (
    <SubmittedQuestion key={q.id} text={q.text} name={q.name} />
  ));
};

export default submittedQuestions;
