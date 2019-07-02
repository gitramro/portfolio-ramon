const express = require('express');
const next = require('next');
const routes = require('../routes');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = routes.getRequestHandler(app);

const authService = require('./services/auth');

const secretData = [
  {
    title: 'SecretData1',
    description: 'Plans how to build spaceship'
  },
  {
    title: 'SecretData2',
    description: 'My secret password'
  }
];

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('/api/v1/secret', authService.checkJWT, (req, res) => {
      return res.json(secretData);
    });
    server.get('/api/v1/onlysiteowner', authService.checkJWT, authService.checkRole('siteOwner'), (req, res) => {
      return res.json(secretData);
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.use(function(err, req, res, next) {
      if (err.name === 'UnauthorizedError') {
        res.status(401).send({
          title: 'Unauthorized',
          detail:'Unauthorized access'
        });
      }
    });

    server.use(handle).listen(3000, err => {
      if (err) throw err;
      console.log('Ready');
    });
  })
  .catch(ex => {
    console.error(ex);
    process.exit(1);
  });
