/** @jsx jsx */
import React from 'react'
import { jsx, Grid, Themed, useThemeUI } from 'theme-ui';
import { graphql } from 'gatsby'
import RecipeCard from '../components/recipeCard';
import { GatsbyImage } from 'gatsby-plugin-image';

const Category = ({ data, ...props }) => {
    const { node: pageData } = props.pageContext;
    const recipes = data.allSanityBlogPost.edges
    const context = useThemeUI()
    const { theme } = context

    return (
        <React.Fragment>
            <div sx={{ backgroundColor: 'rgba(10, 20, 25, 0.8)', zIndex: '-2', height: theme.space[7], margin: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <GatsbyImage sx={{ height: theme.space[7], position: 'relative', top: "0", zIndex: '-3' }} image={pageData.categoryImage.asset.gatsbyImageData} alt={pageData.categoryTitle} />
                <Themed.h1 sx={{ textAlign: "center", zIndex: "10", color: 'alwayslight', position: 'absolute' }}>{pageData.categoryTitle}</Themed.h1>

            </div>
            <Grid columns={['1fr', 'repeat(3, 1fr)', null]} sx={{ py: 4, }}>
                {recipes.map((recipe) => (
                    <RecipeCard edge={recipe} key={recipe.node._id} fromcategory={true}  />
                ))}
            </Grid>
        </React.Fragment>
    )
}

export default Category;

export const query = graphql`
    query($id: String!){
     allSanityBlogPost(filter: {recipeInfo: {category: {id: {eq: $id}}}}) {
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
            cuisine {
              cuisineDescription
              name
              emoji
              slug {
                current
              }
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