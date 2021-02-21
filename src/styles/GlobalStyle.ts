import { createGlobalStyle } from "styled-components"
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }

  .imagens{
    display:block;
    margin-top: 40px;
    position: absolute;
    top: 60px;
    left: 160px;
    z-index: 1;
  }
  .titulo {
    position: fixed;
    top: -50px;
    left:500px;
    font-family: Opensans;
    font-style: normal;
    font-weight: bold;
    font-size: 27px;
    color: #ffff;
    z-index: 3;
  }
  .fundos{
    position: relative;
    top: 60px;
    left: 160px;
    margin-top: 40px;
    width: 75%;
    height: 356px;
    background-color:white;
    border: 1px solid #A4040E;
    box-sizing: border-box;
  }
  .informacao{
    position: absolute;
    top: 0;
    left: 282px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  :root {
    --main: #6c757d;
    --main-hover: #5a6268;
    --white: #ffffff;
    --black: #000000;
    --grey: #f0f0f0;
    
  }
  .container {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1350px;
    margin: 0 auto;
    @media (max-width: 992px) {
      max-width: 960px;
    }
    @media (max-width: 768px) {
      max-width: 720px;
    }
    @media (max-width: 576px) {
      width: 100%;
    }
  }
`