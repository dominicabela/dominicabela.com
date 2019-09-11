import React from 'react'
import { Link } from 'gatsby'

//import avatar from '../assets/images/monogram.png'
import avatar from '../assets/images/headshot.jpg'

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <Link to="/" className="image avatar">
            <img src={avatar} alt="" />
          </Link>
          <h1>Dominic Abela</h1>
          <h4>Student • Developer • Artist</h4>
        </div>
        <div id="footer">
          <div className="inner">
            <ul className="icons">
              <li>
                <a
                  href="https://www.linkedin.com/in/dominic-abela/"
                  className="icon fa-linkedin"
                >
                  <span className="label">LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/dominicabela"
                  className="icon fa-github"
                >
                  <span className="label">Github</span>
                </a>
              </li>
              <li>
                <a href="mailto:abelad@cua.edu" className="icon fa-envelope-o">
                  <span className="label">Email</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
