module.exports = {
  siteMetadata: {
    siteUrl: 'https:/www.glcodeworks.com/blog',
    title: "Generosa Litton's Diving Blog",
    description: 'Blog about scuba diving',
    image: './src/images/glitton-scuba.jpeg',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blogs',
        path: `${__dirname}/src/blogs`,
      },
    },
    'gatsby-plugin-mdx',
  ],
};
