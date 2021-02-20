const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
  context: __dirname,
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    publicPath: "/",
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
         test: /\.(js|jsx)$/,
         exclude: /node_modules/,
         use: ['babel-loader'],
      },
      {
         test: /\.(ts|tsx)$/,
         exclude: /node_modules/,
         use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      filename: "index.html",
    }),
  ],
  resolve: {
   extensions: ['.js', '.jsx','.ts', '.tsx']
 }
};
