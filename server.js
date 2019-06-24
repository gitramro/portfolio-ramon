const express = require('express');
const next = require('next');
const routes = require('./routes')

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = routes.getRequestHandler(app);

app.prepare().then(() => {
  const server = express();

  server.get('*', (req, res) => {
    return handle(req,res)
  })

  server.use(handle).listen(3000, (err) => {
    if (err) throw err
    console.log('Ready')
  })
}).catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})