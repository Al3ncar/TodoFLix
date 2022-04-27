import React from "react"
import { createGlobalStyle } from 'styled-components';
 
const Global = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
  body{
    background-color:black;
  }
`;
 
export default Global;