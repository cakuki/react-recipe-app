import React from "react";
import "./RecipeDetails.css";

const RecipeDetails = ({ recipe, onFavoriteClick, onBackClick, favorite }) => {
  const { name, ingredients, price, image } = recipe;

  return (
    <div className="recipe-details">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>Ingredients: {ingredients}</p>
      <p>Price: ${price}</p>
      <button onClick={() => onFavoriteClick(recipe.id)}>
        {favorite ? "Remove from" : "Add to"} favorites
      </button>
      <button onClick={onBackClick}>Back</button>
    </div>
  );
};

export default RecipeDetails;
