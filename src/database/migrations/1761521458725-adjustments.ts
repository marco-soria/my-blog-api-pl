import { MigrationInterface, QueryRunner } from "typeorm";

export class Adjustments1761521458725 implements MigrationInterface {
    name = 'Adjustments1761521458725'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categories" ADD "description" character varying(800)`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "cover_image" character varying(800)`);
        await queryRunner.query(`ALTER TABLE "posts" DROP COLUMN "cover_image"`);
        await queryRunner.query(`ALTER TABLE "posts" ADD "cover_image" character varying(900)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "posts" DROP COLUMN "cover_image"`);
        await queryRunner.query(`ALTER TABLE "posts" ADD "cover_image" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "cover_image"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "description"`);
    }

}
