import * as dotenv from 'dotenv'
dotenv.config({ path: '.env' })

export const serverConfig = {
  'database_password': process.env.database_password || "password",
  'host_database': process.env.host_database || "localhost",
  'database_user': process.env.database_user || "root",
  'database': process.env.database || 'todolist',
  'NODE_ENV': process.env.NODE_ENV,
  'jwt_secret': process.env.jwt_secret || "myjsonwbtoken",
  'port': parseInt(process.env.port) || 4001,
  'RUN_MIGRATIONS': process.env.RUN_MIGRATIONS ? true : true
}