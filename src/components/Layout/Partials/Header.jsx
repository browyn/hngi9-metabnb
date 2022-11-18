import React, { useState } from "react";
import styled from "styled-components";

import gradientLogo from "../../../assets/metabnb-logos/metabnb-logo-gradient.svg";
import Button from "../../Button";
import NavBar from "./NavBar";
import Container from "../../Container";
import ConnectWallet from "../../ConnectWallet";
import MobileNav from "./MobileNav";

const Header = () => {
  const [show, setShow] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  const showConnectWallet = () => {
    setShow(!show);
    if (document.body.style.overflow === "hidden") {
      document.body.style.overflow = "initial";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  const showMobileNav = () => {
    setMobileNav(!mobileNav);
    if (document.body.style.overflow === "hidden") {
      document.body.style.overflow = "initial";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <>
      <HeaderCon>
        <HeaderContainer>
          <HeaderContent>
            <img src={gradientLogo} alt="MetaBNB gradient logo" />
            <NavBar />
            <Button type="button" onClick={showConnectWallet}>
              Connect Wallet
            </Button>
            <span className="material-symbols-outlined" onClick={showMobileNav}>
              {mobileNav ? "close" : "menu"}
            </span>
          </HeaderContent>
        </HeaderContainer>
        {show && <ConnectWallet showConnectWallet={showConnectWallet} />}
        <div className={mobileNav ? "mobileNav show" : "mobileNav hide"}>
          <MobileNav showConnectWallet={showConnectWallet} showMobileNav={showMobileNav} />
        </div>
      </HeaderCon>
    </>
  );
};

export default Header;

const HeaderCon = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1;
  background: ${(props) => props.theme.palette.white};

  .mobileNav.show {
    transform: translateX(0px);
    transition: ease 0.2s;
  }

  .mobileNav.hide {
    transform: translateX(10000px);
    transition: ease-in 0.5s;
  }
`;

const HeaderContainer = styled(Container)`
  padding: 0;
  background: ${(props) => props.theme.palette.white};
  overflow: hidden;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  width: 100%;
  padding: 0 ${(props) => props.theme.spacing(3)};
  max-width: 1240px;
  height: 80px;
  overflow: hidden;

  @media (max-width: 767px) {
    height: 60px;
  }

  > img {
    @media (max-width: 1023px) {
      max-width: 120px;
    }
  }

  > span {
    color: ${(props) => props.theme.palette.purpleText};
    font-size: 28px;
    display: none;

    @media (max-width: 767px) {
      display: block;
    }
  }

  > button {
    @media (max-width: 767px) {
      display: none;
    }
  }
`;
