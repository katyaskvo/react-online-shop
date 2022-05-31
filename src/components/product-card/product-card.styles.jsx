import styled from 'styled-components';

export const ProductCardContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;

    button {
      width: 80%;
      opacity: 0.7;
      position: absolute;
      top: 236px;
      display: none;
    }

    &:hover {
      img {
        opacity: 0.8;
      }
  
      button {
        opacity: 0.85;
        display: flex;
      }
    }
`;

export const ImageContainer = styled.div`
    height: 310px;
    width: 100%;
    overflow: hidden;
    margin-bottom: 5px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

    &:hover {
      img {
        opacity: 0.8;
      }
    }
`;

export const Button = styled.button`

`;

export const Footer = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    font-size: 18px;

    .name {
      width: 90%;
      margin-bottom: 15px;
    }

    .price {
      width: 10%;
    }
`;