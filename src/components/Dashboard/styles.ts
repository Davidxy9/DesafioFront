import styled from "styled-components";

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

export const Title = styled.h2`
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    margin-left: 0.3rem;
    margin-right: 0.3rem;
    margin-top: 7.5rem;
    font-size: 2.2rem;
    color: #333333;
`;

export const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 800px;
    margin: 20px auto;
    background: rgba(248,248,255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    border-radius: 10px;
    border: 1px solid rgba(248,248,255, 0.18);


    div {
        flex: 2 2 900px;
        margin: 30px 80px 30px 243px;
        padding-top: 10px;
        padding-left: 10px;
        padding-right: 10px;
        padding-bottom: 20px;
        background: #1d1e20;
        max-width: 300px;

        
        img {
            max-width: 100%;
            //width: 300px;

            display: block;
        }

        strong{
            display: flex;
            justify-content: center;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            color: whitesmoke;
            margin-top: 1rem;
}
    }
`;