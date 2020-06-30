import styled from 'styled-components';

export const Container = styled.div`
  #svg-map path {
    fill:#0094d9
  }
  
  #svg-map text {
    fill:#fff;
    font:12px Arial-BoldMT, sans-serif;
    cursor: pointer;
  }

  #svg-map a {
    text-decoration: none;
    display: block;

    &:hover {
      cursor: pointer;
      text-decoration: none;
    }
  }
  
  #svg-map a:hover path{ fill:#003399 !important }
  #svg-map .circle { fill:#66ccff }
  #svg-map a:hover .circle { fill:#003399 !important; cursor:pointer }

  #svg-map {
    pointer-events: all;
  }

  #svg-map .marcado {
    fill:#003399 !important;
  }
`;
