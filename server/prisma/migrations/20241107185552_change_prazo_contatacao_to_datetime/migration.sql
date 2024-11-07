/*
  Warnings:

  - Changed the type of `prazo_contratacao` on the `contratacao` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE `contratacao` DROP COLUMN `prazo_contratacao`,
    ADD COLUMN `prazo_contratacao` TIMESTAMP NOT NULL;
