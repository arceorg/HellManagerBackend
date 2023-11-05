import { BaseEntity, Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { User } from "./user";

@Entity()
export class Teacher extends BaseEntity {
  @OneToOne(() => User)
  @JoinColumn()
  public user: User;

  @Column()
  public experience: number;

  @Column()
  public speciality: string;

  @Column()
  public salary: number;

  @Column()
  public typeOfContract: string;

  @Column()
  public educationalInstitution: string;

  constructor(
    user: User,
    experience: number,
    speciality: string,
    salary: number,
    typeOfContract: string,
    educationalInstitution: string
  ) {
    super();
    this.user = user;
    this.experience = experience;
    this.speciality = speciality;
    this.salary = salary;
    this.typeOfContract = typeOfContract;
    this.educationalInstitution = educationalInstitution;
  }
}
