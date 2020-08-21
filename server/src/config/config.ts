import * as dotenv from 'dotenv';

interface Key {
  PORT: string;
  COOKIE_KEY: string;
  MONGO_URL: string;
  MONGO_DB_NAME: string;
  APP_DOMAIN: string;
  MAIL_GUN_KEY: string;
  MAIL_GUN_DOMAIN: string;
  RECEIVER_EMAIL: string;
}

dotenv.config();
let path;
switch (process.env.NODE_ENV) {
  case 'test':
    path = `${__dirname}/../../.env.test`;
    break;
  case 'production':
    path = `${__dirname}/../../.env.production`;
    break;
  default:
    path = `${__dirname}/../../.env.development`;
}
dotenv.config({ path: path });

export const keys = {
  PORT: process.env.PORT,
  COOKIE_KEY: process.env.COOKIE_KEY,
  MONGO_URL: process.env.MONGO_URL,
  MONGO_DB_NAME: process.env.MONGO_DB_NAME,
  APP_DOMAIN: process.env.APP_DOMAIN,
  MAIL_GUN_KEY: process.env.MAIL_GUN_KEY,
  MAIL_GUN_DOMAIN: process.env.MAIL_GUN_DOMAIN,
  RECEIVER_EMAIL: process.env.RECEIVER_EMAIL,
} as Key;
