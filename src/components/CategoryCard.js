/** @jsx jsx */
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { darken } from '@theme-ui/color'
import { jsx, Themed, Card } from 'theme-ui' 

const CategoryCard = ({edge}) => {

    return (
      <Link to={`/categories/${edge.node.slug.current}`} alt={edge.node.categoryTitle} sx={{ textDecoration: 'none' }}>
        <article key={edge.node._id} sx={{ width: "100%" }}>
          <Card
            sx={{
              position: "relative",
              backgroundColor: darken('secondary', 0.9),
              boxShadow: "large.primary",
              '&:hover': {
                backgroundColor: darken('secondary', 0.2),
                'div h3': {
                  transform: 'scale(1.1)',
                  transition: "primary",
                }
              },
            }}
          >
            <GatsbyImage
              sx={{ opacity: "0.3", backgroundColor: "darker", padding: 2, width: "100%" }}
              image={edge.node.categoryImage.asset.gatsbyImageData}
              alt={edge.node.categoryTitle}
            />
            <div
              sx={{
                padding: 3,
                position: "absolute",
                top: "calc(50% - 32px)",
              }}
            >
              <Themed.h3 sx={{ color: "alwayslight", fontWeight: "heading" }}>
                {edge.node.categoryTitle}
              </Themed.h3>
              <Themed.p sx={{ color: "alwayslight" }}>
                {edge.node.categoryDescription}
              </Themed.p>
            </div>
          </Card>
        </article>
      </Link>
    );
}

export default CategoryCard;