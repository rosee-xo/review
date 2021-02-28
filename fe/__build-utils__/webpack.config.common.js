// const webpack = require('webpack');
const path = require('path');
const utils = require('./utils');

const createEntries = () => {
  const entries = {};
  const cwd = process.cwd();

  utils.getFileListByExt(path.join(cwd, `src/entry`), '((j|t)+sx?)|(((sa|sc|c)ss)|styl)').forEach((p) => {
    const filename = path.parse(p).name;
    entries[filename] = [`entry/${filename}`];
  });

  console.log('\n :: entries: ', JSON.stringify(entries), '\n\n\n');

  return entries;
};

module.exports = {
  entry: createEntries(),
  output: {
    path: path.resolve(__dirname, '../asset'),
    filename: '[name].js',
  },
  resolve: {
    modules: [path.resolve(__dirname, '../src/'), 'node_modules'],
    extensions: ['.css', '.scss', '.sass', '.js', '.jsx', '.ts', '.tsx', '.ttf', '.jpg', '.png'],
    alias: {
      '@img': path.resolve(__dirname, `../src/asset/image`),
    },
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        include: path.resolve(__dirname, '../src/'),
        exclude: [/node_modules/],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[contenthash].[ext]',
            },
          },
        ],
      },
      {
        enforce: 'pre',
        test: /\.[jt]sx?$/,
        include: path.resolve(__dirname, '../src/'),
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/react'],
              plugins: ['@babel/proposal-class-properties', '@babel/proposal-object-rest-spread'],
              compact: true,
            },
          },
          {
            loader: 'eslint-loader',
            options: {
              configFile: path.resolve(__dirname, '../.eslintrc.js'),
            },
          },
        ],
      },
    ],
  },
};
