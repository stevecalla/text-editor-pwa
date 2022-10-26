const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// Require the GenerateSW class of the WorkBoxPlugin 
const WorkboxPlugin = require('workbox-webpack-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');
const { InjectManifest } = require('workbox-webpack-plugin');
// Require the GenerateSW class of the manifest 
const WebpackPwaManifest = require('webpack-pwa-manifest');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      //todo add "" public path to prevent auto prefix on manifest path (S Calla edit)
      publicPath: "",
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'Webpack Plugin',
      }),
      new MiniCssExtractPlugin(),
      new InjectManifest({
        swSrc: './src-sw.js',
        // swSrc: 'src-sw.js',
        swDest: 'service-worker.js',
        // clientsClaim: true,
        // skipWaiting: true,
      }), 
      // new GenerateSW(),
      // new WorkboxPlugin.GenerateSW({
      //   // Exclude images from the precache
      //   exclude: [/\.(?:png|jpg|jpeg|svg)$/],
        
      //   // Define runtime caching rules.
      //   runtimeCaching: [{
      //     // Match any request ends with .png, .jpg, .jpeg or .svg or .gif.
      //     urlPattern: /\.(?:png|svg|jpg|jpeg|gif)$/,
      //     handler: 'NetworkFirst',
          
      //     options: {
      //       // Use a custom cache name.
      //       cacheName: 'images',
            
      //       // Only cache 2 images.
      //       expiration: {
      //         maxEntries: 2,
      //       },
      //     },
      //   }],
      // }),  
      // TODO: Create a manifest.json:
      new WebpackPwaManifest({
        name: "JEST - Just Another Text Editor",
        short_name: "Text Editor",
        orientation: "portrait",
        display: "standalone",
        start_url: "./",
        description: "Text Editor!",
        background_color: "#7eb4e2",
        theme_color: "#7eb4e2",
        icons: [
          {
            src: "./src/images/icon_96x96.png",
            type: "image/png",
            sizes: "96x96",
            purpose: "any"
          },
            {
              src: "./src/images/icon_128x128.png",
              type: "image/png",
              sizes: "128x128",
              purpose: "any"
            },
            {
              src: "./src/images/icon_192x192.png",
              type: "image/png",
              sizes: "192x192",
              purpose: "maskable"
            },
            {
              src: "./src/images/icon_512x512.png",
              type: "image/png",
              sizes: "512x512",
              purpose: "any"
            }
          ],
        }),      
      ],
      
      // TODO: Add CSS loaders and babel to webpack.
      module: {
        rules: [
          {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        // {
        //   test: /\.(png|svg|jpg|jpeg|gif)$/i,
        //   type: 'asset/resource',
        // },
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/transform-runtime'],
            },
          },
        },
      ],
    },
  };
};
