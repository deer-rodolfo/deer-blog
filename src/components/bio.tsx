import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import './bio.scss'

type BioProps = { author: string }

const Bio = ({ author }: BioProps) => {
  const data = useStaticQuery(graphql`
    query {
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
            {author}
          </a>
        </h4>
        <p>
          Olá, I am a portuguese developer and here are some clouds.
        </p>
      </div>
    </section>
  )
}

export default Bio
