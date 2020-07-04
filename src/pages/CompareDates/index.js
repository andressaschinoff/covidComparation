import React, { useState } from 'react';
import { format, parseISO } from 'date-fns';

import api from '../../services/api';

import './styles.css';
import Map from '../../components/Map';
import BarChart from '../../components/Charts/BarChart';

function CompareDates() {
  const [beforeDate, setBeforeDate] = useState({});
  const [afterDate, setAfterDate] = useState({});
  const [filterData, setFilterData] = useState(false);
  const [error, setError] = useState('');
  const [ufSelector, setUfSelector] = useState('0');

  function handleSelectUf(event) {
    const uf = event.target.value ?? event.target.id;
    setUfSelector(uf);
  }

  async function handleBeforeDate(date) {
    setFilterData(false);
    const formatedDate = format(parseISO(date), 'yyyyMMdd');
    const outputDate = format(parseISO(date), 'dd/MM/yyyy');

    try {
      if (outputDate >= afterDate.outputDate) {
        throw new Error('😣️ A data anterior deve ser maior que a data posterior');
      }

      const response = await api.get(`/brazil/${formatedDate}`);

      const [selectedUF] = response.data.data.filter(
        (obj) => obj.uf === ufSelector
      );
      const { state, cases, deaths, suspects, refuses } = selectedUF;

      setBeforeDate({ state, outputDate, cases, deaths, suspects, refuses });
      setError('');
    } catch (error) {
      const mensagemErro = error.message === "Cannot destructure property 'cases' of 'selectedUF' as it is undefined."
        ? `🤔️ A data escolhida: ${outputDate} não possui dados, por favor, escolher outra 🙂️`
        : error.message;

      setError(mensagemErro);
    }
  }

  async function handleAfterDate(date) {
    setFilterData(false);
    const formatedDate = format(parseISO(date), 'yyyyMMdd');
    const outputDate = format(parseISO(date), 'dd/MM/yyyy');

    try {
      if (outputDate <= beforeDate.outputDate) {
        throw new Error('😣️ A data anterior deve ser maior que a data posterior');
      }

      const response = await api.get(`/brazil/${formatedDate}`);

      const [selectedUF] = response.data.data.filter(
        (obj) => obj.uf === ufSelector
      );
      const { cases, deaths, suspects, refuses } = selectedUF;

      setAfterDate({ outputDate, cases, deaths, suspects, refuses });
      setError('');
    } catch (error) {
      const mensagemErro = error.message === "Cannot destructure property 'cases' of 'selectedUF' as it is undefined."
        ? `🤔️ A data escolhida: ${outputDate} não possui dados, por favor, escolher outra 🙂️`
        : error.message;

      setError(mensagemErro);
    }
  }

  return (
    <div className="App">
      <div className="heading">
        {error && <div className="error-bar">{error}</div>}
        {!beforeDate.outputDate ? (<h1> Casos por Estado</h1>) : (
          <h1>
            Casos do estado {beforeDate.state} nos dias {beforeDate.outputDate} e {afterDate.outputDate}
          </h1>
        )}

        <div>
          <Map onClick={handleSelectUf} />

          <div>
            <span>DE</span>
            <input
              type="date"
              id="before-date"
              name="before-date"
              onChange={(e) => handleBeforeDate(e.target.value)}
            />

            <span>ATÉ</span>
            <input
              type="date"
              id="after-date"
              name="after-date"
              onChange={(e) => handleAfterDate(e.target.value)}
            />

            {!error && ( !!beforeDate.outputDate && !!afterDate.outputDate) && (
              <button type="button" onClick={() => setFilterData(true)}>
                Buscar
              </button>
            )}
          </div>
        </div>
      </div>

      {!error && ( !!beforeDate.outputDate && !!afterDate.outputDate) && (
        <>
          <div className="covid-list">
            <div className="covid-item">
              <h3>Casos anteriores {filterData && `- ${beforeDate.outputDate}`}</h3>
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
                  {filterData && (
                    <tr>
                      <td>{beforeDate.cases}</td>
                      <td>{beforeDate.deaths}</td>
                      <td>{beforeDate.suspects}</td>
                      <td>{beforeDate.refuses}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <div className="covid-item">
              <h3>Casos posteriores {filterData && `- ${afterDate.outputDate}`}</h3>
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
                  {filterData && (
                    <tr>
                      <td>{afterDate.cases}</td>
                      <td>{afterDate.deaths}</td>
                      <td>{afterDate.suspects}</td>
                      <td>{afterDate.refuses}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <div className="covid-item">
              <BarChart result1={beforeDate} result2={afterDate} />
            </div>
          </div>
        </>
      )}

      <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#88a8fc" fillOpacity="1" d="M0,96L48,85.3C96,75,192,53,288,53.3C384,53,480,75,576,101.3C672,128,768,160,864,149.3C960,139,1056,85,1152,85.3C1248,85,1344,139,1392,165.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/>
      </svg>
    </div>
  );
}

export default CompareDates;
