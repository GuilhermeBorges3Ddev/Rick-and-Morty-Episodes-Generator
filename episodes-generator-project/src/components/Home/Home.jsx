import React from 'react';
import { Button } from 'antd';

import './Home.scss';
import '../../assets/styles/App.scss';

const routes = {
    "home": "/",
    "historic": "/episodes"
}

export default function Home() {
  return (
    <div className="App">
      <div className="App-container">
        <a href="https://fontmeme.com/for-all-mankind-font/">
          <img
            src="https://fontmeme.com/permalink/210406/8dbfc8c3235523e2e9f4b6583de5949f.png"
            alt="for-all-mankind-font"
            border="0"
          />
        </a>
        <div className="site-button-ghost-wrapper">
          <Button className="site-button-ghost mx-3" ghost href={routes.home}>
            generate a new episode
          </Button>
          <Button className="site-button-ghost mx-3" ghost href={routes.historic}>
            see historic of episodes
          </Button>
        </div>
      </div>
    </div>
  );
}
