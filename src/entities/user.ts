import { Column, Entity } from "typeorm";
import { BasicEntity } from "./basics";

@Entity()
export class User extends BasicEntity {
  @Column()
  public firstName: string;

  @Column()
  public lastName: string;

  @Column({ unique: true })
  public email: string;

  @Column()
  public password: string;

  @Column()
  public role: string;

  @Column()
  public birthday: Date;

  @Column()
  public identificationNumber: string;

  @Column()
  public phoneNumber: string;

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    role: string,
    birthday: Date,
    identificationNumber: string,
    phoneNumber: string
  ) {
    super();

    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.role = role;
    this.birthday = birthday;
    this.identificationNumber = identificationNumber;
    this.phoneNumber = phoneNumber;
  }
}
