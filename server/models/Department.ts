import { BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId } from "typeorm";
import { Academic } from "./Academic";
import { DepartmentType } from "./DepartmentType";
import { Cathedra } from "./Cathedra";

@Entity("department", { schema: "public" })
@Index("unique_department_head", ["head",], { unique: true })
@Index("unique_department_title", ["title",], { unique: true })
export class Department {

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

  @Column("date", {
    nullable: true,
    name: "creation_date"
  })
  creation_date: string | null;

  @OneToOne(() => Academic, (academic: Academic) => academic.department, { nullable: false, })
  @JoinColumn({ name: 'head_id' })
  head: Academic | null;

  @ManyToOne(() => DepartmentType, (departmentType: DepartmentType) => departmentType.departments, { nullable: false, })
  @JoinColumn({ name: 'departmenttype_id' })
  departmentType: DepartmentType | null;

  @OneToMany(() => Cathedra, (cathedra: Cathedra) => cathedra.department)
  cathedras: Cathedra[];
}
