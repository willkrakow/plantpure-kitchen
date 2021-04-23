/**@jsx jsx */
import React from 'react'
import { Themed, jsx } from 'theme-ui'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const CuisineBadge = ({ emoji, name, slug }) => (
    <React.Fragment>
        <Link to={`/cuisines/${slug}`} sx={{
            position: 'absolute',
            top: 2,
            left: 2,
            px: 3,
            py: 1,
            borderRadius: '18px',
            backgroundColor: 'alwayslight',
            textDecoration: 'none',
            '&:hover': {
                backgroundColor: 'secondary',
                transform: 'scale(1.05)',
                boxShadow: "0px 4px 8px rgba(10, 20, 25, 0.9)",
                transition: 'all 0.2s ease',
                'h5': {
                    color: "background",
                }
            }
        }}>
            <Themed.h5>
                <span aria-label={name} role="img">{emoji || ''}</span>
                {" "}
                <span>{name}</span>
            </Themed.h5>
        </Link>
    </React.Fragment>
)

CuisineBadge.propTypes = {
    emoji: PropTypes.string,
    name: PropTypes.string,
    slug: PropTypes.string,
}

CuisineBadge.defaultProps = {
    emoji: "🍴",
    name: "American",
    slug: "#",
}

export default CuisineBadge