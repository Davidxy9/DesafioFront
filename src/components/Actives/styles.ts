import styled, {keyframes} from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 91%;
  margin: auto 10rem;

  h1 {
    font-size: 34px;
    color: rgb(58, 58, 58);
    line-height: 56px;
    margin-top: 20px;
  }
`;

const appearFromLeft = keyframes`
  from{
    opacity: 0;
    transform: translateX(-50px);
  }to{
    opacity: 1;
    transform: translateX(0);
  }
`;

export const List = styled.div`
   animation: ${appearFromLeft} 2s;
   margin-top: 10px;
   max-width: 700px;
   margin: auto 10rem;


   a {
    background: #DCDCDC;
    width: 120%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);

    @media(max-width: 980px){
      width: 200%;
    }

    @media(max-width: 655px){
      width: 400%;
    }

    @media(max-width: 475px){
      width: 900%;
    }

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    img {
      width: 300px;
      height: 300px;
      border-radius: 50%;
    }
    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }
      p {
        font-size: 18px;
        font-weight: 600;
        //color: #363636;
        color: #8B0000;
        margin-top: 4px;
        overflow: hidden; 
        text-overflow: ellipsis; 
        display: -webkit-box; 
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical; 
      }
    } //fim da div

    ul {
    display: flex;
    list-style: none;
    margin-top: 10px;
  }

  li {
    & + li {
      margin-left: 40px;
      padding-right: 20px;
    }

    strong {
      display: block;
      font-size: 20px;
      padding-left: 5px;
      font-weight: 600;
      color: #363636;


    }

    span {
      display: block;
      margin-top: 4px;
      padding-left: 10px;
      font-weight: 600;
      color: #363636;
    }
  }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;

//GRÁFICO

export const Graph = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 91%;
  margin: auto 10rem;

  h1 {
    font-size: 34px;
    color: rgb(58, 58, 58);
    line-height: 56px;
    margin-top: 20px;
  }
`;
