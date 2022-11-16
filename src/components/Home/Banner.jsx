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
          <BannerTitle>
            MetaBNB Nfts
          </BannerTitle>
          <p>
          Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.
          </p>
          <BannerButton white>
            Learn more
          </BannerButton>
        </BannerText>
        <img src={bannerImage} alt="" />
      </Article>

    </BannerContainer>
         </>
  );
};

export default Banner;

const BannerContainer = styled(Container)`
    background: ${props => props.theme.palette.purple};
`;

const Article = styled.article`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing(8)};
  max-width: 1240px;
  margin: auto;
  padding: ${props => props.theme.spacing(6)} 0;
`;

const BannerText = styled.article`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing(4)};

  p {
    font-size: 18px;
    line-height: 35px;
    color: ${(props) => props.theme.palette.dimWhite};
  }
`;

const BannerTitle = styled(Title)`
  font-weight: 700;
  font-weight: 48px;
  line-height: 60px;
  color: ${(props) => props.theme.palette.dimWhite};
`;

const BannerButton = styled(Button)`
  width: 156px;
`;
