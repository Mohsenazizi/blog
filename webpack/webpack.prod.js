const path = require("path");
const OptimizeCssAssetPlugin = require("optimize-css-assets-webpack-plugin");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = merge(common, {
  mode: "production",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.[hash].js"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      }
    ]
  },
  optimization: {
    minimizer: [new OptimizeCssAssetPlugin(), new TerserWebpackPlugin()]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[contentHash].css"
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      minify: {
        removeAttributesQuotes: true,
        collapseWhiteSpace: true,
        removeComments: true
      }
    })
  ]
});
