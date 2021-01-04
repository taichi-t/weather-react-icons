/* eslint-disable  import/no-extraneous-dependencies */
import * as webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';

const webpackConfig: webpack.Configuration = {
  entry: ['./index.tsx'],
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: './tsconfig.json',
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    port: 3000,
    contentBase: path.resolve(__dirname, 'dist/'),
    watchContentBase: true,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: `
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Weather React Icons</title>
      </head>
      <body>
        <div id="root"></div>
      </body>
      </html>
  `,
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
};

export default webpackConfig;
