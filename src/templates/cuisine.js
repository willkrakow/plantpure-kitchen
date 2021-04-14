/** @jsx jsx */
import { jsx, Grid } from 'theme-ui';
import { graphql } from 'gatsby'
import Hero from '../components/hero'
import Layout from '../components/layout'
import RecipeCard from '../components/RecipeCard';

const Cuisine = ({data, ...props}) => {
    const { node: pageData } = props.pageContext;
    console.log(data);
    const cta = {
        link: `/${pageData.slug}`,
        text: `All ${pageData.name}`,
        position: "top",
    }
    return (
        <Layout>
            <Hero title={pageData.name} subtitle={pageData.cuisineDescription} emoji={pageData.emoji} cta={cta} />
            <Grid columns={['1fr', '1fr 1fr 1fr', null]} >
                {data.allSanityBlogPost.edges.map((edge) => (
                    <RecipeCard key={edge.node._id} edge={edge} />
                ))}
            </Grid>
        </Layout>
    )
}

export default Cuisine;

export const query = graphql`
    query($id: String!){
     allSanityBlogPost(filter: {recipeInfo: {cuisine: {_id: {eq: $id}}}}) {
      edges {
        node {
          slug {
            current
          }
          _id
          _key
          name
          recipeInfo {
            category {
              _id
              _key
              categoryTitle
            }
            prepTime
            yield
            cookTime
          }
          metadata {
            keywords
            recipeDescription
            featuredImage {
              asset {
                gatsbyImageData(fit: CROP, width: 400, height: 400, formats: JPG)
                altText
              }
            }
          }
        }
      }
    }
  }
`