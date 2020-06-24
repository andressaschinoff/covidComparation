import styled from 'styled-components';

import background from '../../assets/background.png';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100vh 100vh 100vh 100vh 100vh;
  grid-template-areas: 
                  "description"
                  "tips"
                  "compareStates"
                  "compareDates"
                  "singleDate"
  ;

  #toggleNavTop{
    width: 30px; 
    height: 30px;
    display: none;
  }

  .navTop{
    position: fixed;
    height: 40px;
    width: 100vw;
    background-color: #88a8fc;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #ffffff;
    -webkit-box-shadow: 0px 6px 11px 0px rgba(0,0,0,0.26);
    -moz-box-shadow: 0px 6px 11px 0px rgba(0,0,0,0.26);
    box-shadow: 0px 6px 11px 0px rgba(0,0,0,0.26);
  }
  .navLink{
    text-decoration: none;
    color: #ffffff;
  }

  .description{
    grid-area: description;
    background: url(${background});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    min-height: 100vh;
    /* z-index: 1000; */
  }

  .description .header{
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .title{
    margin-left: 20px;
    font-size: 30px;
    font-style: italic;
    color: #253ac6;
    max-width: 550px;
  }

  /* .tips{
    grid-area: tips;
    background-color: #88a8fc;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    height: auto;
    scroll-behavior: smooth;
  }
        
  .tips .header {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-style: italic;
    color: #ffffff;
  }

  .tips p{
    font-size: 18px;
    text-align: center;
    color: #ffffff;
  }

  .tips .topics{
    margin-left: 10px;
  }

  .tips .topics li {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    font-size: 20px;
    color: #ffffff;
  }

  .tips .topics li .icon{
    margin-left: 5px;
    margin-right: 5px;
    width: 60px;
    height: 60px;
  }

  .icon{
    margin-left: 2px;
    width: 60px;
    height: 60px;
  } */

  .wave{
    background-attachment: center;
    background-repeat: no-repeat;
  }
`;

