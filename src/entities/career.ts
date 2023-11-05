import { Column, Entity, OneToMany } from "typeorm";
import { Subject } from "./subject";
import { BasicEntity } from "./basics";

@Entity()
export class Career extends BasicEntity {
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
