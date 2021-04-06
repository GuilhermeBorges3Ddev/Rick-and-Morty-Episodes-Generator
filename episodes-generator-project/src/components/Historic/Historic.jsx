import React from 'react';
import { useSelector } from 'react-redux';

import './Historic.scss';
import '../../assets/styles/App.scss';

import historicHeaderImage from '../../assets/images/historic-header.png';

export default function Historic() {
  const defaultHistoricPageMessage = useSelector(
    (state) => state.data[0]['historicPage']
  );

  return (
    <div className="App">
      <div className="App-container">
        <img
          src={historicHeaderImage}
          alt="NewEpLogo"
          height="100"
          width="200"
        />
        <p>{defaultHistoricPageMessage}</p>
      </div>
      <div className="historic-api-return"></div>
    </div>
  );
}
