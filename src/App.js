/* eslint-disable no-unused-vars */

import { useEffect, useState } from 'react';
import './App.css';

import { StarShipCard } from './components/Starships/StarShipCard';

import { getAllStarships } from './services/sw-api';

function App() {

  const [appData, setAppData] = useState({
    starships: [],
    name: ''
  });

  async function getAppData() {
    const starshipData = await getAllStarships();
    console.log(starshipData);
    setAppData({
      ...starshipData,
      name: starshipData.results.name
    })
  };

  useEffect(() => {
    getAppData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        STAR WARS STARSHIPS
      </header>
      <StarShipCard starships={appData.starships} name={appData.name}/>
    </div>
  );
}

export default App;
