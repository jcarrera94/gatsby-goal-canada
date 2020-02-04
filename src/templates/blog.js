import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby';

export const query = graphql`
query (
    $slug: String!
  ) {
    markdownRemark (
      fields: {
        slug: {
          eq: $slug
        }
      }
    ) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

const Blog = () => {
  return (
    <Layout>
      This is the blog template.
    </Layout>
  )
}

export default Blog;
 