/*
  Warnings:

  - You are about to drop the column `age` on the `Dog` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Dog` table. All the data in the column will be lost.
  - You are about to alter the column `weight` on the `Dog` table. The data in that column could be lost. The data in that column will be cast from `Double` to `Enum(EnumId(2))`.

*/
-- AlterTable
ALTER TABLE `Dog` DROP COLUMN `age`,
    DROP COLUMN `type`,
    ADD COLUMN `observation` VARCHAR(191) NULL,
    MODIFY `weight` ENUM('SMALL', 'MEDIUM', 'LARGE') NOT NULL;
