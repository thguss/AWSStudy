import dotenv from "dotenv";

const envFound = dotenv.config();
if (envFound.error) {
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}
process.env.NODE_ENV = process.env.NODE_ENV || "development";

export default {
  environment : process.env.NODE_ENV,
  port : process.env.DB_PORT, // 3306
  database : process.env.DATABASE, // RDS 서비스의 DB를 뜻함. create database test;
  host : process.env.HOST, // RDS 서비스의 주소
  dbUsername : process.env.DB_USERNAME, // ID
  dbPassword : process.env.PASSWORD // password
}