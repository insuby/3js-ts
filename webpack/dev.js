const path = require("path");
const { merge } = require("webpack-merge");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const ForkTsCheckerNotifierWebpackPlugin = require("fork-ts-checker-notifier-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const ReactRefreshTypeScript = require("react-refresh-typescript");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CircularDependencyPlugin = require("circular-dependency-plugin");

const common = require("./common.js");
const { rootPath, staticPath, distPath, srcPath } = require("./path");

module.exports = merge(common, {
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        include: srcPath,
        exclude: /node_modules/,
        options: {
          transpileOnly: true,
          happyPackMode: true,
          getCustomTransformers: () => ({
            before: [ReactRefreshTypeScript()],
          }),
        },
      },
    ],
  },
  resolve: {
    symlinks: false,
    cacheWithContext: false,
  },
  cache: {
    type: "filesystem",
    cacheDirectory: path.join(rootPath, ".webpack_cache"),
    buildDependencies: {
      config: [__filename],
    },
  },
  stats: "errors-only",
  devServer: {
    static: distPath,
    historyApiFallback: true,
    compress: false,
    // TODO из env
    port: 3000,
    client: {
      overlay: false,
      progress: false,
      reconnect: 5,
    },
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin(),
    new ForkTsCheckerNotifierWebpackPlugin({
      excludeWarnings: true,
    }),
    new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/,
      include: /dir/,
      failOnError: true,
      allowAsyncCycles: false,
      cwd: process.cwd(),
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(staticPath, "index.html"),
    }),
  ],
  optimization: {
    runtimeChunk: true,
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },
  output: {
    /**
     * генерировать информацию о пути в выходном пакете
     */
    pathinfo: false,
  },
});
