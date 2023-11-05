import { BaseEntity, Entity, JoinColumn, OneToOne } from "typeorm";
import { Subject } from "./subject";
import { Teacher } from "./teacher";
import { Group } from "./group";

@Entity()
export class TeacherSubject extends BaseEntity {
  @OneToOne(() => Subject)
  @JoinColumn()
  public subject: Subject;

  @OneToOne(() => Teacher)
  @JoinColumn()
  public teacher: Teacher;

  @OneToOne(() => Group)
  @JoinColumn()
  public group: Group;

  constructor(subject: Subject, teacher: Teacher, group: Group) {
    super();
    this.subject = subject;
    this.teacher = teacher;
    this.group = group;
  }
}
