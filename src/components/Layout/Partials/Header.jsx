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
          </HeaderContent>
        </HeaderContainer>
        {show && <ConnectWallet showConnectWallet={showConnectWallet} />}
      </header>
    </>
  );
};

export default Header;

const HeaderContainer = styled(Container)`
  background: ${(props) => props.theme.palette.white};
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  width: 100%;
  max-width: 1240px;
`;