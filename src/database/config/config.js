require('dotenv').config()
const env = process.env;
module.exports = {
  "development": {
    "username": env.USER,
    "password": env.DATABASE_PASS,
    "database": env.DATABASE_NAME,
    "host": env.DATABASE_HOST,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.USER,
    "password": process.env.DATABASE_PASS,
    "database": process.env.DATABASE_NAME,
    "host": process.env.DATABASE_HOST,
    "dialect": "mysql"
  }
}