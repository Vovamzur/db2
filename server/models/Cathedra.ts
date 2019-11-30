import { BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId } from "typeorm";
import { Department } from "./Department";
import { Academic } from "./Academic";
import { CathedraEmployee } from "./CathedraEmployee";
import { ScientificProposal } from "./ScientificProposal";

@Entity("cathedra", { schema: "public" })
@Index("unique_cathedra_dean", ["dean",], { unique: true })
@Index("unique_cathedra_title", ["title",], { unique: true })
export class Cathedra {

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

  @ManyToOne(() => Department, (department: Department) => department.cathedras, { nullable: false, })
  @JoinColumn({ name: 'department_id' })
  department: Department | null;

  @OneToOne(() => Academic, (academic: Academic) => academic.cathedra, { nullable: false, })
  @JoinColumn({ name: 'dean_id' })
  dean: Academic | null;

  @OneToMany(() => CathedraEmployee, (cathedraEmployee: CathedraEmployee) => cathedraEmployee.cathedra)
  cathedraEmployees: CathedraEmployee[];

  @OneToMany(() => ScientificProposal, (scientificProposal: ScientificProposal) => scientificProposal.cathedra)
  scientificProposals: ScientificProposal[];
}
