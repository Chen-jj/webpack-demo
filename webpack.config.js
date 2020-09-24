const path = require('path');
const { ProvidePlugin } = require('webpack')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new ProvidePlugin({
      'join': ['lodash-es', 'join']
    })
  ]
}
