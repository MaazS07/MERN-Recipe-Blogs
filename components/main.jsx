// Main.js

import React, { useState, useEffect } from 'react';
import { FaYoutube } from 'react-icons/fa';
import './App.css';
import Navbar from './Navbar';
import Loader from './Loader';
import Ach from './Ach';
import RecipeNotFound from './RecipeNotFound';

const Main = () => {
  const [inputValue, setInputValue] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);


  const Api = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

  useEffect(() => {
   
  }, []);

  const getRecipe = async (inputMeal) => {
    setLoading(true);
    const res = await fetch(`${Api}${inputMeal}`);
    const data = await res.json();
    setRecipes(data.meals || []);
    setLoading(false);
    setSearched(true);
  };

  const openRecipe = (meal) => {
    setSelectedRecipe(meal);
  };

  const closeRecipe = () => {
    setSelectedRecipe(null);
  };

  return (
    <>
      <Navbar />
      <div>
        <div className="nav">
          <h1>RecipiApp</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (inputValue.trim() !== '') {
                getRecipe(inputValue.trim());
              }
            }}
          >
            <input
              type="text"
              placeholder="Eg. cake"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit" className="button">
              Search
            </button>
          </form>
        </div>



        {loading && <Loader />}

        {searched && recipes.length === 0 && !loading ?(
          <RecipeNotFound />
        ) :<Ach/>}

        {recipes.length > 0 && (
          <div className="recipe-container">
            {recipes.map((meal) => (
              <div key={meal.idMeal} className="recipe-div">
                <img src={meal.strMealThumb} alt={meal.strMeal} />
                <h1>{meal.strMeal}</h1>
                <h3>{meal.strArea}</h3>
                <a
                  href={meal.strYoutube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="youtube-link"
                >
                  {' '}
                  <span>Youtube</span>{' '}
                  <FaYoutube color="red" className="youtube" />
                </a>
                <button
                  className="view-recipe-btn"
                  onClick={() => openRecipe(meal)}
                >
                  View Recipe
                </button>
              </div>
            ))}
          </div>
        )}

        {selectedRecipe && (
          <div className="recipe-details">
            <button className="close-btn" onClick={closeRecipe}>
              x
            </button>
            <div className="recipe-content">
              <h2>{selectedRecipe.strMeal}</h2>
              <h3>Ingredients</h3>
              <ul>
                {[...Array(20)].map((_, i) => {
                  const ingredient = selectedRecipe[`strIngredient${i + 1}`];
                  const measure = selectedRecipe[`strMeasure${i + 1}`];
                  return (
                    ingredient &&
                    measure && (
                      <li key={i}>{`${measure} ${ingredient}`}</li>
                    )
                  );
                })}
              </ul>
              <h3 className="ins">Instructions</h3>
              <p>{selectedRecipe.strInstructions}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Main;
