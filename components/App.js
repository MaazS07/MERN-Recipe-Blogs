// App.js
import React from 'react';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import RandomRecipesPage from './RandomRecipesPage';
import Main from './main';
import './App.css';
import Blogs from './Blogs';
import Contacts from './Contacts';
import Home from './Home';





const App = () => {
  return (
    <>
   
    <Router>
      <div>
      <Routes>
          <Route path="/search" element={<Main />} />
          <Route path="/recipes" element={<RandomRecipesPage />} />
        </Routes>
        <Routes>
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
        <Routes>
          <Route path="/contactus" element={<Contacts />} />
        </Routes>
      </div>
    </Router>
  </>
   
  );
  
  
};

export default App;
