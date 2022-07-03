const path = require("path");
const { distPath, srcPath } = require("./path");
// const CopyPlugin = require("copy-webpack-plugin");

// console.log( path.join(srcPath, "features/partners/assets/images/"));
module.exports = {
  context: process.cwd(),
  entry: {
    main: path.resolve(srcPath, "index.tsx"),
  },
  output: {
    path: distPath,
    filename: "[name].js",
    publicPath: "/",
    assetModuleFilename: "static/images/[name][ext]",
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
  //       {
  //         from: path.join(srcPath, "features/partner/assets/images/*.png"),
  //         to: path.join(staticPath, "/images")
  //       }
  //     ]
  //   })
  // ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [["postcss-preset-env"]],
              },
            },
          },
        ],
      },
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
        use: 'file-loader',
      },
    ],
  },
};
