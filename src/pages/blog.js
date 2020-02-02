import React from 'react'
import Layout from '../components/layout';
import { useStaticQuery, graphql } from 'gatsby';

const Blog = () => {
  const data = useStaticQuery(graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
  `);
  return (
    <Layout>
      <h1>Blog</h1>
      <ul>
        {data.allMarkdownRemark.edges.map((edge, ix) => {
          return (
            <li key={ix}>
              <h2>{edge.node.frontmatter.title}</h2>
              <p>{edge.node.frontmatter.date}</p>
            </li>)
        })}
      </ul>
    </Layout>
  )
}

export default Blog
