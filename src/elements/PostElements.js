import styled from "styled-components"

export const PostHeader = styled.section`
  background-color: ${props => {
    switch (props.color) {
      case "development":
        return props.theme.colors.pill.development
      case "motivation":
        return props.theme.colors.pill.motivation
      case "productivity":
        return props.theme.colors.pill.productivity
      default:
        return props.theme.colors.pill.default
    }
  }};
  height: 75vh;
  min-height: 30rem;
  text-align: center;
  color: ${props => props.theme.colors.textMain};

  div {
    p {
      text-transform: uppercase;
      font-size: 0.8rem;
      font-weight: 600;
    }

    h1 {
      font-size: 3rem;
    }

    div {
      display: flex;
      justify-content: space-around;
      max-width: 20rem;
      margin: 0 auto;
      align-items: center;

      p {
        font-size: 1rem;
        font-weight: 600;
      }

      svg {
        color: ${props => props.theme.colors.textMain};
        margin: 2rem 0 0 0;
        &:hover {
          filter: brightness(10);
          cursor: pointer;
        }
      }
    }
  }
`

export const PostWrapper = styled.main`
  max-width: 40rem;
  margin: 0 auto;
  z-index: 10;
  font-family: ${props => props.theme.fonts.blog};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${props => props.theme.colors.dark1};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 2rem;
  }

  h1 {
    font-size: 2.25rem;
    line-height: 2.5rem;
    font-weight: 400;
  }
  h2 {
    font-size: 1.5rem;
    line-height: 1.875rem;
    font-weight: 400;
  }
  h3 {
    font-size: 1.375rem;
    line-height: 1.625rem;
    font-weight: 700;
  }
  h4 {
    font-size: 1.25rem;
    line-height: 1.5rem;
    font-weight: 400;
  }
  h5 {
    font-size: 1.125rem;
    line-height: 1.375rem;
    font-weight: 700;
  }
  h6 {
    font-size: 1rem;
    line-height: 1.125rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  p {
    font-size: 1.125rem;
    line-height: 1.875rem;
    font-weight: 400;
    color: ${props => props.theme.colors.dark2};
    margin-top: 2rem;
  }

  a {
    color: ${props => props.theme.colors.main1};
    text-decoration: underline;
  }
  strong {
    font-weight: 700;
  }
  em {
    font-style: italic;
  }

  del {
    text-decoration: line-through;
  }

  blockquote p {
    text-decoration: italic;
    font-size: 1.5rem;
    line-height: 2.125rem;
    text-align: center;
    max-width: 36rem;
    margin: 3rem auto;
  }
  ul,
  ol {
    color: ${props => props.theme.colors.dark2};
    margin: 1rem 0 1rem 2rem;
  }
  li {
    margin: 0.25rem 0;
  }

  pre {
    font-family: ${props => props.theme.fonts.code};
    font-size: 0.875rem;
    margin: 1rem 0;
    border-radius: 0.5rem;
    line-height: 1.875rem;
    color: ${props => props.theme.colors.light1};
    background-color: ${props => props.theme.colors.dark3};
    padding: 1rem;
  }

  hr {
    border: 0;
    height: 1px;
    background: ${props => props.theme.colors.dark1};
    opacity: 0.1;
    margin: 2rem;
  }

  table {
    width: 100%;
    border-spacing: 0.25rem;
    border-collapse: collapse;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 400;
  }
  th {
    width: 100%;
  }
`
