/** @jsx jsx */
import React from 'react'
import { jsx, Grid, Themed, Flex, Link, Container } from "theme-ui"
import { graphql, Link as GatsbyLink } from "gatsby"
import CuisineCard from "../components/CuisineCard"
import RecipeCard from "../components/recipeCard"
import CategoryCard from "../components/CategoryCard"
import Hero from "../components/hero"
import CookingVideo from '../videos/video.mp4'
import { moveRight, moveLeft } from '../animation'

export default function Index({ ...props }) {
  const { allSanityBlogPost, allSanityCuisine, allSanityCategory } = props.data;

  const { edges: recipeEdges } = allSanityBlogPost;
  const { edges: cuisineEdges } = allSanityCuisine;
  const { edges: categoryEdges } = allSanityCategory;

  const cta = {
    link: "/browse",
    text: "Browse recipes",
    position: "bottom",
  }

  return (
    <React.Fragment>
      <Hero videoFile={CookingVideo} cta={cta} />
      {/* Recipe section */}
      <Container as="section">
        <Themed.h2>Recipes</Themed.h2>
        <Grid gap={3} columns={[1, 2, 3]} sx={{ animationName: `${moveRight}`, animationDuration: '0.5s', animationTimingFunction: 'ease', animationFillMode: 'forwards', position: 'relative' }}>
          {recipeEdges.map((edge) => (
            <RecipeCard edge={edge} key={edge.node._id} fromcategory={true} />
          ))}
        </Grid>
      </Container>

      {/* Cuisine section */}
      <Container as="section">
        <Themed.h2>Cuisines</Themed.h2>
        <Grid gap={0} columns={[1, 2, 4]} sx={{ animationName: `${moveLeft}`, animationDuration: "1.5s", animationTimingFunction: "ease", animationFillMode: 'forwards', position: 'relative'  }}>
          {cuisineEdges.map((edge) => (
            <CuisineCard edge={edge} key={edge.node._id} />
          ))}
        </Grid>
        <Flex  sx={{ width: "8", justifyContent: "center" }}>
          <Link variant="a.primary" as={GatsbyLink} to="/cuisines" sx={{ display: "inline-block", flex: "0 1 200px", mt: 4}}>All cuisines</Link>
        </Flex>
      </Container>

      {/* Categories section */}
      <Container as="section">
        <Themed.h2>Categories</Themed.h2>
        <Grid gap={2} columns={[1, 3, 5]}>
          {categoryEdges.map((edge) => (
            <CategoryCard key={edge.node._id} edge={edge} />
          ))}
        </Grid>
        <Flex sx={{ width: "8", justifyContent: "center" }}>
          <Link as={GatsbyLink} variant="a.primary" to="/categories" sx={{ display: "inline-block", flex: "0 1 200px", mt: 4 }}>All categories</Link>
        </Flex>
      </Container>
    </React.Fragment>
  );
}

export const query = graphql`
  {
    allSanityCuisine(limit: 6) {
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
          slug {
            current
          }
        }
      }
    }
    allSanityCategory(limit: 10) {
      edges {
        node {
          _id
          categoryTitle
          categoryDescription
          categoryImage {
            asset {
              gatsbyImageData(fit: CROP, width: 800, height: 800)
            }
          }
          slug {
            current
          }
        }
      }
    }
    allSanityBlogPost(limit: 3) {
      edges {
        node {
          slug {
            current
          }
          recipeInfo {
            cuisine {
              name
              emoji
              slug {
                current
              }
            }
            category {
              categoryTitle
            }
            cookTime
            prepTime
            yield
          }
          recipeVideo {
            link
            videoTitle
          }
          name
          metadata {
            featuredImage {
              asset {
                gatsbyImageData(fit: CROP, width: 500, height: 300)
                url
              }
            }
            publishedDate
            recipeDescription
          }
          _id
        }
      }
    }
  }
`;
