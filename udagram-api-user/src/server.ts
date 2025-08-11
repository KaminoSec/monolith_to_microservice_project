import 'reflect-metadata';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { sequelize } from './sequelize';
import { V0_USER_MODELS } from './controllers/v0/model.index';

(async () => {
  await sequelize.addModels(V0_USER_MODELS);
  await sequelize.sync();

  const app = express();
  const port = process.env.PORT || 8080;

  app.use(bodyParser.json());
  app.use(cors());

  // health/status
  app.get('/api/v0/users/status', (_req, res) => {
    res.status(200).send({ status: 'ok' });
  });

  app.listen(port, () => console.log(`User API running on ${port}`));
})();
