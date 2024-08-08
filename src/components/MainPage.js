import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css'; // Optional for styling

const MainPage = () => {
  return (
    <div className="main-page">
      <h1>Welcome</h1>
      <div className="buttons">
        <Link to="/admin-login">
          <button className="button">Admin Login</button>
        </Link>
        <Link to="/customer-login">
          <button className="button">Customer Login</button>
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
