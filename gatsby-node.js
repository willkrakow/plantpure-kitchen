exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allSanityBlogPost {
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
                categoryDescription
                categoryImage {
                  asset {
                    gatsbyImageData(fit: CROP, aspectRatio: 3)
                  }
                }
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
                  gatsbyImageData
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
  `);

  if (result.errors) {
    throw result.errors
  }

  const posts = result.data.allSanityBlogPost.edges || []
  posts.forEach((edge, index) => {
        const slug = edge.node.slug.current
        const path = encodeURI(`/recipes/${slug}`);
        
        createPage({
            path,
            component: require.resolve('./src/templates/recipe.js'),
            context: {slug: slug, node: edge.node},
        })
  })
}