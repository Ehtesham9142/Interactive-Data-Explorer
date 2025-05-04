import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import FilterDropdown from './components/FilterDropdown';
import PokemonCard from './components/PokemonCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true);
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
        const data = await res.json();
        const promises = data.results.map(p => fetch(p.url).then(r => r.json()));
        const results = await Promise.all(promises);
        setPokemonList(results);
        setFilteredList(results);
      } catch (e) {
        setError('Error loading Pokémon');
      } finally {
        setLoading(false);
      }
    };
    fetchPokemon();
  }, []);

  useEffect(() => {
    const filtered = pokemonList.filter(p =>
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      (typeFilter ? p.types.some(t => t.type.name === typeFilter) : true)
    );
    setFilteredList(filtered);
  }, [search, typeFilter, pokemonList]);

  return (
    <div className="container py-4">
      <Header />
      <div className="row mb-4 justify-content-center">
        <div className="col-md-4 mb-2">
          <SearchBar value={search} onChange={e => setSearch(e.target.value)} />
        </div>
        <div className="col-md-3 mb-2">
          <FilterDropdown onChange={e => setTypeFilter(e.target.value)} />
        </div>
      </div>
      {loading && <div className="text-center">Loading...</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      {!loading && !error && (
        <div className="row">
          {filteredList.length ? (
            filteredList.map(pokemon => (
              <div key={pokemon.id} className="col-md-3 col-sm-6 mb-4">
                <PokemonCard pokemon={pokemon} />
              </div>
            ))
          ) : (
            <div className="text-center">No Pokémon found.</div>
          )}
        </div>
      )}
    </div>
  );
};

export default App;

