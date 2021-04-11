import React, { useEffect, useState } from 'react';
import { RecipeContext } from './contexts/receipes'
import { getRecipes } from './services/edamame'
import './App.scss';

import Alert from "./components/Alert/Alert";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Recipe from "./components/Recipe/Recipe";
import SearchForm from './components/SearchForm'

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("potato");
  const [alert, setAlert] = useState("");

  useEffect(() => {
    searchRecipes();
  }, []);

  const updateQuery = (e) => {
    setQuery(e.target.value);
  }

  const searchRecipes = async () => {
    const data = await getRecipes(query)
    if(!data.more) {
      return setAlert('No food with such name')
    }
    setRecipes(data.hits);
    setAlert("");
  }

  return (
    <div className="App">
      <RecipeContext.Provider value={{
        recipes,
        query,
        searchRecipes,
        updateQuery
      }} >
        <Header />
        {alert !== "" && <Alert alert={alert} />}
        <SearchForm />
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
      </RecipeContext.Provider>
    </div>
  );
}

export default App;
