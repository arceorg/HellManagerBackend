import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { Subject } from "./subject";
import { Enrollment } from "./enrollment";
import { Schedule } from "./schedule";
import { BasicEntity } from "./basics";

@Entity()
export class Group extends BasicEntity {
  @ManyToOne(() => Subject, (subject) => subject.groups, {nullable:false})
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
