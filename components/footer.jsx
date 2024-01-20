import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './stylesheets/footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-item">
          <h3>Maaz Saboowala</h3>
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
        
      
      </div>
      <div className="footer-content">
        <div className="footer-item">
          <h3>Shobit Gupta</h3>
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
        
      
      </div>
      <div className="footer-content">
        <div className="footer-item">
          <h3>Shalin Bhat</h3>
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
        
      
      </div>
    </footer>
  );
};

export default Footer;
