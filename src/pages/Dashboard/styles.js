import styled from 'styled-components';

import background from '../../assets/background.png';

export const Container = styled.section`
  .navBar {
    position: fixed;
    z-index: 1000;

    width: 100vw;
    height: 50px;
    background: #88a8fc;

    display: flex;
    justify-content: space-around;
    align-items: center;

    font-size: 18px;
    color: #fff;
    box-shadow: 0px 6px 11px 0px rgba(0,0,0,0.26);
  }

  .navLink {
    text-decoration: none;
    color: #fff;

    &:hover {
      font-style: italic;
    }
  }

  .description {
    grid-area: description;
    background: url(${background});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    min-height: 100vh;

    .header {
      display: flex;
      justify-content: center;
      align-items: center;

      margin-top: 16px;

      img {
        width: 300px;
        height: 150px;
      }
    }

    .title{
      margin-left: 20px;
      font-size: 30px;
      font-style: italic;
      color: #253ac6;
      max-width: 550px;

      @media(max-width: 830px) {
        max-width: 480px;
      }
      
      @media(max-width: 725px) {
        max-width: 430px;
      }
      
      @media(max-width: 650px) {
        max-width: 400px;
      }
      
      @media(max-width: 525px) {
        max-width: 380px;
      }
      
      @media(max-width: 480px) {
        max-width: 350px;
        font-size: 26px;
      }
      
      @media(max-width: 450px) {
        max-width: 300px;
        font-size: 26px;
      }
      
      @media(max-width: 450px) {
        max-width: 280px;
        font-size: 24px;
      }
      
      @media(max-width: 375px) {
        max-width: 250px;
        font-size: 24px;
      }
    }
  }
`;
