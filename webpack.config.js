const LiveReloadPlugin = require('webpack-livereload-plugin');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const path = require('path');
module.exports = {
    entry:'./app.js',
    output: {
        filename:'bundle.js',
    },
    devServer:{
        index:'index.html',
        watchContentBase: true,
    },
    watch:true,
    module: {
      rules: [
        
        {
          test: /.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
          loader: 'url-loader?limit=10000',
        },
        // {test: /\.(gif|png|jpe?g|svg)$/i,
        //   use: [
        //     'file-loader',
        //     {
        //       loader: 'image-webpack-loader',
        //       options: {
        //         bypassOnDebug: true, // webpack@1.x
        //         disable: true, // webpack@2.x and newer
        //         mozjpeg: {
        //           progressive: true,
        //           quality: 75
        //         },
        //         // optipng.enabled: false will disable optipng
        //         optipng: {
        //           enabled: false,
        //         },
        //         pngquant: {
        //           quality: '65-90',
        //           speed: 4
        //         },
        //       },
        //     },
        //   ],
        // },
          
        // {
        //   test: /\.css$/,
        //   use: [ 'style-loader', 'css-loader' ]
        // },
        
        {test: /\.scss$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader",
          options: {
            includePaths: []
          }
        }, {
          loader: 'postcss-loader',
          options: {
              plugins: [
                  autoprefixer({
                      browsers:['edge >= 17', 'firefox >= 62', 'chrome >= 69', 'last 1 version']
                  })
              ],
              sourceMap: true
          }
        },{
          loader: "sass-loader",
          options: {
            includePaths: []
          }
        }]
      }]
    },
    plugins: [
      new LiveReloadPlugin({}),
      new webpack.WatchIgnorePlugin([
        path.join(__dirname, "node_modules")
      ]),
    ]
}