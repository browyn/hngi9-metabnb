import React, { useState } from "react";
import styled from "styled-components";

import gradientLogo from "../../../assets/metabnb-logos/metabnb-logo-gradient.svg";
import Button from "../../Button";
import NavBar from "./NavBar";
import Container from "../../Container";
import ConnectWallet from "../../ConnectWallet";

const Header = () => {

  const [show, setShow] = useState(false);

  const showConnectWallet = () => {
    setShow(!show);
  };

  return (
    <>
      <header>
        <HeaderContainer>
          <HeaderContent>
            <img src={gradientLogo} alt="MetaBNB gradient logo" />
            <NavBar />
            <Button type="button" onClick={showConnectWallet}>Connect Wallet</Button>
            <span className="material-symbols-outlined">menu</span>
          </HeaderContent>
        </HeaderContainer>
        {show && <ConnectWallet showConnectWallet={showConnectWallet} />}
      </header>
    </>
  );
};

export default Header;

const HeaderContainer = styled(Container)`
  padding: ${props => props.theme.spacing(3)} 0; 
  background: ${(props) => props.theme.palette.white};
  position: fixed;
  top: 0;
  z-index: 2;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  width: 100%;
  padding: 0 ${props => props.theme.spacing(2)};
  max-width: 1240px;

  > img {
    @media (max-width: 480px) {
      max-width: 120px;
    }
  }

  > span {
    color: ${props => props.theme.palette.purpleText};
    font-size: 28px;
    display: none;

    @media (max-width: 480px) {
      display: block;
    }
  }

  > button {
    @media (max-width: 480px) {
      display: none;
    }
  }
`;