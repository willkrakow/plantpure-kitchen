/** @jsx jsx */
import React from 'react'
import { jsx, Themed } from 'theme-ui'
import PropTypes from 'prop-types'

const RecipeDescription = ({ text }) => (
    <div aria-label="subtitle" sx={{ py: 4 }} >
        <Themed.h4>{text}</Themed.h4>
    </div>
)

RecipeDescription.propTypes = {
    text: PropTypes.string,
}

export default RecipeDescription

