import React from 'react';
import "./Recipe.scss";

const Recipe = ({title, calories, image, ingredients}) => {

  const cal = Math.floor(calories);

  return (
    <div className="recipe-card">
      <h2>{title}</h2>
      <p>{cal} calories</p>
      <img src={image} alt="recipe" />
      <h4>Ingredients</h4>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.text}</li>
        ))}
      </ul>
    </div>
  )
}

export default Recipe;