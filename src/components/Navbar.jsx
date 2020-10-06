import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import images from '../images/logo.png';

const Nav = styled.nav`
  background-color: rgb(6, 6, 10);
  width: 100vw;
  height: 75px;
  // padding: 0 30px;
  display: flex;
  position: fixed;
  justify-content: space-between;
  .logo img {
    padding: 30px 0;
    width: 130px;
    margin-left: 45px;
  }

  @media (max-width: 768px) {
    position: unset;
    .logo img {
      margin-left: 25px;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div className='logo'>
        <img src={images} alt='logo' />
      </div>

      <Burger />
    </Nav>
  );
};

export default Navbar;
