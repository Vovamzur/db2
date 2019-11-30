import { BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId } from "typeorm";
import { Cathedra } from "./Cathedra";
import { Specialty } from "./Specialty";
import { Class } from "./Class";

@Entity("scientificproposal", { schema: "public" })
@Index("unique_scientificproposal", ["cathedra", "specialty",], { unique: true })
export class ScientificProposal {

  @PrimaryGeneratedColumn({
    type: "integer",
    name: "id"
  })
  id: number;

  @ManyToOne(() => Cathedra, (cathedra: Cathedra) => cathedra.scientificProposals, { nullable: false, })
  @JoinColumn({ name: 'cathedra_id' })
  cathedra: Cathedra | null;

  @ManyToOne(() => Specialty, (specialty: Specialty) => specialty.scientificProposals, { nullable: false, })
  @JoinColumn({ name: 'specialty_id' })
  specialty: Specialty | null;

  @OneToMany(() => Class, (classs: Class) => classs.scientificProposal)
  class: Class[];
}
