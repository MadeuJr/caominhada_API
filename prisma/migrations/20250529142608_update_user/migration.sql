/*
  Warnings:

  - You are about to drop the column `experience` on the `Walker` table. All the data in the column will be lost.
  - Made the column `availability` on table `Walker` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Walker` DROP COLUMN `experience`,
    MODIFY `rating` DOUBLE NULL DEFAULT 5,
    MODIFY `availability` ENUM('AVAILABLE', 'UNAVAILABLE') NOT NULL DEFAULT 'AVAILABLE';
