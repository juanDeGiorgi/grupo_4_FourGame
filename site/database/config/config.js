
module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": "fourgame_dev",
    "host": process.env.HOST,
    "dialect": "mysql"
  },
  "test": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": "fourgametest",
    "host": process.env.HOST,
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "fourgame_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
