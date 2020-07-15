import styled from 'styled-components';

export const Container = styled.section`
  background-color: #28ecce;
  grid-area: compareStates;
  scroll-behavior: smooth;
`;

export const Heading = styled.div`
  padding-top: 56px;
  color: #003399;
  font-size: 28px;
  font-weight: bold;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;
  
  flex-wrap: wrap;

  .selects {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
`;

export const Select = styled.div`
  margin-top: 8px;

  label {
    font-size: 18px;
  }
`;

export const CovidList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h3 {
    margin-top: 16px;
    margin-bottom: 8px;
    text-align: center;
    font-size: 18px;
    color: #003399;
    font-weight: bold;
  }
`;

export const CovidItem = styled.div`
  margin: 0 16px;
`;
