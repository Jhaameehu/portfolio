import React, { useState } from 'react';
import styled from 'styled-components';
import RightNav from './RightNav';

const StyledBurger = styled.div`
  width: 2rem;
  height: 1.6rem;
  position: fixed;
  top: 25px;
  right: 10px;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 1.5rem;
    height: 0.1rem;
    // margin-bottom: 10px;
    background-color: ${({ open }) => (open ? '#EA5455' : '#EA5455')};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(50deg)' : 'rotate(0)')};
      height: 2.5px;
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
      width: 1rem;
      height: 2.5px;
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-50deg)' : 'rotate(0)')};
      height: 2.5px;
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} />
    </>
  );
};
export default Burger;
