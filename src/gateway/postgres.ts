import { DataSource } from "typeorm";
import { User } from "../entities/user";
import { Career } from "../entities/career";
import { Teacher } from "../entities/teacher";
import { Administrator } from "../entities/administrator";
import { Student } from "../entities/student";
import { Subject } from "../entities/subject";
import { TeacherSubject } from "../entities/teacherSubject";
import { Enrollment } from "../entities/enrollment";
import { Note } from "../entities/note";
import { Schedule } from "../entities/schedule";
import { Group } from "../entities/group";
import { NoteStudent } from "../entities/noteStudent";

const TABLES = [
  User,
  Career,
  Teacher,
  Administrator,
  Student,
  Subject,
  Group,
  TeacherSubject,
  Enrollment,
  Note,
  Schedule,
  NoteStudent
];

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
