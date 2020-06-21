import styled from 'styled-components';

export const Container = styled.div`
`;

export const Content = styled.main`
  max-width: 1120px;
  margin: 64px auto;
  display: flex;
`;

export const Schedule = styled.div`
  flex: 1;
  margin-right: 120px;

  h1 {
    font-size: 36px;
  }

  p {
    margin-top: 8px;
    /* color: #61fcc3; */
    display: flex;
    align-items: center;
    font-weight: 500;

    span {
      display: flex;
      align-items: center;
    }

    span + span::before {
      content: '';
      width: 1px;
      height: 12px;
      /* background: #61fcc3; */
      margin: 0px 8px;
    }
  }
`;

export const NextAppointment = styled.div`
  margin-top: 64px;

  strong {
    color: #333;
    font-size: 20px;
    font-weight: 400;
  }

  div {
    background: #88a8fc;
    display: flex;
    align-items: center;
    padding: 16px 24px;
    border-radius: 10px;
    margin-top: 24px;
    position: relative;

    &::before {
      content: '';
      /* background: #61fcc3; */
      position: absolute;
      height: 80%;
      width: 1px;
      left: 0;
      top: 10%;
    }

    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }

    strong {
      margin-left: 24px;
      color: #fff;
    }

    span {
      margin-left: auto;
      display: flex;
      align-items: center;
      color: #333;

      svg {
        color: #61fcc3;
        margin-right: 8px;
      }
    }
  }
`;

export const Section = styled.div`
  margin-top: 48px;

  > strong {
    color: #333;
    font-size: 20px;
    line-height: 26px;
    border-bottom: 1px solid #88a8fc;
    display: block;
    padding-bottom: 16px;
    margin-bottom: 16px;
  }

  > p {
    color: #333;
  }
`;

export const Appointment = styled.div`
  display: flex;
  align-items: center;

  & + div {
    margin-top: 16px;
  }

  span {
    margin-left: auto;
    display: flex;
    align-items: center;
    /* color: #28ecce; */
    width: 70px;

    svg {
      color: #61fcc3;
      margin-right: 8px;
    }
  }

  div {
    flex: 1;
    background: #88a8fc;
    display: flex;
    align-items: center;
    padding: 16px 24px;
    border-radius: 10px;
    margin-left: 24px;

    img {
      width: 56px;
      height: 56px;
      border-radius: 50%;
    }

    strong {
      margin-left: 24px;
      color: #fff;
      font-size: 20px;
    }
  }
`;
