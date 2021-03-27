import React from 'react';
import "./Recipe.scss";
import notfound from '../../assets/images/no_image.svg';

const Recipe = ({title, calories, image, ingredients}) => {

  const cal = Math.floor(calories);

  return (
    <div className="recipe-card">
      <h2>{title}</h2>
      <p>{cal} calories</p>
      {image ?
        <img src={image} alt="recipe" />
        :
        <img src={notfound} alt="not found" />
      }
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