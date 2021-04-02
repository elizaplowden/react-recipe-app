import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';

const App = () => {
  const APP_ID = 'a38b295f';
  const APP_KEY = '6a6f21f6b409156ede94357ed003326d';

  // const [counter, setCounter] = useState(0);

  // everything from API is stored in recipes
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  // state that only submits itself after we click the search/submit button
  // finished text we want to add
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
    // will only run when we hit submit button
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json()
    setRecipes(data.hits);
    console.log(data.hits);
  };

  // every time you run an onChange, you'll get this event
  const updateSearch = event => {
    // access target from this event
    setSearch(event.target.value);
    console.log(search);
  }

  const getSearch = event => {
    // stops page refresh
    event.preventDefault();
    // finished updated value in our input
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <form
        onSubmit={getSearch}
        className="search-form">
        <input type="text"
        className="search-bar"
        value={search}
        onChange={setSearch}
        />
        <button
          type="submit"
          className='search-button'>
          Search
          </button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            ingredients={recipe.recipe.ingredients}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}/>
        ))}
      </div>

    </div>
  );
};

export default App;
