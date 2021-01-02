import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const ContactMe = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <h1>My Contact</h1>
    </motion.div>
  );
};

export default ContactMe;
