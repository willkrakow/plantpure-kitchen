/** @jsx jsx */
import React from 'react'
import { jsx, Grid, Themed } from 'theme-ui';
import { graphql } from 'gatsby'
import RecipeCard from '../components/recipeCard';

const BigEmoji = ({emoji, name}) => (
  <span aria-label={name} role="img" sx={{ display: 'inline-block', mx: 3 }}>{emoji}</span>
)

const Cuisine = ({data, ...props}) => {
    const { node: pageData } = props.pageContext;
    
    return (
        <React.Fragment>
            <Themed.h1 sx={{ textAlign: "center" }}>
              <BigEmoji emoji={pageData.emoji} name={pageData.name} />
              {pageData.name}
              <BigEmoji emoji={pageData.emoji} name={pageData.name} />
            </Themed.h1>
            <Themed.h2 sx={{ textAlign: "center" }}>{pageData.cuisineDescription}</Themed.h2>
            <Grid columns={['1fr', '1fr 1fr 1fr', '1fr 1fr 1fr']} >
                {data.allSanityBlogPost.edges.map((edge) => (
                    <RecipeCard key={edge.node._id} edge={edge} />
                ))}
            </Grid>
        </React.Fragment>
    )
}

export default Cuisine;

export const query = graphql`
    query($id: String!){
     allSanityBlogPost(filter: {recipeInfo: {cuisine: {_id: {eq: $id}}}}) {
      edges {
        node {
          slug {
            current
          }
          _id
          _key
          name
          recipeInfo {
            category {
              _id
              _key
              categoryTitle
            }
            prepTime
            yield
            cookTime
          }
          metadata {
            keywords
            recipeDescription
            featuredImage {
              asset {
                gatsbyImageData(fit: CROP, width: 500, height: 300, formats: JPG)
                altText
              }
            }
          }
        }
      }
    }
  }
`