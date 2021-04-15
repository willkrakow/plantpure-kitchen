

module.exports = {
  siteMetadata: {
    title: "PlantPure Kitchen Recipes",
    description: "Entrées, apps, sweets, and more. 100% whole food, plant-based vegan recipes for the whole family.",
    image: "static/images/icon.png",
    url: "https://plantpure-kitchen.netlify.app/",
    menuLinks: [
      {
        url: "/",
        name: "Home",
        emoji: "🏠",
      },
      {
        url: "/cuisines",
        name: "Cuisines",
        emoji: "🌏",
      },
      {
        url: "/categories",
        name: "Categories",
        emoji: "🍴",
      },
      {
        url: "/browse",
        name: "Browse",
        emoji: "🔎",
      },
    ],
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
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        icon: `static/images/icon.png`,
      },
    },
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
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/images`,
        name: `images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
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
