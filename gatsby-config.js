require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
    siteMetadata: {
        title: `Catalina Wine Mixer`,
        descrition: '',
        author: `@gatsbyjs`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`
            }
        },
        {
            resolve: `gatsby-source-faunadb`,
            options: {
                // The secret for the key you're using to connect to your Fauna database.
                // You can generate on of these in the "Security" tab of your Fauna Console.
                secret: process.env.FAUNA_SERVER_KEY,
                // The name of the index you want to query
                // You can create an index in the "Indexes" tab of your Fauna Console.
                index: `allHabits`,
                // If your index requires arguments, you can specify them like this.
                // You can omit this property if your index doesn't need any.
                // arguments: ['bird'],
                // This is the name under which your data will appear in Gatsby GraphQL queries
                // The following will create queries called `allBird` and `bird`.
                type: 'allHabits',
                // If you need to limit the number of documents returned, you can specify a
                // maximum number to read.
                size: 100
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
            }
        }
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ]
}
