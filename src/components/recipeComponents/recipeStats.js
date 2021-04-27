/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'

const RecipeStats = ({ recipeInfo }) => (
    <React.Fragment>
    <section
        sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
            div: {
                span: {
                    fontSize: 2,
                    textAlign: "center",
                    display: "inline-block",
                    width: "100%",
                },
                "span.icon": {
                    fontSize: 5,
                },
                "span.label": {
                    color: "secondary",
                    fontWeight: "bold",
                },
            },
        }}
    >
        <div>
            <span aria-label="Pan with food" role="img" className="icon">
                🥘
                </span>
            <span className="label">Prep time</span>
            <span>{recipeInfo.prepTime} min.</span>
        </div>
        <div>
            <span aria-label="Kitchen timer" role="img" className="icon">
                ⏲
                </span>
            <span className="label">Cook time</span>
            <span>{recipeInfo.cookTime} min.</span>
        </div>
        <div>
            <span aria-label="Plate" role="img" className="icon">
                🍽
                </span>
            <span className="label">Yield</span>
            <span>{recipeInfo.yield} servings</span>
        </div>
    </section>
    </React.Fragment>
)

RecipeStats.propTypes = {
    recipeInfo: PropTypes.shape({
        cuisine: PropTypes.object,
        category: PropTypes.object,
        cookTime: PropTypes.number,
        prepTime: PropTypes.number,
        yield: PropTypes.string,
    })
}

RecipeStats.defaultProps = {
    cuisine: {
        name: 'American',
    },
    category: {
        categoryTitle: 'Food',
    },
    cookTime: '0',
    prepTime: '0',
    yield: '0',
}

export default RecipeStats;