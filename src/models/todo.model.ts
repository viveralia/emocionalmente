import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("todo")
export class TodoModel {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  status: boolean;
}
