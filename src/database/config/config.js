require('dotenv').config()

module.exports = {
  "development": {
    "username": "root",
    "password": "1234",
    "database": "karonsafros_db",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "port": "3307"
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