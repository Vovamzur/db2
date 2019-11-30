import { BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId } from "typeorm";
import { Room } from "./Room";

@Entity("roomtype", { schema: "public" })
export class RoomType {

  @PrimaryGeneratedColumn({
    type: "integer",
    name: "id"
  })
  id: number;

  @Column("character varying", {
    nullable: false,
    length: 15,
    name: "name"
  })
  name: string;

  @Column("integer", {
    nullable: false,
    name: "price"
  })
  price: number;

  @OneToMany(() => Room, (room: Room) => room.roomType)
  rooms: Room[];
}
