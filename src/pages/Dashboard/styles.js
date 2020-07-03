import styled from 'styled-components';

import background from '../../assets/background.png';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100vh 100vh 135vh 100vh 60vh;
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
`;

