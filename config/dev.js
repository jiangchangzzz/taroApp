module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
    HOST: '"/api"'
  },
  weapp: {},
  h5: {
    devServer: {
      proxy: {
        '/api/': {
          target: 'http://localhost:3000',
          secure: false
        }
      }
    }
  }
}
