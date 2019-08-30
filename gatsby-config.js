module.exports = {
  siteMetadata: {
    title: 'Dominic Abela Portfolio',
    author: 'Dominic Abela',
    description: 'Developer Portfolio for Dominic Abela',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'Portfolio',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#b2b2b2',
        display: 'minimal-ui',
        icon: 'src/assets/images/site-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
