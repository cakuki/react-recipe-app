import React, { useState } from "react";
import RecipeList from "./RecipeList";
import RecipeDetails from "./RecipeDetails";
import recipes from "./recipes";

const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const handleRecipeSelect = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleFavoriteClick = (recipeId) => {
    const index = favorites.indexOf(recipeId);
    if (index !== -1) {
      // Recipe is already in favorites, remove it
      setFavorites(favorites.filter((id) => id !== recipeId));
    } else {
      // Recipe is not in favorites, add it
      setFavorites([...favorites, recipeId]);
    }
  };

  const handleBackClick = () => {
    setSelectedRecipe(null);
  };

  if (selectedRecipe) {
    return (
      <RecipeDetails
        recipe={selectedRecipe}
        onBackClick={handleBackClick}
        onFavoriteClick={handleFavoriteClick}
        favorite={favorites.includes(selectedRecipe.id)}
      />
    );
  }

  return (
    <RecipeList
      recipes={recipes}
      favorites={favorites}
      onRecipeSelect={handleRecipeSelect}
    />
  );
};

export default App;
