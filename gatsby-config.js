

module.exports = {
  siteMetadata: {
    title: "PlantPure Kitchen Recipes",
    description:
      "Entrées, apps, sweets, and more. 100% whole food, plant-based vegan recipes for the whole family.",
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "tddw316c",
        dataset: "production",
        apiVersion: "2021-03-25",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-theme-ui",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `raleway`,
          `lato`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
  ],
};
