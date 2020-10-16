import React from 'react';
import profileImage from './img/87.JPG';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
      <h2>Author: Ihor Don</h2>
      <img className="image" src={profileImage} alt="profile-image" />
    </div>
  );
}

export default App;
