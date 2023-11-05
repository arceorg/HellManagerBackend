import { BaseEntity, Column, Entity, OneToMany } from "typeorm";
import { Subject } from "./subject";

@Entity()
export class Career extends BaseEntity {
  @Column()
  public name: string;

  @OneToMany(() => Subject, (subject) => subject.career)
  subjects: Subject[];

  constructor(name: string, subjects: Subject[]) {
    super();
    this.name = name;
    this.subjects = subjects;
  }
}
