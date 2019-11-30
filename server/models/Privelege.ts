import { BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId } from "typeorm";
import { HostelResident } from "./HostelResident";

@Entity("privelege", { schema: "public" })
@Index("unique_privelege_title", ["name",], { unique: true })
export class Privelege {

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
    name: "discount"
  })
  discount: number;

  @OneToMany(() => HostelResident, (hostelResident: HostelResident) => hostelResident.previlege)
  hostelResidents: HostelResident[];
}
