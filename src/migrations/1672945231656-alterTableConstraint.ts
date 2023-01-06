import { MigrationInterface, QueryRunner } from "typeorm";

export class alterTableConstraint1672945231656 implements MigrationInterface {
    name = 'alterTableConstraint1672945231656'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules_users-properties" DROP CONSTRAINT "FK_e0e4d0632477f7e18a3fa6c32b6"`);
        await queryRunner.query(`ALTER TABLE "schedules_users-properties" RENAME COLUMN "propertiesId" TO "propertyId"`);
        await queryRunner.query(`ALTER TABLE "schedules_users-properties" ADD CONSTRAINT "FK_5bcaf0925587d8b8c477a6abcb2" FOREIGN KEY ("propertyId") REFERENCES "properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules_users-properties" DROP CONSTRAINT "FK_5bcaf0925587d8b8c477a6abcb2"`);
        await queryRunner.query(`ALTER TABLE "schedules_users-properties" RENAME COLUMN "propertyId" TO "propertiesId"`);
        await queryRunner.query(`ALTER TABLE "schedules_users-properties" ADD CONSTRAINT "FK_e0e4d0632477f7e18a3fa6c32b6" FOREIGN KEY ("propertiesId") REFERENCES "properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
