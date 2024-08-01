import React from 'react';
import reactLogo from '../assets/pantry-tracker-logo.jpeg';

const Header = () => {
  return (
    <div className="flex justify-center my-4">
      <a href="#">
        <img src={reactLogo} className="w-32 h-32" alt="Pantry Tracker logo" />
      </a>
    </div>
  );
};

export default Header;
