import React from 'react';

import {
  Container,
  Content,
  Schedule,
  NextAppointment,
  Section,
  Appointment,
} from './styles';

import Header from '../../components/Header';

import covid from '../../assets/covid.svg';
import sick from '../../assets/sick.svg';
import pain from '../../assets/pain.svg';

const Dashboard = () => {
  return (
    <Container>
      <Header />

      <Content>
        <Schedule>
          <p>
            <em>
              "A Covid 19 afeta diferentes pessoas de diferentes maneiras. Por este motivo, Proteja a si mesmo, e as pessoas ao seu redor conhecendo os números de infectados, e tomando as precauções apropriadas."
            </em>
          </p>

          <NextAppointment>
            <strong>Para evitar a propagação do Covid - 19:</strong>
            <div>
              <img src={covid} alt="Lavar as mãos" />

              <strong>Lave as mãos frequentemente,</strong>
              <ul>
                <li>Usar o cotovelo para cobrir a tosse</li>
                <li>Evite tocar o rosto</li>
                <li>Mantenha  distancia segura</li>
                <li>Fique em casa, se possível</li>
              </ul>
            </div>
          </NextAppointment>

          <Section>
            <strong>Sintomas mais comuns</strong>

            <Appointment>
              <div>
                <img src={sick} alt="Febre" />

                <strong>Febre, tosse seca, cansaço</strong>
              </div>
            </Appointment>
          </Section>

          <Section>
            <strong>Sintomas menos comuns</strong>

            <Appointment>
              <div>
                <img src={pain} alt="Dores e desconfortos" />

                <strong>Dores e desconfortos, dor de garganta, diarreia, conjuntivite e perda do paladar ou olfato</strong>
              </div>
            </Appointment>
          </Section>
        </Schedule>
      </Content>
    </Container>
  );

};

export default Dashboard;
