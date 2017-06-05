var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var extractLess = new ExtractTextPlugin({
    filename: "css/style.css"
});

module.exports = {
  entry: './src/js/app.js',
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [{
        test: /\.less$/,
        use: extractLess.extract({
            use: [{
                loader: "css-loader"
            }, {
                loader: "less-loader?sourceMap"
            }],

            // use style-loader in development
            fallback: "style-loader"
        })
    }]
  },
  plugins: [
    extractLess
  ]
}