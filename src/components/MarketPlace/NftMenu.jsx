import React from "react";
import styled from "styled-components";

const NftMenu = () => {
  return (
    <>
      <NftMenuContainer>
        <NftMenuContent>
          <List>
            <li>Restaurant</li>
            <li>Cottage</li>
            <li>Castle</li>
            <li>fantast city</li>
            <li>beach</li>
            <li>Carbins</li>
            <li>Off-grid</li>
            <li>Farm</li>
          </List>

          <Filter>
            <input placeholder="Location" disabled />
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.9999 5L10.9999 5"
                stroke="#333333"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.99988 5H1.99988"
                stroke="#333333"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21.9999 12H16.9999"
                stroke="#333333"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.9999 12H1.99988"
                stroke="#333333"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21.9999 19H10.9999"
                stroke="#333333"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.99988 19H1.99988"
                stroke="#333333"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.9999 21V17"
                stroke="#333333"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.9999 7V3"
                stroke="#333333"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.0001 14V10"
                stroke="#333333"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Filter>
        </NftMenuContent>
      </NftMenuContainer>
    </>
  );
};

export default NftMenu;

const NftMenuContainer = styled.div`
  max-width: 1240px;
  margin: auto;
  margin-top: 100px;
  padding: 0 ${(props) => props.theme.spacing(3)};
`;

const NftMenuContent = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing(4)};
  align-items: baseline;
`;

const List = styled.ul`
  display: flex;
  gap: ${(props) => props.theme.spacing(6)};
  padding: ${(props) => props.theme.spacing(4)} 0
    ${(props) => props.theme.spacing(2)} 0;
  align-items: center;
  list-style: none;
  color: ${(props) => props.theme.palette.textBlack};
  font-size: 20px;
  flex-wrap: wrap;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  min-width: 200px;
  height: 48px;
  background: none;
  border: 1px solid ${(props) => props.theme.palette.dimGrey};
  border-radius: ${(props) => props.theme.spacing(1)};

  input {
    padding: ${(props) => props.theme.spacing(2)};
    border: none;
    outline: none;
    background: none;
    width: 161px;

    &:placeholder {
      color: ${(props) => props.theme.palette.black};
      font-size: 16px;
    }
  }
`;
