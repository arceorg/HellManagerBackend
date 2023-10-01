import { DataSource } from "typeorm";
import { User } from "../entities/user";

const TABLES = [User];

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT!),
  database: process.env.POSTGRES_DB,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  synchronize: true,
  logging: false,
  entities: TABLES,
  migrations: [],
  subscribers: [],
});

AppDataSource.initialize()
  .then(async () => {})
  .catch((error) => console.log(error));
