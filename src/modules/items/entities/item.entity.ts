import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity({
  name: "items",
})
export class Item {
  @PrimaryGeneratedColumn("uuid")
  public readonly id_item: string;

  @Column("varchar", { length: 100, unique: true })
  public readonly name_item: string;

  @Column("text")
  public readonly description_item: string;

  @Column("text")
  public slug_item?: string;

  @BeforeInsert()
  public async generateSlug() {
    this.slug_item = this.name_item.toLowerCase().replace(/ /g, "-");
  }

  @BeforeUpdate()
  public async updateSlug() {
    this.slug_item = this.name_item.toLowerCase().replace(/ /g, "-");
  }
}
