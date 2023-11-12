import { badRequest } from "@hapi/boom";
import { Career } from "../../entities/career";
import { Student } from "../../entities/student";
import { gateway } from "../../gateway/basics";
import { InteractorResponseModel } from "../basics";
import { UserCreationPayload, UserRole, buildUser } from "../utils";


export interface StudentUpdatePayload extends UserCreationPayload{
    careerId: string;
    id: string;
}

export const updateStudentInteractor =async (studentCreationPayload:StudentUpdatePayload):Promise<InteractorResponseModel> => {
    const career = await gateway.findCareerById(studentCreationPayload.careerId);
    if(!studentCreationPayload.id){
        throw badRequest("ID_NOT_PROVIDED");
    }
    const savedStudent = await gateway.findStudentById(studentCreationPayload.id);
    if(!savedStudent){
        throw badRequest("STUDENT_NOT_FOUND");
    }

    const student = buildStudent(studentCreationPayload, career);
    student.id = savedStudent.id;
    student.user.id = savedStudent.user.id;
    await gateway.saveStudent(student);

    return {
        data: { studentId: student.id},
        message: "STUDENT_UPDATED_SUCCESSFULLY",
        success: true
    };
}

const buildStudent = (studentCreationPayload:StudentUpdatePayload, career: Career):Student=>{
    const user = buildUser(studentCreationPayload as UserCreationPayload, UserRole.STUDENT);
    const student = new Student(user, career, [],[]);
    return student;
}

