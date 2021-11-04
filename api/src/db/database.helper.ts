import { connect } from 'mongoose';

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;
const mongoUrl = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`;

export default {
  async init(): Promise<void> {
    await connect(mongoUrl);
  },
};
