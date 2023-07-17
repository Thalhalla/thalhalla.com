// Step 1: Import React
import * as React from 'react'
import hammerTime from "./hammerTime.jpg";

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <h1>Thalhalla</h1>
      <img src={hammerTime} height="242" alt="Thalhammer" className='Thor-center' />
    </main>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Thalhalla</title>

// Step 3: Export your component
export default IndexPage
