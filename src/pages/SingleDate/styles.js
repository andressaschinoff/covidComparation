import styled from 'styled-components';

export const Container = styled.section`
  background: #61fcc3;
  grid-area: singleDate;
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
  justify-content: space-around;
  align-items: center;

  width: 100%;
  
  flex-wrap: wrap;
`;

export const CovidList = styled.div`
  width: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;

  h3 {
    text-align: center;
  }
`;

export const CovidItem = styled.div`
  margin: 0 16px;
`;
