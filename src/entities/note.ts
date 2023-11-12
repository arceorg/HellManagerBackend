import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { BasicEntity } from "./basics";
import { Subject } from "./subject";
import { NoteStudent } from "./noteStudent";

@Entity()
export class Note extends BasicEntity {

  @ManyToOne(() => Subject, (subject) => subject.notes)
  public subject: Subject;

  @OneToMany(() => NoteStudent, (noteStudent) => noteStudent.note)
  public values: NoteStudent[];

  @Column()
  public percentage: number;

  constructor( subject: Subject, percentage: number) {
    super();
    this.subject = subject;
    this.percentage = percentage;
  }
}
