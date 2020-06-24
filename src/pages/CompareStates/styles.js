import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  grid-area: compareStates;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-flow: column wrap;

  min-height: 100vh;
  height: auto;
  
  padding-top: 56px;

  background-color: #61fcc3;
  background-image: linear-gradient(360deg, #80ff72 0%, #61fcc3 74%);

  .wave{
    background-attachment: center;
    background-repeat: no-repeat;
  }
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 20px;

  h1 {
    margin-bottom: 16px;
  }

  select {
    margin-right: 16px;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 600px;
`;

export const Select = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  label {
    padding: 8px 0;
  }
`;

export const CovidList = styled.div`
  display: flex;
  margin-top: 24px;

  div {
    margin-left: 24px;
    
    h3 {
      margin-bottom: 8px;
    }
  }
`;

export const CovidItem = styled.div`
  text-align: center;
`;

export const Calendar = styled.aside`
  width: 300px;
  .DayPicker {
    background: #88a8fc;
    border-radius: 10px;
  }
  .DayPicker-wrapper {
    padding-bottom: 0;
    position: unset;
  }
  .DayPicker,
  .DayPicker-Month {
    width: 100%;
  }
  .DayPicker-Month {
    border-collapse: separate;
    border-spacing: 8px;
    margin: 8px;
  }
  .DayPicker-Day {
    width: 8px;
    height: 8px;
  }
  .DayPicker-Day--available:not(.DayPicker-Day--outside) {
    background: #fff;
    border-radius: 10px;
    color: #666;
  }
  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background: ${shade(0.3, '#fff')};
  }
  .DayPicker-Day--today {
    font-weight: normal;
  }
  .DayPicker-Day--disabled {
    color: #28ecce !important;
    background: transparent !important;
  }
  .DayPicker-Day--selected {
    background: #28ecce !important;
    border-radius: 10px;
    color: #fff !important;
  }
`;
