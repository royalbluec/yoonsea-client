import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/explore">Explore</Link>
      <Link to="/create">Create</Link>
      <Link to="/account">Account</Link>
    </div>
  );
};

export default Header;
