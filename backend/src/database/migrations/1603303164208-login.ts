import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class login1603303164208 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: "login",
				columns: [
					{
						name: "id",
						type: "integer",
						unsigned: true,
						isPrimary: true,
						isGenerated: true,
						generationStrategy: "increment",
					},
					{
						name: "email",
						type: "varchar",
					},
					{
						name: "password",
						type: "varchar",
					},
				],
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable("login");
	}
}
