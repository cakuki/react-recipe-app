import React, { useState } from "react";
import "./RecipeList.css";

const RecipeList = ({ recipes, favorites, onRecipeSelect }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const filteredRecipes = recipes
    .filter((recipe) =>
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((recipe) => (category === "all" ? true : recipe.price <= category));

  return (
    <div className="recipe-list">
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <select value={category} onChange={handleCategoryChange}>
        <option value="all">All</option>
        <option value="15">$15 or less</option>
        <option value="10">$10 or less</option>
        <option value="5">$5 or less</option>
      </select>
      <ul>
        {filteredRecipes.map((recipe) => (
          <li
            key={recipe.id}
            onClick={() => onRecipeSelect(recipe)}
            className={favorites.includes(recipe.id) ? "favorite" : ""}
          >
            {recipe.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
