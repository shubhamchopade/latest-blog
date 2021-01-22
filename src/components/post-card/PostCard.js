import React from "react"
import human from "./1.svg"
import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"

export const PostCard = ({
  topText,
  pill,
  image,
  title,
  description,
  link,
  margin,
  slug,
}) => {
  return (
    <StyledLink margin={margin} to={`/blog/${slug}`}>
      <PostCardWrapper margin={margin}>
        <TopText>{title}</TopText>
        <Pill pill={pill}>{pill}</Pill>
        <BannerContainer pill={pill}>
          <StyledImg pill={pill} fixed={image ? image : human} />
          <Banner>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <BlogLink>
              Learn more{" "}
              <svg
                className="arrow"
                width="30"
                height="8"
                viewBox="0 0 30 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.3535 4.35355C29.5488 4.15829 29.5488 3.84171 29.3535 3.64645L26.1715 0.464466C25.9763 0.269204 25.6597 0.269204 25.4644 0.464466C25.2692 0.659728 25.2692 0.976311 25.4644 1.17157L28.2929 4L25.4644 6.82843C25.2692 7.02369 25.2692 7.34027 25.4644 7.53553C25.6597 7.7308 25.9763 7.7308 26.1715 7.53553L29.3535 4.35355ZM-3.05176e-05 4.5H29V3.5H-3.05176e-05V4.5Z"
                  fill="url(#paint0_linear)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="-0.805651"
                    y1="4.32"
                    x2="-0.477346"
                    y2="7.61373"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#2298BD" />
                    <stop offset="1" stop-color="#0ED7B5" />
                  </linearGradient>
                </defs>
              </svg>
            </BlogLink>
          </Banner>
        </BannerContainer>
      </PostCardWrapper>
    </StyledLink>
  )
}

const StyledLink = styled(Link)`
  margin: ${props => (props.margin ? props.margin : "margin")};
`

const PostCardWrapper = styled.div`
  height: 300px;
  width: 300px;
  border-radius: 2rem;
  position: relative;
  overflow: hidden;
  margin: 2rem;
  background-color: ${props => props.theme.bg.secondary};
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
  transition: cubic-bezier(0.165, 0.84, 0.44, 1) 0.2s;

  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    .arrow {
      transform: translateX(5px);
    }
  }
`
const TopText = styled.h1`
  font-size: 5rem;
  font-family: ${props => props.theme.fonts.main};
  background: linear-gradient(109.08deg, #2298bd 6.16%, #0ed7b5 91.66%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transform: translate(0, -2.5rem);
  font-weight: 900;
  opacity: 0.08;
  position: absolute;
  width: 500%;
  text-transform: uppercase;
`
const Pill = styled.span`
  font-size: 0.8rem;
  padding: 0.1rem 1rem;
  background-color: ${props => {
    switch (props.pill) {
      case "development":
        return props.theme.pill.development
      case "motivation":
        return props.theme.pill.motivation
      case "productivity":
        return props.theme.pill.productivity
      default:
        return props.theme.pill.default
    }
  }};
  color: ${props => props.theme.text.main};
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 3rem;
  position: absolute;
  top: 1rem;
  left: -0.5rem;
`
const BannerContainer = styled.div`
  display: flex;
  flex-direction: ${props =>
    props.pill === "productivity" ? "row-reverse" : "row"};
  justify-content: space-around;
  align-items: center;
  max-width: 280px;
  margin: 0 auto;
`

const StyledImg = styled(Img)`
  position: absolute;
  transform: translate(-1rem, 0);
  transform: ${props =>
    props.pill === "productivity" ? "scaleX(-1)" : "scaleX(1)"};
`
const Banner = styled.div`
  width: 250px;
  transform: translate(0, -2rem);
`

const Title = styled.h2`
  color: ${props => props.theme.text.main};
  font-size: 1rem;
  font-weight: bold;
  line-height: 1rem;
  width: 100%;
`

const Description = styled.p`
  color: ${props => props.theme.text.main};
  margin: 0.5rem 0;
  font-size: 0.65rem;
  width: 100%;
`

const BlogLink = styled(Link)`
  background: -webkit-linear-gradient(109.08deg, #2298bd 6.16%, #0ed7b5 91.66%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
  font-size: 0.7rem;
  display: flex;
  align-items: center;

  .arrow {
    width: 1.5rem;
    margin-left: 0.3rem;
    transition: 0.3s;
  }
`
