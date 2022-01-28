import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user")
export class UserModel {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  name: string;

  @Column()
  avatar: "LUP" | "VALU";
}
