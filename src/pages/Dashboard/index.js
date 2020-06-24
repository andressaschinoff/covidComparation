import React from 'react';

import { Container } from './styles';

import CompareStates from '../CompareStates';
import CompareDates from '../CompareDates';
import SingleDate from '../SingleDate';
import Tips from '../Tips';

import logo from '../../assets/logo.png';

const Dashboard=() => {
  return (
    <Container>
      <section className="navTop">
        <img id="toggleNavTop" src="./img/menu.svg" alt="Menu List" />
        <a href="#tips" className="navLink">Dicas de proteção</a>
        <a href="#compareStates" className="navLink">Comparação de Estados</a>
        <a href="#compareDates" className="navLink">Comparação de Datas</a>
        <a href="#singleDate" className="navLink">Dados por Estado</a>
      </section>

      <section className="description">
        <header className="header">
          <img src={logo} width="300px" height="150px" alt="Covid Comparison" />
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

      <section id="compareStates">
        <CompareStates />
      <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#88a8fc" fillOpacity="1" d="M0,96L48,85.3C96,75,192,53,288,53.3C384,53,480,75,576,101.3C672,128,768,160,864,149.3C960,139,1056,85,1152,85.3C1248,85,1344,139,1392,165.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/></svg>

      </section>

      <section id="compareDates">
        <CompareDates />
      </section>

      <section id="singleDate">
        <SingleDate />
      </section>
    </Container>
  );
};

export default Dashboard;
