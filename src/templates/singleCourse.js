import React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { H1, P, PostHeader } from "../elements"
import { Container, Post, FeatureImage } from "../components"
import Img from "gatsby-image"
import styled from "styled-components"
import { CourseWrapper } from "../components/course/Elements"

const singleCourse = ({ data }) => {
  const featureImage = data.mdx.frontmatter.featureImage.childImageSharp.fixed
  const formatDate = dateString => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleString(undefined, options)
  }

  return (
    <CourseWrapper>
      <div className="container">
        <StyledImg fixed={featureImage} />
        <div>
          <h1>{data.mdx.frontmatter.title}</h1>
          <p>Course coming soon...😎</p>
          <p>
            Meanwhile check out{" "}
            <Link className="link" to="resource">
              resources
            </Link>{" "}
          </p>
        </div>
      </div>
    </CourseWrapper>
  )
}

export default singleCourse

export const PageQuery = graphql`
  query SingleCourseQuery($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        date
        slug
        title
        posttype
        featureImage {
          childImageSharp {
            fixed(width: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
      timeToRead
    }
  }
`

const StyledImg = styled(Img)`
  width: 100px;
`
