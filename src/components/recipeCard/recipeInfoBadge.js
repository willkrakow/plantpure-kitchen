/**@jsx jsx */
import React from 'react'
import { Themed, jsx } from 'theme-ui'
import PropTypes from 'prop-types'

const RecipeInfoBadge = ({ emoji, title, value }) => (
    <React.Fragment >
        <Themed.h6 sx={{
            color: "accent"
        }}>
            {title}: <span sx={{ fontWeight: 'lighter' }}>{value}</span>
        </Themed.h6>
    </React.Fragment>
)

RecipeInfoBadge.propTypes = {
    emoji: PropTypes.string,
    title: PropTypes.string,
    value: PropTypes.string,
}

RecipeInfoBadge.defaultProps = {
    emoji: "🍴",
    title: "",
    value: "",
}

export default RecipeInfoBadge