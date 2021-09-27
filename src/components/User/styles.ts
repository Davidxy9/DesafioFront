import styled from 'styled-components';

export const Container = styled.div`
    div{
        h1{
            text-align: center;
            margin-top: 2rem;
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
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
        border-radius: 10px;
        
        
        img {
            max-width: 100%;
            display: block;
        }
    }

   
`;