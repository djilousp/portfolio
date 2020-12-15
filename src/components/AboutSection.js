import React from "react";
import home1 from "../img/home1";

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              Your <span>dreams</span>come
            </h2>
          </div>
          <div className="hide">
            <h2>true.</h2>
          </div>
        </div>
        <div className="image">
            <img src={home1} alt="Guy with camera for now"/>
        </div>
      </div>
      <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptatem impedit praesentium ex dignissimos. Fugiat qui ullam vero voluptatibus neque.
      </p>
      <button>Contact Us</button>
    </div>
  );
};

export default AboutSection;
