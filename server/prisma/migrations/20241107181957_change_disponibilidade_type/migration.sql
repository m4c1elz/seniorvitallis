/*
  Warnings:

  - You are about to alter the column `disponibilidade` on the `usuario_profissional` table. The data in that column could be lost. The data in that column will be cast from `Char(1)` to `Enum(EnumId(1))`.

*/
-- AlterTable
ALTER TABLE `usuario_profissional` MODIFY `disponibilidade` ENUM('pendente', 'concluida', 'cancelada') NOT NULL;
