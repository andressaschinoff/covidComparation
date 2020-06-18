import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';

import api from '../../services/api';

import './styles.css';

function CompareStates() {
  const [beforeDate, setBeforeDate] = useState({});
  const [afterDate, setAfterDate] = useState({});
  const [filterData, setFilterData] = useState(false);
  const [error, setError] = useState('');
  const [ufs, setUfs] = useState([]);
  const [ufSelector, setUfSelector] = useState('0');

  useEffect(() => {
    api.get().then((response) => {
      const ufsArray = response.data.data.map((obj) => obj.uf).sort();
      setUfs(ufsArray);
    });
  }, []);

  function handleSelectUf(event) {
    const uf = event.target.value;
    setUfSelector(uf);
  }

  async function handleBeforeDate(date) {
    setFilterData(false);
    const formatedDate = format(parseISO(date), 'yyyyMMdd');
    const outputDate = format(parseISO(date), 'dd/MM/yyyy');

    try {
      const response = await api.get(`/brazil/${formatedDate}`);

      const [selectedUF] = response.data.data.filter(
        (obj) => obj.uf === ufSelector
      );
      const { cases, deaths, suspects, refuses } = selectedUF;

      setBeforeDate({ outputDate, cases, deaths, suspects, refuses });
      setError('');
    } catch (error) {
      setError(
        `A data escolhida: ${outputDate} não possui dados, por favor, escolher outra :)`
      );
    }
  }

  async function handleAfterDate(date) {
    setFilterData(false);
    const formatedDate = format(parseISO(date), 'yyyyMMdd');
    const outputDate = format(parseISO(date), 'dd/MM/yyyy');

    try {
      const response = await api.get(`/brazil/${formatedDate}`);

      const [selectedUF] = response.data.data.filter(
        (obj) => obj.uf === ufSelector
      );
      const { cases, deaths, suspects, refuses } = selectedUF;

      setAfterDate({ outputDate, cases, deaths, suspects, refuses });
      setError('');
    } catch (error) {
      setError(
        `A data escolhida: ${outputDate} não possui dados, por favor, escolher outra :)`
      );
    }
  }

  return (
    <div className="App">
      {error && <div className="error-bar">{error}</div>}
      <div className="heading">
        <div className="select_box">
          <select
            name="uf"
            value={ufSelector}
            id="uf"
            onChange={handleSelectUf}
          >
            <option key="selectUF" value="0">
              Selecione uma UF
            </option>
            {ufs.map((uf) => (
              <option key={uf} value={uf}>
                {uf}
              </option>
            ))}
          </select>
        </div>
        <span>UF</span>
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
        <button type="button" onClick={() => setFilterData(true)}>
          Buscar
        </button>
      </div>
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
      </div>
    </div>
  );
}

export default CompareStates;
