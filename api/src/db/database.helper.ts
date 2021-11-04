import { connect } from 'mongoose';

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;
const mongoUrl = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`;
// const mongoUrl = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}?authSource=admin`;

export default DB = {
  async init(): Promise<void> {
    await connect(mongoUrl);
  },
};
