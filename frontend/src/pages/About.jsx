import React from "react";
import "../App.css"; // Import CSS for styling

const About = () => {
  return (
    <div className="about-container">
      <div className="about-box">
        <h2>About RecipeRipple</h2>
        <p>
          Welcome to <strong>RecipeRipple</strong>, your go-to platform for discovering and sharing delicious recipes! 
          Whether you're a home cook, a professional chef, or someone who just loves food, we provide a space where 
          you can explore, create, and share amazing dishes from around the world.
        </p>
        <h3>Why Choose RecipeRipple?</h3>
        <ul>
          <li>🌟<b>User-Friendly</b>: Easily browse, upload, and share recipes.</li>
          <li>📖<b>Diverse Collection</b>: Vegetarian, Non-Vegetarian, Smoothies, Breakfast, and more!</li>
          <li>👨‍🍳<b>Community Driven</b>: Connect with fellow food lovers and share your best recipes.</li>
          <li>🔍<b>Search & Save</b>: Find and bookmark your favorite recipes.</li>
        </ul>
        <p>
          <i>Join us and start your culinary journey today! 🚀</i>
        </p>
      </div>
    </div>
  );
};

export default About;
