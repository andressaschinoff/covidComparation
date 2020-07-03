import React from 'react';

import { Container } from './styles';

import alert from '../../assets/alert.png';
import virus from '../../assets/virus.png';
import washingHands from '../../assets/washing-hands.png';
import socialDistancing from '../../assets/social-distancing.png';
import quarantine from '../../assets/quarantine.png';

function Tips() {
  return (
    <Container>
      <header className="header">
        <h1>Como se Espalha </h1>
        <img className="icon" src={alert} alt="Alerta" />
      </header>
      <p>
        O vírus que causa a COVID-19 é transmitido principalmente por meio de gotículas geradas quando uma pessoa infectada tosse, espirra ou exala. Essas gotículas são muito pesadas para permanecerem no ar e são rapidamente depositadas em pisos ou superfícies.
        Você pode ser infectado ao inalar o vírus se estiver próximo de alguém que tenha COVID-19 ou ao tocar em uma superfície contaminada e, em seguida, passar as mãos nos olhos, no nariz ou na boca.
      </p>

      <header className="header">
        <h1>Prevenção do Vírus</h1>
        <img className="icon" src={virus} alt="Covid-19" />
      </header>

      <ul className="topics">
        <li>
          <img className="icon" src={washingHands} alt="Lave as mãos" />
          Lave as mãos com água e sabão ou higienizador à base de álcool para matar vírus que podem estar nas suas mãos
        </li>
        <li>
          <img className="icon" src={socialDistancing} alt="Distânciamento social" />
          Mantenha pelo menos 1 metro de distância entre você e qualquer pessoa que esteja tossindo ou espirrando.
        </li>
        <li>
          <img className="icon" src={quarantine} alt="Fique em casa" />
          Fique em casa se não se sentir bem. Se você tiver febre, tosse e dificuldade em respirar, procure atendimento médico.
        </li>
      </ul>
      <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#61fcc3" fillOpacity="1" d="M0,96L48,85.3C96,75,192,53,288,53.3C384,53,480,75,576,101.3C672,128,768,160,864,149.3C960,139,1056,85,1152,85.3C1248,85,1344,139,1392,165.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/></svg>
    </Container>
  );
}

export default Tips;