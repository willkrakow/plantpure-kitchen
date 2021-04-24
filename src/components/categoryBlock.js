/**@jsx jsx */
import React from 'react'
import { jsx, Themed, Flex, Link } from 'theme-ui'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'

const EmojiButton = ({emoji}) => (
    <Themed.p sx={{
        display: 'inline-block',
        flex: '0 0 100%',
        fontSize: 8,
        alignSelf: 'flex-end',
        borderRadius: '100%',
        textShadow: 'small.primary',
        transition: 'primary',
    }}>
        {emoji}
    </Themed.p>
)

const CategoryBlock = ({ categoryTitle, emoji, link }) => {
   
    return (
        <React.Fragment>
            <Link
                as={GatsbyLink}
                to={link}
                alt={categoryTitle}
                sx={{
                    transition: 'primary',
                    display: 'inline-block',
                    flex: '0 0 100%',
                    alignSelf: 'flex-start',
                    cursor: 'pointer',
                    color: 'muted',
                    '&:hover': {
                        'div p': {
                            transform: 'scale(1.5)',
                            textShadow: 'medium.primary'
                        }
                    }
                }}>
            <Flex sx={{ flexWrap: 'wrap', backgroundColor: 'transparent', aspectRatio: '1/1', textAlign: 'center', flex: '0 0 100%'}}>
                <EmojiButton emoji={emoji} />
                <Themed.h3 sx={{ display: 'inline-block', flex: '0 0 100%', alignSelf: 'center' }}>{categoryTitle}</Themed.h3>
            </Flex>
            </Link>
        </React.Fragment>
)}

CategoryBlock.propTypes = {
    categoryTitle: PropTypes.string,
    emoji: PropTypes.string,
    link: PropTypes.string,
}

CategoryBlock.defaultProps = {
    categoryTitle: 'Category',
    emoji: '🌱',
    link: '/categories/breakfast',
}

export default CategoryBlock

