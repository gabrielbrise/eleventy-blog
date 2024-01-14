module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("bundle.css")
    eleventyConfig.addPassthroughCopy("logo.svg")
}