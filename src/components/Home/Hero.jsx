import React from "react";
import styled from "styled-components";

import Title from "../Title";
import heroImage from "../../assets/images/hero-image.png";
import Button from "../Button";
import Container from "../Container";


const Hero = () => {
  return (
    <>
      <Article>
        <HeroText>
          <HeroTitle>
            Rent a <Purple>Place</Purple> away from <Purple>Home</Purple> in the
            <Purple> Metaverse</Purple>
          </HeroTitle>
          <p>
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <InputGroup>
            <Input type="text" placeholder="Search for location" />
            <HeroButton>Search</HeroButton>
          </InputGroup>
        </HeroText>
        <HeroImage>
          <img src={heroImage} alt="Intro to MetaBNB" />
        </HeroImage>      
        </Article>
    </>
  );
};

export default Hero;

const Article = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.theme.spacing(8)};
  max-width: 1240px;
  margin: auto;
  margin-top: 60px;
  padding: ${props => props.theme.spacing(6)} ${props => props.theme.spacing(3)};

  @media (max-width: 480px) {
    flex-direction: column-reverse;
  }
`;

const HeroText = styled.article`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing(4)};

  p {
    font-size: 24px;
    color: ${(props) => props.theme.palette.textBlack};

    @media (max-width: 480px) {
      font-size: 16px;
    }
  }
`;

const HeroTitle = styled(Title)`
  font-weight: 400;
  line-height: 78px;
  font-size: 56px;
  color: ${(props) => props.theme.palette.textBlack};

  @media (max-width: 480px) {
    font-size: 40px;
    line-height: 58px;
  }
`;

const Purple = styled.span`
  color: ${(props) => props.theme.palette.purpleText};
  font-weight: 700;
`;

const InputGroup = styled.div`
  display: flex;
  width: 100%;
`;

const Input = styled.input`
  border-radius: 8px 0 0 8px;
  flex: 0 0 calc(70% - ${props => props.theme.spacing(2)});
  border: 1px solid ${props => props.theme.palette.grey};
  border-right: 0;
  outline: none;
  height: 54px;
  padding: 0 ${(props) => props.theme.spacing(2)};

  &:placeholder {
    font-size: 14px;
  }
`;

const HeroButton = styled(Button)`
  border-radius: 0px 8px 8px 0px;
  height: 54px;
  flex: 0 0 30%;
  min-width: initial;
  
`;

const HeroImage = styled.div`
  // flex: 0 0 calc(40% - ${props => props.theme.spacing(4)});

    img {
      @media (max-width: 480px) {
        width: 100%;
      }
    }
`;