import { BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId } from "typeorm";
import { HostelResident } from "./HostelResident";

@Entity("cheque", { schema: "public" })
@Index("unique_payment_period", ["end_date", "hostelResident", "start_date",], { unique: true })
export class Cheque {

  @PrimaryGeneratedColumn({
    type: "integer",
    name: "id"
  })
  id: number;

  @Column("date", {
    nullable: false,
    name: "payment_date"
  })
  payment_date: string;

  @Column("integer", {
    nullable: false,
    name: "sum"
  })
  sum: number;

  @Column("date", {
    nullable: false,
    unique: true,
    name: "start_date"
  })
  start_date: string;

  @Column("date", {
    nullable: false,
    unique: true,
    name: "end_date"
  })
  end_date: string;

  @ManyToOne(() => HostelResident, (hostelresident: HostelResident) => hostelresident.cheques, { nullable: false, })
  @JoinColumn({ name: 'hostelresident_id' })
  hostelResident: HostelResident | null;
}
