import React from 'react';
import './NotFound.scss';
import '../../assets/styles/App.scss';

export default function NotFound() {
  return (
    <div className="App">
      <div className="App-container">
        <h3>
          <div>🤯🤯</div> 
          <div className="route-error-text py-5">
              Ops... These route not exists!<br /> 
              Return to the home page "/"
          </div>
          <div>🤯🤯</div>
        </h3>
      </div>
    </div>
  );
}
