import React from "react";
import styled from "styled-components";
import { BaseLayout } from "../styles";
import { motion } from "framer-motion";
const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <div className="question">
        <h4>How Do I Start ?</h4>
        <div className="answer">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora,
            vel!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            neque commodi earum velit expedita quos?
          </p>
          <div className="faq-line"></div>
        </div>
      </div>
      <div className="question">
        <h4>Payment Methods</h4>
        <div className="answer">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora,
            vel!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            neque commodi earum velit expedita quos?
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>What Products Can you bluid</h4>
        <div className="answer">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora,
            vel!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            neque commodi earum velit expedita quos?
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Schedules</h4>
        <div className="answer">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora,
            vel!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            neque commodi earum velit expedita quos?
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
    </Faq>
  );
};
const Faq = styled(BaseLayout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 1rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 2rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 1.5rem 0rem;
  }
  p {
    padding: 1rem 0rem;
  }
`;
export default FaqSection;
