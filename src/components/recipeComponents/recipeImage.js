/** @jsx jsx */
import { GatsbyImage } from 'gatsby-plugin-image'
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'

const RecipeImage = ({ imageData, altText }) => (
    <GatsbyImage
        sx={{ maxWidth: '100%' }}
        image={imageData}
        alt={altText}
    />
)


RecipeImage.propTypes = {
    imageData: PropTypes.object,
    altText: PropTypes.string,
}

RecipeImage.defaultProps = {
    altText: 'Picture of the recipe',
}

export default RecipeImage;