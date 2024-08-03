import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/header.jsx';
import CharacterGrid from './components/chargrid.jsx';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await axios('https://thronesapi.com/api/v2/Characters');
        console.log(res.data);
        setItems(res.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  return (
    <div className="container">
      <div className="header">
        <Header />
      </div>
      <div className="quote">
        <h2><i>"When you play the game of thrones, you win or you die. There is no middle ground."</i></h2>
      </div>
      <div className="characters">
        <CharacterGrid items={items} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default App;
