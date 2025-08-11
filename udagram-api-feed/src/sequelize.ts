import { Sequelize, Dialect } from 'sequelize';

const dialect: Dialect = 'postgres';

export const sequelize = new Sequelize(
  process.env.POSTGRES_DB as string,
  process.env.POSTGRES_USERNAME as string,
  process.env.POSTGRES_PASSWORD as string,
  {
    host: process.env.POSTGRES_HOST,
    dialect,
    dialectOptions: {
      ssl: { require: true, rejectUnauthorized: false }
    }
  }
);

export const connect = async () => {
  await sequelize.authenticate();
  await sequelize.sync();
};
