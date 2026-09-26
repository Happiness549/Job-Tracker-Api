import {Pool} from 'pg'
import dotenv from "dotenv"

dotenv.config()

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABSE,
    password: process.env.PASSWORD,
    port: parseInt(process.env.PORT || '5432'),
});

