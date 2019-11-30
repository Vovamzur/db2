import { BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId } from "typeorm";
import { Room } from "./Room";

@Entity("hostel", { schema: "public" })
@Index("unique_hostel_head", ["head",], { unique: true })
export class Hostel {

  @PrimaryGeneratedColumn({
    type: "integer",
    name: "id"
  })
  id: number;

  @Column("integer", {
    nullable: false,
    name: "number"
  })
  number: number;

  @Column("character varying", {
    nullable: false,
    unique: true,
    length: 50,
    name: "head"
  })
  head: string;

  @OneToMany(() => Room, (room: Room) => room.hostel)
  rooms: Room[];
}
