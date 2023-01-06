import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUser1672849074949 implements MigrationInterface {
    name = 'CreateUser1672849074949'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" DROP CONSTRAINT "FK_511dc91361b86b17e3d0ded381b"`);
        await queryRunner.query(`ALTER TABLE "properties" RENAME COLUMN "schedulesId" TO "categoryId"`);
        await queryRunner.query(`ALTER TABLE "schedules_users-properties" ADD "propertiesId" uuid`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "district"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "district" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "city"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "city" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "schedules_users-properties" ADD CONSTRAINT "FK_e0e4d0632477f7e18a3fa6c32b6" FOREIGN KEY ("propertiesId") REFERENCES "properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "properties" ADD CONSTRAINT "FK_a82b56d3d456c30b8c630cba0c6" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" DROP CONSTRAINT "FK_a82b56d3d456c30b8c630cba0c6"`);
        await queryRunner.query(`ALTER TABLE "schedules_users-properties" DROP CONSTRAINT "FK_e0e4d0632477f7e18a3fa6c32b6"`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "city"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "city" character varying(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "district"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "district" character varying(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "schedules_users-properties" DROP COLUMN "propertiesId"`);
        await queryRunner.query(`ALTER TABLE "properties" RENAME COLUMN "categoryId" TO "schedulesId"`);
        await queryRunner.query(`ALTER TABLE "properties" ADD CONSTRAINT "FK_511dc91361b86b17e3d0ded381b" FOREIGN KEY ("schedulesId") REFERENCES "schedules_users-properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
