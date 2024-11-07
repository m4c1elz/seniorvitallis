/*
  Warnings:

  - You are about to alter the column `prazo_contratacao` on the `contratacao` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - Made the column `status_contratacao` on table `contratacao` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `contratacao` MODIFY `status_contratacao` ENUM('pendente', 'concluida', 'cancelada') NOT NULL,
    MODIFY `prazo_contratacao` TIMESTAMP NOT NULL;
