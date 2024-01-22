module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/bundle.css")
    eleventyConfig.addPassthroughCopy("src/scripts/nav-modal.js")
    eleventyConfig.addPassthroughCopy("src/scripts/prism.js")

    // Public Assets
    eleventyConfig.addPassthroughCopy({ "src/static/": "/" });
    eleventyConfig.addPassthroughCopy("src/assets/")

    // Configuration to watch files in my own file structure
    eleventyConfig.addWatchTarget("src/css");
    eleventyConfig.addWatchTarget("src/scripts");
    eleventyConfig.addWatchTarget("src/components")

    // Mapping eleventy default directories to a custom one
    return {
        dir: {
            input: "src",
            output: "dist",
            layouts: "layouts"
        }
    }
}