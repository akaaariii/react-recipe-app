
const APP_ID = `${process.env.REACT_APP_RECIPE_APP_ID}`;
const API_KEY = `${process.env.REACT_APP_RECIPE_API_KEY}`;

export const getRecipes = async (q) => {
  const response = await fetch(`https://api.edamam.com/search?q=${q}&app_id=${APP_ID}&app_key=${API_KEY}`);
  return await response.json();
};
