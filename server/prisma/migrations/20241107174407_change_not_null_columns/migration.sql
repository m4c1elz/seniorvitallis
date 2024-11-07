-- CreateTable
CREATE TABLE `avaliacao` (
    `id_avaliacao` INTEGER NOT NULL AUTO_INCREMENT,
    `fk_usuario_comum_id` INTEGER NOT NULL,
    `fk_profissional_id` INTEGER NOT NULL,
    `comentario` VARCHAR(255) NULL,
    `nota` INTEGER NOT NULL,
    `data_avaliacao` DATE NOT NULL,

    INDEX `fk_profissional_id`(`fk_profissional_id`),
    INDEX `fk_usuario_comum_id`(`fk_usuario_comum_id`),
    PRIMARY KEY (`id_avaliacao`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `chat` (
    `id_chat` INTEGER NOT NULL AUTO_INCREMENT,
    `usuario_comum_id` INTEGER NOT NULL,
    `fk_profissional_id` INTEGER NOT NULL,
    `data_inicio_chat` DATE NOT NULL,

    INDEX `fk_profissional_id`(`fk_profissional_id`),
    INDEX `fk_usuario_comum_id`(`usuario_comum_id`),
    PRIMARY KEY (`id_chat`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `contratacao` (
    `id_contratacao` INTEGER NOT NULL AUTO_INCREMENT,
    `fk_usuario_comum_id` INTEGER NOT NULL,
    `fk_profissional_id` INTEGER NOT NULL,
    `preco_contratacao` DECIMAL(10, 2) NOT NULL,
    `data_contratacao` DATE NOT NULL,
    `prazo_contratacao` INTEGER NOT NULL,
    `status_contratacao` ENUM('pendente', 'concluida', 'cancelada') NULL,

    INDEX `fk_profissional_id`(`fk_profissional_id`),
    INDEX `fk_usuario_comum_id`(`fk_usuario_comum_id`),
    PRIMARY KEY (`id_contratacao`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `denuncia` (
    `id_denuncia` INTEGER NOT NULL AUTO_INCREMENT,
    `fk_usuario_comum_id` INTEGER NOT NULL,
    `fk_profissional_id` INTEGER NOT NULL,
    `comentario` VARCHAR(255) NOT NULL,
    `data_denuncia` DATE NOT NULL,

    INDEX `fk_profissional_id`(`fk_profissional_id`),
    INDEX `fk_usuario_comum_id`(`fk_usuario_comum_id`),
    PRIMARY KEY (`id_denuncia`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mensagem` (
    `id_mensagem` INTEGER NOT NULL AUTO_INCREMENT,
    `fk_chat_id` INTEGER NOT NULL,
    `fk_usuario_comum_id` INTEGER NOT NULL,
    `fk_profissional_id` INTEGER NOT NULL,
    `conteudo` TEXT NOT NULL,
    `data_envio` TIMESTAMP(0) NOT NULL,

    INDEX `fk_chat_id`(`fk_chat_id`),
    INDEX `fk_profissional_id`(`fk_profissional_id`),
    INDEX `fk_usuario_comum_id`(`fk_usuario_comum_id`),
    PRIMARY KEY (`id_mensagem`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuario_comum` (
    `id_usuario_comum` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `telefone_celular` VARCHAR(15) NULL,
    `endereco` VARCHAR(255) NOT NULL,
    `cpf` VARCHAR(14) NOT NULL,
    `senha_usuario` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `email`(`email`),
    UNIQUE INDEX `cpf`(`cpf`),
    PRIMARY KEY (`id_usuario_comum`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuario_profissional` (
    `id_profissional` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `telefone_celular` VARCHAR(15) NOT NULL,
    `endereco` VARCHAR(255) NOT NULL,
    `cpf` VARCHAR(14) NOT NULL,
    `cnpj` VARCHAR(14) NOT NULL,
    `especialidade` VARCHAR(255) NOT NULL,
    `disponibilidade` CHAR(1) NOT NULL,
    `descricao` VARCHAR(255) NOT NULL,
    `senha_usuario` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `email`(`email`),
    UNIQUE INDEX `cpf`(`cpf`),
    PRIMARY KEY (`id_profissional`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `avaliacao` ADD CONSTRAINT `avaliacao_ibfk_1` FOREIGN KEY (`fk_usuario_comum_id`) REFERENCES `usuario_comum`(`id_usuario_comum`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `avaliacao` ADD CONSTRAINT `avaliacao_ibfk_2` FOREIGN KEY (`fk_profissional_id`) REFERENCES `usuario_profissional`(`id_profissional`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `chat` ADD CONSTRAINT `chat_ibfk_1` FOREIGN KEY (`usuario_comum_id`) REFERENCES `usuario_comum`(`id_usuario_comum`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `chat` ADD CONSTRAINT `chat_ibfk_2` FOREIGN KEY (`fk_profissional_id`) REFERENCES `usuario_profissional`(`id_profissional`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `contratacao` ADD CONSTRAINT `contratacao_ibfk_1` FOREIGN KEY (`fk_usuario_comum_id`) REFERENCES `usuario_comum`(`id_usuario_comum`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `contratacao` ADD CONSTRAINT `contratacao_ibfk_2` FOREIGN KEY (`fk_profissional_id`) REFERENCES `usuario_profissional`(`id_profissional`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `denuncia` ADD CONSTRAINT `denuncia_ibfk_1` FOREIGN KEY (`fk_usuario_comum_id`) REFERENCES `usuario_comum`(`id_usuario_comum`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `denuncia` ADD CONSTRAINT `denuncia_ibfk_2` FOREIGN KEY (`fk_profissional_id`) REFERENCES `usuario_profissional`(`id_profissional`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `mensagem` ADD CONSTRAINT `mensagem_ibfk_1` FOREIGN KEY (`fk_chat_id`) REFERENCES `chat`(`id_chat`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `mensagem` ADD CONSTRAINT `mensagem_ibfk_2` FOREIGN KEY (`fk_usuario_comum_id`) REFERENCES `usuario_comum`(`id_usuario_comum`) ON DELETE RESTRICT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `mensagem` ADD CONSTRAINT `mensagem_ibfk_3` FOREIGN KEY (`fk_profissional_id`) REFERENCES `usuario_profissional`(`id_profissional`) ON DELETE RESTRICT ON UPDATE NO ACTION;
