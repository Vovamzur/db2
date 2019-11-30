import { BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId } from "typeorm";
import { Inventory } from "./Inventory";
import { HostelResident } from "./HostelResident";

@Entity("doinventory", { schema: "public" })
@Index("one_inventory_type_per_hostelresident", ["hostelResident", "inventory",], { unique: true })
export class DoInventory {

  @PrimaryGeneratedColumn({
    type: "integer",
    name: "id"
  })
  id: number;

  @Column("date", {
    nullable: true,
    name: "inventory_date"
  })
  inventory_date: string | null;

  @ManyToOne(() => Inventory, (inventory: Inventory) => inventory.doInventories, { nullable: false, })
  @JoinColumn({ name: 'inventory_id' })
  inventory: Inventory | null;

  @ManyToOne(() => HostelResident, (hostelResident: HostelResident) => hostelResident.doInventories, { nullable: false, })
  @JoinColumn({ name: 'hostelresident_id' })
  hostelResident: HostelResident | null;
}
