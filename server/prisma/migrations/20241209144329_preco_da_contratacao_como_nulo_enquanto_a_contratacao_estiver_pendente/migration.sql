/*
  Warnings:

  - You are about to alter the column `prazo_contratacao` on the `contratacao` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.

*/
-- AlterTable
ALTER TABLE `contratacao` MODIFY `preco_contratacao` DECIMAL(10, 2) NULL,
    MODIFY `prazo_contratacao` TIMESTAMP NOT NULL;
