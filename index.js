// server.js

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 3002;

app.use(cors());
app.use(express.json());

// // MongoDB connection
mongoose.connect('mongodb://0.0.0.0:27017/Feedback', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  recipes: String,
});

const Contact = mongoose.model('Contact', contactSchema);

// New endpoint to handle form submissions
app.post('/submit', async (req, res) => {
  const { name, email, phone, recipes } = req.body;

  try {
    // Create a new Contact instance
    const newContact = new Contact({
      name,
      email,
      phone,
      recipes,
    });

    // Save the contact to the database
    
    const savedContact = await newContact.save();

    // Send the saved contact as the response
    res.json(savedContact);
  } catch (error) {
    console.error('Error saving data to the database:', error);
    res.status(500).json({ error: 'Error saving data to the database' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



const blogPosts = [
  { 
    id: 1, 
    title: 'Recipe Stories', 
    content: 'Share personal anecdotes or stories related to your recipes. Dive into the nostalgia of family gatherings, the joy of experimenting with new flavors, and the little mishaps that turned into culinary triumphs. Each recipe has a unique tale that adds a special touch to your dining experience. Relive the moments that make cooking more than just a task – it\'s a journey filled with memories and love.',
    image: 'http://surl.li/nscyl' 
  },
  { 
    id: 2, 
    title: 'Cooking Tips and Tricks', 
    content: 'Provide helpful cooking tips, kitchen hacks, or techniques to make your time in the kitchen more enjoyable and efficient. From time-saving shortcuts to pro-level skills, discover the secrets that chefs use to elevate their dishes. Whether you\'re a seasoned cook or a kitchen novice, these tips will empower you to create delicious meals with confidence.',
    image: 'https://rb.gy/6jh21q' 
  },
  { 
    id: 3, 
    title: 'Ingredient Spotlight: Garlic', 
    content: 'Learn about the benefits of garlic and how to use it in your favorite dishes. Garlic not only adds flavor to your meals but also boasts numerous health benefits. Discover the versatility of this kitchen staple and explore creative ways to incorporate it into various recipes. From roasted garlic to garlic-infused oils, unlock the secrets of this aromatic ingredient.',
    image: 'https://i.pinimg.com/236x/c2/62/d0/c262d0446e7e884a556ed7a78fb08fc1.jpg' 
  },
  { 
    id: 4, 
    title: 'Seasonal Delights: Summer Salads', 
    content: 'Explore refreshing salad recipes perfect for the summer season. Dive into a world of vibrant colors and fresh flavors as you discover delicious salad combinations that will keep you cool and satisfied during the warmer months. From classic Caesar salads to inventive fruit and nut mixes, these recipes will become your go-to for light and satisfying meals.',
    image: 'http://surl.li/nsddp' 
  },
  { 
    id: 5, 
    title: 'Behind-the-Scenes: A Day in the Kitchen', 
    content: 'Get a sneak peek into our kitchen and the process of developing new recipes. Join us behind the scenes as we share the creative chaos, the moments of inspiration, and the dedication that goes into crafting each culinary masterpiece. Discover the teamwork and passion that fuels our kitchen adventures.',
    image: 'http://surl.li/nsdep' 
  },
  { 
    id: 6, 
    title: 'Healthy Living: Nutritional Boosters', 
    content: 'Discover ingredients that add a nutritional punch to your meals. Dive into the world of superfoods, antioxidants, and nutrient-rich additions that enhance the health benefits of your favorite recipes. From chia seeds to kale, learn how to incorporate these nutritional powerhouses into your daily cooking for a healthier and more vibrant lifestyle.',
    image: 'http://surl.li/nsdgs' 
  },
  { 
    id: 7, 
    title: 'Perfect Pairings: Wine and Dine', 
    content: 'Explore wine pairings that elevate your dining experience with our recipes. Whether you\'re a wine enthusiast or a casual sipper, discover the art of pairing wines with different cuisines. From reds that complement hearty dishes to crisp whites that enhance seafood flavors, unlock the secrets to creating memorable dining experiences at home.',
    image: 'https://i.pinimg.com/236x/16/2a/59/162a5913bef8433c291d790fd9edd253.jpg' 
  },
  { 
    id: 8, 
    title: 'Guest Post: A Chef’s Perspective', 
    content: 'Renowned chef shares insights and a special recipe exclusively for our readers. Step into the world of professional chefs as they reveal their culinary philosophies, favorite techniques, and the inspiration behind their signature dishes. Gain valuable tips from the experts and elevate your cooking skills with a unique perspective from the culinary world.',
    image: 'http://surl.li/nsdjq' 
  },
  { 
    id: 9, 
    title: 'Recipe Roundup: Comfort Food Classics', 
    content: 'Indulge in timeless comfort food recipes that bring warmth and joy. Rediscover classic dishes that have stood the test of time and continue to bring comfort to kitchens around the world. From hearty stews to creamy mac cheese, these recipes will evoke feelings of nostalgia and satisfy your cravings for soul-soothing comfort food.',
    image: 'http://surl.li/nsdmi' 
  },
  { 
    id: 10, 
    title: 'User Spotlight: Your Recipe Creations', 
    content: 'Highlighting amazing dishes created by our readers. Share your culinary masterpieces! Each month, we feature the most creative and delicious recipes submitted by our community. Whether you\'re a seasoned chef or a home cook, your creations deserve the spotlight. Join us in celebrating the diversity and talent of our amazing readers.',
    image: 'http://surl.li/nsdnv' 
  },
  { 
    id: 11, 
    title: 'International Flavors: Thai Cuisine', 
    content: 'Embark on a culinary journey with authentic Thai recipes and flavors. Thai cuisine is renowned for its balance of sweet, spicy, sour, and salty flavors, creating dishes that are both vibrant and aromatic. Explore traditional recipes like Pad Thai, Green Curry, and Tom Yum soup. Learn about essential Thai ingredients and cooking techniques that bring the magic of Thailand to your kitchen.',
    image: 'http://surl.li/nsdoo' 
  },
  { 
    id: 12, 
    title: 'Baking Bliss: Irresistible Desserts', 
    content: 'Satisfy your sweet tooth with decadent dessert recipes and baking tips. From rich chocolate cakes to delicate pastries, indulge in a world of sweet creations. Learn the art of perfecting flaky pie crusts, creating show-stopping cakes, and mastering the technique of French pastries. Elevate your baking skills and impress your friends and family with irresistible homemade desserts.',
    image: 'https://i.pinimg.com/236x/2a/86/40/2a864028c6cf41e9d037bdf6e74e07be.jpg' 
  },
  { 
    id: 13, 
    title: 'Quick and Easy: 30-Minute Meals', 
    content: 'Discover delicious recipes that can be prepared in just 30 minutes or less. Life gets busy, but that doesn\'t mean you have to compromise on flavor. Explore a collection of quick and easy recipes that fit into your hectic schedule without sacrificing taste. From speedy stir-fries to simple pasta dishes, these recipes will become your go-to solutions for busy weeknights.',
    image: 'https://i.pinimg.com/236x/d3/d7/95/d3d7954678d28d2e240a0d51a7df0751.jpg' 
  },
  { 
    id: 14, 
    title: 'Homemade Condiments: Elevate Your Dishes', 
    content: 'Learn how to make flavorful homemade condiments to enhance your meals. Elevate your culinary creations with a touch of homemade goodness. From tangy barbecue sauce to zesty aioli, discover easy-to-make condiments that add a burst of flavor to your favorite dishes. Say goodbye to store-bought options and savor the satisfaction of crafting your own delicious accompaniments.',
    image: 'https://i.pinimg.com/236x/e5/56/61/e556611ea1a8c04ed7880239fe355d7d.jpg' 
  },
  { 
    id: 15, 
    title: 'Vegetarian Delights: Meatless Marvels', 
    content: 'Explore a collection of satisfying and hearty vegetarian recipes for all occasions. Whether you follow a vegetarian lifestyle or simply want to incorporate more plant-based meals into your diet, these recipes are sure to delight your taste buds. From flavorful veggie burgers to vibrant salads, discover the delicious world of meatless marvels.',
    image: 'https://i.pinimg.com/564x/af/b8/85/afb88599c15c4d3a348b9786bd18b8c1.jpg' 
  },
  { 
    id: 16, 
    title: 'Holiday Feast: Festive Recipes for Celebrations', 
    content: 'Prepare for the holiday season with a selection of festive and flavorful recipes. From Thanksgiving feasts to Christmas dinners, explore a variety of dishes that will add joy to your holiday celebrations. Whether you\'re hosting a festive gathering or looking for the perfect dish to bring to a potluck, these recipes are guaranteed to spread holiday cheer.',
    image: 'http://surl.li/nsdjq' 
  },
  { 
    id: 17, 
    title: 'Outdoor Grilling: BBQ Extravaganza', 
    content: 'Master the art of outdoor grilling with mouthwatering BBQ recipes and tips. Fire up the grill and embrace the flavors of outdoor cooking. From perfectly grilled steaks to smoky barbecue chicken, explore recipes that will make your next backyard BBQ a sizzling success. Learn about different grilling techniques and bring the joy of BBQ to your family and friends.',
    image: 'https://i.pinimg.com/236x/f4/87/32/f48732176f34fb4749ff5ae0adca126e.jpg' 
  },
  { 
    id: 18, 
    title: 'Soup Season: Comforting Bowls for Every Palate', 
    content: 'Warm up with a variety of comforting soup recipes to suit every taste preference. As the weather cools down, there\'s nothing more satisfying than a bowl of steaming hot soup. Explore hearty stews, creamy bisques, and flavorful broths that will keep you cozy all season long. Get ready to embrace the comfort and warmth of soul-soothing soup.',
    image: 'https://i.pinimg.com/236x/2a/86/40/2a864028c6cf41e9d037bdf6e74e07be.jpg' 
  },
  { 
    id: 19, 
    title: 'Weeknight Wonders: Quick Family Dinners', 
    content: 'Discover easy and delicious weeknight dinner recipes perfect for the whole family. Juggling work, school, and extracurricular activities can be hectic, but dinner doesn\'t have to be stressful. Explore a collection of quick and family-friendly recipes that can be whipped up in no time. From one-pan wonders to kid-approved favorites, these recipes will make weeknight dinners a breeze.',
    image: 'https://i.pinimg.com/236x/7d/01/51/7d01517f3f05d28fac3d968981589c00.jpg' 
  },
  { 
    id: 20, 
    title: 'DIY Kitchen Projects: Culinary Creations', 
    content: 'Embark on creative kitchen projects and experiments to elevate your culinary skills. Turn your kitchen into a laboratory of culinary creativity. From crafting your own pasta from scratch to fermenting flavorful pickles, explore DIY projects that will enhance your cooking abilities. Get ready to impress friends and family with your culinary creations and the satisfaction of making things from scratch.',
    image: 'https://i.pinimg.com/236x/cb/a0/a4/cba0a401c96b10344227fa073da943d1.jpg' 
  },
];
// Existing endpoint to get blog posts
app.get('/blogs', (req, res) => {
  res.json(blogPosts);
});

