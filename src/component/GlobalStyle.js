import { createGlobalStyle } from 'styled-components'; 
import { QUERIES } from '../utils/Constants';


 const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }
    
    html {
        font-family: "Raleway", sans-serif;
        height:100%;
        isolation: isolate;
    }
    body{
        height:100%;
        /* isolation: isolate; */
    }
 `

 export default GlobalStyle;