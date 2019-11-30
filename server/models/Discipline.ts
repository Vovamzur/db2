import { BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId } from "typeorm";
import { SubjectTeaching } from "./SubjectTeaching";

@Entity("discipline", { schema: "public" })
@Index("unique_title", ["title",], { unique: true })
export class Discipline {

  @PrimaryGeneratedColumn({
    type: "integer",
    name: "id"
  })
  id: number;

  @Column("character varying", {
    nullable: false,
    unique: true,
    length: 50,
    name: "title"
  })
  title: string;

  @Column("text", {
    nullable: true,
    name: "description"
  })
  description: string | null;

  @OneToMany(() => SubjectTeaching, (subjectTeaching: SubjectTeaching) => subjectTeaching.discipline)
  subjectTeachings: SubjectTeaching[];
}
