/** @jsx jsx */
import Layout from "../components/layout";
import { graphql, useStaticQuery, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Themed, Grid, jsx } from "theme-ui";

const Categories = (props) => {
  const data = useStaticQuery(graphql`
    {
      allSanityCategory {
        edges {
          node {
            categoryImage {
              asset {
                gatsbyImageData(fit: CROP, width: 800, height: 500)
              }
            }
            _id
            categoryDescription
            categoryTitle
          }
        }
      }
    }
  `);
  const { allSanityCategory } = data;
  return (
    <Layout>
      <Themed.h1>Categories</Themed.h1>
      <Grid columns={[1, 2, 3]}>
        {allSanityCategory.edges.map((edge) => (
          <Link
            key={edge.node._id}
            to={`/browse`}
            alt={edge.node.categoryTitle}
            state={{ fromCategory: edge.node.categoryTitle }}
          >
            <GatsbyImage
              image={edge.node.categoryImage.asset.gatsbyImageData}
              alt={edge.node.categoryTitle}
            />
            <Themed.h3>{edge.node.categoryTitle}</Themed.h3>
            <Themed.p>{edge.node.categoryDescription}</Themed.p>
          </Link>
        ))}
      </Grid>
    </Layout>
  );
};

export default Categories;
