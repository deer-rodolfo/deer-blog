import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faLinkedinIn,
  faXing,
} from "@fortawesome/free-brands-svg-icons"

import Layout from "../components/layout"
import SEO from "../components/seo"

const iconStyle = {
  fontSize: "1.3rem",
  margin: ".5rem 1rem 0.5rem 0",
  backgroundImage: "none",
}

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h2>Feel free to contact me</h2>
    <a
      href="https://github.com/deer-rodolfo"
      rel="noopener noreferrer"
      target="_blank"
      style={iconStyle}
    >
      <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
    </a>
    <a
      href="https://www.linkedin.com/in/rodolfo-dutra/"
      rel="noopener noreferrer"
      target="_blank"
      style={iconStyle}
    >
      <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
    </a>
    <a
      href="https://www.xing.com/profile/Rodolfo_Dutra"
      rel="noopener noreferrer"
      target="_blank"
      style={iconStyle}
    >
      <FontAwesomeIcon icon={faXing}></FontAwesomeIcon>
    </a>
    <p style={iconStyle}>rodolfo.dutra[at]protonmail.com</p>
  </Layout>
)

export default ContactPage
