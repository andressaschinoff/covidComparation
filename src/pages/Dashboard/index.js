import React from 'react';

import Tips from '../Tips';
// import CompareStates from '../CompareStates';
// import CompareDates from '../CompareDates';
// import SingleDate from '../SingleDate';

import logo from '../../assets/logo.png';

import { Container } from './styles';

const Dashboard=() => {
  return (
    <Container className="container">
      <section className="navBar">
        <a href="#tips" className="navLink">Dicas de proteção</a>
        <a href="#compareStates" className="navLink">Comparação de Estados</a>
        <a href="#compareDates" className="navLink">Comparação de Datas</a>
        <a href="#singleDate" className="navLink">Dados por Estado</a>
      </section>

      <section className="description">
        <header className="header">
          <img src={logo} alt="Covid Comparison" />
        </header>

        <h1 className="title">
          "A Covid 19 afeta diferentes pessoas de diferentes maneiras.
          Por este motivo, Proteja a si mesmo, e as pessoas ao seu redor conhecendo
          os números de infectados, e tomando as precauções apropriadas."
        </h1>
      </section>

      <section id="tips">
        <Tips />
      </section>

      {/* <section id="compareStates">
        <CompareStates />
      </section> */}

      {/* <section id="compareDates">
        <CompareDates />
      </section> */}

      {/* <section id="singleDate">
        <SingleDate />
      </section> */}
    </Container>
  );
};

export default Dashboard;
