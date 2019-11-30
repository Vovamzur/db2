import { BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId } from "typeorm";
import { Building } from './Building';
import { Exam } from './Exam';
import { Lesson } from './Lesson';

@Entity("auditorium", { schema: "public" })
@Index("unique_auditorium_in_building", ["building", "number"], { unique: true })
export class Auditorium {
  @PrimaryGeneratedColumn({
    type: "integer",
    name: "id"
  })
  id: number;

  @Column("integer", {
    nullable: false,
    name: "capacity"
  })
  capacity: number;

  @Column("integer", {
    nullable: false,
    unique: true,
    name: "number"
  })
  number: number;

  @ManyToOne(() => Building, (building: Building) => building.auditoriums, { nullable: false, })
  @JoinColumn({ name: 'building_id' })
  building: Building | null;

  @Column("character", {
    nullable: true,
    name: "computers_availibility"
  })
  computers_availibility: string | null;

  @OneToMany(() => Exam, (exam: Exam) => exam.auditorium)
  exams: Exam[];

  @OneToMany(() => Lesson, (lesson: Lesson) => lesson.auditorium)
  lessons: Lesson[];
}
