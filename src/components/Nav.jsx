/** @jsxRuntime classic */ 
/** @jsx jsx */
import { jsx } from "theme-ui"
//import React from 'react';
import * as React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types';
import { Button } from './Button';
import './nav.css';
import {
  navLinks,
  navLinkItem,
  navLinkText
} from '../styles/nav.module.css'

export const Nav = ({ user, onLogin, onLogout, onCreateAccount }) => (
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
);

Nav.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Nav.defaultProps = {
  user: null,
};
