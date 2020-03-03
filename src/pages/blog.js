import React from 'react';
import Layout from '../components/layout';
import { useStaticQuery, graphql, Link } from 'gatsby';

import blogStyles from './blog.module.scss';

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
          fields {
            slug 
          }
        }
      }
    }
  }
  `);
  return (
    <Layout>
      <h1>Blog</h1>
      <ul className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map((edge, ix) => {
          return (
            <li className={blogStyles.post} key={ix}>
              <Link to={`blog/${edge.node.fields.slug}`}>
                <h2>{edge.node.frontmatter.title}</h2>
                <p>{edge.node.frontmatter.date}</p>
              </Link>
            </li>)
        })}
      </ul>
    </Layout>
  )
}

export default Blog
