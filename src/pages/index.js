import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Seo from '../components/seo'

// Step 2: Define your component
const IndexPage = () => {
  return (
  <Layout pageTitle="Thalhalla">
    <main>
      <StaticImage src="./hammerTime.jpg" alt="Odin's hammer"></StaticImage>
    </main>
  </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />
// Step 3: Export your component
export default IndexPage
