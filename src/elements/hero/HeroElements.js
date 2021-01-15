import styled from "styled-components"

export const Landing = styled.main`
  max-width: 1440px;
  margin: 0 auto;
  background-color: ${props => props.theme.colors.bgMain};
`

export const HeroWrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  color: ${props => props.theme.colors.textMain};
  position: relative;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }

  .bg-dots {
    position: absolute;
    top: 50px;
    left: 0;
    user-select: none;
    width: 10%;

    &:hover {
      filter: sepia(40%);
    }

    @media (max-width: 1024px) {
      top: 50%;
    }
    @media (max-width: 768px) {
      top: 80%;
    }
  }
`

export const HeroText = styled.section`
  max-width: 30rem;
  margin: 0 auto;

  @media (max-width: 1024px) {
    margin: 2rem;
  }

  h1 {
    font-size: 5rem;
    font-weight: normal;
    line-height: 100%;

    @media (max-width: 768px) {
      margin-top: 3rem;
      font-size: 3.3rem;
    }

    span {
      font-weight: bold;
    }
  }
  h2 {
    line-height: 100%;
    font-weight: normal;
    font-size: 1.5rem;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  p {
    margin: 3rem 0 0 0;
    line-height: 200%;
    font-size: 0.9rem;
  }
  .bg-blob {
    position: absolute;
    top: 0;
    right: 0;
    user-select: none;
    z-index: -1;
    width: 100%;
  }
`

export const StyledHeading = styled.h1`
  color: ${props => props.theme.colors.textMain};
  font-size: 25px;
  text-align: center;
  margin: ${props => (props.margin ? props.margin : "30px 0")};
`

export const CoursesContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 2rem;
  color: ${props => props.theme.colors.textMain};
  background-color: ${props => (props.color ? props.color : "#DB5776")};
  position: relative;
  overflow: hidden;
  max-width: 40rem;
  height: 20rem;
  padding: 2rem;
  cursor: pointer;
  margin: 2rem auto;

  @media (max-width: 768px) {
    max-width: 95%;
  }

  &:hover {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
    transition: cubic-bezier(0.165, 0.84, 0.44, 1) 0.2s;

    h1 {
      filter: brightness(20%);
    }
  }

  div {
    margin: 1rem;
    width: 80%;

    .course-type {
      text-transform: uppercase;
      font-size: 0.8rem;
      font-weight: bold;

      @media (max-width: 768px) {
        font-size: 0.5rem;
      }
    }

    .course-description {
      margin-top: 2rem;
      font-size: 0.9rem;
    }

    h1 {
      font-weight: 700;
      font-size: 3rem;
      line-height: 100%;
      max-width: 15rem;

      @media (max-width: 768px) {
        font-size: 1.5rem;
      }
    }
  }

  img {
    width: 100%;
    max-width: 30rem;
    margin-left: auto;
    border-top-right-radius: 2rem;
  }
`

export const BlogSliderContainer = styled.div`
  position: relative;
  margin: 5rem 0;

  img {
    position: absolute;
    top: -20px;
    width: 100%;
    right: 0;
    user-select: none;
    z-index: -1;
  }
`
export const ResourcesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

export const ResourcePill = styled.section`
  padding: 1rem;
  margin: 1rem;
  font-size: 1.2rem;
  background-color: ${props => (props.color ? props.color : "#f123da")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 1rem;
  font-weight: 700;
  color: ${props => props.theme.colors.textMain};

  cursor: pointer;

  &:hover {
    img {
      transform: translateX(4px);
    }
  }

  img {
    padding-left: 2rem;
    transform: translateX(0px);
    transition: ease-in-out 0.3s;
    width: 100%;
    filter: invert(100%);
  }
`
