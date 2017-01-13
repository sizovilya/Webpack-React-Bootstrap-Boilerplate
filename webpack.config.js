var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var ENV = process.env.npm_lifecycle_event;
var port = 8080;
var plugins = [];

plugins.push(new HtmlWebpackPlugin ({
    template: './app/index.html'
}),
new ExtractTextPlugin('styles.css', {
  allChunks: true
})
);

if (ENV !== 'prod') {
        plugins.push(
            new webpack.HotModuleReplacementPlugin()
        );
    }

if (ENV === 'prod') {
      plugins.push(
        new CleanWebpackPlugin(['dist'], {
           root: path.join(__dirname),
           verbose: true,
           dry: false
         }),
         new webpack.optimize.UglifyJsPlugin({
           beautyfy: false,
           sourceMap: false,
           compress: {
                warnings: false
            }
         }),
         new webpack.DefinePlugin({
           'process.env': {
              'NODE_ENV': '"production"'
              }
     		})
       )
  }

module.exports = {
  devtool: 'source-map',
  entry: [
    './app/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.[hash].js',
    publicPath: ENV === 'prod' ? '' : 'http://localhost:' + port +'/',
  },
  plugins: plugins,
  module: { //Обновлено
    loaders: [ //добавили babel-loader
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, "app"),
        ],
        query: {
          presets: ["es2015", "stage-0", "react"] //поддержка ES2015, ES7 и JSX
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!resolve-url!sass-loader?sourceMap')
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
        loader: 'file-loader'
      }
    ]
  },

  watch: ENV !== 'prod',

  devServer: {
    contentBase: './dist',
        port: port,
        hot: true,
        stats: 'minimal'
  }

}
