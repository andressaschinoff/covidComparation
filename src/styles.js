import { createGlobalStyle } from 'styled-components';
import { shade } from 'polished';

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
export default createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    outline: 0;
    box-sizing: border-box;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body, input, button {
    font-family: 'Roboto', 'Ubuntu', sans-serif;
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }

  .container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 100vh auto auto auto auto;
    grid-template-areas: 
                    "description"
                    "tips"
                    "singleDate"
                    "compareStates"
                    "compareDates"
    ;
  }

  .icon {
    width: 30px;
    height: 30px;
  }

  .wave{
    background-attachment: center;
    background-repeat: no-repeat;
  }

  .error-bar {
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
    padding: 8px;
    border-radius: 4px;
    margin-bottom: 16px;
  }

  table {
    box-shadow: 0px 6px 11px 0px rgba(0,0,0,0.26);
    
    thead {
      background-color: #003399;
      color: #fff;

      font-weight: bold;
    }

    tbody {
      background-color: #fff;
      color: #003399;
    }
  }

  th,
  td {
    padding: 15px;
    text-align: center;
  }

  h1, h2, h3 {
    font-weight: bold;
  }

  .calendar {
    width: 300px;

    .DayPicker {
      background: #fff;
      border-radius: 10px;
      border: 1.5px solid #61fcc3;
      box-shadow: 0px 6px 11px 0px rgba(0,0,0,0.26);
    }

    .DayPicker-Caption {
      text-align: center;
      padding: 0;
    }

    .DayPicker-wrapper {
      padding-bottom: 0;
      position: unset;
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
  }
`;
