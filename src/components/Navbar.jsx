import React, { Component } from 'react';
import { Link } from 'react-scroll';
import images from '../images/logo.png';

class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className='header'>
          <div className='navbar'>
            <Link
              className='logo-container'
              activeClass='active'
              to='home'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <img src={images} alt='logo' />
            </Link>
            <div className='options'>
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

              <a
                className='contact'
                href='https://drive.google.com/file/d/1NdkmuOJcTbPCf8xIuxlmJpjhTiaGUloJ/view?usp=drivesdk'
                target='blank'
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
export default Navbar;
