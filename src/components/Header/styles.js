import styled from 'styled-components';

export const Container = styled.header`
  padding: 8px 0;
  background: #88a8fc;
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 32px;
  }

  a {
    background: transparent;
    border: 0;
  }
`;