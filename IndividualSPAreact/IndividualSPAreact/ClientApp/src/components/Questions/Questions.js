import React from "react";
import Question from "./Question/Question";

const questions = props => {
  return (
    <div>
      <section>
        {props.questions.map(q => (
          <Question
            key={q.id}
            question={q.question}
            answer={q.answer}
            ratingUp={q.ratingUp}
            ratingDown={q.ratingDown}
            id={q.id}
          />
        ))}
      </section>
    </div>
  );
};

export default questions;
