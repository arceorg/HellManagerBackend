import { Column, Entity, ManyToOne } from "typeorm";
import { Group } from "./group";

@Entity()
export class Schedule {
  @ManyToOne(() => Group, (group) => group.schedules)
  public group: Group;

  @Column()
  public classroom: string;

  @Column()
  public from: string;

  @Column()
  public to: string;

  @Column()
  public day: string;
}
