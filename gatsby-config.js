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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-146790666-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: false,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "example.com",
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
