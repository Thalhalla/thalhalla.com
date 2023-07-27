import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import {
  thalstyle,
  swanky,
  opensans,
  nabla,
  caveat,
  trochut
} from '../styles/fonts.module.css'

const FontsPage = () => {
  return (
  <Layout pageTitle="Thalhalla Fonts">
    <main>
      <hr className={thalstyle}/>
      <h1 className={swanky}>Thalhalla swanky</h1>
      <hr className={thalstyle}/>
      <h1 className={opensans}>Thalhalla opensans</h1>
      <hr className={thalstyle}/>
      <h1 className={nabla}>Thalhalla nabla</h1>
      <hr className={thalstyle}/>
      <h1 className={caveat}>Thalhalla caveat</h1>
      <hr className={thalstyle}/>
      <h1 className={trochut}>Thalhalla trochut</h1>
      <hr className={thalstyle}/>
      <p>
        Docs for gatsby + fonts here:
        <a href='https://www.gatsbyjs.com/docs/how-to/styling/using-web-fonts/'>
          gatsbyjs.com/docs/how-to/styling/using-web-fonts/
        </a>
      </p>
    </main>
  </Layout>
  )
}

export const Head = () => <Seo title="Thalhalla Fonts" />

export default FontsPage
