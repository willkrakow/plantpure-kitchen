/** @jsx jsx */
import { Card, Themed, jsx } from 'theme-ui'
import { GatsbyImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const CuisineCard = ({edge}) => {
    return (
      <article key={edge.node._id} sx={{ width: "100%" }}>
        <Link
          to={`/cuisines/${edge.node.name.toLowerCase().replace(/\s+/g, "-").slice(0, 200)}`}
          alt={edge.node.name}
          sx={{
            textDecoration: 'none',
            transition: "all 0.3s ease",
            '&:hover': {
              textDecoration: 'underline',
              textDecorationColor: 'colors.accent',
            },
          }}
        >
          <Card>
            <GatsbyImage
              image={edge.node.cuisineImage.asset.gatsbyImageData}
              alt={edge.node.name}
            />
            <div sx={{ px: 3, py: 0, mb: 2 }}>
              <Themed.h3>{edge.node.name}</Themed.h3>
              <Themed.p>{edge.node.cuisineDescription}</Themed.p>
            </div>
          </Card>
        </Link>
      </article>
    );
}

export default CuisineCard;

CuisineCard.propTypes = {
    edge: PropTypes.shape({
        node: PropTypes.shape({
            _id: PropTypes.string,
            name: PropTypes.string,
            cuisineDescription: PropTypes.string,
            cuisineImage: PropTypes.object,
        })
    })
}