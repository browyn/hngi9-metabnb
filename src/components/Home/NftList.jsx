import React from "react";
import styled from "styled-components";

import Title from "../Title";
import Container from "../Container";
import NftCard from "../NftCard";

const NftList = () => {
    return (
        <NftListContainer>
            <NftListTitle as="h2">
                Inspiration for your next adventure
            </NftListTitle>
            <NftListContent>
                <NftCard />
            </NftListContent>
        </NftListContainer>
    );
};

export default NftList;

const NftListContainer = styled(Container)`
    max-width: 1240px;
    margin: auto;
    padding: ${props => props.theme.spacing(6)} 0;
    display: flex;
    flex-direction: column;
    gap: ${props => props.theme.spacing(6)};
    align-items: center;
`;

const NftListContent = styled.div`
    display: flex;
    gap: ${(props) => props.theme.spacing(2)};
    justify-content: center;
    flex-wrap: wrap;
`;

const NftListTitle = styled(Title)`
    font-size: 48px;
    color: ${props => props.theme.palette.black};
`;