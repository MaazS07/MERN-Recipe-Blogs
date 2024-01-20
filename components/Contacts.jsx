// Contacts.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { FaPaperPlane } from 'react-icons/fa';
import './stylesheets/Contacts.css';
import Navbar from './Navbar';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    recipes: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3002/submit', formData);

      console.log(response.data); 
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="MainContact">
        <div className="contact">
          <h1>Reach Us</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <label htmlFor="phone">Phone</label>
            <input
              type="number"
              name="phone"
              placeholder="730XXXXXXXXXXX"
              value={formData.phone}
              onChange={handleChange}
            />
            <label htmlFor="recipes">Recipes You Wish We Add</label>
            <textarea
              name="recipes"
              cols="30"
              rows="10"
              value={formData.recipes}
              onChange={handleChange}
            ></textarea>
            <button type="submit" className="contactB">
              <FaPaperPlane className="conicon" /> Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contacts;
