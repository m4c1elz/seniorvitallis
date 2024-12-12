/*
  Warnings:

  - You are about to alter the column `prazo_contratacao` on the `contratacoes` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - Added the required column `experiencia` to the `usuarios_profissionais` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `chats` MODIFY `data_inicio_chat` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `contratacoes` MODIFY `prazo_contratacao` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `usuarios_comuns` ADD COLUMN `dataCadastro` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `descricao` VARCHAR(255) NULL,
    ADD COLUMN `docIdentificador` TEXT NULL;

-- AlterTable
ALTER TABLE `usuarios_profissionais` ADD COLUMN `dataCadastro` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `docIdentificador` TEXT NULL,
    ADD COLUMN `docPsicotec` TEXT NULL,
    ADD COLUMN `experiencia` VARCHAR(255) NOT NULL;
