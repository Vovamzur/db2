import { BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId } from "typeorm";
import { ScientificProposal } from "./ScientificProposal";
import { CathedraEmployee } from "./CathedraEmployee";
import { Student } from "./Student";
import { SubjectTeaching } from "./SubjectTeaching";

@Entity("class", { schema: "public" })
@Index("unique_class_curator", ["curator",], { unique: true })
@Index("unique_class_title", ["title",], { unique: true })
export class Class {

  @PrimaryGeneratedColumn({
    type: "integer",
    name: "id"
  })
  id: number;

  @Column("character varying", {
    nullable: false,
    unique: true,
    length: 5,
    name: "title"
  })
  title: string;

  @ManyToOne(() => ScientificProposal, (scientificproposal: ScientificProposal) => scientificproposal.class, { nullable: false, })
  @JoinColumn({ name: 'scientificproposal_id' })
  scientificProposal: ScientificProposal | null;

  @OneToOne(() => CathedraEmployee, (cathedraEmployee: CathedraEmployee) => cathedraEmployee.class, { nullable: false, })
  @JoinColumn({ name: 'curator_id' })
  curator: CathedraEmployee | null;

  @OneToMany(() => Student, (student: Student) => student.class)
  students: Student[];

  @OneToMany(() => SubjectTeaching, (subjectTeaching: SubjectTeaching) => subjectTeaching.class)
  subjectTeachings: SubjectTeaching[];
}
