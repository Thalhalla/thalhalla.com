import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
  <Layout pageTitle="About Thalhalla">
    <main>
      <p>Hi there! We are a generator of intellectual property.</p>
    </main>
  </Layout>
  )
}

export const Head = () => <Seo title="About Thalhalla" />

export default AboutPage
