import React from "react";
// Images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MyWork = () => {
  return (
    <Work>
      <Movie>
        <h2>Athlete</h2>
        <div className="line"> </div>

        <Link>
          <img src={athlete} alt="athlete" />
        </Link>
      </Movie>
      <Movie>
        <h2>The Racer</h2>
        <div className="line"> </div>

        <Link>
          <img src={theracer} alt="theracer" />
        </Link>
      </Movie>
      <Movie>
        <h2>Good Times</h2>
        <div className="line"></div>
        <Link>
          <img src={goodtimes} alt="goodtimes" />
        </Link>
      </Movie>
    </Work>
  );
};
const Work = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 3rem 7rem;
  h2 {
    padding: 1rem 0rem;
  }
`;
const Movie = styled.div`
  padding-bottom: 7rem;
  .line {
    height: 0.5rem;
    background: #ccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
export default MyWork;
