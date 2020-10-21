import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("login")
export default class Login {
	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column()
	email: string;

	@Column()
	password: string;
}
