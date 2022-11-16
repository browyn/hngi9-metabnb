import React from "react";
import styled from "styled-components";

import Container from "../Container";

import mbtoken from "../../assets/misc/mbtoken-logo.svg";
import metamask from "../../assets/misc/metamask-logo.svg";
import opensea from "../../assets/misc/opensea-logo.svg";

const Brands = () => {
    return(
        <BrandsContainer>
            <BrandsContent>
            <img src={mbtoken} alt="MBToken logo" />
            <img src={metamask} alt="MetaMask logo" />
            <img src={opensea} alt="OpenSea logo" />
            </BrandsContent>
        </BrandsContainer>
    );
};

export default Brands;

const BrandsContainer = styled(Container)`
    background: ${props => props.theme.palette.purple};
    padding: 0;
    height: 70px;
`;

const BrandsContent = styled.div`
    padding: 0 ${props => props.theme.spacing(3)};
    max-width: 1240px;
    height: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;