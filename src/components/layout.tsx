/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import Header from "./header"
import "./layout.scss"

type LayoutProps = {children:  JSX.Element[] | JSX.Element}

const Layout = ({children}: LayoutProps) => {
  const { title } = useSiteMetadata()
  return (
    <>
      <div className="container">
        <Header siteTitle={title} />
        <main>{children}</main>
        <footer>© {new Date().getFullYear()} Rodolfo Dutra</footer>
      </div>
    </>
  )
}

export default Layout
