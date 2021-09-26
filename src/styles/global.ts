import {createGlobalStyle} from 'styled-components';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }
    body {
        -webkit-font-smoothing: antialiased;
        //background: #F8F8FF;
        background: #FFFFFF;
    }

    body, input, textarea, button {
        font: 400 1rem "Roboto", sans-serif;
    }
    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 700;
        //color: white;
        font: "Roboto";
    }
    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
    a {
    color: inherit;
    text-decoration: none;
}
 
`;

export const Container = styled.main`
    //background: yellow;
    div{
        //background: red;
        margin: auto 20rem;
        padding: 0 5rem;
        
        img {
            height: 400px;
            width: 400px;
            margin: 0 5.3rem;
            //display: flex;
            //align-items: center;
        }
        h1{
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2.2rem;
            color: #333333;
            margin: auto -8rem;

        }
    }
`;