import { BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId } from "typeorm";
import { SubjectTeaching } from "./SubjectTeaching";

@Entity("controltype", { schema: "public" })
@Index("unique_type", ["type",], { unique: true })
export class ControlType {

  @PrimaryGeneratedColumn({
    type: "integer",
    name: "id"
  })
  id: number;

  @Column("character varying", {
    nullable: false,
    unique: true,
    length: 80,
    name: "type"
  })
  type: string;

  @Column("text", {
    nullable: true,
    name: "description"
  })
  description: string | null;

  @OneToMany(() => SubjectTeaching, (subjectTeaching: SubjectTeaching) => subjectTeaching.controlType)
  subjectTeachings: SubjectTeaching[];

}
