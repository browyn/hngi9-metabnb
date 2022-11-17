import React from "react";
import styled from "styled-components";

import star from "../assets/misc/star.svg";
import heart from "../assets/misc/heart.svg";

const NftCard = (props) => {
    return (
        <NftCardContainer>
            <NftCardImage>
                <img src={props.image} alt="" />
                <img src={heart} alt="" />
            </NftCardImage>
            <NftCardDetails>
                <div>
                    <span>Desert King</span>
                    <span>2345km away</span>
                    <Stars>
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                    </Stars>
                </div>
                <div>
                    <span>1MBT per night</span>
                    <span>available for 2weeks stay</span>
                </div>
            </NftCardDetails>
        </NftCardContainer>
    );
};

export default NftCard;

const NftCardContainer = styled.div`
    width: 280px;
    border-radius: ${(props) => props.theme.spacing(2)};
    padding: ${(props) => props.theme.spacing(2)};
    border: 1px solid ${props => props.theme.palette.dimGrey};
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.spacing(1.5)};
`;

const NftCardImage = styled.div`

    img:nth-of-type(1) {
        width: 100%;
    }

    img:nth-of-type(2) {
        position: absolute;
        top: 8px;
        right: 8px;
    }
`;

const NftCardDetails = styled.div`
    display: flex;
    justify-content: space-between;

    > div {
        display: flex;
        flex-direction: column;
        gap: ${props => props.theme.spacing(1)};
        color: ${props => props.theme.palette.textBlack};

        span {
            font-size: 12px;
        }

        img {
            max-width: 12px;
        }
    }

    div:nth-of-type(2){
        text-align: right;

        span:nth-of-type(1) {
            font-weight: 700;
        }
    }
`;

const Stars  = styled.div`
    display: flex;
    gap: ${props => props.theme.spacing(1)};
`;