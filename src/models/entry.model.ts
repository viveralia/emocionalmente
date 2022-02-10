import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";

@Entity("entries")
export class EntryModel {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  emotion: string;

  @Column()
  description: string;

  @Column()
  bodyExpression: string;

  @CreateDateColumn()
  createdAt: Date;
}
