import React, { useState, useEffect, useCallback } from 'react';
import { format } from 'date-fns';
import { zonedTimeToUtc } from 'date-fns-tz';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import api from '../../services/api';
import Header from '../../components/Header';

import { Container, Heading, FilterContainer, Calendar, CovidList, CovidItem } from './styles';

const SingleState = () => {
  const [ufs, setUfs] = useState([]);
  const [ufSelected, setUfSelected] = useState('');
  const [results, setResults] = useState({});
  const [error, setError] = useState('');
  const [dateSelected, setDateSelected] = useState(new Date());

  useEffect(() => {
    api.get().then((response) => {
      const ufList = response.data.data
        .map((item) => {
          return {
            id: item.uid,
            name: item.state,
            uf: item.uf,
          };
        })
        .sort((a, b) => {
          if (a.uf > b.uf) return 1;

          return a.uf < b.uf ? -1 : 0;
        });
      
      setUfs(ufList);
    });
  }, []);

  const handleSelectedUf = useCallback(async (event) => {
    const uf = event.target.value;
    setUfSelected(uf);

    try {
      const response = await api.get();
      
      const [selectedUF] = response.data.data
        .filter((item) => item.uf === uf);

      setResults(selectedUF)
      setError('');
    } catch (err) {
      const mensagemErro = err.message === "Cannot destructure property 'cases' of 'selectedUF' as it is undefined."
        ? `A data escolhida: ${dateSelected} não possui dados, por favor, escolher outra :)`
        : err.message;

      setError(mensagemErro);
    }
  }, [dateSelected]);

  const handleDateCalendar = useCallback(async (date) => {
    const formatedDate = format(date, 'yyyyMMdd');
    const outputDate = format(date, 'dd/MM/yyyy');

    try {
      if (!ufSelected) {
        throw new Error('Por favor, escolha um Estado!');
      }
      
      const response = await api.get(`/brazil/${formatedDate}`);
      
      const [selectedUF] = response.data.data.filter((item) => item.uf === ufSelected);
      
      if (!selectedUF) {
        throw new Error(`A data escolhida: ${outputDate} não possui dados, por favor, escolher outra :)`);
      }

      setResults(selectedUF)
      setDateSelected(outputDate);
      setError('');
    } catch (err) {
      setError(err.message);
    }
  }, [ufSelected]);

  return (
    <>
      <Header />
      
      <Container>
        <Heading>
          {error && <div className="error-bar" >{error}</div>}
          <h1>Casos por Estado</h1>
          
          <FilterContainer>
            <select name="uf" value={ufSelected} onChange={handleSelectedUf}>
              <option value="0">Selecione um Estado</option>
              {ufs.map((uf) => (
                <option key={uf.id} value={uf.uf}>{uf.name}</option>
              ))}
            </select>

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
              <h3>Casos do estado {results.state} no dia {format(zonedTimeToUtc(results.datetime), 'dd/MM/yyyy')}</h3>
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
      </Container>
    </>
  );
}

export default SingleState;
