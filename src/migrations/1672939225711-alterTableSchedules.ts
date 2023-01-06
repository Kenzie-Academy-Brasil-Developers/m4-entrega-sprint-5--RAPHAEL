import { MigrationInterface, QueryRunner } from "typeorm";

export class alterTableSchedules1672939225711 implements MigrationInterface {
    name = 'alterTableSchedules1672939225711'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_bf513496737d39d54283470c3f9"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "schedulesId"`);
        await queryRunner.query(`ALTER TABLE "schedules_users-properties" ADD "usersId" uuid`);
        await queryRunner.query(`ALTER TABLE "schedules_users-properties" ADD CONSTRAINT "FK_a1b925046184e725eedbd7f7b44" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules_users-properties" DROP CONSTRAINT "FK_a1b925046184e725eedbd7f7b44"`);
        await queryRunner.query(`ALTER TABLE "schedules_users-properties" DROP COLUMN "usersId"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "schedulesId" uuid`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_bf513496737d39d54283470c3f9" FOREIGN KEY ("schedulesId") REFERENCES "schedules_users-properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
