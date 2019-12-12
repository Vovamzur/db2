import { BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId } from "typeorm";

@Entity("academic_audits", { schema: "public" })
export class AcademicAudits {

  @PrimaryGeneratedColumn({
    type: "integer",
    name: "id"
  })
  id: number;

  @Column("integer", {
    nullable: false,
    name: "academic_id"
  })
  academic_id: number;

  @Column("character varying", {
    nullable: false,
    length: 40,
    name: "lastname"
  })
  lastname: string;

  @Column("timestamp without time zone", {
    nullable: false,
    name: "changed_on"
  })
  changed_on: Date;
}
