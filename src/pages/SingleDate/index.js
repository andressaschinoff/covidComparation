import React, { useState, useCallback } from 'react';
import { format, isDate } from 'date-fns';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import Map from '../../components/Map';
import api from '../../services/api';

import { Container, Heading, FilterContainer, Calendar, CovidList, CovidItem } from './styles';

const SingleDate = () => {
  const [ufSelected, setUfSelected] = useState('');
  const [results, setResults] = useState({});
  const [error, setError] = useState('');
  const [dateSelected, setDateSelected] = useState(new Date());

  const handleSelectedUf = useCallback(async (event) => {
    const uf = event.target.value ?? event.target.id;

    setUfSelected(uf);

    try {
      const response = await api.get();
      
      const [selectedUF] = response.data.data
        .filter((item) => item.uf === uf);

      setResults(selectedUF)
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
      if (!ufSelected) {
        throw new Error('😣️ Por favor, escolha um Estado!');
      }
      
      const response = await api.get(`/brazil/${formatedDate}`);
      
      const [selectedUF] = response.data.data.filter((item) => item.uf === ufSelected);
      
      if (!selectedUF) {
        throw new Error(`😳️ A data escolhida: ${outputDate} não possui dados, por favor, escolher outra 🙂️`);
      }

      setResults(selectedUF)
      setDateSelected(outputDate);
      setError('');
    } catch (err) {
      setError(err.message);
    }
  }, [ufSelected]);

  return (
    <Container>
      <Heading>
        {error && <div className="error-bar" >{error}</div>}
        {!ufSelected ? (<h1> Casos por Estado</h1>) : (
          <h1>
            Casos do estado {results?.state} no dia {isDate(dateSelected) ? format(dateSelected, 'dd/MM/yyyy') : dateSelected}
          </h1>
        )}
        
        <FilterContainer>
          <Map onClick={handleSelectedUf} />

          <Calendar>
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
          </Calendar>
        </FilterContainer>
      </Heading>

      {!error && (results?.datetime) && (
        <CovidList>
          <CovidItem>
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
                  <td>{results.cases}</td>
                  <td>{results.deaths}</td>
                  <td>{results.suspects}</td>
                  <td>{results.refuses}</td>
                </tr>
              </tbody>
            </table>
          </CovidItem>
        </CovidList>
      )}

      <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#61fcc3" fillOpacity="1" d="M0,96L48,85.3C96,75,192,53,288,53.3C384,53,480,75,576,101.3C672,128,768,160,864,149.3C960,139,1056,85,1152,85.3C1248,85,1344,139,1392,165.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/></svg>
    </Container>
  );
}

export default SingleDate;
