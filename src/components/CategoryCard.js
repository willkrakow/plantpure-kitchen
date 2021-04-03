/** @jsx jsx */
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { jsx, Themed, Card } from 'theme-ui'

const CategoryCard = ({edge}) => {
    return (
      <Link to="/browse" state={{ fromCategory: edge.node.categoryTitle }} alt={edge.node.categoryTitle}>
        <article key={edge.node._id} sx={{ width: "100%" }}>
          <Card
            sx={{
              position: "relative",
              background: "rgba(20, 20, 20, 0.9)",
            }}
          >
            <GatsbyImage
              sx={{ opacity: 0.2, backgroundColor: "darker", padding: 2 }}
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
              <Themed.h3 sx={{ color: "accent", fontWeight: "heading" }}>
                {edge.node.categoryTitle}
              </Themed.h3>
              <Themed.p sx={{ color: "#ffffff" }}>
                {edge.node.categoryDescription}
              </Themed.p>
            </div>
          </Card>
        </article>
      </Link>
    );
}

export default CategoryCard;