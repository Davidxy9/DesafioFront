import styled from 'styled-components';

export const Container = styled.header`
    height: 5rem;
    border-bottom: 2px solid #29292e;
    background: #F8F8FF;

    @media(max-width: 1000px){
        width: 1900px;
    }
`;

export const Content = styled.div`
    max-width: 1120px;
    height: 5rem;
    //background: red;
    margin: 0 auto;
    padding: 0 2rem;

    display: flex;
    align-items: center;

    @media(max-width: 1000px) {
        padding: 0 0.5rem;
        max-width: 3000px;
    }

    img{
        width: 80px;
        height: 80px;
    }

    nav {
        margin-left: 5rem;
        width: 6000px;

        @media(max-width: 380px) {
                margin-left: 1rem;
                
            }

        a {
            padding: 0 0.5rem;
            color: #4e4e4e;
            font-weight: 700;
            margin: 0;

            transition: color 0.2s;
            &:hover{
                color: #292929;
            }
            cursor: pointer;



        }

        a +a{
            margin-left: 10rem;

            @media(max-width: 1000px) {
                margin-left: 3rem;
                
            }

            @media(max-width: 380px) {
                margin-left: 1rem;
                
            }
        }
    }
    
`;