import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import CharacterGrid from './components/characters/CharacterGrid';
import Header from './components/ui/Header';
import Search from './components/ui/Search';
import BASE_URL from './components/settings/API';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`${BASE_URL}?name=${query}`);
      setItems(result.data);
      setIsLoading(false);
    };

    fetchItems();
  }, [query]);

  return (
    <div className='container'>
      <Header />
      <Search getSearchQuery={(query) => setQuery(query)} />
      <CharacterGrid items={items} isLoading={isLoading} />
    </div>
  );
};

export default App;
