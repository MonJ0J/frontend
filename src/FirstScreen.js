import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Styles/FirstScreen.css';
import crownLogo from './crown-logo.png';

function FirstScreen() {
  const navigate = useNavigate();

  return (
    <div className="first-screen-page">
      <div className="first-screen-header">
        <h1 className="first-screen-title">CU Gigs</h1>
      </div>
      <div className="crown-logo">
        <img src={crownLogo} alt="Crown Logo" />
      </div>
      <div className="first-screen-content">
        <div className="first-screen-subtitle">Are you here to find a job or to post one?</div>
        <div className="first-screen-button-container">
          <button
            className="first-screen-button"
            onClick={() => navigate('/create-account')}
          >
            Get a job!
          </button>
          <button
            className="first-screen-button"
            onClick={() => navigate('/create-account')}
          >
            Post a Job!
          </button>
        </div>
      </div>
    </div>
  );
}

export default FirstScreen;
