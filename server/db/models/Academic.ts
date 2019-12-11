import { BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId } from "typeorm";
import { Cathedra } from './Cathedra';
import { CathedraEmployee } from './CathedraEmployee';
import { Department } from './Department';

@Entity("academic")
@Index("unique_fullname", ["firstname","lastname","middlename"], { unique: true })
export class Academic {
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

  @Column("date", {
    nullable: true,
    name: "recruitment_date"
  })
  recruitment_date: string | null;

  @OneToOne(() => Cathedra, (cathedra: Cathedra) => cathedra.dean)
  cathedra: Cathedra | null;

  @OneToOne(() => CathedraEmployee, (cathedraEmployee: CathedraEmployee) => cathedraEmployee.academic)
  cathedraEmployee: CathedraEmployee | null;

  @OneToOne(() => Department, (department: Department) => department.head)
  department: Department | null;
}
