/** @jsx jsx */
import React from "react";
import Layout from "../components/layout";
import { graphql, useStaticQuery } from "gatsby";
import { Themed, Grid, jsx } from "theme-ui";
import _ from "lodash";
import RecipeCard from "../components/RecipeCard";
import { createHistory, globalHistory } from '@reach/router'
import Button from "../components/button";
// import { GatsbyImage } from 'gatsby-plugin-image'
const Browse = (props) => {
  const [cuisineFilters, setCuisineFilters] = React.useState([]);
  const [categoryFilters, setCategoryFilters] = React.useState([]);

  
  const data = useStaticQuery(graphql`
    {
      allSanityBlogPost {
        edges {
          node {
            name
            _id
            slug {
              current
            }
            recipeVideo {
              link
            }
            recipeInfo {
              cuisine {
                name
              }
              category {
                categoryTitle
              }
              prepTime
              yield
              cookTime
            }
            metadata {
              featuredImage {
                asset {
                  gatsbyImageData(fit: CROP, width: 800, height: 600)
                }
              }
              recipeDescription
              publishedDate
            }
          }
        }
      }
      allSanityCategory {
        edges {
          node {
            _id
            categoryTitle
          }
        }
      }
      allSanityCuisine {
        edges {
          node {
            _id
            name
          }
        }
      }
    }
  `);
  const { allSanityBlogPost, allSanityCategory, allSanityCuisine } = data;

  function filterPosts(edge) {
    if (cuisineFilters.length > 0) {
      const cuisineName = edge.node.recipeInfo?.cuisine?.name || "none";
      return cuisineFilters.includes(cuisineName) ? edge : null;
    } else if (categoryFilters.length > 0) {
      const categoryTitle =
        edge.node.recipeInfo?.category?.categoryTitle || "none";
      return categoryFilters.includes(categoryTitle) ? edge : null;
    }
    return edge;
  }

  const handleCuisine = (e) => {
    if (cuisineFilters.includes(e)) {
      const temp = _.filter(cuisineFilters, (item) => item !== e);
      setCuisineFilters(temp);
      return;
    }
    setCuisineFilters([e, ...cuisineFilters]);
  };

  const handleCategory = (e) => {
    if (categoryFilters.includes(e)) {
      const temp = _.filter(categoryFilters, (item) => item !== e);
      setCategoryFilters(temp);
      return;
    }
    setCategoryFilters([e, ...categoryFilters]);
  };

  const filtered = _.filter(allSanityBlogPost.edges, (edge) =>
    filterPosts(edge)
  );

  const handleClear = () => {
      setCuisineFilters([]);
      setCategoryFilters([]);
  }

  React.useEffect(() => {
    if (categoryFilters.length < 1 && globalHistory.location?.state?.fromCategory){
        setCategoryFilters([props.location.state.fromCategory]);
    }

    if (cuisineFilters.length < 1 && globalHistory.location?.state?.fromCuisine){
        setCuisineFilters([props.location.state.fromCuisine])
    }
      let history = createHistory(window);
      console.log(history);
  }, [categoryFilters.length, cuisineFilters.length, props.location?.state?.fromCategory, props.location?.state?.fromCuisine])
  return (
    <Layout>
      <Themed.h1>Browse recipes</Themed.h1>

      <Grid columns={[1, "1fr 3fr", "1fr 3fr"]}>
        <section>
          <Themed.h3>Filter</Themed.h3>
          <button
            sx={{
              backgroundColor: "transparent",
              color: "text",
              borderColor: "text",
              cursor: "pointer",
              py: 1,
              width: "50%",
            }}
            onClick={handleClear}
          >
            Reset
          </button>
          <Themed.p>Cuisine</Themed.p>
          {allSanityCuisine.edges.map((edge) => (
            <Button
              key={edge.node._id}
              onClick={() => handleCuisine(edge.node.name)}
              sx={{
                border: "none",
              }}
              isactive={cuisineFilters.includes(edge.node.name)}
            >
              {edge.node.name}
            </Button>
          ))}
          <Themed.p>Category</Themed.p>
          {allSanityCategory.edges.map((edge) => (
            <Button
              sx={{
                border: "none",
              }}
              key={edge.node._id}
              onClick={() => handleCategory(edge.node.categoryTitle)}
              isactive={categoryFilters.includes(edge.node.categoryTitle)}
            >
              {edge.node.categoryTitle}
            </Button>
          ))}
        </section>
        <section>
          <Grid columns={[1, 2, 3]}>
            {filtered.map((recipe) => (
              <RecipeCard edge={recipe} key={recipe.node._id} />
            ))}
          </Grid>
        </section>
      </Grid>
    </Layout>
  );
};

export default Browse;
