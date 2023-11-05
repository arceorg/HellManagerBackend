import { Entity, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { BasicEntity } from "./basics";
import { User } from "./user";
import { Note } from "./note";
import { Career } from "./career";
import { Enrollment } from "./enrollment";

@Entity()
export class Student extends BasicEntity {
  @OneToOne(() => User)
  @JoinColumn()
  public user: User;

  @OneToOne(() => Career)
  @JoinColumn()
  public career: Career;

  @OneToMany(() => Note, (note) => note.student)
  notes: Note[];

  @OneToMany(() => Enrollment, (enrollment) => enrollment.student)
  public enrollments: Enrollment[];

  constructor(user: User, career: Career, notes: Note[], enrollments: Enrollment[]) {
    super();
    this.user = user;
    this.career = career;
    this.notes = notes;
    this.enrollments = enrollments;
  }
}
