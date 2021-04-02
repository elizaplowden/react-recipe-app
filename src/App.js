import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const APP_ID = 'a38b295f';
  const APP_KEY = '6a6f21f6b409156ede94357ed003326d';

  // const [counter, setCounter] = useState(0);

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = response.json()
    setRecipes(data.hits);
  }

  return (
    <div className="App">
      <form className="search-form">
        <input type="text" className="search-bar"/>
        <button
          type="submit"
          className='search-button'>
          search
          </button>
      </form>
     {/* <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>*/}
    </div>
  );
}

export default App;
