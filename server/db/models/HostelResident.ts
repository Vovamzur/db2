import { BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId } from "typeorm";
import { Student } from "./Student";
import { Room } from "./Room";
import { Privelege } from "./Privelege";
import { Cheque } from "./Cheque";
import { DoInventory } from "./DoInventory";

@Entity("hostelresident", { schema: "public" })
@Index("unique_hostelresident", ["student",], { unique: true })
export class HostelResident {

  @PrimaryGeneratedColumn({
    type: "integer",
    name: "id"
  })
  id: number;

  @Column("text", {
    nullable: true,
    name: "abilities"
  })
  abilities: string | null;

  @OneToOne(() => Student, (student: Student) => student.hostelResident, { nullable: false, })
  @JoinColumn({ name: 'student_id' })
  student: Student | null;

  @ManyToOne(() => Room, (room: Room) => room.hostelResidents, { nullable: false, })
  @JoinColumn({ name: 'room_id' })
  room: Room | null;

  @ManyToOne(() => Privelege, (privelege: Privelege) => privelege.hostelResidents, {})
  @JoinColumn({ name: 'previlege_id' })
  previlege: Privelege | null;

  @OneToMany(() => Cheque, (cheque: Cheque) => cheque.hostelResident)
  cheques: Cheque[];

  @OneToMany(() => DoInventory, (doinventory: DoInventory) => doinventory.hostelResident)
  doInventories: DoInventory[];
}
