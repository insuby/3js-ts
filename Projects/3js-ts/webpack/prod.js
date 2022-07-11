const { merge } = require("webpack-merge");
const common = require("./common.js");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { staticPath, distPath } = require("./path");
const path = require("path");

module.exports = ({ ANALYZE }) => {
  const plugins = [
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
    new HtmlWebpackPlugin({
      hash: true,
      inject: true,
      template: path.join(staticPath, "index.html"),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
  ];

  if (ANALYZE) {
    plugins.push(
      new BundleAnalyzerPlugin({
        defaultSizes: "gzip",
        openAnalyzer: true,
        analyzerMode: "server",
      })
    );
  }

  return merge(common, {
    mode: "production",
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
          exclude: /node_modules/,
          options: {
            configFile: path.join(__dirname, "..", "tsconfig.json"),
            // отключает проверку типов
            transpileOnly: true,
            happyPackMode: true,
          },
        },
      ],
    },
    devtool: false,
    optimization: {
      providedExports: true,
      // числовые идентификаторы ориентированы на минимальный общий размер загрузки.
      chunkIds: "total-size",
      // Короткие имена - обычно один символ - ориентированы на минимальный размер загрузки.
      mangleExports: "size",
      // искажает имена модулей и экспорта, изменив импорт на более короткие строки
      mangleWasmImports: true,
      moduleIds: "size",
      removeAvailableModules: true,
      usedExports: true,
      sideEffects: true,
      innerGraph: true,
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: true,
            format: {
              comments: false,
            },
          },
          extractComments: true,
        }),
      ],
    },
    plugins: plugins,
    stats: {
      usedExports: true,
      providedExports: true,
      env: true,
    },
    output: {
      clean: true,
      publicPath: "./",
    },
    performance: {
      hints: "warning",
    },
  });
};
