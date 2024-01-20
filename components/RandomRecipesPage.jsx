// RandomRecipesPage.js
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './App.css';

const RandomRecipesPage = () => {
  const [randomRecipes, setRandomRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const getRandomRecipe = async () => {
    try {
      const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
      const data = await res.json();
      const meal = data.meals ? data.meals[0] : null;
      if (meal) {
        setRandomRecipes((prevRecipes) => [meal, ...prevRecipes]);
      }
    } catch (error) {
      console.error('Error fetching random recipe:', error);
    }
  };

  useEffect(() => {
    // Fetch a new recipe every second
    const intervalId = setInterval(() => {
      getRandomRecipe();
    }, 100);

    // Stop fetching after 50 recipes
    setTimeout(() => {
      clearInterval(intervalId);
    }, 5000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const openRecipe = (meal) => {
    setSelectedRecipe(meal);
  };

  const closeRecipe = () => {
    setSelectedRecipe(null);
  };

  const displayIngredients = (meal) => {
    let ingredientsList = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];

      if (ingredient) {
        ingredientsList.push(
          <li key={i}>
            {measure} {ingredient}
          </li>
        );
      } else {
        break;
      }
    }
    return ingredientsList;
  };

  return (
    <>
      <Navbar />
      <div>
        <h1 className="random">Our Recipes</h1>
        <div className="recipe-container">
          {randomRecipes.map((meal, index) => (
            <div key={index} className="recipe-div">
              <img src={meal.strMealThumb} alt={meal.strMeal} loading="lazy" />
              <h1>{meal.strMeal}</h1>
              <h3>{meal.strArea}</h3>
              <a href={meal.strYoutube} target="_blank" rel="noopener noreferrer">
                Youtube link
              </a>
              <button className="view-recipe-btn" onClick={() => openRecipe(meal)}>
                View Recipe
              </button>
            </div>
          ))}
        </div>

        {selectedRecipe && (
          <div className="recipe-details">
            <button className="close-btn" onClick={closeRecipe}>
              x
            </button>
            <div className="recipe-content">
              <h2>{selectedRecipe.strMeal}</h2>
              <h3>Ingredients</h3>
              <ul>{displayIngredients(selectedRecipe)}</ul>
              <h3 className="ins">Instructions</h3>
              <p>{selectedRecipe.strInstructions}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default RandomRecipesPage;
