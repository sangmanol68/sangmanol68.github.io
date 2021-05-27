const path = require("path")
const MyPlugin = require("./myplugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackShellPluginNext = require('webpack-shell-plugin-next');
const webpack = require("webpack")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
	//plugins: [new MyPlugin()],
	//plugins: [
    //new WebpackShellPluginNext({
      //onBuildStart:{
        //scripts: ['echo "===> Starting packing with WEBPACK 5"'],
        //blocking: true,
        //parallel: false
      //},
      //onBuildEnd:{
//      scripts: ['echo "===>  packing with WEBPACK 5'],
  //    blocking: false,
    //   parallel: true
      //}
	  
    //})
  //],
 plugins: [
    ...(process.env.NODE_ENV === "production"
      ? [new MiniCssExtractPlugin({ filename: `[name].css` })]
      : []),
  ],
  mode: "development",
  entry: {
    main: "./src/app.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve("./dist"),
	assetModuleFilename: 'images/[hash][ext][query]'
  },
	module: {
    rules: [
      {
        test: /\.png/,
       type: 'asset/inline'
    },
     {
       test: /\.html/,
       type: 'asset/inline',
       generator: {
         filename: 'static/[hash][ext][query]'
       }
     }
	  
    ],
  },
}