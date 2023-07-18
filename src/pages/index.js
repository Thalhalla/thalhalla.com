import * as React from 'react'
import { Link } from 'gatsby'
import hammerTime from "./hammerTime.jpg";
import Layout from '../components/layout'

// Step 2: Define your component
const IndexPage = () => {
  return (
  <Layout pageTitle="Thalhalla">
    <main>
      <img src={hammerTime} height="242" alt="Thalhammer" className='Thor-center' />
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
