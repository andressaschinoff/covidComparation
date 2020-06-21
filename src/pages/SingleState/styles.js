import styled from 'styled-components';
import { shade } from 'polished';

import img from '../../assets/background_pesquisa.png';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  flex-flow: column wrap;
  min-height: 100vh;

  background: url(${img}) no-repeat center;
  background-size: 100%;
`;

export const Heading = styled.div`
  /* background: #28ecce; */
  padding: 24px;
  
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 20px;

  position: relative;
  left: -300px;

  select {
    margin-right: 16px;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

export const CovidList = styled.div`
  position: relative;
  left: -300px;
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
