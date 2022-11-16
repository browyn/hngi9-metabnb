import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Layout from "./components/Layout/Layout";

import HomePage from "./pages/HomePage";
import MarketPlacePage from "./pages/MarketPlacePage";

import GlobalStyles from "./globalStyles";

const theme = {
  palette: {
    black: "#000000",
    dimBlack: "#1D1D1E",
    textBlack: "#434343",
    white: "#FFFFFF",
    dimWhite: "#F7F7F7",
    grey: "#A3A3A3",
    dimGrey: "#D7D7D7",
    purple: "linear-gradient(90deg, #A02279 11.45%, #A02279 11.46%)",
    purpleText: "#A02279",
  },
  spacing: (num) => {
    return `${8 * num}px`;
  },
};

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router>
          <Layout>
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/place-to-stay" element={<MarketPlacePage />} />
            </Routes>
          </Layout>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
