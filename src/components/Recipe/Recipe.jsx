import React, { useState } from 'react';
import "./Recipe.scss";
import imageNotFound from '../../assets/images/no_image.svg';

const Recipe = ({ title, calories, image, ingredients }) => {
  const [src, setSrc] = useState(image);
  const cal = Math.floor(calories);

  return (
    <div className="recipe-card">
      <h2>{title}</h2>
      <p>{cal} calories</p>
      <img src={src} alt="recipe" onError={() => setSrc(imageNotFound)} />
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