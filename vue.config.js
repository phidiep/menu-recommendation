module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/my-project/'
  : '/'
}
module.exports = {
  transpileDependencies: [
    'vuetify'
  ]
}