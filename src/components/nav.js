import * as React from 'react'
import { Link } from 'gatsby'
import {
  navLinks,
  navLinkItem,
  navLinkText
} from '../styles/nav.module.css'

const Nav = ({ pageTitle, children }) => {
  return (
    <nav>
      <ul className={navLinks}>
        <li className={navLinkItem}>
          <Link to="/" className={navLinkText}>
            Home
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/privacy" className={navLinkText}>
            Privacy Policy
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/about" className={navLinkText}>
            About
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/blog" className={navLinkText}>
            Blog
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/fonts" className={navLinkText}>
            Fonts
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
