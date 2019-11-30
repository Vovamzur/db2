import { BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId } from "typeorm";
import { Auditorium } from './Auditorium';

@Entity("building", { schema: "public" })
@Index("unique_adress", ["adress",], { unique: true })
@Index("unique_number", ["number",], { unique: true })
export class Building {

  @PrimaryGeneratedColumn({
    type: "integer",
    name: "id"
  })
  id: number;

  @Column("character varying", {
    nullable: false,
    unique: true,
    length: 40,
    name: "adress"
  })
  adress: string;

  @Column("integer", {
    nullable: true,
    name: "auditoriums_amount"
  })
  auditoriums_amount: number | null;

  @Column("integer", {
    nullable: false,
    unique: true,
    name: "number"
  })
  number: number;

  @Column("integer", {
    nullable: true,
    name: "floors_amount"
  })
  floors_amount: number | null;

  @OneToMany(() => Auditorium, (auditorium: Auditorium) => auditorium.building)
  auditoriums: Auditorium[];
}
