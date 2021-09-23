import styled from 'styled-components';

export const Container = styled.header`
    height: 5rem;
    border-bottom: 2px solid #29292e;
    background: #ffffff;
`;

export const Content = styled.div`
    max-width: 1120px;
    height: 5rem;
    //background: red;
    margin: 0 auto;
    padding: 0 2rem;

    display: flex;
    align-items: center;

    img{
        width: 80px;
        height: 80px;
    }

    nav {
        margin-left: 5rem;
        width: 6000px;
        //background: yellow;

        a {
            padding: 0 0.5rem;
            color: #4e4e4e;
            font-weight: 700;

            transition: color 0.2s;
            &:hover{
                color: #292929;
            }
            cursor: pointer;
        }

        a +a{
            padding-left: 10rem;

        }
    }
    
`;