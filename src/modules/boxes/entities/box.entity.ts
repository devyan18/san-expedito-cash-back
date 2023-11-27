import { Profit } from "src/modules/profits/entities/profit.entity";
import { User } from "src/users/entities/user.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity({
  name: "boxes",
})
export class Box {
  @PrimaryGeneratedColumn("uuid")
  public readonly id_box: string;

  @CreateDateColumn()
  public created_at: Date;

  @Column("real", { default: 0 })
  public initial_mount_box: number;

  @Column("real", { default: 0 })
  public current_mount_box: number;

  // una caja puede tener muchos profits
  @OneToMany(() => Profit, (profit) => profit.box, { cascade: true })
  public profits: Profit[];

  @ManyToOne(() => User, (user) => user.boxes)
  user: User;
}
