import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

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

// You'll learn about this in the next task, just copy it for now
export const Head = () => (
  <>
    <title>Thalhalla</title>
    <meta name="description" content="Thalhalla Studios" />
  </>
)
// Step 3: Export your component
export default IndexPage
