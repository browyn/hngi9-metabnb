import React from "react";
import styled from "styled-components";

import footerLogo from "../../../assets/metabnb-logos/metabnb-logo.svg";
import facebook from "../../../assets/misc/facebook.svg";
import instagram from "../../../assets/misc/instagram.svg";
import twitter from "../../../assets/misc/twitter.svg";
import Container from "../../Container";
import Title from "../../Title";

const FooterContainer = styled(Container)`
  background: ${(props) => props.theme.palette.dimBlack};
  padding: ${(props) => props.theme.spacing(6)}
    ${(props) => props.theme.spacing(3)};
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 25%);
  justify-content: center;
  width: 100%;
  margin: auto;
  max-width: 1240px;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    img {
      max-width: 233px;
    }
  }
`;

const Social = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing(4.5)};
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing(3)};
  justify-self: center;
`;

const ListTitle = styled(Title)`
  color: ${(props) => props.theme.palette.white};
  font-size: 18px;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing(2)};
  list-style: none;
  justify-content: center;
  li {
    font-weight: 400;
    font-size: 14px;
    color: ${(props) => props.theme.palette.dimWhite};
  }
`;

const Footer = () => {
  return (
    <>
      <footer>
        <FooterContainer>
          <FooterContent>
            <div>
              <img src={footerLogo} alt="MetaBNB footer logo" />
              <Social>
                <img src={facebook} alt="" />
                <img src={instagram} alt="" />
                <img src={twitter} alt="" />
              </Social>
            </div>
            <ListContainer>
              <ListTitle as="h6">Community</ListTitle>
              <List>
                <li>NFTs</li>
                <li>Tokens</li>
                <li>Landlords</li>
                <li>Discord</li>
              </List>
            </ListContainer>
            <ListContainer>
              <ListTitle as="h6">Places</ListTitle>
              <List>
                <li>Castle</li>
                <li>Farms</li>
                <li>Beach</li>
                <li>Learn more</li>
              </List>
            </ListContainer>
            <ListContainer>
              <ListTitle as="h6">About us</ListTitle>
              <List>
                <li>Road map</li>
                <li>Creators</li>
                <li>Careers</li>
                <li>Contact us</li>
              </List>
            </ListContainer>
          </FooterContent>
        </FooterContainer>
      </footer>
    </>
  );
};

export default Footer;
