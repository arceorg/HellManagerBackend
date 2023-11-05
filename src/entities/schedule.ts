import { Column, Entity, ManyToOne } from "typeorm";
import { Group } from "./group";
import { BasicEntity } from "./basics";

@Entity()
export class Schedule extends BasicEntity {
  @ManyToOne(() => Group, (group) => group.schedules)
  public group: Group;

  @Column()
  public classroom: string;

  @Column()
  public from: string;

  @Column()
  public to: string;

  @Column()
  public day: number;

  constructor(group: Group, classroom:string, from:string, to:string, day:number){
    super()
    this.group = group;
    this.classroom = classroom;
    this.from = from;
    this.to = to;
    this.day = day;
  }
}
