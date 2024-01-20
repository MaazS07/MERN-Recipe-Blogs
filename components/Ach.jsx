import React, { useState, useEffect } from 'react';
import './stylesheets/ach.css';
const Ach = () => {
  const quotes = [
    "Good food is the foundation of genuine happiness.",
    "People who love to eat are always the best people.",
    "Food is symbolic of love when words are inadequate.",
    "One cannot think well, love well, sleep well, if one has not dined well.",
    "Life is uncertain. Eat dessert first.",
    "Cooking is like love. It should be entered into with abandon or not at all.",
    "The only time to eat diet food is while you're waiting for the steak to cook.",
    "Food is our common ground, a universal experience.",
  ];

  const [randomQuote, setRandomQuote] = useState('');

  useEffect(() => {
    generateRandomQuote();
  }, []); // Empty dependency array to run only once on mount

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex]);
  };

  return (
    <>
       <div className="randomquote" >
      {randomQuote}
    </div>

      <div className="stats">
        <ul>
          <li>1K+<h5>Recipes</h5></li>
          <li>700<h5>Active Users</h5></li>
          <li>48<h5>Updates Every Week </h5></li>
          <li>28<h5>Workers</h5></li>
        </ul>
      </div>
    </>
  );
}

export default Ach;
