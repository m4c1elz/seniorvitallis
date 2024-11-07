/*
  Warnings:

  - The values [pendente,concluida,cancelada] on the enum `usuario_profissional_disponibilidade` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `usuario_profissional` MODIFY `disponibilidade` ENUM('disponivel', 'indisponivel') NOT NULL;
