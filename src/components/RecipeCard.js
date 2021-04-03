/** @jsx jsx */
import { Card, Themed, jsx } from 'theme-ui'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const RecipeCard = (props) => {
    const { edge } = props;
    
    return (
    <article
      key={edge.node._id}
      sx={{ width: "100%", display: "flex", flexDirection: "column" }}
    >
      <Card
        sx={{
          height: "100%",
          position: "relative",
          paddingBottom: 5,
          border: "muted",
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
          <Themed.p>{edge.node.metadata.recipeDescription}</Themed.p>
        </div>
        <Link
          sx={{
            display: "block",
            width: "100%",
            position: "absolute",
            color: "secondary",
            fontWeight: "bold",
            textDecoration: "none",
            bottom: 0,
            pl: 3,
            py: 2,
            "&:hover": {
              backgroundColor: "hsla(173, 93%, 27%, 20%)",
            },
          }}
          to={`/recipes/${edge.node.slug.current}`}
          alt={edge.node.name}
        >
          View recipe &rarr;
        </Link>
      </Card>
    </article>
    )
}

export default RecipeCard;