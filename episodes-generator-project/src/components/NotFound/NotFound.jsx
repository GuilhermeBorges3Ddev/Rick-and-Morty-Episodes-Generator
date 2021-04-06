import React from 'react';
import { useSelector } from 'react-redux';

import './NotFound.scss';
import '../../assets/styles/App.scss';

export default function NotFound() {
  const defaultErrorPageMessage = useSelector(
    (state) => state.data[0]['errorPage']
  );
  return (
    <div className="App">
      <div className="App-container">
        <h4>
          <div>🤯🤯</div>
          <div className="route-error-text py-5">
            {defaultErrorPageMessage}
          </div>
          <div>🤯🤯</div>
        </h4>
      </div>
    </div>
  );
}
