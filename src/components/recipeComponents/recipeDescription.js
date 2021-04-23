/** @jsx jsx */
import React from 'react'
import { jsx, Themed } from 'theme-ui'
import PropTypes from 'prop-types'

const RecipeDescription = ({ text }) => (
    <React.Fragment>
    <div aria-label="subtitle" sx={{ py: 4 }} >
        <Themed.p>{text}</Themed.p>
    </div>
    </React.Fragment>
)

RecipeDescription.propTypes = {
    text: PropTypes.string,
}

RecipeDescription.defaultProps = {
    text: 'Deliciously plant-based',
}

export default RecipeDescription

