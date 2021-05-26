import React, { useState } from "react"
import styled from "styled-components"
import ReactMarkdown from "react-markdown"
import useGetCategoryObject from "../../hooks/useGetCategoryObject"
import useGetRepoDetails from "../../hooks/useGetRepoDetails"
import useGetReadMeFileAsText from "../../hooks/useGetReadMeFileAsText"

const GetMarkDownData = () => {
  const data = useGetCategoryObject()
  const [currentRepo, setCurrentRepo] = useState({
    owner: "",
    repoName: "",
  })
  const repoDetails = useGetRepoDetails(currentRepo, setCurrentRepo)

  let { response } = data
  const contents = response.split("## ")
  const getReadMeFile =
    repoDetails.content &&
    repoDetails.content.filter(a => a.name.toLowerCase() === "readme.md")

  const textResponse = useGetReadMeFileAsText(
    getReadMeFile[0] && getReadMeFile[0].download_url
  )

  console.log(textResponse)

  let content = contents.map((c, i) => {
    let heading = ""
    let title = ""
    let link = ""
    let data = []
    heading = c.split("\n\n")[0]
    title =
      c.match(/\[.*?\]/g) &&
      c.match(/\[.*?\]/g).map(x => x.replace(/[[]]/g, ""))
    link =
      c.match(/\(.*?\)/g) &&
      c.match(/\(.*?\)/g).map(x => x.replace(/[()]/g, ""))

    if (title) {
      for (let i = 0; i < title.length; i++) {
        data.push({
          title: title[i].replace(/[[]]/g, ""),
          link: link[i],
          owner: link[i].split("/", 5)[3],
          repoName:
            link[i].split("/", 5)[4] && link[i].split("/", 5)[4].split("#")[0],
        })
      }
    }
    return { heading, data }
  })
  content = content.splice(2, content.length)

  return (
    <>
      <MarkdownContainer>
        <ReactMarkdown children={textResponse.response} />
      </MarkdownContainer>

      {content.map((c, index) => {
        return (
          <ResourceContainer key={index}>
            <p>{c.heading}</p>
            <ResourceSectionWrapper>
              {c.data.map((d, idx) => (
                <StyledBlock key={idx} onClick={() => setCurrentRepo(d)}>
                  {d.title}
                </StyledBlock>
              ))}
            </ResourceSectionWrapper>
          </ResourceContainer>
        )
      })}
    </>
  )
}

export default GetMarkDownData

const MarkdownContainer = styled.main`
  max-height: 30rem;
  overflow-y: auto;
  background-color: ${props => props.theme.light.bg.main};
  padding: 4rem;

  a {
    color: blue;
  }
`

const ResourceContainer = styled.section`
  margin: 2rem auto;
  max-width: 70rem;
  padding: 0 2rem;

  p {
    color: ${props => props.theme.text.main};
    font-size: 2rem;
  }
`

const ResourceSectionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const StyledBlock = styled.div`
  color: ${props => props.theme.text.main};
  margin: 1rem;
  padding: 1rem;
  background-color: ${props => props.theme.bg.secondary};
  border-radius: 0.5rem;
  filter: drop-shadow(${props => props.theme.shadows.shadow1});
`