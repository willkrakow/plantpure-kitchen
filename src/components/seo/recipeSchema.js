import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from 'prop-types';

const RecipeSchema = ({ post }) => {
  function parseSteps(steps) {
    const allSteps = steps.map((step) => {
      return `{
          "@type": "HowToStep",
          "name": "${step.title}",
          "text": "${step.description}"
      }`;
    });
    return allSteps
  }
      const {
        name,
        metadata,
        recipeInfo,
        ingredients,
        recipeSteps,
        nutrition,
      } = post;

  return (
    <Helmet>
      <script type="application/ld+json">
        {`
        {
          "@context": ${JSON.stringify("https://schema.org/")},
          "@type": "Recipe",
          "name": ${JSON.stringify(name)},
          "image": [
            "${metadata.featuredImage.asset.url}"
          ],
          "author": {
          "@type": "Person",
          "name": ${JSON.stringify(metadata.author)}
      },
      "datePublished": ${JSON.stringify(metadata.publishedDate || new Date())},
      "description": ${
        JSON.stringify(metadata.recipeDescription) || "no description"
      },
      "prepTime": "PT${recipeInfo.prepTime}M",
      "cookTime": "PT${recipeInfo.prepTime}M",
      "totalTime": "PT${recipeInfo.prepTime + recipeInfo.cookTime}M",
      "keywords": ${JSON.stringify(metadata.keywords)},
      "recipeYield": "${recipeInfo.yield}",
      "recipeCategory": ${JSON.stringify(recipeInfo.category.categoryTitle)},
      "recipeCuisine": ${JSON.stringify(recipeInfo.cuisine.name)},
      "nutrition": {
        "@type": "NutritionInformation",
        "calories": "${nutrition.calories.toString()} calories"
      },
      "recipeIngredient": ${JSON.stringify(ingredients)},
      "recipeInstructions": [${parseSteps(recipeSteps)}]
    }`}
      </script>
    </Helmet>
  );
};

export {RecipeSchema}

RecipeSchema.propTypes = {
  post: PropTypes.shape({
    name: PropTypes.string,
    metadata: PropTypes.shape({
      author: PropTypes.string,
      featuredImage: PropTypes.shape({
        asset: PropTypes.object
      }),
      keywords: PropTypes.arrayOf(PropTypes.string),
      publishedDate: PropTypes.string,
      recipeDescription: PropTypes.string,
    }),
    recipeInfo: PropTypes.shape({
      cookTime: PropTypes.number,
      prepTime: PropTypes.number,
      yield: PropTypes.string,
      cuisine: PropTypes.object,
      category: PropTypes.shape({
        categoryTitle: PropTypes.string,
        categoryImage: PropTypes.object,
        categoryDescription: PropTypes.string,
      }),
    }),
    ingredients: PropTypes.arrayOf(PropTypes.string),
    recipeSteps: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    })),
    nutrition: PropTypes.shape({
      calories: PropTypes.number,
    }),
    _id: PropTypes.string,
  })
}
