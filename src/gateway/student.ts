import { Student } from "../entities/student";
import { AppDataSource } from "./postgres";

export const saveStudent =async (student:Student):Promise<void>=>{
    await AppDataSource.manager.save(student);
}