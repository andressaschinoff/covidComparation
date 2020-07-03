import styled from 'styled-components';

export const Container = styled.section`
  grid-area: tips;
  background-color: #88a8fc;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: auto;
  scroll-behavior: smooth;

  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    
    margin: 0 16px;
    font-size: 30px;
    font-style: italic;
    color: #ffffff;
    

    h1 {
      margin-right: 8px;
    }

    @media (max-width: 325px) {
      margin: 0 8px;
    }
  }

  p {
    font-size: 18px;
    text-align: center;
    color: #ffffff;
    text-align: justify;

    margin: 8px 16px;
  }

  .topics {
    margin-left: 10px;

    li {
      display: flex;
      align-items: center;

      margin-bottom: 20px;
      font-size: 20px;
      color: #ffffff;

      .icon {
        margin: 0 5px;
        width: 60px;
        height: 60px;
      }
    }
  }

  .icon {
    margin-left: 2px;
  }
`;
