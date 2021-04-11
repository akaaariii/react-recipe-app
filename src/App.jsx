import React, { useEffect, useState } from 'react';
import './App.scss';

import Alert from "./components/Alert/Alert";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Recipe from "./components/Recipe/Recipe";
import SearchForm from './components/SearchForm'

const APP_ID = `${process.env.REACT_APP_RECIPE_APP_ID}`;
const API_KEY = `${process.env.REACT_APP_RECIPE_API_KEY}`;

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("potato");
  const [alert, setAlert] = useState("");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`);
    const data = await response.json();

    if(!data.more) {
      return setAlert('No food with such name')
    }
    setRecipes(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  }

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
    setAlert("");
  }

  return (
    <div className="App">
      <Header />
      {alert !== "" && <Alert alert={alert} />}
      <SearchForm
        search={search}
        onSubmit={getSearch}
        updateSearch={updateSearch}
      />
      <div className="recipes">
        {recipes !== [] && recipes.map((recipe) => (
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
