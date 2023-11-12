import { Entity, ManyToOne } from "typeorm";
import { Subject } from "./subject";
import { Student } from "./student";
import { Group } from "./group";
import { BasicEntity } from "./basics";

@Entity()
export class Enrollment extends BasicEntity {
  @ManyToOne(() => Subject, (subject) => subject.enrollments)
  public subject: Subject;

  @ManyToOne(() => Student, (student) => student.enrollments)
  public student: Student;

  @ManyToOne(() => Group, (group) => group.enrollments)
  public group: Group;

  constructor(subject: Subject, student: Student, group: Group) {
    super();
    this.student = student;
    this.group = group;
    this.subject = subject;
  }
}
