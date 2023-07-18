import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  navLinks,
  navLinkItem,
  navLinkText
} from './layout.module.css'

const Nav = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <nav>
      <ul className={navLinks}>
        <li className={navLinkItem}>
          <Link to="/" className={navLinkText}>
            Home
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
          <Link to="/debug" className={navLinkText}>
            Debug
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
