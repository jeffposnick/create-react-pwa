const path = require('path');

module.exports = [
  {
    entry: {
      server: './src/server/index.ts',
    },
    mode: 'development',
    target: 'node',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'build'),
    },
  },
  {
    entry: {
      sw: './src/sw/index.ts',
    },
    mode: 'development',
    target: 'webworker',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'build', 'public'),
    },
  },
];
