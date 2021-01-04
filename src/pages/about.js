import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h2>A bit about myself</h2>
    <p>
      Olá! My name is Rodolfo, I am Portuguese and I was born in a small island
      named Pico, in the middle of the Atlantic. I currently live in Leipzig,
      Germany.
    </p>
    <p>
      My first passion in tech was aircrafts however, destiny brought me to work
      in the web as a front-end developer.
    </p>

    <h3>Cookies & Data Privacy</h3>
    
    <p>
      This page does not make use of cookies. This page does not gather or
      process your personal information. Pages linked may have their own privacy
      agreements and cookies, be sure to inform about these when
      visiting them.
    </p>
    <p>
      Source code of this page can be found&nbsp;
      <a href="https://github.com/deer-rodolfo/deer-blog">here</a>.

      Feel free to <Link to="/contact">contact me</Link>.
    </p>
  </Layout>
)

export default AboutPage
