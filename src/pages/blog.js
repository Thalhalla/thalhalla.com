import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const BlogPage = ({data}) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>{node.frontmatter.name}</h2>
            <p>Posted: {node.frontmatter.datePublished}</p>
            <p>{node.excerpt}</p>
          </article>
        ))
      }
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {frontmatter: {datePublished: DESC}}) {
      nodes {
        frontmatter {
          author
          datePublished(formatString: "MMMM D, YYYY")
          name
          slug
        }
        id
        excerpt
        parent {
          ... on File {
            id
            name
            modifiedTime
          }
        }
      }
    }
  }
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage
