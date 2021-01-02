import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Nav>
      <h1>
        <Link id="logo" to="/">
          Djilou
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">Whoami</Link>
        </li>
        <li>
          <Link to="/work">My Work</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
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
