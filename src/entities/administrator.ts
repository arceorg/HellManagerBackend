import { Entity, JoinColumn, OneToOne } from "typeorm";
import { BasicEntity } from "./basics";
import { User } from "./user";

@Entity()
export class Administrator extends BasicEntity {
  @OneToOne(() => User)
  @JoinColumn()
  public user: User;

  constructor(user: User) {
    super();
    this.user = user;
  }
}
