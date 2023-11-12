import { Column, Entity, Index, ManyToOne } from "typeorm";
import { BasicEntity } from "./basics";
import { Student } from "./student";
import { Note } from "./note";

@Entity()
@Index(["note", "student"], { unique: true })
export class NoteStudent extends BasicEntity {
  @ManyToOne(() => Student, (student) => student.notes)
  public student: Student;

  @ManyToOne(() => Note, (note) => note.values)
  public note: Note;

  @Column()
  public value: number;

  constructor(student: Student, note: Note, value: number) {
    super();
    this.student = student;
    this.note = note;
    this.value = value;
  }
}
