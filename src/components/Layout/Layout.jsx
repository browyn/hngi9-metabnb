import React from "react";
import styled from "styled-components";

import Footer from "./Partials/Footer";
import Header from "./Partials/Header";
import Container from "../Container";

const Main = styled.main`
  margin: auto;
  width: 100%;
  max-width: 1240px;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container>
        <Main>{children}</Main>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
