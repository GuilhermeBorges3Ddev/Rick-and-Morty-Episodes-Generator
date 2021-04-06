import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
//import { clientForEpisodes } from '../../services/client-graphql';
//import { gql } from '@apollo/client';

import './Historic.scss';
import '../../assets/styles/App.scss';

export default function Historic() {
  const defaultHistoricPageMessage = useSelector(
    (state) => state.data[0]['historicPage']
  );
  return (
    <div className="App">
      <div className="App-container">
        <p>{defaultHistoricPageMessage}</p>
      </div>
      <div className="historic-api-return"></div>
    </div>
  );
}
