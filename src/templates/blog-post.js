import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostContent from "../components/postContent"

export default ({ data }) => {
  const post = data.markdownRemark
  const dateStyle = {
    fontSize: "0.9rem",
  }
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <div>
        <h1>{post.frontmatter.title}</h1>
        <p style={dateStyle}>{post.frontmatter.date}</p>
        <PostContent
          imgSrc={post.frontmatter.image.childImageSharp.fluid}
          description={post.frontmatter.description}
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
        description
        image {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
