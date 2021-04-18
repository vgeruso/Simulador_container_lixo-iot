import express from 'express';

const routes = express.Router();

routes.get('/', (req, res) => {
  const object = {
    server: 'ok',
    status: 200,
  };
  return res.status(object.status).json(object);
});

export default routes;
