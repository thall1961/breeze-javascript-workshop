import React from 'react';

// const BASE_URL='https://breeze-jsw.herokuapp.com';
const BASE_URL='http://localhost:3001';

function App() {
  const [stations, setStations] = React.useState([]);

  React.useEffect(() => {
    window.fetch(`${BASE_URL}/stations`, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(data => console.log('data', data));
  })
  return (
    <div></div>
  );
}

export default App;
