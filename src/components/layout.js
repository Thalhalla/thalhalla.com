import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import {
  thalhalla,
  siteTitle,
  container,
  heading
} from '../styles/layout.module.css'
import Nav from './nav'

const Layout = ({ pageTitle, children }) => {
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
    <div className={container}>
      <header className={thalhalla}>{data.site.siteMetadata.title}</header>
      <Nav/>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout
