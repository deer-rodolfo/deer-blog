import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

export default ({ data }) => {
  const post = data.markdownRemark
  const dateStyle = {
    fontSize: "0.9rem",
  }
  const imageStyle = {
    margin: "1rem auto",
    maxWidth: "600px",
  }
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <div>
        <h1>{post.frontmatter.title}</h1>
        <p style={dateStyle}>{post.frontmatter.date}</p>
        <Img
          fluid={post.frontmatter.image.childImageSharp.fluid}
          style={imageStyle}
        />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        image {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
