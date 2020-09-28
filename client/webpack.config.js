/* eslint-disable @typescript-eslint/no-require-imports,  @typescript-eslint/no-var-requires */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

const isDevelopment = process.env.mode === "development";

module.exports = {
  mode: isDevelopment ? "development" : "production",
  devtool: isDevelopment ? "source-map" : false,
  devServer: {
    contentBase: "./dist",
    hot: true,
    publicPath: "/",
  },
  entry: ["@babel/polyfill", "./src/index.tsx"],
  output: {
    path: path.join(__dirname, "../dist"),
    filename: isDevelopment ? "[name].js" : "[name].[contenthash].js",
    chunkFilename: isDevelopment
      ? "[name].bundle.js"
      : "[name].[contenthash].bundle.js",
  },
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@pages": path.resolve(__dirname, "src/pages/"),
      "@utils": path.resolve(__dirname, "src/utils/"),
      "@scss": path.resolve(__dirname, "src/scss/"),
      "@assets": path.resolve(__dirname, "src/assets/"),
    },
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: isDevelopment
                  ? "[local]--[hash:base64:5]"
                  : "[hash:base64]",
              },
            },
          },
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(jpe?g|png|woff|woff2|eot|ttf|svg|otf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              context: "src",
              name: "./[path][name].[ext]",
            },
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
    minimize: !isDevelopment,
    minimizer: [
      new TerserPlugin({
        sourceMap: isDevelopment,
      }),
    ],
    usedExports: true,
  },
  plugins: isDevelopment
    ? [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
          filename: "[name].css",
        }),
        new HtmlWebpackPlugin({
          template: "./src/templates/index.html",
          title: "Risen Sun Agency - Digital Agency in Saint-Petersburg",
        }),
      ]
    : [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
          filename: "[name].[hash].css",
        }),
        new HtmlWebpackPlugin({
          template: "./src/templates/index.html",
          title: "Risen Sun Agency - Digital Agency in Saint-Petersburg",
        }),
        new CompressionPlugin(),
      ],
};
