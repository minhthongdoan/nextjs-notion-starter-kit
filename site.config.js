const { facebook } = require("lib/config");

module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: 'd2cd60f114614fadb933e1b53fc60dd8',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: '70432effb4c341b98373ebed414f9025',

  // basic site info (required)
  name: 'Minh Thong',
  domain: 'www.minhthong.me',
  author: 'Minh Thông',

  // open graph metadata (optional)
  description: 'Personal blog of Minh Thong',
  socialImageTitle: 'Minh Thong',
  socialImageSubtitle: 'Hello World! 👋',

  // social usernames (optional)
  twitter: 'test',
  github: 'minhthongdoan',
  linkedin: 'minhthongdoan',
  email: 'minhthongdoan211@gmail.com',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: null,

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: true,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
   pageUrlOverrides: {
     '/medievial-baby-art': '912d2ed264b846739da11bdbfb8a5135',
     
   }
  // pageUrlOverrides: null
}
