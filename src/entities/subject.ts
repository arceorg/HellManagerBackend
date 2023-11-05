import { BaseEntity, Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { Career } from "./career";
import { Group } from "./group";
import { Note } from "./note";
import { Enrollment } from "./enrollment";

@Entity()
export class Subject extends BaseEntity {
  @Column()
  public name: string;

  @ManyToOne(() => Career, (career) => career.subjects)
  public career: Career;

  @OneToMany(() => Group, (group) => group.subject)
  public groups: Group[];

  @Column()
  public type: string;

  @Column()
  public code: string;

  @OneToMany(() => Note, (note) => note.subject)
  public notes: Note[];

  @OneToMany(() => Enrollment, (enrollment) => enrollment.subject)
  public enrollments: Enrollment[];

  constructor(
    name: string,
    career: Career,
    groups: Group[],
    type: string,
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
