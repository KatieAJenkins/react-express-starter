//everytime we run npm build, the build.js file will change

const webpack = require('webpack');
const path = require('path');

const APP_DIR = path.resolve(__dirname, 'App'); //here is where tip of react node is
const BUILD_DIR = path.resolve(__dirname, 'API'); //here is where we put it

const config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    publicPath: "/",
    filename: 'build.js' //build code
  },
  //using 2 rules here: babel-loader and style-loader
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, //won't look at css files, only js or jsx files
        loader: 'babel-loader', //allows us to use JSX
        exclude: path.resolve(__dirname, 'node_modules'), //ignore _dirname and 'node_modules'
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
      }
    ]
  },
  resolve: { // dont have to specify extensions
    extensions: ['.js', '.jsx', '.json']
  }
};

module.exports = config;

//   plugins: [
//   // new webpack.optimize.DedupePlugin(),
//     new webpack.DefinePlugin({
//       'process.env': {
//         NODE_ENV: JSON.stringify('production')
//       }
//     }),
//     new webpack.optimize.UglifyJsPlugin(),
//     new webpack.optimize.AggressiveMergingPlugin(),
//     new webpack.optimize.ModuleConcatenationPlugin()
//   ],
