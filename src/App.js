/* eslint-disable no-unused-vars */

import { useEffect, useState } from 'react';
import './App.css';

import { StarShipCard } from './components/Starships/StarShipCard';
import { getAllStarships } from './services/sw-api';

function App() {
  
  const [appData, setAppData] = useState({
    count: null,
    next: null,
    previous: null,
    results: [],
  });

  const results = appData.results

  async function getAppData(url) {
    const starshipData = await getAllStarships(url);
    setAppData(starshipData)
  };
  
  useEffect(() => {
    getAppData();
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <i class="fab fa-old-republic"></i>
        <div>STAR WARS STARSHIPS</div>
        <i class="fab fa-galactic-republic"></i>
      </header>
      <div className="App-Star-Ship-Cards">
        {results.map((starship, idx) => 
          <StarShipCard 
          key={idx} 
          starships={starship} 
          name={starship.name}
          model={starship.model}
          manufacturer={starship.manufacturer}
          starshipClass={starship.starship_class}
          passengers={starship.passengers}
          hyperdrive={starship.hyperdrive_rating}
          cost={starship.cost_in_credits}
          />
        )}
      </div>
      <div className="pagination">
        <button onClick={() => getAppData(appData.previous)}>Previous Page</button>
        <button onClick={() => getAppData(appData.next)}>Next Page</button>
      </div>
    </div>
  );
}

export default App;
