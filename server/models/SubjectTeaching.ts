import { BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId } from "typeorm";
import { Discipline } from "./Discipline";
import { CathedraEmployee } from "./CathedraEmployee";
import { Class } from "./Class";
import { ControlType } from "./ControlType";
import { Exam } from "./Exam";
import { Lesson } from "./Lesson";

@Entity("subjectteaching", { schema: "public" })
@Index("unique_subjectteaching", ["cathedraEmployee", "class", "discipline",], { unique: true })
export class SubjectTeaching {

  @PrimaryGeneratedColumn({
    type: "integer",
    name: "id"
  })
  id: number;

  @Column("character", {
    nullable: true,
    name: "basic_discipline"
  })
  basic_discipline: string | null;

  @ManyToOne(() => Discipline, (discipline: Discipline) => discipline.subjectTeachings, { nullable: false, })
  @JoinColumn({ name: 'discipline_id' })
  discipline: Discipline | null;

  @ManyToOne(() => CathedraEmployee, (cathedraEmployee: CathedraEmployee) => cathedraEmployee.subjectTeachings, { nullable: false, })
  @JoinColumn({ name: 'cathedraemployee_id' })
  cathedraEmployee: CathedraEmployee | null;

  @ManyToOne(() => Class, (classs: Class) => classs.subjectTeachings, { nullable: false, })
  @JoinColumn({ name: 'class_id' })
  class: Class | null;

  @ManyToOne(() => ControlType, (controlType: ControlType) => controlType.subjectTeachings, { nullable: false, })
  @JoinColumn({ name: 'controltype_id' })
  controlType: ControlType | null;

  @OneToMany(() => Exam, (exam: Exam) => exam.subjectTeaching)
  exams: Exam[];

  @OneToMany(() => Lesson, (lesson: Lesson) => lesson.subjectTeaching)
  lessons: Lesson[];
}
