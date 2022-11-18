import React from "react";
import styled from "styled-components";

import Title from "../Title";
import Container from "../Container";
import Button from "../Button";
import bannerImage from "../../assets/images/banner-image.png";

const Banner = () => {
  return (
    <>
      <BannerContainer>
        <Article>
          <BannerText>
            <BannerTitle>MetaBNB Nfts</BannerTitle>
            <p>
              Discover our NFT gift cards collection. Loyal customers gets
              amazing gift cards which are traded as NFTs. These NFTs gives our
              cutomer access to loads of our exclusive services.
            </p>
            <BannerButton white>Learn more</BannerButton>
          </BannerText>
          <BannerImage>
            <img src={bannerImage} alt="" />
          </BannerImage>
        </Article>
      </BannerContainer>
    </>
  );
};

export default Banner;

const BannerContainer = styled(Container)`
  background: ${(props) => props.theme.palette.purple};
`;

const Article = styled.article`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing(8)};
  max-width: 1240px;
  margin: auto;
  padding: ${(props) => props.theme.spacing(6)} 0;

  @media (max-width: 767px) {
    flex-direction: column-reverse;
  }
`;

const BannerText = styled.article`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing(4)};

  @media (max-width: 1023px) {
    font-size: 16px;
    width: 45%;
  }

  @media (max-width: 767px) {
    width: initial;
  }

  p {
    font-size: 18px;
    line-height: 35px;
    color: ${(props) => props.theme.palette.dimWhite};

    @media (max-width: 1023px) {
      font-size: 16px;
    }

    @media (max-width: 480px) {
      font-size: 16px;
    }
  }
`;

const BannerTitle = styled(Title)`
  font-weight: 700;
  font-size: 48px;
  line-height: 60px;
  color: ${(props) => props.theme.palette.dimWhite};

  @media (max-width: 1023px) {
    font-size: 32px;
    line-height: 52px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    line-height: 44px;
  }
`;

const BannerButton = styled(Button)`
  width: 156px;
`;

const BannerImage = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 1023px) {
    flex: 0 0 55%;
  }
  img {
    @media (max-width: 1023px) {
      width: 100%;
    }

    @media (max-width: 767px) {
      width: 70%;
    }

    @media (max-width: 480px) {
      width: 100%;
    }
  }
`;
