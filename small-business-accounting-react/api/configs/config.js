// npm module that loads enviroment variables from a .env file
require('dotenv').config()

const myconfig = {
    "host": process.env.DB_HOST,
    "database": process.env.DB_NAME,
    "username": process.env.DB_USER,
    "password": process.env.DB_PW,
    "use_env_variable": "mysql://fit2v9kc84ljzza8:fbisma7mr5ogfkpk@y6aj3qju8efqj0w1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/e2fgoyj4zu4ou961",
    "dialect": "mysql",
};


module.exports = myconfig
