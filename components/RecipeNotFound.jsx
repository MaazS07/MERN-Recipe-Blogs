// RecipeNotFound.js

import React from 'react';
import { FaSadCry, FaExclamationCircle } from 'react-icons/fa';
import "./stylesheets/RecipeNotFound.css"

const RecipeNotFound = () => {
  return (
    <div className="recipe-not-found">
      <div className="icon">
        <FaSadCry size={50} />
      </div>
      <p>
        <FaExclamationCircle className="exclamation" /> Sorry, no recipes found with this name.
      </p>
    </div>
  );
};

export default RecipeNotFound;
