import React, { Component } from 'react';
import './Home.css';
class Home extends Component {
  render() {
    return (
      <div className='home-section' id='home'>
        <div className='heroPage'>
          <div className='contact-link'>
            <div className='social-media'>
              <a href='https://github.com/Jhaameehu' target='blank'>
                <i className='fab fa-github'></i>
              </a>
            </div>
            <div className='social-media'>
              <a href='https://twitter.com/Jhaameehu'>
                <i className='fab fa-twitter'></i>
              </a>
            </div>
            <div className='social-media'>
              <a href='https://linkedin.com/azeez-jamiu'>
                <i className='fab fa-linkedin'></i>
              </a>
            </div>
          </div>
          <div className='container'>
            <p className='welcome'> Hello, I'm</p>
            <h1 className='dev-name'>Azeez Jamiu.</h1>
            <h2 className='dev-about'>
              I'm passionate about web architecture.
            </h2>
            <span className='sub-title'>
              <p>
                I'm a frontend developer based in Lagos State, Nigeria. I enjoy
                building responsive websites and creating elegant solutions.
              </p>
            </span>

            <div className='mailLink'>
              <a href='mailto:jamiuazeez49@gmail.com' target='blank'>
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
