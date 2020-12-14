/* eslint-disable no-unused-vars */

import { useEffect, useState } from 'react';
import './App.css';

import { StarShipCard } from './components/Starships/StarShipCard';

import { getAllStarships } from './services/sw-api';

function App() {

  const [appData, setAppData] = useState({
    starships: [],
    // name: []
  });

  

  
  
  
  
  async function getAppData() {
    const starshipData = await getAllStarships();
    // console.log(starshipData);
    setAppData({
      starships: starshipData.results,
      // name: starshipData.name
    })
  };
  
  useEffect(() => {
    getAppData();
  }, []);
  
  
  const starships = [appData.starships]
  // const name = [appData.name]

  // console.log(name)
  console.log(starships)
  console.log(appData)

  return (
    <div className="App">
      <header className="App-header">
        <i class="fab fa-old-republic"></i>
        <div>STAR WARS STARSHIPS</div>
        <i class="fab fa-galactic-republic"></i>
      </header>
      <div className="App-Star-Ship-Cards">
        {starships[0].map((starship, idx) => 
          <StarShipCard key={idx} starships={starship} name={starship.name} />
        )}
      </div>
    </div>
  );
}

export default App;
