import React from "react";

import { ThemeProvider } from "styled-components";

import GlobalStyles from "./globalStyles";

const theme = {
  pallete: {
    black: "#000000",
    dimBlack: "#434343",
    white: "#FFFFFF",
    dimWhite: "#F7F7F7",
    grey: "#A3A3A3",
    dimGrey: "#D7D7D7D",
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
      </ThemeProvider>
    </>
  );
};

export default App;