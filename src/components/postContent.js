import React from "react"
import Img from "gatsby-image"
import "./post.scss"

const PostContent = ({ imgSrc, description }) => (
  <div className="post__content">
    <Img fluid={imgSrc} className="post__content-image" />
    <p className="post__description">{description}</p>
  </div>
)

export default PostContent
