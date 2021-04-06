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
  const [btnAvailable, setBtnAvailable] = useState(false);
  const [storageEpisodeNumber, setStorageEpisodeNumber] = useState(0);

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

  function isButtonAvailable() {
    return charactersQuantity > 0 && localesQuantity > 0
      ? setBtnAvailable(true)
      : setBtnAvailable(false);
  }

  function setEpisodeStorage() {
    let sentEpisode = { number: 0, characters: [], locales: [] };
    let episodesId = [];

    //Generates a random number for the episode between 1 - 10000
    setStorageEpisodeNumber(Math.floor(Math.random() * (10000 - 1)) + 1);
    sentEpisode.number = storageEpisodeNumber;

    let charactersStorageOnEpisode = [];
    let localesStorageOnEpisode = [];

    for (
      let iteratorOne = 0;
      iteratorOne <= charactersQuantity;
      iteratorOne++
    ) {
      charactersStorageOnEpisode.push(
        defaultCharactersApiData[Math.floor(Math.random() * (20 - 1)) + 1].name
      );
    }

    sentEpisode.characters.push(charactersStorageOnEpisode);

    for (let iteratorTwo = 0; iteratorTwo <= localesQuantity; iteratorTwo++) {
      localesStorageOnEpisode.push(
        defaultLocalesApiData[Math.floor(Math.random() * (20 - 1)) + 1].name
      );
    }

    sentEpisode.locales.push(localesStorageOnEpisode);

    localStorage.setItem(
      `episode-${storageEpisodeNumber}`,
      JSON.stringify(sentEpisode)
    );

  }

  useEffect(() => {
    initialCharacters();
    initialLocales();
  }, []);

  useEffect(() => {
    isButtonAvailable();
  });

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
              min={0}
              max={20}
              size="large"
              defaultValue={0}
              onChange={onChangeCharactersNumber}
              className="numeric-input"
              type="number"
            />
          </div>
          <div className="locations-input-area">
            <div>{defaultLocalesNumberLabel}</div>
            <InputNumber
              min={0}
              max={20}
              size="large"
              defaultValue={0}
              onChange={onChangeLocationsNumber}
              className="numeric-input"
              type="number"
            />
          </div>
        </div>
        <div className="mt-4">
          {btnAvailable ? (
            <Button
              className="bg-success text-white text-uppercase"
              onClick={setEpisodeStorage}
              href="/episodes"
              type="dashed"
              size="large"
            >
              generate episode
            </Button>
          ) : (
            <span
              id="notify-before-generate"
              className="text-small text-danger border border-danger p-2"
            >
              Select more than 0 characters and 0 locations to generate an
              episode
            </span>
          )}
        </div>
        <div className="mt-4">
          <Button type="dashed" ghost href="/">
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
