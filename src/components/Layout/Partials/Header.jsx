import React from "react";

import styled from "styled-components";

import gradientLogo from "../../../assets/metabnb-logos/metabnb-logo-gradient.svg";
import Button from "../../Button";
import NavBar from "./NavBar";

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
`;

const Header = () => {
  return (
    <>
      <header>
        <HeaderContent>
          <img src={gradientLogo} alt="MetaBNB gradient logo" />
          <NavBar />
          <Button type="button">Connect Wallet</Button>
        </HeaderContent>
      </header>
    </>
  );
};

export default Header;
