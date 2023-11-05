import { BaseEntity, Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { Subject } from "./subject";
import { Enrollment } from "./enrollment";
import { Schedule } from "./schedule";

@Entity()
export class Group extends BaseEntity {
  @ManyToOne(() => Subject, (subject) => subject.groups)
  public subject: Subject;

  @Column()
  public maxAllowedStudents: number;

  @OneToMany(() => Enrollment, (enrollment) => enrollment.group)
  public enrollments: Enrollment[];

  @OneToMany(() => Schedule, (schedule) => schedule.group)
  public schedules: Schedule[];

  constructor(subject: Subject, maxAllowedStudents: number, enrollments: Enrollment[], schedules: Schedule[]) {
    super();
    this.subject = subject;
    this.maxAllowedStudents = maxAllowedStudents;
    this.enrollments = enrollments;
    this.schedules = schedules;
  }
}
