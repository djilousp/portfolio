import React from "react";
import styled from "styled-components";

const Navigation = () => {
  return (
    <Nav>
      <h1>
        <a id="logo" href="#">
          Djilou
        </a>
      </h1>
      <ul>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Our Work</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
    </Nav>
  );
};
const Nav = styled.div`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 7rem;
  background: #282828;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
  }
  #logo {
    font-size: 1.5rem;
    font-family: "Roboto Slab", cursive;
    font-weight: lighter;
  }
  li {
    padding-left: 7rem;
    position: relative;
  }
`;
export default Navigation;
