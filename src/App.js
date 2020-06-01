import React, { useState } from 'react';
import { format, parseISO } from "date-fns";

import api from './api';

import './App.css';

function App() {
  const [beforeDate, setBeforeDate] = useState({});
  const [afterDate, setAfterDate] = useState({});
  const [filterData, setFilterData] = useState(false);
  const [error, setError] = useState('');

  async function handleBeforeDate(date){
    setFilterData(false);
    const formatedDate = format(parseISO(date), 'yyyyMMdd');
    const outputDate = format(parseISO(date), 'dd/MM/yyyy');

    try {
      const response = await api.get(`/brazil/${formatedDate}`);

      const [selectedUF] = response.data.data.filter(obj => obj.uf === 'SP');
      const {cases, deaths, suspects, refuses} = selectedUF;

      setBeforeDate({ outputDate, cases, deaths, suspects, refuses });
      setError('');
    } catch (error) {
      setError(`A data escolhida: ${outputDate} não possui dados, por favor, escolher outra :)`);
    }
  }
  
  async function handleAfterDate(date){
    setFilterData(false);
    const formatedDate = format(parseISO(date), 'yyyyMMdd');
    const outputDate = format(parseISO(date), 'dd/MM/yyyy');

    try {
      const response = await api.get(`/brazil/${formatedDate}`);

      const [selectedUF] = response.data.data.filter(obj => obj.uf === 'SP');
      const {cases, deaths, suspects, refuses} = selectedUF;

      setAfterDate({ outputDate, cases, deaths, suspects, refuses });
      setError('');
    } catch (error) {
      setError(`A data escolhida: ${outputDate} não possui dados, por favor, escolher outra :)`); 
    }
  }

  return (
    <div className="App">
      {error && <div className="error-bar">{error}</div>}
      <div className="heading">
        <input type="date" id="before-date" name="before-date" onChange={(e) => handleBeforeDate(e.target.value)}/>
        <span>ATÉ</span>
        <input type="date" id="after-date" name="after-date" onChange={(e) => handleAfterDate(e.target.value)}/>
        <button type="button" onClick={() => setFilterData(true)}>Buscar</button>
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

export default App;
