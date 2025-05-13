/*
  Warnings:

  - You are about to alter the column `path` on the `Walk` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Json`.

*/
-- AlterTable
ALTER TABLE `Walk` MODIFY `path` JSON NOT NULL;
