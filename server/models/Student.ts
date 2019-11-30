import { BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId } from "typeorm";
import { Class } from "./Class";
import { Exam } from "./Exam";
import { HostelResident } from "./HostelResident";

@Entity("student", { schema: "public" })
@Index("unique_student_fullname", ["firstname", "lastname", "middlename",], { unique: true })
export class Student {

  @PrimaryGeneratedColumn({
    type: "integer",
    name: "id"
  })
  id: number;

  @Column("character varying", {
    nullable: false,
    unique: true,
    length: 20,
    name: "firstname"
  })
  firstname: string;

  @Column("character varying", {
    nullable: false,
    unique: true,
    length: 20,
    name: "middlename"
  })
  middlename: string;

  @Column("character varying", {
    nullable: false,
    unique: true,
    length: 20,
    name: "lastname"
  })
  lastname: string;

  @Column("character", {
    nullable: true,
    name: "hostel_need"
  })
  hostel_need: string | null;

  @ManyToOne(() => Class, (classs: Class) => classs.students, { nullable: false, })
  @JoinColumn({ name: 'class_id' })
  class: Class | null;

  @OneToMany(() => Exam, (exam: Exam) => exam.student)
  exams: Exam[];

  @OneToOne(() => HostelResident, (hostelResident: HostelResident) => hostelResident.student)
  hostelResident: HostelResident | null;

}
