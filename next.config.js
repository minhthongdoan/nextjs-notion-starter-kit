// const isDev = process.env.NODE_ENV === 'development' || !process.env.NODE_ENV

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  images: {
    domains: ['pbs.twimg.com']
  },
  future: {
    webpack5: true
  }
})

module.exports = {
  async rewrites() {
    return [
	    {
	      source: "/bee.js",
	      destination: "https://cdn.splitbee.io/sb.js",
	    },
	    {
	      source: "/_hive/:slug",
	      destination: "https://hive.splitbee.io/:slug",
	    },
	  ];
  },
}