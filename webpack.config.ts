import HTMLWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

// @ts-ignore
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

type Mode = webpack.Configuration['mode'];

const mode = (process.env.NODE_ENV ?? 'production') as Mode;

function getFilename(ext: string) {
  return mode === 'production'
    ? `[name].[contenthash:8].${ext}`
    : `[name].${ext}`;
}

const config: webpack.Configuration = {
  mode,
  entry: './src/graphiql',
  output: {
    path: __dirname + '/dist/public',
    chunkFilename: getFilename('js'),
    filename: getFilename('js'),
  },
  performance: {
    hints: false,
  },

  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
      {test: /\.flow$/, use: 'null-loader'},
      {
        test: /\.png$/,
        use: 'file-loader',
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: mode === 'development',
            },
          },
          'css-loader',
        ],
      },
      {
        test: /\.[tj]sx?$/,
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            rootMode: 'upward',
            plugins:
              mode === 'development' ? ['react-refresh/babel'] : undefined,
          },
        },
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/graphiql/index.html',
    }),
    new MiniCssExtractPlugin({
      chunkFilename: getFilename('css'),
      filename: getFilename('css'),
    }),
    mode === 'development' &&
      new ReactRefreshWebpackPlugin({disableRefreshCheck: true}),
  ].filter(Boolean),
  devServer: {
    open: true,
    proxy: {
      '/__/firebase': {
        target: 'http://localhost:5000',
      },
    },
  },
};

export default config;
