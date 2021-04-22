/** @jsx jsx */
import React from 'react'
import { jsx, Grid, Themed, Flex } from "theme-ui"
import { graphql, Link } from "gatsby"
import CuisineCard from "../components/CuisineCard"
import RecipeCard from "../components/recipeCard"
import CategoryCard from "../components/CategoryCard"
import Hero from "../components/hero"
import Button from '../components/button'
import CookingVideo from '../videos/video.mp4'
import { fadeIn } from '../animation'

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
      <section sx={{ my: 5, animation: `${fadeIn} 4s 5s` }}>
        <Themed.h2>Recipes</Themed.h2>
        <Grid gap={4} columns={[1, 2, 3]}>
          {recipeEdges.map((edge) => (
            <RecipeCard edge={edge} key={edge.node._id} />
          ))}
        </Grid>
      </section>
      {/* Cuisine section */}
      <section sx={{ my: 5, animationName: `${fadeIn}`, animationTimingFunction: "ease", animationDuration: "1.5s", animationDelay: "2s", }}>
        <Themed.h2>Cuisines</Themed.h2>
        <Grid gap={1} columns={[1, 2, 4]}>
          {cuisineEdges.map((edge) => (
            <CuisineCard edge={edge} key={edge.node._id} />
          ))}
        </Grid>
        <Flex  sx={{ width: "8", justifyContent: "center" }}>
          <Link to="/cuisines" sx={{ display: "inline-block", flex: "0 1 200px", mt: 4}}><Button sx={{ textAlign: "center" }}>All cuisines</Button></Link>
        </Flex>
      </section>
      {/* Categories section */}
      <section sx={{ my: 5 }}>
        <Themed.h2>Categories</Themed.h2>
        <Grid gap={1} columns={[1, 3, 5]}>
          {categoryEdges.map((edge) => (
            <CategoryCard key={edge.node._id} edge={edge} />
          ))}
        </Grid>
        <Flex sx={{ width: "8", justifyContent: "center" }}>
          <Link to="/categories" sx={{ display: "inline-block", flex: "0 1 200px", mt: 4 }}><Button sx={{ textAlign: "center" }}>All categories</Button></Link>
        </Flex>
      </section>
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
              gatsbyImageData(fit: CROP, width: 800, height: 600)
            }
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
