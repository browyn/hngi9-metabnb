import React from "react";
import styled from "styled-components";

import Title from "../Title";
import Container from "../Container";
import NftCard from "../NftCard";

import list from "./data.js";

const NftList = () => {
    return (
        <NftListContainer>
            <NftListTitle as="h2">
                Inspiration for your next adventure
            </NftListTitle>
            <NftListContent>
                {list.map((nft, index) => (
                    <NftCard key={index} image={nft.img} />
                ))}                
            </NftListContent>
        </NftListContainer>
    );
};

export default NftList;

const NftListContainer = styled(Container)`
    max-width: 1240px;
    margin: auto;
    padding: ${props => props.theme.spacing(6)} ${props => props.theme.spacing(3)};
    display: flex;
    flex-direction: column;
    gap: ${props => props.theme.spacing(6)};
    align-items: center;
    overflow: hidden;
`;

const NftListContent = styled.div`
    display: flex;
    gap: ${(props) => props.theme.spacing(2)};
    justify-content: center;
    flex-wrap: wrap;
    overflow: hidden;
`;

const NftListTitle = styled(Title)`
    font-size: 48px;
    color: ${props => props.theme.palette.black};
    text-align:center;

    @media (max-width: 767px) {
        font-size: 32px;
    }
    
    @media (max-width: 480px) {
        font-size: 30px;
    }
`;