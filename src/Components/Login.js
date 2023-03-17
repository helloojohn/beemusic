import React from 'react';
import "../Styles/Login.css";
import bees from "../image/bees.svg";

function Login() {
  return (
    <div className="container">
      <div className="logo">
        <img src={bees} className="bee" alt="logo" />
        <h1>
          <span className="music">Bee</span>Music
        </h1>
      </div>
      <button className='button'>Connect</button>
    </div>
  );
}

export { Login };