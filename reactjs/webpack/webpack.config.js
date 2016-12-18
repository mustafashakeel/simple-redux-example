module.exports = {
  entry: './public/app.jsx',
  output: {
    path: __dirname,
    filename: './public/script.js'
  },
  resolve: {
    root:__dirname,
    alias:{
      Calculator: 'public/components/Calculator.jsx',
      CalculatorInput: 'public/components/CalculatorInput.jsx',
      CalculatorDisplay: 'public/components/CalculatorDisplay.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
