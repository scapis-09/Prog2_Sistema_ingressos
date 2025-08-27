const { Database } = require('firebase/database');
const path = require('path');

module.exports = {
  entry: {
    signup: './User/SignUp.js',
    database: './src/DataBase.js'
    // outros arquivos
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development', // ou 'production' para minificar
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Opcional, se quiser usar Babel
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};