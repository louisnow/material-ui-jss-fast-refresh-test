const path = require("path");
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  mode: isDevelopment ? "development" : "production",
  entry: {
    main: "./src/index.js",
  },
  // target: "web",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, "src"),
        use: "babel-loader",
      },
    ],
  },
  plugins: [
    isDevelopment && new webpack.HotModuleReplacementPlugin(),
    isDevelopment && new ReactRefreshPlugin(),
    new HtmlWebpackPlugin({
      filename: "./index.html",
      template: "./public/index.html",
    }),
  ].filter(Boolean),
  devServer: {
    historyApiFallback: true,
    hot: true,
    liveReload: false,
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
