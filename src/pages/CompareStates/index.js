import React, { useState, useEffect, useCallback } from 'react';
import { format, isDate } from 'date-fns';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import api from '../../services/api';
import Header from '../../components/Header';

import { Container, Heading, FilterContainer, Calendar, CovidList, CovidItem, Select } from './styles';

const CompareStates = () => {
  const [ufs, setUfs] = useState([]);
  const [firstUfSelected, setFirstUfSelected] = useState('');
  const [secondUfSelected, setSecondUfSelected] = useState('');
  const [firstResults, setFirstResults] = useState({});
  const [secondResults, setSecondResults] = useState({});
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

  const handleFirstSelectedUf = useCallback(async (event, position) => {
    const uf = event.target.value;

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
    <>
      <Header />
      
      <Container>
        <Heading>
          {error && <div className="error-bar" >{error}</div>}
          <h1>
            Casos por Estado no dia {isDate(dateSelected) ? format(dateSelected, 'dd/MM/yyyy') : dateSelected}
          </h1>
          
          <FilterContainer>
            <Select>
              <label htmlFor="uf">Selecione o 1º Estado</label>
              <select name="uf" value={firstUfSelected} onChange={(e) => handleFirstSelectedUf(e, 1)}>
                <option value="0">Selecione o 1º Estado</option>
                {ufs.map((uf) => (
                  <option key={uf.id} value={uf.uf}>{uf.name}</option>
                ))}
              </select>
            {/* </Select>

            <Select> */}
              <label htmlFor="uf">Selecione o 2º Estado</label>
              <select name="uf" value={secondUfSelected} onChange={(e) => handleFirstSelectedUf(e, 2)}>
                <option value="0">Selecione o 2º Estado</option>
                {ufs.map((uf) => (
                  <option key={uf.id} value={uf.uf}>{uf.name}</option>
                ))}
              </select>
            </Select>

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
      </Container>
    </>
  );
}

export default CompareStates;
