import React, { useState, useEffect } from "react";
import "./RecipeDetails.css";

const RecipeDetails = ({ recipe, onFavoriteClick, onBackClick, favorite }) => {
  const { name, ingredients, price } = recipe;
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/search/photos?query=${recipe.name}&client_id=${process.env.REACT_APP_UNSPLASH_API_ACCESS_KEY}`
        );
        const data = await response.json();
        setImageUrl(data.results[0].urls.small);
      } catch (error) {
        console.error(error);
      }
    };
    fetchImage();
  }, [recipe]);

  return (
    <div className="recipe-details">
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <h3>Ingredients:</h3>
      <ul>
        {ingredients.map((ingredient) => (
          <li>{ingredient}</li>
        ))}
      </ul>
      <p>Price: ${price}</p>
      <button onClick={() => onFavoriteClick(recipe.id)}>
        {favorite ? "Remove from" : "Add to"} favorites
      </button>
      <button onClick={onBackClick}>Back</button>
    </div>
  );
};

export default RecipeDetails;
