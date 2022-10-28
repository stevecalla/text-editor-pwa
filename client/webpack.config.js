const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
// section: Configure workbox plugins for a service worker and manifest file.
// Generate the service worker class of the WorkBoxPlugin
const { InjectManifest } = require("workbox-webpack-plugin");
// Generate the PWA manifest
const WebpackPwaManifest = require("webpack-pwa-manifest");
// Generate unique css "main.css" in dist
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = () => {
  return {
    mode: "development",
    entry: {
      main: "./src/js/index.js",
      install: "./src/js/install.js",
    },
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
      // section: add "" public path to prevent auto prefix on manifest path (S Calla edit)
      publicPath: "",
      clean: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./index.html",
        title: "Webpack Plugin",
      }),
      new MiniCssExtractPlugin(),
      new InjectManifest({
        swSrc: "./src-sw.js",
        swDest: "service-worker.js",
      }),
      // section: Create a manifest.json:
      new WebpackPwaManifest({
        name: "Just Another Text Editor",
        short_name: "Text Editor",
        orientation: "portrait",
        display: "standalone",
        start_url: "./",
        description: "Text Editor!",
        background_color: "#31a9e1",
        theme_color: "#31a9e1",
        fingerprints: false,
        inject: true,
        ios: true,
        icons: [
          {
            src: path.resolve('src/assets/icons/logo.png'),
            destination: "assets/icons",
            sizes: [96, 128, 256, 384, 512], // converts logo.png to multiple sizes & png files
            purpsose: "any",
          },
          {
            src: path.resolve('src/assets/icons/icon_192x192.png'),
            destination: "assets/icons",
            sizes: "192x192",
            purpose: "maskable", // section: satisfies lighthouse criteria
          },
        ],
      }),
    ],

    // section: Add CSS loaders and babel to webpack.
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
          type: "asset/resource",
          // section: retrieves from the asset folder; puts assets in assets/images with custom name rather than using fingerprint
          generator: {
            filename: "assets/images/[name][ext]",
          },
        },
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
              plugins: [
                "@babel/plugin-proposal-object-rest-spread",
                "@babel/transform-runtime",
              ],
            },
          },
        },
      ],
    },
  };
};
