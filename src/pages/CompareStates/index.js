import React, { useState, useCallback } from 'react';
import { format, isDate } from 'date-fns';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import api from '../../services/api';
import Map from '../../components/Map';

import { Container, Heading, FilterContainer, CovidList, CovidItem, Select } from './styles';

const CompareStates = () => {
  const [firstUfSelected, setFirstUfSelected] = useState('');
  const [secondUfSelected, setSecondUfSelected] = useState('');
  const [firstResults, setFirstResults] = useState({});
  const [secondResults, setSecondResults] = useState({});
  const [error, setError] = useState('');
  const [dateSelected, setDateSelected] = useState(new Date());

  const handleFirstSelectedUf = useCallback(async (event, position) => {
    const uf = event.target.value ?? event.target.id;
    console.log(uf);

    try {
      const response = await api.get();
      
      const [selectedUF] = response.data.data
        .filter((item) => item.uf === uf);

      position === 1 ? setFirstResults(selectedUF) : setSecondResults(selectedUF);
      position === 1 ? setFirstUfSelected(uf) : setSecondUfSelected(uf);
      setError('');
    } catch (err) {
      const mensagemErro = err.message === "Cannot destructure property 'cases' of 'selectedUF' as it is undefined."
        ? `😳️ A data escolhida: ${dateSelected} não possui dados, por favor, escolher outra 🙂️`
        : err.message;

      setError(mensagemErro);
    }
  }, [dateSelected]);

  const handleDateCalendar = useCallback(async (date) => {
    const formatedDate = format(date, 'yyyyMMdd');
    const outputDate = format(date, 'dd/MM/yyyy');

    try {
      if (!firstUfSelected && !secondUfSelected) {
        throw new Error('😣️ Por favor, escolha um Estado!');
      }
      
      const response = await api.get(`/brazil/${formatedDate}`);
      
      const [firstSelectedUF] = response.data.data.filter((item) => item.uf === firstUfSelected);
      const [secondSelectedUF] = response.data.data.filter((item) => item.uf === secondUfSelected);
      
      if (!firstSelectedUF || !secondSelectedUF) {
        throw new Error(`😳️ A data escolhida: ${outputDate} não possui dados, por favor, escolher outra 🙂️`);
      }

      setFirstResults(firstSelectedUF);
      setSecondResults(secondSelectedUF);
      setDateSelected(outputDate);
      setError('');
    } catch (err) {
      setError(err.message);
    }
  }, [firstUfSelected, secondUfSelected]);

  return (
    <Container>
      <Heading>
        {error && <div className="error-bar" >{error}</div>}
        <h1>
          Comparação dos Estados no dia {isDate(dateSelected) ? format(dateSelected, 'dd/MM/yyyy') : dateSelected}
        </h1>
        
        <FilterContainer>
          <div className="selects">
          <Select>
            <label htmlFor="uf">Selecione o 1º Estado</label>
            <Map onClick={(e) => handleFirstSelectedUf(e, 1)} />
          </Select>

          <Select>
            <label htmlFor="uf">Selecione o 2º Estado</label>
            <Map onClick={(e) => handleFirstSelectedUf(e, 2)} />
          </Select>
          </div>

          <div className="calendar">
            <DayPicker
              weekdaysShort={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
              toMonth={new Date()}
              disabledDays={[{ daysOfWeek: [0, 6] }]}
              modifiers={{ available: { daysOfWeek: [1, 2, 3, 4, 5] } }}
              onDayClick={handleDateCalendar}
              months={[
                'Janeiro',
                'Fevereiro',
                'Março',
                'Abril',
                'Maio',
                'Junho',
                'Julho',
                'Agosto',
                'Setembro',
                'Outubro',
                'Novembro',
                'Dezembro',
              ]}
            />
          </div>
        </FilterContainer>
      </Heading>

      {!error && (firstResults?.datetime) && (
        <CovidList>
          <CovidItem>
            <h3>Casos do estado {firstResults.state}</h3>
            <table>
              <thead>
                <tr>
                  <th>Casos</th>
                  <th>Mortes</th>
                  <th>Suspeitos</th>
                  <th>Descartados</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{firstResults.cases}</td>
                  <td>{firstResults.deaths}</td>
                  <td>{firstResults.suspects}</td>
                  <td>{firstResults.refuses}</td>
                </tr>
              </tbody>
            </table>
          </CovidItem>

          {!error && (secondResults?.datetime) && (
            <CovidItem>
              <h3>Casos do estado {secondResults.state}</h3>
              <table>
                <thead>
                  <tr>
                    <th>Casos</th>
                    <th>Mortes</th>
                    <th>Suspeitos</th>
                    <th>Descartados</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{secondResults.cases}</td>
                    <td>{secondResults.deaths}</td>
                    <td>{secondResults.suspects}</td>
                    <td>{secondResults.refuses}</td>
                  </tr>
                </tbody>
              </table>
            </CovidItem>
          )}
          
        </CovidList>
      )}
      
      <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#ffffff00" fillOpacity="1" d="M0,96L48,85.3C96,75,192,53,288,53.3C384,53,480,75,576,101.3C672,128,768,160,864,149.3C960,139,1056,85,1152,85.3C1248,85,1344,139,1392,165.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/>
      </svg>
    </Container>
  );
}

export default CompareStates;
