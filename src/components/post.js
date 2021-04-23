import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import PostContent from './postContent'
import './post.scss'

const PostType = ({ data }) => {
  switch (data.frontmatter.type) {
    case 'post':
      return (
        <PostContent
          imgSrc={data.frontmatter.image.childImageSharp.fluid}
          description={data.frontmatter.description}
        />
      )
    case 'image':
    default:
      return (
        <Img
          fluid={data.frontmatter.image.childImageSharp.fluid}
          className="post__main-image"
        />
      )
  }
}

const Post = ({ data }) => {
  if (data.frontmatter.type)
    return (
      <Link to={data.fields.slug} className="post__link">
        <div className="post__card">
          <h3 className="post__title">{data.frontmatter.title}</h3>
          <p className="post__date">{data.frontmatter.date}</p>
          <PostType data={data} />
        </div>
        <hr className="post__separator" />
      </Link>
    )
  else 
    return null
}

Post.propTypes = {
  data: PropTypes.object,
}

Post.defaultProps = {
  data: {},
}

export default Post
