import { Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { BasicEntity } from "./basics";
import { User } from "./user";
import { Note } from "./note";
import { Career } from "./career";
import { Enrollment } from "./enrollment";
import { NoteStudent } from "./noteStudent";

@Entity()
export class Student extends BasicEntity {
  @OneToOne(() => User, { nullable: false, onDelete: "CASCADE" })
  @JoinColumn()
  public user: User;

  @ManyToOne(() => Career, (career) => career.students, { nullable: false })
  @JoinColumn()
  public career: Career;

  @OneToMany(() => NoteStudent, (noteStudent) => noteStudent.student)
  public notes: NoteStudent[];

  @OneToMany(() => Enrollment, (enrollment) => enrollment.student)
  public enrollments: Enrollment[];

  constructor(user: User, career: Career, notes: NoteStudent[], enrollments: Enrollment[]) {
    super();
    this.user = user;
    this.career = career;
    this.notes = notes;
    this.enrollments = enrollments;
  }
}
