/** @jsx jsx */
import React from 'react'
import { Card, Themed, Link, jsx } from 'theme-ui'
import { GatsbyImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'

const CuisineCard = ({edge}) => {
    return (
      <React.Fragment>
      <article key={edge.node._id} sx={{ width: "100%" }}>
        <Link
          as={GatsbyLink}
          variant="a.secondary"
          to={`/cuisines/${edge.node.name.toLowerCase().replace(/\s+/g, "-").slice(0, 200)}`}
          alt={edge.node.name}
          sx={{ height: "100%", py: 3 }}
        >
          <Card>
            <GatsbyImage
              image={edge.node.cuisineImage.asset.gatsbyImageData}
              alt={edge.node.name}
            />
            <div sx={{ px: 3, py: 0, mb: 2, flex: '0 0 100%' }}>
              <Themed.h3>{edge.node.name}</Themed.h3>
              <Themed.p sx={{
                textOverflow: "ellipsis", WebkitLineClamp: "1", WebkitBoxOrient: "vertical", overflow: "hidden", display: "-webkit-box" }}>{edge.node.cuisineDescription}</Themed.p>
            </div>
          </Card>
        </Link>
      </article>
      </React.Fragment>
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