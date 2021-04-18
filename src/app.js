import express from 'express';

import routes from './routes';

class App {
  constructor() {
    this.express = express();

    this.middleware();
    this.route();
  }

  middleware() {
    this.express.use(express.json());
  }

  route() {
    this.express.use('/api', routes);
  }
}

export default new App().express;
