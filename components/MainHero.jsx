import React from 'react';
import './stylesheets/MainHero.css'; // Make sure to import the CSS file
import applogo from "./assets/app-logo.png"
import biryani from "./assets/biryani.jpg"

import paneertikka from "./assets/paneer-tikka.jpg"

import pavbhaji from "./assets/pav-bhaji.jpg"
import recipe from "./assets/recipe.png";
import burger2 from "./assets/burger2.png";
import images from "./assets/images.jpeg"
import pizza2 from "./assets/pizza2.jpg"



const MainHero = () => {
  return (
    <>
    <div>
      {/* <div className="company">
        <img className="logo" src={applogo} alt="chef-hat" />
        <h1 className="name">GourmetChronicles</h1>
      </div> */}

      <div className="page page-one">
        <div className="first">
          <div className="one">
            <div className="dialogue">
              <h2 className="op">
                India's <span id="india">#1 Trusted Recipe Resource</span> 
              </h2>
            </div>
            <div>
              <div className="news">
                <h2>Latest Recipes:</h2>
                <div className="ref">
                  <div>
                    <img className="pav-bhaji" src={pavbhaji} alt="pav-bhaji" />
                  </div>
                  <div className="myclass">
                    <a className="recipe-link">
                      Spice up your day with this mouthwatering Pav Bhaji! 🌶🍅 Click on the link and indulge in a burst of flavors! 🍽🔥 #PavBhaji #Foodie
                    </a>
                  </div>
                </div>
                <div className="ref">
                  <div>
                    <img className="paneer-tikka" src={paneertikka}alt="paneer-tikka" />
                  </div>
                  <div className="myclass">
                    <a className="recipe-link" href="#">
                      Fire up your taste buds with the irresistible goodness of Paneer Tikka! 🔥🧀 Dive into the recipe here and treat yourself to a symphony of flavors! 🍢🌶 #PaneerTikka #FoodieDelight
                    </a>
                  </div>
                </div>
                <div className="ref">
                  <div>
                    <img className="biryani" src={biryani} alt="biryani" />
                  </div>
                  <div className="myclass">
                    <a className="recipe-link" href="#">
                      Savor the aromatic delight of Veg Biryani! 🍛✨ Explore the recipe magic here and embark on a flavorful journey for your next meal! 🌱🍽 #VegBiryani #CulinaryAdventure
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="two">
            <img className="recipe" src={images} alt="recipe" />
          </div>
        </div>
      </div>
      <div className="page"></div>
      <div className="page"></div>
    </div>
    </>
  );
};

export default MainHero;
