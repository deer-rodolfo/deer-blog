import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import PostContent from "./postContent"
import "./post.scss"

const Post = ({ data }) => (
  <Link to={data.fields.slug} className="post__link">
    <div className="post__card">
      <h3 className="post__title">{data.frontmatter.title}</h3>
      <p className="post__date">{data.frontmatter.date}</p>
      {data.frontmatter.type === "post" ? (
        <PostContent
          imgSrc={data.frontmatter.image.childImageSharp.fluid}
          description={data.frontmatter.description}
        />
      ) : (
        <Img
          fluid={data.frontmatter.image.childImageSharp.fluid}
          className="post__main-image"
        />
      )}
    </div>
    <hr className="post__separator"/>
  </Link>
)

Post.propTypes = {
  data: PropTypes.object,
}

Post.defaultProps = {
  data: {},
}

export default Post
