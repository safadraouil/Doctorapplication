const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
const withVideos = require('next-videos')
module.exports = withVideos({
  assetPrefix: 'https://example.com',

  webpack(config, options) {
    return config
  },
})
