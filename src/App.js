import React from 'react';
import {Station} from './components/Station';

const BASE_URL = 'https://breeze-jsw.herokuapp.com';

function App() {
  const [stations, setStations] = React.useState([]);

  React.useEffect(() => {
    window
      .fetch(`${BASE_URL}/stations`, {
        method: 'GET'
      })
      .then((response) => response.json())
      .then((data) => console.log('data', data));
  });
  return (
   stations && stations.map(station => <Station station={station} />) 
  );
}

export default App;
