import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./bio.scss"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          description
        }
      }
      placeholderImage: file(
        relativePath: { eq: "images/profile-rodolfo.jpg" }
      ) {
        childImageSharp {
          fixed(width: 90, height: 90, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <section className="bio-section">
      <Img
        className="avatar"
        fixed={data.placeholderImage.childImageSharp.fixed}
      />
      <div className="description">
        <h4>
          <a
            href="https://www.linkedin.com/in/rodolfo-dutra/"
            rel="noopener noreferrer"
            target="_blank"
          >
            {data.site.siteMetadata.author}
          </a>
        </h4>
        <p>{data.site.siteMetadata.description}</p>
      </div>
    </section>
  )
}

export default Bio
