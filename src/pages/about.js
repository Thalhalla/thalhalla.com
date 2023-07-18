import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
  <Layout pageTitle="About Thalhalla">
    <main>
      <p>Hi there! We are a generator of intellectual property.</p>
    </main>
  </Layout>
  )
}

export const Head = () => (
  <>
    <title>About Thalhalla</title>
    <meta name="description" content="About Thalhalla Studios" />
  </>
)

export default AboutPage
