import { useStaticQuery, graphql } from "gatsby"

type siteMetadata = {
  title: string, 
  author: string
}

export const useSiteMetadata = (): siteMetadata => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            author
          }
        }
      }
    `
  ) 
  return site.siteMetadata
}