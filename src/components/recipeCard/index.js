/** @jsx jsx */
import { Card, Themed, jsx, Grid } from 'theme-ui'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'

const RecipeCard = (props) => {
    const { edge, fromcategory } = props;

    const recipeBadgeStats = [
        {
            title: "Prep",
            value: edge.node.recipeInfo.prepTime + " min.",
            emoji: "🥘",
        },
        {
            title: "Cook",
            value: edge.node.recipeInfo.cookTime + " min.",
            emoji: "⏲",
        },
        {
            title: "Yield",
            value: edge.node.recipeInfo.yield,
            emoji: "🍽",
        },
    ]

    return (
        <article
            key={edge.node._id}
            sx={{ width: "100%", display: "flex", flexDirection: "column" }}
        >
            <Card
                sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    position: "relative",
                    alignItems: "flex-start",
                    border: "1px inset",
                    borderColor: "boxoutline",
                    boxShadow: "0px 4px 8px 1px rgba(0,0,0,0.15)",
                    backgroundColor: "background",
                }}
            >
                <GatsbyImage
                    image={edge.node.metadata.featuredImage.asset.gatsbyImageData}
                    alt={edge.node.name}
                />
                <div sx={{ padding: 3 }}>
                    <Themed.h3>{edge.node.name}</Themed.h3>
                    {fromcategory && (
                        <CuisineBadge emoji={edge.node.recipeInfo.cuisine.emoji} name={edge.node.recipeInfo.cuisine.name} slug={edge.node.recipeInfo.cuisine.slug.current} />
                    )}
                    <Grid columns={[2]} gap={1} sx={{ mb: 3, rowGap: 2 }}>
                        {recipeBadgeStats.map((stat, index) => (
                            <RecipeInfoBadge key={index} title={stat.title} value={stat.value} emoji={stat.emoji} />
                        ))}</Grid>
                    <Themed.p>{edge.node.metadata.recipeDescription}</Themed.p>
                </div>
                <Grid columns={2} gap={0} sx={{ alignSelf: "flex-end", flex: "0 0 100%", mt: 3 }}>
                    <Link
                        sx={{
                            display: "block",
                            color: "alwayslight",
                            fontWeight: "bold",
                            backgroundColor: "secondary",
                            textDecoration: "none",
                            textAlign: "center",
                            bottom: 0,
                            px: 3,
                            py: 2,
                            "&:hover": {
                                backgroundColor: "hoversecond",
                            },
                            transition: "all 0.3s ease"
                        }}
                        to={`/recipes/${edge.node.slug.current}`}
                        alt={edge.node.name}
                    >
                        View recipe &rarr;
                </Link>
                    <Link
                        sx={{
                            display: "block",
                            color: "secondary",
                            fontWeight: "bold",
                            textDecoration: "none",
                            textAlign: "center",
                            bottom: 0,
                            px: 3,
                            py: 2,
                            "&:hover": {
                                backgroundColor: "hoversecond",
                                color: "text",
                                textDecoration: "underline",
                                textDecorationColor: "secondary",
                            },
                            transition: "all 0.3s ease"
                        }}
                        to={`/recipes/${edge.node.slug.current}`}
                        alt={edge.node.name}
                    >
                        Watch the show &rarr;
                </Link>
                </Grid>
                
            </Card>
        </article>
    )
}

RecipeCard.propTypes = {
    props: PropTypes.shape({
        fromcategory: PropTypes.bool,
        fromcuisine: PropTypes.bool,
        edge: PropTypes.shape({
            node: PropTypes.shape({
                slug: PropTypes.shape({
                    currect: PropTypes.string,
                }),
                recipeSteps: PropTypes.shape({
                    description: PropTypes.string,
                    title: PropTypes.string,
                }),
                recipeInfo: PropTypes.shape({
                    cuisine: PropTypes.shape({
                        cuisineDescription: PropTypes.string,
                        name: PropTypes.string,
                        emoji: PropTypes.string,
                        slug: PropTypes.string,
                    }),
                    category: PropTypes.shape({
                        categoryTitle: PropTypes.string,
                        categoryDescription: PropTypes.string,
                        categoryImage: PropTypes.object,
                    }),
                    cookTime: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
                    prepTime: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
                    yield: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
                }),
            }),
            recipeVideo: PropTypes.shape({
                embed: PropTypes.string,
                link: PropTypes.string,
                videoTitle: PropTypes.string,
            }),
            nutrition: PropTypes.shape({
                calories: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
            }),
            ingredients: PropTypes.arrayOf(PropTypes.string),
            name: PropTypes.string,
            metadata: PropTypes.shape({
                author: PropTypes.string,
                featuredImage: PropTypes.object,
                keywords: PropTypes.arrayOf(PropTypes.string),
                publishedDate: PropTypes.instanceOf(Date),
                recipeDescription: PropTypes.string,
            }),
        }),
    }),
}


const RecipeInfoBadge = ({ emoji, title, value }) => (
    <div>
        <Themed.h6 sx={{
            color: "secondary"
        }}>
            <span aria-label={title} role="img" sx={{ mr: 2 }}>{emoji}</span>{title}: <span sx={{ fontWeight: 'lighter' }}>{value}</span>
        </Themed.h6>
    </div>
)

RecipeInfoBadge.propTypes = {
    emoji: PropTypes.string,
    title: PropTypes.string,
    value: PropTypes.string,
}

const CuisineBadge = ({ emoji, name, slug }) => (
    <Link to={`/cuisines/${slug}`} sx={{ 
        position: 'absolute',
        top: 2,
        left: 2,
        px: 3,
        py: 2,
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
)

CuisineBadge.propTypes = {
    emoji: PropTypes.string,
    name: PropTypes.string,
    slug: PropTypes.string,
}


export default RecipeCard;