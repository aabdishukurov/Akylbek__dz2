import React, { createContext, useState } from "react";
import TodoPage from "./page/TodoPage";
import StyleProvider from "./providers/StyleProvider";

export const Context = createContext();

function App() {
  const [value, setValue] = useState(0);
  const [search, setSearch] = useState("");
  
  return (
    <Context.Provider value={{value, setValue, search, setSearch}}>
      <div>
        <StyleProvider>
          <TodoPage/>
        </StyleProvider>
      </div>
    </Context.Provider>
  );
}

export default App;







import { useEffect, useRef, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { fetchAllPokemons, fetchPokemon } from './api/fetchPokemons';
import PokemonCard from './components/PokemonCard';
import { SkeletonCard } from './components/SkeletonCard';

import { classNames, sortItems } from './common/helper';

import './theme/index.css'

function App() {

  const inputRef = useRef(null)
  const [ currentPokemon, setCurrentPokemon ] = useState({})
  const [ sortBy, setSortBy ] = useState('')

  const [ pag, setPag ] = useState({
    from: 1,
    till: 20,
  })

  const [ pokemonList, setPokemonList ] = useState([])

  useEffect(() => {
    submitPokemons()
  }, [])

  const submitPokemons = () => {
    fetchAllPokemons(pag.from, pag.till)
      .then((data) => {
        const newData = pokemonList.concat(data)
        setPokemonList(newData)
      })
      .then((data) => {
        setPag(prev => ({ from: prev.from + 20, till: prev.till + 20}))
      })
  }

  const handleSearch = () => {
    fetchPokemon(inputRef.current.value)
      .then((data) => {
        setCurrentPokemon(data)
      })
  }

  function handleSortWeight(e) {
    setSortBy(e.target.name);
  }

  return (
    <div className="App">
      <input ref={inputRef} placeholder='search'/>
      <button onClick={handleSearch}>Get pokemon</button>
      <button className={classNames('active', sortBy === 'weight')} name='weight' onClick={handleSortWeight}>Самый толстый</button>
      <button className={classNames('active', sortBy === 'attack')} name='attack' onClick={handleSortWeight}>MOST STRONG</button>
      <PokemonCard pokemon={currentPokemon}/>

      <InfiniteScroll
      dataLength={pokemonList.length}
      next={submitPokemons}
      hasMore={true}
      loader={<div>
        {[...Array(20)].map((item) => <SkeletonCard/>)}
      </div>}
      >
        {sortItems(pokemonList, sortBy).map((item) => 
          <PokemonCard pokemon={item}/>
        )}
      </InfiniteScroll>
    </div>
  );
}

export default App;


