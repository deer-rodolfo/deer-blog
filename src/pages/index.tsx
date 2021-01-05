import React from 'react'
import { graphql } from 'gatsby'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Bio from '../components/bio'
import Post from '../components/post'

export default function IndexPage({ data }) {
  const { title, author } = useSiteMetadata()
  return (
    <Layout>
      <SEO title={title} />
      <Bio author={author} />
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Post key={node.id} data={node} />
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            description
            type
            image {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
