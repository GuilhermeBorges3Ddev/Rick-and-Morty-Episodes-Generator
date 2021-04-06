import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, InputNumber } from 'antd';

import newEpisodeHeaderImage from '../../assets/images/new-episode-header.png';

import './NewEpisode.scss';
import '../../assets/styles/App.scss';

export default function Historic() {
  const [charactersQuantity, setCharactersQuantity] = useState(1);
  const [localesQuantity, setLocalesQuantity] = useState(1);
  const defaultNewEpisodePageMessage = useSelector(
    (state) => state.data[0]['newEpisodePage']
  );
  const defaultCharactersNumberLabel = useSelector(
    (state) => state.data[1]['charactersNumberLabel']
  );
  const defaultLocalesNumberLabel = useSelector(
    (state) => state.data[1]['localesNumberLabel']
  );
  function onChangeCharactersNumber(value) {
    setCharactersQuantity(value);
  }
  function onChangeLocationsNumber(value) {
    setLocalesQuantity(value);
  }
  return (
    <div className="App">
      <div className="App-container">
        <img
          src={newEpisodeHeaderImage}
          alt="NewEpLogo"
          height="100"
          width="200"
        />
        <p className="py-3">{defaultNewEpisodePageMessage}</p>
        <div className="inputs-area">
          <div className="character-input-area">
            <div>{defaultCharactersNumberLabel}</div>
            <InputNumber
              min={1}
              max={20}
              size="large"
              defaultValue={1}
              onChange={onChangeCharactersNumber}
              className="numeric-input"
            />
          </div>
          <div className="locations-input-area">
            <div>{defaultLocalesNumberLabel}</div>
            <InputNumber
              min={1}
              max={20}
              size="large"
              defaultValue={1}
              onChange={onChangeLocationsNumber}
              className="numeric-input"
            />
          </div>
        </div>
        <div className="mt-4">
          <Button
            className="bg-success text-white text-uppercase"
            type="dashed"
            primary
            size="large"
          >
            generate episode
          </Button>
        </div>
      </div>
    </div>
  );
}
