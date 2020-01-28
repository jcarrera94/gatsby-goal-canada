import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);
  return (
    <footer>
      <small>Created by {data.site.siteMetadata.author}, © {new Date().getFullYear()}</small>
    </footer>
  )
}

export default Footer
