const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      // Memory optimizations for 1GB RAM servers
      if (env === 'production') {
        // Reduce memory usage during build
        webpackConfig.optimization = {
          ...webpackConfig.optimization,
          splitChunks: {
            chunks: 'all',
            cacheGroups: {
              vendor: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendors',
                priority: 10,
                chunks: 'all',
                maxSize: 200000, // Split large chunks
              },
              common: {
                name: 'common',
                minChunks: 2,
                chunks: 'all',
                priority: 5,
                maxSize: 150000,
              }
            }
          },
          // Minimize bundle size
          usedExports: true,
          sideEffects: false,
        };

        // Tree shaking and dead code elimination
        webpackConfig.module.rules.push({
          test: /\.js$/,
          include: path.resolve(__dirname, 'src'),
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', {
                  modules: false,
                  useBuiltIns: 'usage',
                  corejs: 3
                }]
              ]
            }
          }
        });
      }

      // Development optimizations
      if (env === 'development') {
        // Reduce memory usage in dev mode
        webpackConfig.optimization = {
          ...webpackConfig.optimization,
          removeAvailableModules: false,
          removeEmptyChunks: false,
          splitChunks: false,
        };

        // Faster builds with less memory
        webpackConfig.devtool = 'eval-cheap-module-source-map';
        
        // Disable unnecessary features in development
        webpackConfig.cache = {
          type: 'memory',
          maxGenerations: 1,
        };
      }

      return webpackConfig;
    },
  },
  devServer: {
    port: 80,
    compress: true,
    // Memory optimization for dev server
    watchOptions: {
      ignored: /node_modules/,
      aggregateTimeout: 600,
      poll: 1000,
    },
    client: {
      // Reduce memory usage
      webSocketTransport: 'ws',
      webSocketURL: 'auto://0.0.0.0:0/ws',
    },
  },
};
