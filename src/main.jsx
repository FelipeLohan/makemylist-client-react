import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
  scroll-behavior: smooth;
  
}

body {
  -webkit-font-smoothing: antialiased; 
  -moz-osx-font-smoothing: grayscale; 
  text-rendering: optimizeLegibility; 
  height: 100%;
  margin: 0;
  font-family: "Handjet", serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
  font-variation-settings:
    "ELGR" 1,
    "ELSH" 2;
  background-color: #fff;
  box-sizing: border-box;
}

h1,
h2,
h3,
p {
  margin: 0px;
}

ul {
  margin: 0px;
  padding: 0px;
  list-style: none;
}

img {
  max-width: 100%;
  display: block;
}

a {
  text-decoration: none;
}
`;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>
);
