import { BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId } from "typeorm";
import { Department } from "./Department";

@Entity("departmenttype", { schema: "public" })
@Index("unique_department_type", ["type",], { unique: true })
export class DepartmentType {

  @PrimaryGeneratedColumn({
    type: "integer",
    name: "id"
  })
  id: number;

  @Column("character varying", {
    nullable: false,
    unique: true,
    length: 15,
    name: "type"
  })
  type: string;

  @OneToMany(() => Department, (department: Department) => department.departmentType)
  departments: Department[];
}
