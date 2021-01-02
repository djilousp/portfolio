import React from "react";
import home1 from "../img/home1.png";
import styled from "styled-components";
import { BaseLayout, Description, Image, Hide } from "../styles";
import { motion } from "framer-motion";
import { titleAnimation, fade, photoAnimation } from "../animation";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              Your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          voluptatem impedit praesentium ex dignissimos.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img
          variants={photoAnimation}
          src={home1}
          alt="Guy with camera for now"
        />
      </Image>
    </About>
  );
};
const About = styled(BaseLayout)``;

export default AboutSection;
