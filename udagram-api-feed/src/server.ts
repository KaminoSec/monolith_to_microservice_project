import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { sequelize } from './sequelize';
import { V0_FEED_MODELS } from './controllers/v0/model.index';

(async () => {
  await sequelize.authenticate();
  await sequelize.sync(); // no addModels

  const app = express();
  const port = process.env.PORT || 8080;

  app.use(bodyParser.json());
  app.use(cors());

  // simple status
  app.get('/api/v0/feed/', async (_req, res) => {
    res.status(200).send({ status: 'ok' });
  });

  // TODO: mount your feed routes here

  app.listen(port, () => {
    console.log(`Feed API running on port ${port}`);
  });
})();
