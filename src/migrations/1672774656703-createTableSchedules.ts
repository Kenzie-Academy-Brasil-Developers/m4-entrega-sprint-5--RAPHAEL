import { MigrationInterface, QueryRunner } from "typeorm";

export class createTableSchedules1672774656703 implements MigrationInterface {
    name = 'createTableSchedules1672774656703'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "schedules_users-properties" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "date" date NOT NULL, "hour" TIME NOT NULL, CONSTRAINT "PK_8458aec2e8d820fcc049fb1c34c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "properties" ADD "schedulesId" uuid`);
        await queryRunner.query(`ALTER TABLE "users" ADD "schedulesId" uuid`);
        await queryRunner.query(`ALTER TABLE "properties" ADD CONSTRAINT "FK_511dc91361b86b17e3d0ded381b" FOREIGN KEY ("schedulesId") REFERENCES "schedules_users-properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_bf513496737d39d54283470c3f9" FOREIGN KEY ("schedulesId") REFERENCES "schedules_users-properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_bf513496737d39d54283470c3f9"`);
        await queryRunner.query(`ALTER TABLE "properties" DROP CONSTRAINT "FK_511dc91361b86b17e3d0ded381b"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "schedulesId"`);
        await queryRunner.query(`ALTER TABLE "properties" DROP COLUMN "schedulesId"`);
        await queryRunner.query(`DROP TABLE "schedules_users-properties"`);
    }

}
