/** @jsx jsx */
import React from 'react'
import { Card, jsx, Grid, Link } from 'theme-ui'
import { GatsbyImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'
import RecipeInfoBadge from './recipeInfoBadge'
import CuisineBadge from './cuisineBadge'
import RecipeCardTitle from './recipeCardTitle'
import CardButton from './cardButton'
import { Link as GatsbyLink } from 'gatsby'

const RecipeCard = (props) => {
    const { edge, fromcategory } = props;

    return (
        <React.Fragment>
            <article
                key={edge.node._id}
                sx={{ width: "100%", display: "flex", flexDirection: "column" }}
            >
                <Card sx={{ 
                    position: 'relative',
                 }}>
                    <GatsbyImage
                        image={edge.node.metadata.featuredImage.asset.gatsbyImageData}
                        alt={edge.node.name}
                    />
                    <RecipeCardTitle
                        recipeTitle={edge.node.name}
                        fromcategory={fromcategory}
                        recipeInfo={edge.node.recipeInfo}
                        recipeDescription={edge.node.metadata.recipeDescription}
                    />
                    <Grid columns={2} gap={0} sx={{ alignSelf: "flex-end", flex: "0 0 100%", mt: 3 }}>
                        <Link variant="a.primary" as={GatsbyLink} to={`/recipes/${edge.node.slug.current}`} alt={`View ${edge.node.name}`}>View recipe &rarr;</Link>
                        <Link variant="a.secondary" as={GatsbyLink} to={`/recipes/${edge.node.slug.current}`} alt={`Watch ${edge.node.name}`}>Watch now &rarr;</Link>
                    </Grid>
                </Card>
            </article>
        </React.Fragment>
    )
}

RecipeCard.propTypes = {
    props: PropTypes.shape({
        fromcategory: PropTypes.bool,
        fromcuisine: PropTypes.bool,
        edge: PropTypes.shape({
            node: PropTypes.shape({
                slug: PropTypes.shape({
                    currect: PropTypes.string,
                }),
                recipeSteps: PropTypes.shape({
                    description: PropTypes.string,
                    title: PropTypes.string,
                }),
                recipeInfo: PropTypes.shape({
                    cuisine: PropTypes.shape({
                        cuisineDescription: PropTypes.string,
                        name: PropTypes.string,
                        emoji: PropTypes.string,
                        slug: PropTypes.string,
                    }),
                    category: PropTypes.shape({
                        categoryTitle: PropTypes.string,
                        categoryDescription: PropTypes.string,
                        categoryImage: PropTypes.object,
                    }),
                    cookTime: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
                    prepTime: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
                    yield: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
                }),
            }),
            recipeVideo: PropTypes.shape({
                embed: PropTypes.string,
                link: PropTypes.string,
                videoTitle: PropTypes.string,
            }),
            nutrition: PropTypes.shape({
                calories: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
            }),
            ingredients: PropTypes.arrayOf(PropTypes.string),
            name: PropTypes.string,
            metadata: PropTypes.shape({
                author: PropTypes.string,
                featuredImage: PropTypes.object,
                keywords: PropTypes.arrayOf(PropTypes.string),
                publishedDate: PropTypes.instanceOf(Date),
                recipeDescription: PropTypes.string,
            }),
        }),
    }),
}



export default RecipeCard;

export { RecipeInfoBadge, CuisineBadge, RecipeCardTitle, CardButton }

