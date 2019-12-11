import { BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId } from "typeorm";
import { Academic } from "./Academic";
import { Cathedra } from "./Cathedra";
import { Class } from "./Class";
import { SubjectTeaching } from "./SubjectTeaching";

@Entity("cathedraemployee", { schema: "public" })
@Index("unique_academic", ["academic",], { unique: true })
export class CathedraEmployee {

  @PrimaryGeneratedColumn({
    type: "integer",
    name: "id"
  })
  id: number;

  @OneToOne(() => Academic, (academic: Academic) => academic.cathedraEmployee, { nullable: false, })
  @JoinColumn({ name: 'academic_id' })
  academic: Academic | null;

  @ManyToOne(() => Cathedra, (cathedra: Cathedra) => cathedra.cathedraEmployees, { nullable: false, })
  @JoinColumn({ name: 'cathedra_id' })
  cathedra: Cathedra | null;

  @OneToOne(() => Class, (classs: Class) => classs.curator)
  class: Class | null;

  @OneToMany(() => SubjectTeaching, (subjectTeaching: SubjectTeaching) => subjectTeaching.cathedraEmployee)
  subjectTeachings: SubjectTeaching[];
}
