import React from 'react';
import { Station } from './components/Station';
import { getStationPhotos } from './helpers/station-functions';
import { input } from './helpers/station-styles';
import './App.css';

const BASE_URL = 'https://breeze-jsw.herokuapp.com';

function App() {
  return (
    <div className="container">
      <h1>Stations</h1>
    </div>
  );
}

export default App;
