/*
  Warnings:

  - You are about to drop the `Walk` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WalkDog` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Walk` DROP FOREIGN KEY `Walk_walkerId_fkey`;

-- DropForeignKey
ALTER TABLE `WalkDog` DROP FOREIGN KEY `WalkDog_dogId_fkey`;

-- DropForeignKey
ALTER TABLE `WalkDog` DROP FOREIGN KEY `WalkDog_walkId_fkey`;

-- DropTable
DROP TABLE `Walk`;

-- DropTable
DROP TABLE `WalkDog`;

-- CreateTable
CREATE TABLE `Trip` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `walkerId` INTEGER NOT NULL,
    `path` JSON NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TripDog` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `walkId` INTEGER NOT NULL,
    `dogId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Trip` ADD CONSTRAINT `Trip_walkerId_fkey` FOREIGN KEY (`walkerId`) REFERENCES `Walker`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TripDog` ADD CONSTRAINT `TripDog_walkId_fkey` FOREIGN KEY (`walkId`) REFERENCES `Trip`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TripDog` ADD CONSTRAINT `TripDog_dogId_fkey` FOREIGN KEY (`dogId`) REFERENCES `Dog`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
