import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>Seems like this page does not exist...tut mir leid</p>
    <Link to="/">Jump to the homepage.</Link>
  </Layout>
)

export default NotFoundPage
