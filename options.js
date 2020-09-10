module.exports = {
  basePath: `/`,
  blogPath: `/blog`,
  tagsPath: "/kategori",
  postsPath: `content/posts`,
  pagesPath: `content/pages`,
  showLineNumbers: false,
  showCopyButton: false,

  feed: true,
  feedTitle: `Minimal Blog`,
  navigation: [
    {
      title: `Blog`,
      slug: `/blog`,
    },
    {
      title: `Kimdir?`,
      slug: `/ayhan-sipahi`,
    },
  ],
  externalLinks: [
    {
      name: `Twitter`,
      url: `https://twitter.com/ayhansipahinet`,
    },
    {
      name: `GitHub`,
      url: `https://github.com/ayhansipahi`,
    },
  ],
  formatString: "D MMMM YYYY",
};
