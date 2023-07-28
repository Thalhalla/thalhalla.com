import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import {
  thalhalla,
  siteTitle,
  container,
  heading
} from '../styles/layout.module.css'
import Nav from './nav'
import { Header } from './Header';

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
  const [user, setUser] = React.useState();

  return (
    <div>
      <Header
        user={user}
        onLogin={() => setUser({ name: 'Jane Doe' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'Jane Doe' })}
      >
        {data.site.siteMetadata.title}
      </Header>
    <div className={container}>
      <Nav/>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
    </div>
  )
}

export default Layout
