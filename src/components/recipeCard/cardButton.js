/**@jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'


const CardButton = ({ link, text, icon, internal, primary, toLocation }) => {

    const primaryStyles = {
        display: "block",
        color: "alwayslight",
        fontWeight: "bold",
        backgroundColor: "secondary",
        textDecoration: "none",
        textAlign: "center",
        bottom: 0,
        py: 2,
        "&:hover": {
            color: "secondary",
            backgroundColor: "hoversecond",
        },
        transition: "all 0.3s ease"
    }
    const secondaryStyles = {
        color: "secondary",
        backgroundColor: "background",
        "&:hover": {
            color: "text",
            textDecoration: "underline",
            textDecorationColor: "secondary",
        },
    }
    return (
        <React.Fragment>
            {internal ? (
                <Link sx={primary ? { ...primaryStyles } : { ...primaryStyles, ...secondaryStyles }} to={link} alt={toLocation}>
                    {text}{" "}{icon}
                </Link>
            ) : (
                <a sx={primary ? { ...primaryStyles } : { ...primaryStyles, ...secondaryStyles }} href={link} alt={toLocation}>
                    {text}{" "}{icon}
                </a>
            )}
        </React.Fragment>
    )
}

CardButton.propTypes = {
    link: PropTypes.string,
    text: PropTypes.string,
    icon: PropTypes.string,
    internal: PropTypes.bool,
    primary: PropTypes.bool,
    toLocation: PropTypes.string,
}

CardButton.defaultProps = {
    link: "#",
    text: "Learn more",
    icon: "&rarr;",
    internal: true,
    primary: true,
    toLocation: "PlantPure Kitchen"
}


export default CardButton