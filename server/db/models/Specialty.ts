import { BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId } from "typeorm";
import { ScientificProposal } from "./ScientificProposal";

@Entity("specialty", { schema: "public" })
@Index("unique_specialty_area_code", ["area", "code",], { unique: true })
@Index("unique_specialty_title", ["title",], { unique: true })
export class Specialty {

  @PrimaryGeneratedColumn({
    type: "integer",
    name: "id"
  })
  id: number;

  @Column("integer", {
    nullable: false,
    unique: true,
    name: "area"
  })
  area: number;

  @Column("integer", {
    nullable: false,
    unique: true,
    name: "code"
  })
  code: number;

  @Column("character varying", {
    nullable: false,
    unique: true,
    length: 90,
    name: "title"
  })
  title: string;

  @OneToMany(() => ScientificProposal, (scientificProposal: ScientificProposal) => scientificProposal.specialty)
  scientificProposals: ScientificProposal[];
}
