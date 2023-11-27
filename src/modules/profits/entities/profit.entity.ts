import { Box } from "src/modules/boxes/entities/box.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity({
  name: "profits",
})
export class Profit {
  @PrimaryGeneratedColumn("uuid")
  public readonly id_profit: string;

  @Column("real")
  public mount_profit: number;

  @CreateDateColumn()
  public date_profit: Date;

  @ManyToOne(() => Box, (box) => box.profits)
  box: Box;
}
