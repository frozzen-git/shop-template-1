"use strict";

const path = require("path");
const autoprefixer = require("autoprefixer");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
// const { PurgeCSSPlugin } = require('purgecss-webpack-plugin')
// const glob = require("glob");

module.exports = {
  mode: "development",
  entry: {
    bootstrap: { import: "./src/bootstrap.js", filename: "js/bootstrap.js" },
    theme: { import: "./src/theme.js", filename: "js/theme.js" },
  },
  output: {
    path: path.resolve(__dirname, "assets"),
  },
  plugins: [
    new miniCssExtractPlugin({
      filename: (pathData) => {
        return "css/[name].css";
      },
    }),
    // new PurgeCSSPlugin({
    //   paths: glob.sync('./**/*.html',  { nodir: true }),
    // }),
  ],
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            // Extracts CSS for each JS file that includes CSS
            loader: miniCssExtractPlugin.loader,
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: "css-loader",
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [autoprefixer],
              },
            },
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: "sass-loader",
            options: {
              sassOptions: {
                // Optional: Silence Sass deprecation warnings. See note below.
                silenceDeprecations: [
                  "mixed-decls",
                  "color-functions",
                  "global-builtin",
                  "import",
                ],
              },
            },
          },
        ],
      },
    ],
  },
};
