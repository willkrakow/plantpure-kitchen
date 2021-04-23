/** @jsx jsx */
import React from 'react'
import { Card, Themed, jsx, Grid } from "theme-ui";
import { Link, } from 'gatsby'
import { RecipeDescription, RecipeDirections, RecipeHeader, RecipeImage, RecipeStats, GroceryList } from '../components/recipeComponents'
import { RecipeSchema } from '../components/seo'

const Recipe = ({ pageContext }) => {
  const { node } = pageContext;
  return (
    <React.Fragment>
      <RecipeSchema post={node} />
      <Themed.a as={Link} to="/printpage" state={node} alt="Print this page">
        Print this page 🖨
      </Themed.a>
      <Card
        as={"article"}
        sx={{
          maxWidth: 768,
          margin: "auto",
          padding: 3,
        }}
      >
        <section>
          <RecipeHeader recipeTitle={node.name} cuisineName={node.recipeInfo.cuisine.name} categoryTitle={node.recipeInfo.category.categoryTitle} />
          <RecipeImage imageData={node.metadata.featuredImage.asset.gatsbyImageData} altText={node.name} />
          <RecipeDescription text={node.metadata.recipeDescription} />
        </section>
        <Grid columns={["1fr", null, "1fr 2fr"]}>
          <div
            sx={{
              borderRight: [null, null, "4px solid"],
              borderColor: [null, null, "secondary"],
            }}
          >
            <GroceryList ingredients={node.ingredients} />
          </div>
          <div>
            <RecipeStats recipeInfo={node.recipeInfo} />
            <Themed.hr />
            <RecipeDirections recipeSteps={node.recipeSteps} />
          </div>
        </Grid>
      </Card>
    </React.Fragment>
  );
};

export default Recipe;
