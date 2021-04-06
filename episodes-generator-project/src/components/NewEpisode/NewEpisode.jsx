import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, InputNumber } from 'antd';
import { client } from '../../services/client-graphql';
import { gql } from '@apollo/client';

import newEpisodeHeaderImage from '../../assets/images/new-episode-header.png';

import './NewEpisode.scss';
import '../../assets/styles/App.scss';

export default function Historic() {
  const [defaultCharactersApiData, setDefaultCharactersApiData] = useState({});
  const [defaultLocalesApiData, setDefaultLocalesApiData] = useState({});
  const [charactersQuantity, setCharactersQuantity] = useState(0);
  const [localesQuantity, setLocalesQuantity] = useState(0);

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

  useEffect(() => {
    initialCharacters();
    initialLocales();
  }, []);

  function initialCharacters() {
    client
      .query({
        query: gql`
          query {
            characters {
              results {
                name
              }
            }
          }
        `,
      })
      .then((res) => setDefaultCharactersApiData(res.data.characters.results));
  }

  function initialLocales() {
    client
      .query({
        query: gql`
          query {
            locations {
              results {
                name
              }
            }
          }
        `,
      })
      .then((res) => setDefaultLocalesApiData(res.data.locations.results));
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
            size="large"
          >
            generate episode
          </Button>
        </div>
      </div>
    </div>
  );
}
