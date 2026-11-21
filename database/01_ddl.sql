-- ============================================================================
-- PROJETO INTERDISCIPLINAR - PROGRAMA ARCA
-- (Animais Resgatados, Cuidados e Acolhidos)
-- DDL - Data Definition Language
-- SGBD: PostgreSQL
-- ============================================================================
-- Este script cria todas as tabelas do banco de dados mapeado no modelo
-- conceitual e lógico, incluindo chaves primárias, chaves estrangeiras e
-- restrições de integridade (CHECK e UNIQUE).
-- ============================================================================

-- Remove o esquema anterior, se existir, para permitir reexecução do script.
DROP TABLE IF EXISTS solicitacao_castracao CASCADE;
DROP TABLE IF EXISTS solicitacao_adocao     CASCADE;
DROP TABLE IF EXISTS denuncia                CASCADE;
DROP TABLE IF EXISTS animal                  CASCADE;
DROP TABLE IF EXISTS cidadao                 CASCADE;
DROP TABLE IF EXISTS administrador           CASCADE;

-- ----------------------------------------------------------------------------
-- Tabela: administrador
-- Funcionários do Programa ARCA responsáveis por gerir solicitações,
-- cadastros de animais e denúncias.
-- ----------------------------------------------------------------------------
CREATE TABLE administrador (
    id_admin            SERIAL       PRIMARY KEY,
    nome                VARCHAR(150) NOT NULL,
    senha               VARCHAR(255) NOT NULL,
    nivel_acesso        VARCHAR(50),
    email_institucional VARCHAR(150) NOT NULL UNIQUE
);

-- ----------------------------------------------------------------------------
-- Tabela: cidadao
-- Cidadãos que interagem com a plataforma (solicitam adoções e castrações
-- e registram denúncias de maus-tratos).
-- ----------------------------------------------------------------------------
CREATE TABLE cidadao (
    id_cidadao     SERIAL       PRIMARY KEY,
    nome_completo  VARCHAR(150) NOT NULL,
    email          VARCHAR(150) NOT NULL,
    cpf            VARCHAR(14)  UNIQUE,            -- opcional, conforme modelo
    telefone       VARCHAR(20),
    endereco       VARCHAR(255),
    data_cadastro  DATE         DEFAULT CURRENT_DATE
);

-- ----------------------------------------------------------------------------
-- Tabela: animal
-- Animais (cães e gatos) cadastrados pelo Programa ARCA para adoção.
-- ----------------------------------------------------------------------------
CREATE TABLE animal (
    id_animal         SERIAL       PRIMARY KEY,
    id_admin          INT          REFERENCES administrador (id_admin),
    nome              VARCHAR(100),
    sexo              VARCHAR(20),
    raca              VARCHAR(100),
    especie           VARCHAR(50),
    vacinas_aplicadas TEXT,
    porte             VARCHAR(50),
    status_adocao     VARCHAR(50),
    data_cadastro     DATE         DEFAULT CURRENT_DATE,
    foto_principal    VARCHAR(255),
    descricao         TEXT,
    CONSTRAINT chk_animal_especie
        CHECK (especie IN ('cachorro', 'gato')),
    CONSTRAINT chk_animal_sexo
        CHECK (sexo IN ('macho', 'femea')),
    CONSTRAINT chk_animal_status
        CHECK (status_adocao IN ('disponivel', 'em_processo', 'adotado', 'indisponivel'))
);

-- ----------------------------------------------------------------------------
-- Tabela: solicitacao_adocao
-- Pedidos de adoção feitos por um cidadão para um animal específico.
-- ----------------------------------------------------------------------------
CREATE TABLE solicitacao_adocao (
    id_solicitacao_adocao SERIAL    PRIMARY KEY,
    id_cidadao            INT       NOT NULL REFERENCES cidadao (id_cidadao),
    id_animal             INT       NOT NULL REFERENCES animal (id_animal),
    id_admin              INT       REFERENCES administrador (id_admin),
    data_solicitacao      DATE      NOT NULL,
    data_aprovacao        DATE,
    data_conclusao        DATE,
    observacoes_adm       TEXT,
    status                VARCHAR(50),
    CONSTRAINT chk_adocao_status
        CHECK (status IN ('pendente', 'aprovada', 'concluida', 'recusada'))
);

-- ----------------------------------------------------------------------------
-- Tabela: solicitacao_castracao
-- Cadastros de animais para castração feitos pelos cidadãos.
-- ----------------------------------------------------------------------------
CREATE TABLE solicitacao_castracao (
    id_solicitacao_castracao SERIAL       PRIMARY KEY,
    id_cidadao               INT          NOT NULL REFERENCES cidadao (id_cidadao),
    id_admin                 INT          REFERENCES administrador (id_admin),
    nome_animal              VARCHAR(100),
    sexo_animal              VARCHAR(20),
    especie_animal           VARCHAR(50),
    idade_estimada           VARCHAR(50),
    descricao_situacao       TEXT,
    contato_adicional        VARCHAR(100),
    data_solicitacao         DATE         NOT NULL,
    data_agendamento         DATE,
    data_realizacao          DATE,
    status                   VARCHAR(50),
    CONSTRAINT chk_castracao_especie
        CHECK (especie_animal IN ('cachorro', 'gato')),
    CONSTRAINT chk_castracao_status
        CHECK (status IN ('aguardando_analise', 'agendado', 'realizado', 'cancelado'))
);

-- ----------------------------------------------------------------------------
-- Tabela: denuncia
-- Denúncias de maus-tratos registradas pelos cidadãos.
-- ----------------------------------------------------------------------------
CREATE TABLE denuncia (
    id_denuncia          SERIAL       PRIMARY KEY,
    id_cidadao           INT          NOT NULL REFERENCES cidadao (id_cidadao),
    id_admin             INT          REFERENCES administrador (id_admin),
    endereco_ocorrencia  VARCHAR(255),
    descricao_ocorrido   TEXT,
    providencias_adotadas TEXT,
    imagens              TEXT,
    data_hora_registro   TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
    status               VARCHAR(50),
    CONSTRAINT chk_denuncia_status
        CHECK (status IN ('recebida', 'em_apuracao', 'concluida', 'arquivada'))
);

-- ----------------------------------------------------------------------------
-- Índices auxiliares para acelerar as consultas do relatório (DQL).
-- ----------------------------------------------------------------------------
CREATE INDEX idx_adocao_conclusao  ON solicitacao_adocao (data_conclusao);
CREATE INDEX idx_adocao_status     ON solicitacao_adocao (status);
CREATE INDEX idx_castracao_solic   ON solicitacao_castracao (data_solicitacao);
CREATE INDEX idx_animal_especie    ON animal (especie);
