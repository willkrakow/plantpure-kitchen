/** @jsx jsx */
import React from 'react'
import { Card, Themed, jsx, Grid } from "theme-ui";
import { Link, } from 'gatsby'
import RecipeImage from "../components/recipeImage";
import GroceryList from '../components/groceryList';
import RecipeDirections from '../components/recipeDirections'
import RecipeStats from "../components/recipeStats";
import RecipeHeader from "../components/recipeHeader";
import RecipeSchema from '../components/recipeSchema';
import RecipeDescription from '../components/recipeDescription';

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
          <RecipeHeader node={node} />
          <RecipeImage node={node} />
          <RecipeDescription text={node.metadata.recipeDescription} />
        </section>
        
        <Grid columns={["1fr", null, "1fr 2fr"]}>
          <div
            sx={{
              borderRight: [null, null, "4px solid"],
              borderColor: [null, null, "secondary"],
            }}
          >
          <GroceryList node={node} />
          </div>
          <div>
            <RecipeStats node={node} />
            <Themed.hr />
            <RecipeDirections node={node} />
          </div>
        </Grid>
      </Card>
    </React.Fragment>
  );
};

export default Recipe;
