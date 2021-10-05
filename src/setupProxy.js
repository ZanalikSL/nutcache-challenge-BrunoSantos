const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    proxy('/${process.env.REACT_APP_TOKEN_CRUD_CRUD}/nutemployee', {
      target: 'https://crudcrud.com/api',
      changeOrigin: true,
    })
  )

  app.use(
    proxy('/${process.env.REACT_APP_TOKEN_CRUD_CRUD}/nutemployee/${id}', {
      target: 'https://crudcrud.com/api',
      changeOrigin: true,
    })
  )
}


