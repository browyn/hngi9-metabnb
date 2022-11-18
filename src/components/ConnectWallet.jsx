import React from "react";
import styled from "styled-components";

import Title from "./Title";
import Container from "./Container";

import wolf from "../assets/misc/wolf.svg";
import wallet from "../assets/misc/wallet.svg";

const ConnectWallet = (props) => {
  return (
    <ModalContainer>
      <Modal>
        <ModalHeader>
          <ModalTitle>Connect Wallet</ModalTitle>
          <span
            className="material-symbols-outlined"
            onClick={props.showConnectWallet}
          >
            close
          </span>
        </ModalHeader>
        <hr />
        <ModalBody>
          <span>Choose your preferred wallet:</span>
          <WalletOption>
            <div>
              <img src={wolf} alt="Metamask wallet" />
              <span>Metamask</span>
            </div>
            <span className="material-symbols-outlined">chevron_right</span>
          </WalletOption>

          <WalletOption>
            <div>
              <img src={wallet} alt="Metamask wallet" />
              <span>Metamask</span>
            </div>
            <span className="material-symbols-outlined">chevron_right</span>
          </WalletOption>
        </ModalBody>
      </Modal>
    </ModalContainer>
  );
};

export default ConnectWallet;

const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: #4040404d;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const Modal = styled(Container)`
  max-width: 600px;
  width: 90%;
  border-radius: ${(props) => props.theme.spacing(2)};
  padding: ${(props) => props.theme.spacing(1)} 0;
  background: ${(props) => props.theme.palette.white};

  hr {
    width: 100%;
    height: 1px;
    background: #cfd8dc;
    border: none;
  }
`;

const ModalHeader = styled.div`
  width: 100%;
  padding: ${(props) => props.theme.spacing(3)}
    ${(props) => props.theme.spacing(4)};
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 24px;
  }
`;

const ModalTitle = styled(Title)`
  font-size: 24px;
  color: ${(props) => props.theme.palette.black};
  font-weight: 700px;
`;

const ModalBody = styled.div`
  width: 100%;
  padding: ${(props) => props.theme.spacing(4)};
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing(2)};

  span {
    font-size: 16px;
  }
`;

const WalletOption = styled.div`
  border: 1px solid #cfd8dc;
  border-radius: ${(props) => props.theme.spacing(1.5)};
  padding: ${(props) => props.theme.spacing(2)};
  background: #f8f9fa;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > span {
    color: #959da6;
    font-size: 24px;
  }

  div {
    display: flex;
    align-items: center;
    gap: ${(props) => props.theme.spacing(2.5)};

    span {
      font-weight: 700;
      font-size: 18px;
    }
  }
`;
