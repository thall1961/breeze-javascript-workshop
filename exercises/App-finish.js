import React from 'react';
import { Station } from './components/Station';
import { getStationPhotos } from './helpers/station-functions';
import { input } from './helpers/station-styles';
import './App.css';

const BASE_URL = 'https://breeze-jsw.herokuapp.com';

function App() {
  const [stations, setStations] = React.useState([]);
  const [filteredStations, setFilteredStations] = React.useState([]);
  const [search, setSearch] = React.useState('');

  function handleChange(event) {
    event.preventDefault();
    setSearch(event.target.value);
  }

  React.useEffect(() => {
    window
      .fetch(`${BASE_URL}/stations`, {
        method: 'GET'
      })
      .then((response) => response.json())
      .then((data) => {
        const stationData = getStationPhotos(data);
        setStations(stationData);
      });
  }, []);

  React.useEffect(() => {
    if (!search || search === '') {
      setFilteredStations(stations);
    }
    const stationsCopy = [...stations];
    const filteredStations = stationsCopy.filter((station) => station.full_name.toLowerCase().includes(search));
    setFilteredStations(filteredStations);
  }, [search, stations]);

  return (
    <div className="container">
      <h1>Stations</h1>
      <input
        type="text"
        name="name"
        style={input}
        value={search}
        onChange={handleChange}
        placeholder="Search by airport name"
      />
      {filteredStations && filteredStations.map((station) => <Station key={station.id} station={station} />)}
    </div>
  );
}

export default App;
