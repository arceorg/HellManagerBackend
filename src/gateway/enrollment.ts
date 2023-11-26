import { Enrollment } from "../entities/enrollment";
import { AppDataSource } from "./postgres";

export const saveEnrollment = async (enrollment:Enrollment):Promise<void>=>{
    AppDataSource.manager.save(Enrollment, enrollment);
}