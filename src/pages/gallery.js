import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import * as React from 'react'
import styled from 'styled-components';

const nodeURL = 'https://www.instagram.com/p'

const Container = styled.div`
    width: 480px;
    margin: 0 auto;
    border: 1px solid #cccccc;
    padding: 0.05em;
    background-color: #000;
    color: white;
    font-family: 'Roboto', sans-serif;
`

const Header = styled.div `
 border-bottom: 1px solid #cccccc;
 border-bottom-left-radius: 20px;
 border-bottom-right-radius: 20px;
 font-size: 20px;
 text-align: center;
 font-family: 'Grand Hotel', cursive;
`

const Stories = styled.div `
    padding: 0.5em;
`
const Story = styled.div`

    margin-right: 0.5em;
    width: ${props => props.width};
    height: ${props => props.height};
    background: url(https://media-exp1.licdn.com/dms/image/C4E0BAQEq8dvxYn2RYw/company-logo_200_200/0/1597234326536?e=2159024400&v=beta&t=FZvvKq7fg66Th4jtR1Q-WWSg1PvlgJUwCi_DdkRysjQ);
    background-size: contain;
    display: inline-block;
    border-radius: 50%;
    border: 3px dashed #fc5296;
`
const ImageContainer = styled.div`
    border-bottom: 2px solid #cccccc;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    padding: 0.5em 0;
`
const Image = styled(Img)`
    margin: 1em 0;
    border-top-left-radius: 15px;
    border-top-right-radius:15px;
    border-bottom: 0.5px solid #cccccc;
    border-bottom-left-radius: 45px;
    border-bottom-right-radius: 45px;
`
const ImageTitle = styled.h5`
    padding: 0.25em;
    font-weight:bold;
`
const ImageTitleContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-content: center;
    align-items: flex-end;
    padding: 0.5em;
`
const ImageDescriptionContainer = styled.div`
    padding: 0 0.5em;
`

const LikesText = styled.h5`
    line-height: 0;
`

const CaptionText = styled.div`
    padding: 0.25em;
    text-align: justify;
`
const LikesContainer = styled.div`
    display: flex;
    align-items: center;
`


const GalleryPage = () => {
        const {
            allInstaNode: { edges }} = useStaticQuery (graphql `{
                    allInstaNode(sort: { fields: timestamp, order: DESC }, limit: 30) {
                        edges{
                            node{
                                id
                                caption
                                likes
                                timestamp
                                localFile {
                                    childImageSharp {
                                        fluid {
                                            ...GatsbyImageSharpFluid
                                            }
                                    }
                                }
                                
                            }
                        }
            
                    }
                }
        `)


    const renderImages = () => {
        const images = edges.map(({ node }) => {
            const {
                id, 
                caption, 
                likes,
                localFile: { childImageSharp }
            } = node;
            return (
                <ImageContainer>
                <ImageTitleContainer>
                    <Story width = "48px" height="48px" />
                    <ImageTitle>mlsa.srm</ImageTitle>
                </ImageTitleContainer>
                    <a href={`${nodeURL}/${id}`}>
                        <Image
                            loading= "lazy"
                            alt={caption || ""}
                            fluid={childImageSharp.fluid}
                        />
                    </a> 
                    <ImageDescriptionContainer>
                    <LikesContainer>
                        <Story width="24px" height = "24px"></Story>
                        <LikesText>{`${likes} likes`}</LikesText>
                    </LikesContainer>
                    <CaptionText>
                        <b>mlsa.srm </b>
                        {caption}
                    </CaptionText>
                    </ImageDescriptionContainer>
                    
                </ImageContainer>
            )
        })
    return images;
    }   

    const renderStories = () => {
        const storyCount = [1,2,3,4,5];
        return storyCount.map(id => (
            
            <Story width = "72px" height="72px" />
            
        ))
    }

        return (
            <main>
                <title>Instagram</title>
                <Container>
                    <Header>
                        <h4>Instagram</h4>
                    </Header> 
                    <Stories>
                        {renderStories()}
                    </Stories>
                {renderImages()} 
                </Container>
            </main>
        )
}



export default GalleryPage