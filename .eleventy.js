module.exports = function(eleventyConfig) {
  return {
    templateFormats: ["md"],
    dir: {
      input: ".",
      includes: "_src/includes",
      layouts: "_src/layouts",
      data: "_src/data",
      output: "_site",
      dataTemplateEngine: "njk"
    }
  }
}