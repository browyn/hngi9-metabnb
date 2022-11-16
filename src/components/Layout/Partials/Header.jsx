import React from "react";
import styled from "styled-components";

import gradientLogo from "../../../assets/metabnb-logos/metabnb-logo-gradient.svg";
import Button from "../../Button";
import NavBar from "./NavBar";
import Container from "../../Container";

const Header = () => {
  return (
    <>
      <header>
        <HeaderContainer>
          <HeaderContent>
            <img src={gradientLogo} alt="MetaBNB gradient logo" />
            <NavBar />
            <Button type="button">Connect Wallet</Button>
          </HeaderContent>
        </HeaderContainer>
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