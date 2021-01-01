import React from "react";
import home1 from "../img/home1.png";
import styled from "styled-components";
import { BaseLayout, Description, Image, Hide } from "../styles";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              Your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          voluptatem impedit praesentium ex dignissimos.
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt="Guy with camera for now" />
      </Image>
    </About>
  );
};
const About = styled(BaseLayout)``;

export default AboutSection;
