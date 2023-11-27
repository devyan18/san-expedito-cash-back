import {
  BeforeInsert,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import * as bcrypt from "bcrypt";
import { Box } from "src/modules/boxes/entities/box.entity";

@Entity({
  name: "users",
})
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("text", {
    unique: true,
  })
  email: string;

  @Column("text")
  password: string;

  @Column("text")
  username: string;

  @OneToMany(() => User, (user) => user.boxes)
  boxes: Box[];

  // hash password before inserting into database
  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
