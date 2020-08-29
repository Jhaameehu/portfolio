import React, { Component } from 'react';
import './Projects.css';
import '@fortawesome/fontawesome-free/css/all.css';

class Projects extends Component {
  render() {
    return (
      <div className='projects'>
        <div className='wrap'>
          <ul>
            <li className='projectsssss'>
              <div className='project-wrapper'>
                <h3>Crown</h3>
                <h3>Wears</h3>
                <p className='project-details'>React, Firebase, Material UI.</p>
              </div>
              <div className='github-link'>
                <a href='https://google.com' target='blank'>
                  <i className='fas fa-eye'>
                    <span>Visit</span>
                  </i>
                </a>
                <a href='https://google.com' target='blank'>
                  <i className='fab fa-github'>
                    <span>Code</span>
                  </i>
                </a>
              </div>
            </li>

            <li>
              <div className='project-wrapper'>
                <h3>Weather</h3>
                <h3>Finder</h3>
                <p className='project-details'>React</p>
              </div>
              <div className='github-link'>
                <a href='https://google.com' target='blank'>
                  <i className='fas fa-eye'>
                    <span>Visit</span>
                  </i>
                </a>
                <a href='https://google.com' target='blank'>
                  <i className='fab fa-github'>
                    <span>Code</span>
                  </i>
                </a>
              </div>
            </li>

            <li>
              <div className='project-wrapper'>
                <h3>Portfolio</h3>
                <h3>Website</h3>
                <p className='project-details'>React</p>
              </div>
              <div className='github-link'>
                <a href='https://google.com' target='blank'>
                  <i className='fas fa-eye'>
                    <span>Visit</span>
                  </i>
                </a>
                <a href='https://google.com' target='blank'>
                  <i className='fab fa-github'>
                    <span>Code</span>
                  </i>
                </a>
              </div>
            </li>

            <li>
              <div className='project-wrapper'>
                <h3>Covid-19</h3>
                <h3>Tracker</h3>
                <p className='project-details'>React, Material UI</p>
              </div>
              <div className='github-link'>
                <a href='https://google.com' target='blank'>
                  <i className='fas fa-eye'>
                    <span>Visit</span>
                  </i>
                </a>
                <a href='https://google.com' target='blank'>
                  <i className='fab fa-github'>
                    <span>Code</span>
                  </i>
                </a>
              </div>
            </li>

            <li>
              <div className='project-wrapper'>
                <h3>Budget</h3>
                <h3>App</h3>
                <p className='project-details'>React</p>
              </div>
              <div className='github-link'>
                <a href='https://google.com' target='blank'>
                  <i className='fas fa-eye'>
                    <span>Visit</span>
                  </i>
                </a>
                <a href='https://google.com' target='blank'>
                  <i className='fab fa-github'>
                    <span>Code</span>
                  </i>
                </a>
              </div>
            </li>
          </ul>
        </div>
        {/* <div className='data-con'>
          <span className='projectsssss'> hover me</span>
        </div> */}
      </div>
    );
  }
}
export default Projects;
