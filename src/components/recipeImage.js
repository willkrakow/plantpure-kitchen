/** @jsx jsx */
import { GatsbyImage } from 'gatsby-plugin-image'
import { jsx } from 'theme-ui'

const RecipeImage = ({ node }) => (
    <GatsbyImage
        sx={{ maxWidth: 512 }}
        image={node.metadata.featuredImage.asset.gatsbyImageData}
        alt={node.name}
    />
)

export default RecipeImage;