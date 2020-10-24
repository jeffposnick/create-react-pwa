const path = require('path');

module.exports = [
  {
    entry: {
      server: './src/server/index.ts',
    },
    mode: process.env.NODE_ENV || 'production',
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
    mode: process.env.NODE_ENV || 'production',
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
    optimization: {
      splitChunks: {
        chunks: 'all',
        minSize: 1,
        automaticNameDelimiter: '~',
        name: (module, chunks, cacheGroupKey) => {
          const moduleFileName = module
            .identifier()
            .split('/')
            .reduceRight((item) => item);
          const allChunksNames = chunks.map((item) => item.name).join('~');
          return `${cacheGroupKey}-${allChunksNames}-${moduleFileName}`;
        },
        cacheGroups: {
          vendor: {
            test: new RegExp('/node_modules/'),
          },
          components: {
            test: new RegExp('/components/'),
          },
          partials: {
            test: new RegExp('/partials/'),
          },
        },
      },
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'build', 'public'),
    },
  },
];
