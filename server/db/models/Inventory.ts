import { BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId } from "typeorm";
import { DoInventory } from "./DoInventory";

@Entity("inventory", { schema: "public" })
@Index("unique_inventory_name", ["name",], { unique: true })
export class Inventory {

  @PrimaryGeneratedColumn({
    type: "integer",
    name: "id"
  })
  id: number;

  @Column("character varying", {
    nullable: false,
    unique: true,
    length: 70,
    name: "name"
  })
  name: string;

  @Column("integer", {
    nullable: false,
    name: "count"
  })
  count: number;

  @OneToMany(() => DoInventory, (doinventory: DoInventory) => doinventory.inventory)
  doInventories: DoInventory[];
}
