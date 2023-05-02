import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   }
 
 
   body {
     font-family: "Poppins", sans-serif;
     background: #1d1e20;
    color: #dadadb;
    max-width: 800px;
    margin: 0 auto;
   }
   @media screen and (max-width: 800px) {
         body {
          max-width: 100%;
          padding: 0 20px;
        }
       }
`;
