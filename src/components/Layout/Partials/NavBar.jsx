import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav>
        <List>
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="/place-to-stay">Place to stay </Link>
          </li>
          <li>
            <a href="/">NFTs </a>
          </li>
          <li>
            <a href="/">Community </a>
          </li>
        </List>
      </nav>
    </>
  );
};

export default NavBar;

const List = styled.ul`
  display: flex;
  gap: ${(props) => props.theme.spacing(6)};
  list-style: none;

  li {
    a {
      font-size: 20px;
      color: ${(props) => props.theme.palette.black};
    }
  }
`;
