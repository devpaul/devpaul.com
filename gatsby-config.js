module.exports = {
	siteMetadata: {
		title: 'devpaul.com',
		description: 'dev/paul',
		keywords: 'software,development,engineer',
		siteUrl: 'https://devpaul.com',
		author: {
			name: 'Paul Shannon',
			url: 'https://twitter.com/developerPaul'
		}
	},
	plugins: [
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'content',
				path: `${__dirname}/src/content`
			}
		},
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					{
						resolve: 'gatsby-remark-responsive-iframe',
						options: {
							wrapperStyle: 'margin-bottom: 1rem'
						}
					},
					'gatsby-remark-prismjs',
					'gatsby-remark-copy-linked-files',
					'gatsby-remark-smartypants',
					{
						resolve: 'gatsby-remark-images',
						options: {
							maxWidth: 1140,
							quality: 90,
							linkImagesToOriginal: false
						}
					}
				]
			}
		},
		'gatsby-transformer-json',
		{
			resolve: 'gatsby-plugin-canonical-urls',
			options: {
				siteUrl: 'https://gatsby-starter-typescript-plus.netlify.com'
			}
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'dev/Paul',
				short_name: 'devPaul',
				description: 'landing site for all things dev/Paul',
				start_url: '/',
				background_color: '#242424',
				theme_color: '#242424',
				// Enables "Add to Homescreen" prompt and disables browser UI (including back button)
				// see https://developers.google.com/web/fundamentals/web-app-manifest/#display
				display: 'standalone',
				icon: 'src/resources/favicon/icon.svg',
				crossOrigin: `use-credentials`,
				orientation: 'portrait'
			}
		},
		'gatsby-plugin-emotion',
		'gatsby-plugin-typescript',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		'gatsby-plugin-react-helmet'
	]
};
