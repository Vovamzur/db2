import { BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId } from "typeorm";
import { SubjectTeaching } from "./SubjectTeaching";
import { Auditorium } from "./Auditorium";

@Entity("lesson", { schema: "public" })
@Index("unique_lesson", ["subjectTeaching", "time",], { unique: true })
export class Lesson {

  @PrimaryGeneratedColumn({
    type: "integer",
    name: "id"
  })
  id: number;

  @ManyToOne(() => SubjectTeaching, (subjectTeaching: SubjectTeaching) => subjectTeaching.lessons, { nullable: false, })
  @JoinColumn({ name: 'subjectteaching_id' })
  subjectTeaching: SubjectTeaching | null;

  @Column("date", {
    nullable: true,
    unique: true,
    name: "time"
  })
  time: string | null;

  @ManyToOne(() => Auditorium, (auditorium: Auditorium) => auditorium.lessons, {})
  @JoinColumn({ name: 'auditorium_id' })
  auditorium: Auditorium | null;

}
