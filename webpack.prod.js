const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "production",
  entry: "./src/index.tsx",
  resolve: {
    alias: {
      "@Components": path.resolve(__dirname, "./src/components"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },

  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: [/\.svg$/, /\.jpe?g$/, /\.png$/],
        loader: "file-loader",
        options: {
          publicPath: "./dist/",
          name: "[name]-[hash].[ext]",
        },
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: "react",
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
