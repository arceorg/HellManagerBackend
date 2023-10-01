import { Column, Entity } from "typeorm";
import { BasicEntity } from "./basics";

@Entity()
export class User extends BasicEntity {
  @Column()
  public firstName: string;

  @Column()
  public lastName: string;

  @Column({ nullable: false })
  public email: string;

  @Column({ unique: true })
  public password: string;

  constructor(firstName: string, lastName: string, email: string, password: string) {
    super();

    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }
}
