import React from "react"
import { graphql } from "gatsby"
import arrow from "../images/arrow.svg"
import { ResourcePill, ResourcesContainer } from "../elements/hero/HeroElements"

const allResources = ({ data }) => {
  return (
    <ResourcesContainer>
      {data.allMdx.edges.map((edge, idx) => (
        <ResourcePill
          key={idx}
          to={`/resource/${edge.node.frontmatter.slug}`}
          color={edge.node.frontmatter.color}
        >
          <p>{edge.node.frontmatter.title}</p>
          <img alt={edge.node.frontmatter.slug} src={arrow} />
        </ResourcePill>
      ))}
    </ResourcesContainer>
  )
}

export default allResources

export const PageQuery = graphql`
  query AllResourcesQuery {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { posttype: { eq: "resource" } } }
    ) {
      edges {
        node {
          frontmatter {
            date
            excerpt
            slug
            title
            category
            color
            featureImage {
              childImageSharp {
                fixed(fit: CONTAIN, width: 300) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`
