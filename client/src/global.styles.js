import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle `

body{
  
    font-family: 'Open Sans Condensed', sans-serif;
    /* font-family: 'Arial'; */
  
    padding: 20px 45px;

    @media screen and (max-width: 800px) {
        padding : 10px; 
    }
    
  }
  
  a{
    text-decoration: none;
    color: black;
  }
  
  *{
    box-sizing: border-box;  /*  ( * its a universal selector ) */
  }
  
`;