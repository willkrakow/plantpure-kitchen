exports.createPages = async ({ graphql, actions }) => {
  await createBlogs(actions, graphql);
  await createCuisines(actions, graphql);
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /bad-module/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}


async function createBlogs(actions, graphql) {
  const { createPage } = actions;
  const blogData = await graphql(`
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
  if (blogData.errors) {
    throw blogData.errors;
  }
  const posts = blogData.data.allSanityBlogPost.edges || [];
  posts.forEach((edge, index) => {
    const slug = edge.node.slug.current;
    const path = encodeURI(`/recipes/${slug}`);
    createPage({
      path,
      component: require.resolve('./src/templates/recipe.js'),
      context: { slug: slug, node: edge.node },
    });
  });
}


async function createCuisines(actions, graphql) {
  const { createPage } = actions;
  const cuisineData = await graphql(`
  {
    allSanityCuisine {
      edges {
        node {
          cuisineImage {
            asset {
              gatsbyImageData(formats: JPG, height: 1000, width: 1000, fit: CROP)
            }
          }
          emoji
          name
          id
          cuisineDescription
          slug {
            current
          }
          _id
          _key
        }
      }
    }
  }`);

  if (cuisineData.errors) {
    throw cuisineData.errors
  }

  const { allSanityCuisine } = cuisineData.data;
  allSanityCuisine.edges.forEach((edge) => {
    const slug = edge.node?.slug?.current || edge.node.name.toLowerCase().replace(/\s+/g, "-").slice(0, 200);
    const path = encodeURI(`/cuisines/${slug}`);

    createPage({
      path,
      component: require.resolve(`./src/templates/cuisine.js`),
      context: { slug: slug, node: edge.node, id: edge.node._id },
    })
  })
}
