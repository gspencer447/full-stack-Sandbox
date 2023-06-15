// this functions as our file to login to mySQL
//by means of a file called ".env"

//.gitIgnore will by default not push any files with ".env" in front of them to gitHub
//the .env file should be specific to ANYONE working on the same code-base

const dotenv = require("dotenv");

const envFound = dotenv.config();

if (!envFound){
    throw new Error("cannot find .env")
}

export default {
    mysql: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_SCHEMA,
    },
    port: parseInt(process.env.PORT)
}