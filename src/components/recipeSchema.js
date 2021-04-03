import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from 'prop-types';

const RecipeSchema = ({ post }) => {



  function parseSteps(steps) {
    const allSteps = steps.map((step) => {
      return `{
          "@type": "HowToStep",
          "name": "${step.title}",
          "text": "${step.description}",
      }`;
    });
    return allSteps;
  }
      const {
        name,
        metadata,
        recipeInfo,
        recipeVideo,
        ingredients,
        recipeSteps,
        nutrition,
      } = post;

  return (
    <Helmet>
      <script type="application/ld+json">
        {`
        {
      "@context": "https://schema.org/",
      "@type": "Recipe",
      "name": "${JSON.stringify(name)}",
      "image": [
        ${"https://example.com/bunny"},
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
      "recipeCategory": ${JSON.stringify(recipeInfo.category)},
      "recipeCuisine": ${JSON.stringify(recipeInfo.cuisine.name)},
      "nutrition": {
        "@type": "NutritionInformation",
        "calories": "${nutrition.calories} calories"
      },
      "recipeIngredient": ${JSON.stringify(ingredients)},
      "recipeInstructions": ${parseSteps(recipeSteps)},
      "video": {
        "@type": "VideoObject",
        "name": "${recipeVideo.Title || name}",
        "description": "${metadata.description || "no description"}",
        "contentUrl": ${JSON.stringify(recipeVideo.link)},
        "embedUrl": ${JSON.stringify(recipeVideo.embed)},
        "uploadDate": ${JSON.stringify(metadata.publishedDate || new Date())},
      }
    }
          `}
      </script>
    </Helmet>
  );
};

export default RecipeSchema

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
    recipeVideo: PropTypes.shape({
      title: PropTypes.string,
      link: PropTypes.string,
      embed: PropTypes.string,
    }),
    ingredients: PropTypes.arrayOf(PropTypes.string),
    recipeSteps: PropTypes.shape({
      description: PropTypes.string,
      title: PropTypes.string,
    }),
    nutrition: PropTypes.shape({
      calories: PropTypes.string,
    }),
    _id: PropTypes.string,
  })
}