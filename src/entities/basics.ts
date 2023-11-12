import { CreateDateColumn, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

export class BasicEntity {
  @PrimaryColumn({ default: uuid() })
  public id: string;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;

  constructor() {
    this.id = uuid();
  }
}
