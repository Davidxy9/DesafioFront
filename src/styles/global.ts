import {createGlobalStyle, keyframes} from 'styled-components';
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

const appearFromTop = keyframes`
  from{
    opacity: 0;
    transform: translateY(50px);
  }to{
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.main`
    //background: yellow;
    div{
        //background: red;
        margin: auto 20rem;
        padding: 0 5rem;

        
        @media(max-width: 980px){
                margin: auto 14rem;
        }
        @media(max-width: 1215px){
            margin: auto 10rem;
        }
        
        img {
            height: 400px;
            width: 400px;
            margin: 0 5.3rem;
            //display: flex;
            //align-items: center;
            animation: ${appearFromTop} 1s;


            @media(max-width: 980px){
                height: 200px;
                width: 200px;

                margin: 0 3rem;
            }
        }
        h1{
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2.2rem;
            color: #333333;
            margin: auto -8rem;
            animation: ${appearFromTop} 1s;


            @media(max-width: 670px){
                margin-left: 5rem;
            }

            @media(max-width: 485px){
                margin-left: 10rem;
            }

        }
    }
`;