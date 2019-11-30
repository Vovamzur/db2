import { BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId } from "typeorm";
import { Hostel } from "./Hostel";
import { RoomType } from "./RoomType";
import { HostelResident } from "./HostelResident";

@Entity("room", { schema: "public" })
@Index("unique_room_in_hostel", ["hostel", "roomType",], { unique: true })
export class Room {

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

  @Column("integer", {
    nullable: false,
    name: "capacity"
  })
  capacity: number;

  @ManyToOne(() => Hostel, (hostel: Hostel) => hostel.rooms, { nullable: false, })
  @JoinColumn({ name: 'hostel_id' })
  hostel: Hostel | null;

  @ManyToOne(() => RoomType, (roomType: RoomType) => roomType.rooms, { nullable: false, })
  @JoinColumn({ name: 'roomtype_id' })
  roomType: RoomType | null;

  @OneToMany(() => HostelResident, (hostelResident: HostelResident) => hostelResident.room)
  hostelResidents: HostelResident[];
}
