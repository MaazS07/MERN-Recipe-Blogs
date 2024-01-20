// App.js

import React from 'react';
import HeroSection from './HeroSection';
import hero1 from './assets/hero1.jpeg';
import hero2 from './assets/hero2.jpeg';
import hero3 from './assets/hero3.jpeg';
import hero4 from './assets/hero4.jpeg';
import Navbar from './Navbar';
import MainHero from './MainHero';
import burger2 from "./assets/burger2.png"
import salad from './assets/salad.jpg';
import interntional from './assets/international.jpg';
import dessert2 from "./assets/dessert2.png";




const Home = () => {
  return (
    <>
   <Navbar/>
   <MainHero/>

    <div>
      {/* Hero Section 1 */}
      <HeroSection
        title="Delicious Recipes"
        title2="We offer the best variety of recipes across globes"
        description="Discover a variety of delicious recipes to satisfy your taste buds. From mouth-watering appetizers to delightful main courses and decadent desserts, our collection offers a culinary experience like no other. Explore diverse cuisines and cooking techniques, and elevate your home cooking to new heights. Whether you're a seasoned chef or a kitchen novice, there's always something new and exciting to try. Join us on a gastronomic journey filled with flavor and creativity."
        image={burger2}
        isEven={true}
        id="burgerr"
      />

      {/* Hero Section 2 */}
      <HeroSection
        title="Healthy Choices"
        title2="Food is one of the essential needs of life"
        description="Explore healthy and nutritious recipes for a balanced lifestyle. Our collection of wholesome dishes focuses on fresh, whole ingredients that nourish the body and delight the senses. From vibrant salads to protein-packed meals, we aim to make healthy eating enjoyable and accessible. Whether you're on a specific diet or simply looking to incorporate more nutritious options into your meals, our recipes provide inspiration and guidance. Make informed choices for your well-being and savor the goodness of nutritious and delicious meals."
        image={salad}
        isEven={false}
      />

      {/* Hero Section 3 */}
      <HeroSection
        title="International Flavors"
        title2="Food is one of the essential needs of life"
        description="Embark on a culinary journey with our diverse collection of international recipes. Immerse yourself in the rich tapestry of global cuisines, from the spicy delights of Asia to the comforting flavors of Europe. Each recipe tells a story, offering a glimpse into the cultural heritage and traditions that inspire our culinary creations. Expand your palate, try your hand at authentic recipes, and experience the joy of bringing world-class flavors to your own kitchen. Travel through taste and explore the world's culinary wonders without leaving the comfort of your home."
        image={interntional}
        isEven={true}
      />

      {/* Hero Section 4 */}
      <HeroSection
        title="Dessert Paradise"
        title2="Food is one of the essential needs of life"
        description="Indulge your sweet tooth with our heavenly dessert recipes. From decadent cakes and pastries to delightful cookies and frozen treats, our dessert collection is a paradise for those with a sweet inclination. Discover the art of baking and confectionery, and create mouthwatering desserts that are as beautiful as they are delicious. Whether you're celebrating a special occasion or simply craving a sweet escape, our dessert recipes offer a delightful conclusion to any meal. Join us in the world of sweet indulgence and elevate your dessert game to new heights."
        image={dessert2}
        isEven={false}
      />
    </div>
    </>
  );
};

export default Home;
