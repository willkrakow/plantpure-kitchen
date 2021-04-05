/** @jsx jsx */
import { jsx, Grid } from "theme-ui";
import { graphql } from "gatsby";
import { Themed } from "theme-ui";
import Layout from "../components/layout";
import CuisineCard from "../components/CuisineCard";
import RecipeCard from "../components/RecipeCard";
import CategoryCard from "../components/CategoryCard";

export default function Index({ ...props }) {
  const { allSanityBlogPost, allSanityCuisine, allSanityCategory } = props.data;

  const { edges: recipeEdges } = allSanityBlogPost;
  const { edges: cuisineEdges } = allSanityCuisine;
  const { edges: categoryEdges } = allSanityCategory;


  return (
    <Layout>
      <Themed.h1>PlantPure Kitchen</Themed.h1>
      {/* Recipe section */}
      <section sx={{ my: 6 }}>
        <Themed.h2>Recipes</Themed.h2>
        <Grid gap={4} columns={[1, 2, 3]}>
          {recipeEdges.map((edge) => (
            <RecipeCard edge={edge} key={edge.node._id} />
          ))}
        </Grid>
      </section>
      {/* Cuisine section */}
      <section sx={{ my: 6 }}>
        <Themed.h2>Cuisines</Themed.h2>
        <Grid gap={1} columns={[1, 2, 4]}>
          {cuisineEdges.map((edge) => (
            <CuisineCard edge={edge} key={edge.node._id} />
          ))}
        </Grid>
      </section>
      {/* Categories section */}
      <section sx={{ my: 6 }}>
        <Themed.h2>Categories</Themed.h2>
        <Grid gap={1} columns={[1, 3, 5]}>
          {categoryEdges.map((edge) => (
            <CategoryCard key={edge.node._id} edge={edge} />
          ))}
        </Grid>
      </section>
    </Layout>
  );
}

export const query = graphql`
  {
    allSanityCuisine(limit: 8) {
      edges {
        node {
          _id
          name
          cuisineDescription
          cuisineImage {
            asset {
              gatsbyImageData(fit: CROP, aspectRatio: 1)
            }
          }
        }
      }
    }
    allSanityCategory(limit: 6) {
      edges {
        node {
          _id
          categoryTitle
          categoryDescription
          categoryImage {
            asset {
              gatsbyImageData(fit: CROP, width: 800, height: 600)
            }
          }
        }
      }
    }
    allSanityBlogPost(limit: 6) {
      edges {
        node {
          slug {
            current
          }
          recipeSteps {
            description
            title
          }
          recipeInfo {
            cuisine {
              cuisineDescription
              name
            }
            category {
              categoryTitle
              categoryImage {
                asset {
                  gatsbyImageData(fit: CROP, aspectRatio: 3)
                }
              }
              categoryDescription
            }
            cookTime
            prepTime
            yield
          }
          recipeVideo {
            embed
            link
            videoTitle
          }
          nutrition {
            calories
          }
          ingredients
          name
          metadata {
            author
            featuredImage {
              asset {
                gatsbyImageData(fit: CROP, aspectRatio: 1.77)
                url
              }
            }
            keywords
            publishedDate
            recipeDescription
          }
          _id
        }
      }
    }
  }
`;
