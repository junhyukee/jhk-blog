import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import think from '../img/think.svg'
import linkedin from '../img/linkedin.svg'
import twitter from '../img/twitter.svg'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={think} alt="think" style={{ transform: 'scale(1.5)' }} />
          </figure>
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          About
        </Link>
        <Link className="navbar-item" to="/products">
          Products
        </Link>
      </div>
      <div className="navbar-end">
        <a
          className="navbar-item"
          href="https://twitter.com/jhkdev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={twitter} alt="twitter" />
          </span>
        </a>
        <a
          className="navbar-item"
          href="https://www.linkedin.com/in/junhyukkim"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={linkedin} alt="LinkedIn" />
          </span>
        </a>
        <a
          className="navbar-item"
          href="https://github.com/junhyukee"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={github} alt="Github" />
          </span>
        </a>
      </div>
    </div>
  </nav>
)

export default Navbar
