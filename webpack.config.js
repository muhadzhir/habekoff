module.exports = {
  module: {
    rules: [
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader?name=./assets/fonts/webfonts/[name].[ext]'
          },
          {
            loader: 'file-loader?name=./assets/fonts/Roboto/[name].[ext]'
          }
        ]
      }
    ],
  },
}
