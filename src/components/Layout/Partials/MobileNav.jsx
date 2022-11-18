import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Container from "../../Container";
import Button from "../../Button";

const MobileNav = ({ showConnectWallet, showMobileNav }) => {
  return (
    <MobileNavContainer onClick={showMobileNav}>
      <MobileNavContent>
        <MobileNavList>
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
        </MobileNavList>
        <Button type="button" onClick={showConnectWallet}>
          Connect Wallet
        </Button>
      </MobileNavContent>
    </MobileNavContainer>
  );
};

export default MobileNav;

const MobileNavContainer = styled(Container)`
  position: fixed;
  height: 100vh;
  z-index: 2;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #4040404d;
  padding: 0;
`;

const MobileNavContent = styled.nav`
  width: 80%;
  max-width: 600px;
  background: ${(props) => props.theme.palette.white};
  padding: ${(props) => props.theme.spacing(6)}
    ${(props) => props.theme.spacing(3)};
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing(6)};
  height: 100vh;
  position: absolute;
  justify-content: center;
  right: 0;
`;

const MobileNavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing(3)};
`;
