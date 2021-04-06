import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, List, Avatar } from 'antd';

import './Historic.scss';
import '../../assets/styles/App.scss';

import historicHeaderImage from '../../assets/images/historic-header.png';

export default function Historic() {
  const defaultHistoricPageMessage = useSelector(
    (state) => state.data[0]['historicPage']
  );

  let episodesParsedIds = [];
  let data = [];

  for (var a in localStorage) {
    episodesParsedIds.push(a);
  }

  for (let iterator = 0; iterator < episodesParsedIds.length; iterator++) {
    if (
      episodesParsedIds[iterator] !== 'length' &&
      episodesParsedIds[iterator] !== 'clear' &&
      episodesParsedIds[iterator] !== 'getItem' &&
      episodesParsedIds[iterator] !== 'key' &&
      episodesParsedIds[iterator] !== 'removeItem' &&
      episodesParsedIds[iterator] !== 'setItem'
    )
      data.push({
        title: episodesParsedIds[iterator],
        description: localStorage.getItem(episodesParsedIds[iterator]),
      });
  }

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
        {data.length > 0 ? (
          <div className="historic-api-return h-100 w-75 mx-2">
            <List
              itemLayout="horizontal"
              dataSource={data}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                    title={
                      <p>
                        <u>{item.title}</u>
                      </p>
                    }
                    description={
                      <span className="font-weight-bolder">
                        {item.description}
                      </span>
                    }
                  />
                </List.Item>
              )}
            />
          </div>
        ) : (
          <p className="text-white">
            You have to generate 1+ episodes to see the list...
          </p>
        )}
        <div className="mt-4">
          <Button type="dashed" ghost href="/">
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
