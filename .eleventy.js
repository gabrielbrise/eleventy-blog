const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(syntaxHighlight)
    eleventyConfig.addPassthroughCopy("bundle.css")
    eleventyConfig.addPassthroughCopy("logo.svg")
    eleventyConfig.addPassthroughCopy("logo-lines.svg")
    eleventyConfig.addPassthroughCopy("scripts/nav-modal.js")
    eleventyConfig.addPassthroughCopy("scripts/prism.js")

    // Configuration to watch files in my own file structure
    eleventyConfig.addWatchTarget("./css");
    eleventyConfig.addWatchTarget("./scripts");
    eleventyConfig.addWatchTarget("./components")
}