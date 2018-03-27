module.exports = {
    entry: './src/main.js',
    output: {
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          query: {
              presets:['es2015','react']
          },
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ]
        },
        {
          test: /\.scss$/,
          use: [{
              loader: "style-loader" 
          }, {
              loader: "css-loader" 
          }, {
              loader: "sass-loader" 
          }]
      }
      ]
    },
    devtool: 'source-map'
  };
  