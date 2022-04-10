import React from 'react';
import { Link } from 'react-router-dom';
import { Block, Left, Right } from './styles/Header.styles';

const Header = () => {
  return (
    <Block>
      <Left>
        <Link to="/">YoonSea</Link>
      </Left>
      <Right>
        <Link to="/explore">Explore</Link>
        <Link to="/create">Create</Link>
        <Link to="/account">Account</Link>
      </Right>
    </Block>
  );
};

export default Header;
