import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  
@import url('https://fonts.googleapis.com/css2?family=Jersey+10&family=Jersey+15&display=swap');

* {
  scroll-behavior: smooth;
}

body {
  height: 100%;
  margin: 0;
  font-family: "Jersey 10", serif;
  font-weight: 400;
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
`

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>
)
