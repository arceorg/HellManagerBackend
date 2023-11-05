import { DataSource } from "typeorm";
import { User } from "../entities/user";
import { Career } from "../entities/career";
import { Teacher } from "../entities/teacher";
import { Administrator } from "../entities/administrator";
import { Student } from "../entities/student";
import { Subject } from "typeorm/persistence/Subject";
import { Group } from "../entities/group";
import { TeacherSubject } from "../entities/teacherSubject";

const TABLES = [User, Career, Teacher, Administrator, Student, Subject, Group, TeacherSubject];

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
