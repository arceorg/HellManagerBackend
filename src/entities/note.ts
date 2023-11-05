import { Column, Entity, ManyToOne } from "typeorm";
import { BasicEntity } from "./basics";
import { Student } from "./student";
import { Subject } from "./subject";

@Entity()
export class Note extends BasicEntity {
  @ManyToOne(() => Student, (student) => student.notes)
  public student: Student;

  @ManyToOne(() => Subject, (subject) => subject.notes)
  public subject: Subject;

  @Column()
  public value: number;

  @Column()
  public percentage: number;

  constructor(student: Student, subject: Subject, value: number, percentage: number) {
    super();
    this.student = student;
    this.subject = subject;
    this.value = value;
    this.percentage = percentage;
  }
}
