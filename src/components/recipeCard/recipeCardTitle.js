/**@jsx jsx */
import React from 'react'
import { jsx, Themed, Grid } from 'theme-ui'
import PropTypes from 'prop-types'
import CuisineBadge from './cuisineBadge'
import RecipeInfoBadge from './recipeInfoBadge'
const RecipeCardTitle = ({ recipeTitle, fromcategory, recipeInfo, recipeDescription }) => {

    const recipeBadgeStats = [
        {
            title: "Prep",
            value: recipeInfo.prepTime + " min.",
            emoji: "🥘",
        },
        {
            title: "Cook",
            value: recipeInfo.cookTime + " min.",
            emoji: "⏲",
        },
        {
            title: "Yield",
            value: recipeInfo.yield,
            emoji: "🍽",
        },
    ]

    return (
        <React.Fragment>
        <div sx={{ padding: 3 }}>
            <Themed.h3>{recipeTitle}</Themed.h3>
            {fromcategory && (
                <CuisineBadge emoji={recipeInfo.cuisine.emoji} name={recipeInfo.cuisine.name} slug={recipeInfo.cuisine.slug.current} />
            )}
            <Grid columns={[3]} gap={1} sx={{ mb: 3, rowGap: 2 }}>
                {recipeBadgeStats.map((stat, index) => (
                    <RecipeInfoBadge key={index} title={stat.title} value={stat.value} emoji={stat.emoji} />
                ))}
            </Grid>
            <Themed.p sx={{
                WebkitLineClamp: "2",
                textOverflow: "ellipsis",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                display: "-webkit-box"
            }} >{recipeDescription}</Themed.p>
        </div>
        </React.Fragment>
    )
}

RecipeCardTitle.propTypes = {
    recipeTitle: PropTypes.string,
    fromcategory: PropTypes.bool,
    recipeInfo: PropTypes.shape({
        cuisine: PropTypes.shape({
            name: PropTypes.string,
            slug: PropTypes.shape({
                current: PropTypes.string,
            }),
            emoji: PropTypes.string,
        })
    }),
    recipeDescription: PropTypes.string,
}

RecipeCardTitle.defaultProps = {
    recipeTitle: 'New recipe!',
    fromcategory: false,
    recipeInfo: {
        cuisine: {
            name: "American",
            slug: "#",
            emoji: "",
        },
    },
    recipeDescription: "Whole food plant-based deliciousness!"
}

export default RecipeCardTitle