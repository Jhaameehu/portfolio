import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const UL = styled.li`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  color: #e5e5e5;
  font-size: 13px;
  li {
    padding: 30px 10px;
    cursor: default;
    // float: right;
  }

  @media (max-width: 1200px) {
    // display: none;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: rgb(17, 17, 26);
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    // text-align: center;
    li {
      margin-left: 20px;
      font-size: 15px;
    }
  }
`;

const SidebarData = ({ open }) => {
  return (
    <UL className='sidebar navbar' open={open}>
      <li className='options'>
        <Link
          className='option'
          activeClass='active'
          to='home'
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Home
        </Link>
      </li>
      <li className='options'>
        <Link
          className='option'
          activeClass='active'
          to='about'
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          About
        </Link>
      </li>
      <li className='options'>
        <Link
          className='option'
          activeClass='active'
          to='projects'
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Projects
        </Link>
      </li>
      <li className='options'>
        <Link
          className='option'
          activeClass='active'
          to='contact'
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Contact
        </Link>
      </li>
      <li className='options'>
        <div>
          <a
            className='contact'
            href='https://drive.google.com/file/d/1NdkmuOJcTbPCf8xIuxlmJpjhTiaGUloJ/view?usp=drivesdk'
            target='blank'
          >
            Resume
          </a>
        </div>
      </li>
    </UL>
  );
};
export default SidebarData;
