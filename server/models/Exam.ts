import { BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId } from "typeorm";
import { Student } from "./Student";
import { SubjectTeaching } from "./SubjectTeaching";
import { Auditorium } from "./Auditorium";

@Entity("exam", { schema: "public" })
@Index("unique_exam_per_student", ["student", "subjectTeaching",], { unique: true })
export class Exam {

  @PrimaryGeneratedColumn({
    type: "integer",
    name: "id"
  })
  id: number;


  @Column("date", {
    nullable: false,
    name: "time"
  })
  time: string;


  @Column("integer", {
    nullable: true,
    name: "mark"
  })
  mark: number | null;

  @ManyToOne(() => Student, (student: Student) => student.exams, { nullable: false, })
  @JoinColumn({ name: 'student_id' })
  student: Student | null;

  @ManyToOne(() => SubjectTeaching, (subjectTeaching: SubjectTeaching) => subjectTeaching.exams, { nullable: false, })
  @JoinColumn({ name: 'subjectteaching_id' })
  subjectTeaching: SubjectTeaching | null;

  @ManyToOne(() => Auditorium, (auditorium: Auditorium) => auditorium.exams, {})
  @JoinColumn({ name: 'auditorium_id' })
  auditorium: Auditorium | null;
}
