/** @jsx jsx */
import { jsx, Themed } from 'theme-ui'
import PropTypes from 'prop-types'

const RecipeHeader = ({ recipeTitle, cuisineName, categoryTitle }) => (
    <header sx={{ textAlign: "center", mb: 4 }}>
        <Themed.h3
            sx={{ textAlign: "center", color: "muted", fontWeight: "body" }}
        >
            {cuisineName}{" | "}{categoryTitle}
        </Themed.h3>
        <Themed.h2
            sx={{
                textAlign: "center",
                p: 2,
                borderBottom: "regular",
                borderTop: "regular"
            }}
        >
            {recipeTitle}
        </Themed.h2>
    </header>
)

RecipeHeader.propTypes = {
    recipeTitle: PropTypes.string,
    cuisineName: PropTypes.string,
    categoryTitle: PropTypes.string,
}

RecipeHeader.defaultProps = {
    recipeTitle: "New recipe",
    cuisineName: "American",
    categoryTitle: "Food"
}

export default RecipeHeader;