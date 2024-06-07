import React, {useState} from 'react';
import './App.css';
import Header from './Header';
import { Link } from 'react-router-dom';

function App() {

  const user = localStorage.getItem("userEmail");

  return (
    <div className="App">
      <Header user={user}/>
      <main className="App-main">
        {user && <h1>Bonjour {user}</h1>}
        <h1>Welcome to HarmonyHub</h1>
        <p>Votre appli de recommendation musicale</p>
        <div className="card-container">
          <div className="card">
            <h2>Recommendations personnalisées</h2>
            <p>Recommendations en fonction de vos écoutes Spotify</p>
            <Link to='/PersoRecom'>Voir les recommendations</Link>
          </div>
          <div className="card">
            <h2>Recommendations manuelles</h2>
            <p>Completez les filtres et obtenez des recommendations</p>
            <Link to='/ManualRecom'>Voir les recommendations</Link>
          </div>
          <div className="card">
            <h2>Dernières Sorties</h2>
            <p>Restez à l'affut des dernières sorties musicales</p>
            <Link to='/Release'>Voir les dernières sorties</Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
