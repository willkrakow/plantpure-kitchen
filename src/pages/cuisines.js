/** @jsx jsx */
import Layout from "../components/layout";
import { graphql, Link, useStaticQuery } from "gatsby";
// import { GatsbyImage } from 'gatsby-plugin-image'
import CuisineCard from '../components/CuisineCard'
import { Grid, Themed, jsx } from 'theme-ui'

const Cuisines = (props) => {
    const data = useStaticQuery(graphql`
      {
        allSanityCuisine {
          edges {
            node {
              cuisineImage {
                asset {
                  gatsbyImageData(width: 800, height: 600, fit: CROP)
                }
              }
              _id
              cuisineDescription
              name
            }
          }
        }
      }
    `);
    const { allSanityCuisine } = data;
  return (
    <Layout>
      <Themed.h1>Cuisines</Themed.h1>
      <Grid columns={[1, null, 3]}>
        {allSanityCuisine.edges.map((edge) => (
          <Link key={edge.node._id} to={`/browse`} state={{ fromCuisine: edge.node.name }} >
            <CuisineCard edge={edge} key={edge.node._id} />
          </Link>
        ))}
      </Grid>
    </Layout>
  );
};

export default Cuisines;




// export const query = graphql``;
