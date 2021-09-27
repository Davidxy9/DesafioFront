import styled, {keyframes} from 'styled-components';

const appearFromLeft = keyframes`
  from{
    opacity: 0;
    transform: translateX(-50px);
  }to{
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Form = styled.form`
    margin-top: 40px;
    max-width: 700px;
    display: flex;
    margin-left: auto;
    margin-right: auto;

    input {
        flex: 1;
        height: 70px;
        padding: 0 24px;
        border: 0;
        //border-radius: 5px 0 0 5px;
        color: #3a3a3a;
        border: 2px solid #fff;
        border-right: 0;
        background: rgba(255, 255, 255, 0.25);
        box-shadow: 0 8px 32px 0 rgba(192, 192, 192, 0.60);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
        border-radius: 10px;
        animation: ${appearFromLeft} 1s;
    }
`;

export const Container = styled.div`
    div{
        h1{
            text-align: center;
            margin-top: 2rem;
            animation: ${appearFromLeft} 1s;

        }

    }
`;

export const Content = styled.main`
    margin: 4rem 4rem;
`;

export const Grid = styled.section`
    display: flex;
    flex-wrap: wrap;
    max-width: 800px;
    margin: 0 auto;
    


    div{
        flex: 1 1 200px;
        margin: 1rem;
        font-weight: 700rem;
        color: #1d1e20;;
        background: rgba(255, 255, 255, 0.25);
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.20);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
        border-radius: 10px;
        
        img {
            max-width: 100%;
            display: block;
        }
    }

   
`;