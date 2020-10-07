import React, { Component } from 'react';
import images from '../../images/pic222.jpg';
import './About.css';

class About extends Component {
  render() {
    return (
      <div className='about-section' id='about'>
        <div className='aboutinfo'>
          <span className='aboutTitle'>
            <h4>About</h4>
          </span>
          <div className='about'>
            <div className='aboutImg'>
              <img src={images} alt='' />
            </div>
            <div className='aboutDetails'>
              <h2>
                AZEEZ <br /> JAMIU ADEWALE
              </h2>
              <p className='title'>Front-End Web Developer</p>
              <div className='infoDetails'>
                <span className='infoDetails'>
                  <p>
                    I'm a Frontend developer, I enjoy building responsive
                    websites and creating elegant solutions through code. I'm
                    also a student studying Electronic and computer engineering
                    currently in my final year. <br /> Here are a few
                    technologies I've been working with recently: HTML, CSS,
                    Dart, Javascript, React, Flutter, Figma, InVision.
                  </p>
                </span>
              </div>

              <div className='aboutInfo'>
                <div className='contactDetails'>
                  <i className='fas fa-phone-alt'></i>
                  <a href='tel:+2348125740890'>+234-812-574-0890</a>
                </div>
                <div className='contactDetails location'>
                  <i className='fas fa-home'></i>
                  <p>Lagos, Nigeria</p>
                </div>

                <div className='contactDetails'>
                  <i className='far fa-envelope'></i>

                  <a href='mailto:jamiuazeez49@gmail.com'>
                    jamiuazeez49@gmail.com
                  </a>
                </div>
              </div>
              <div className='contactlink'>
                <div className='social-media'>
                  <a href='https://github.com/Jhaameehu' target='blank'>
                    <i className='fab fa-github'></i>
                  </a>
                </div>
                <div className='social-media'>
                  <a href='https://github.com/Jhaameehu'>
                    <i className='fab fa-twitter'></i>
                  </a>
                </div>
                <div className='social-media'>
                  <a href='https://linkedin.com/azeez-jamiu'>
                    <i className='fab fa-linkedin'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
