import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 56px;

  
  grid-area: tips;
  background-color: #88a8fc;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: auto;
  /* scroll-behavior: smooth; */
  
        
   .header {
      margin-top: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      font-style: italic;
      color: #ffffff;
    }

   p{
      font-size: 18px;
      text-align: center;
      color: #ffffff;
    }

   .topics{
      margin-left: 10px;
    }

   .topics li {
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      font-size: 20px;
      color: #ffffff;
    }

   .topics li .icon{
      margin-left: 5px;
      margin-right: 5px;
      width: 60px;
      height: 60px;
    }

  .icon{
    margin-left: 2px;
    width: 60px;
    height: 60px;
  }

  .wave{
    background-attachment: center;
    background-repeat: no-repeat;
  }
}
`;
