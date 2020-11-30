import React, { useEffect, useState } from 'react';
import './App.scss';

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Recipe from "./components/Recipe/Recipe";

const App = () => {
  const APP_ID = `${process.env.REACT_APP_RECIPE_APP_ID}`;
  const API_KEY = `${process.env.REACT_APP_RECIPE_API_KEY}`;

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("potato");

  useEffect(() => {
    getRecipes();
    // eslint-disable-next-line
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  }

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return (
    <div className="App">
      <Header />
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-btn" type="submit">Search</button>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe 
            key={recipe.recipe.label} 
            title={recipe.recipe.label} 
            calories={recipe.recipe.calories} 
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
