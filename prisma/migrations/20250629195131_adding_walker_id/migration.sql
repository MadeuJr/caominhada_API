-- AlterTable
ALTER TABLE `Tutor` ADD COLUMN `walkerId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Tutor` ADD CONSTRAINT `Tutor_walkerId_fkey` FOREIGN KEY (`walkerId`) REFERENCES `Walker`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
