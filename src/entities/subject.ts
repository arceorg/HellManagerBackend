import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { Career } from "./career";
import { Group } from "./group";
import { Note } from "./note";
import { Enrollment } from "./enrollment";
import { BasicEntity } from "./basics";
import { SubjectType } from "../interactors/subject/saveSubjectInteractor";

@Entity()
export class Subject extends BasicEntity {
  @Column()
  public name: string;

  @ManyToOne(() => Career, (career) => career.subjects, { nullable: false, onDelete: "CASCADE" })
  public career: Career;

  @OneToMany(() => Group, (group) => group.subject)
  public groups: Group[];

  @Column()
  public type: SubjectType;

  @Column({ unique: true })
  public code: string;

  @OneToMany(() => Note, (note) => note.subject)
  public notes: Note[];

  @OneToMany(() => Enrollment, (enrollment) => enrollment.subject)
  public enrollments: Enrollment[];

  constructor(
    name: string,
    career: Career,
    groups: Group[],
    type: SubjectType,
    code: string,
    notes: Note[],
    enrollments: Enrollment[]
  ) {
    super();
    this.name = name;
    this.career = career;
    this.groups = groups;
    this.notes = notes;
    this.code = code;
    this.type = type;
    this.enrollments = enrollments;
  }
}
