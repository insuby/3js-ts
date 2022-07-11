const path = require("path");
const { distPath, srcPath, staticPath } = require("./path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  context: process.cwd(),
  entry: {
    main: path.resolve(srcPath, "index.tsx"),
  },
  output: {
    path: distPath,
    filename: "[name][size].bundle.js",
    publicPath: "/",
    assetModuleFilename: 'static/images/[name][ext]',
  },
  resolve: {
    alias: {
      app: path.join(srcPath, "app"),
      processes: path.join(srcPath, "processes"),
      pages: path.join(srcPath, "pages"),
      widgets: path.join(srcPath, "widgets"),
      features: path.join(srcPath, "features"),
      entities: path.join(srcPath, "entities"),
      shared: path.join(srcPath, "shared"),
      assets: path.join(srcPath, "assets"),
    },
    extensions: [".tsx", ".ts", ".js", ".jsx"],
    symlinks: false,
  },
  // plugins: [
  //   new CopyPlugin({
  //     patterns: [
  //       path.join(srcPath, "assets", "{images,fonts}", "*"),
  //       path.join(srcPath, "**", "assets", "{images,fonts}", "*"),
  //       path.join(srcPath, "**", "**", "assets", "{images,fonts}", "*"),
  //       "**/*",
  //       {
  //         from: "**/*",
  //       },
  //       path.join(staticPath, "assets", "[type]", "[name]"),
  //     ],
  //   }),
  // ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /(node_modules)/,
        use: {
          loader: "swc-loader",
          options: {
            sync: true,
            jsc: {
              parser: {
                syntax: "typescript",
              },
            },
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      // {
      //   test: /\.(jpe?g|png|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
      //   use: "base64-inline-loader?limit=1000&name=[name].[ext]",
      // },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.mp4$/,
        use: "file-loader",
      },
    ],
  },
};
