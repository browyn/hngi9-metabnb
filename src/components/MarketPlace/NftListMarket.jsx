import React from "react";
import styled from "styled-components";

import Container from "../Container";
import NftCard from "../NftCard";

import list from "./data.js";

const NftListMarket = () => {
  return (
    <NftListContainer>
      <NftListContent>
        {list.map((nft, index) => (
          <NftCard key={index} image={nft.img} />
        ))}
      </NftListContent>
    </NftListContainer>
  );
};

export default NftListMarket;

const NftListContainer = styled(Container)`
  max-width: 1240px;
  margin: auto;
  padding: ${(props) => props.theme.spacing(6)} 0;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing(6)};
  align-items: center;
`;

const NftListContent = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing(3)};
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 ${(props) => props.theme.spacing(3)};
`;
