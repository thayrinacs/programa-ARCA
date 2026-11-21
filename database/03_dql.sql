-- ============================================================================
-- PROJETO INTERDISCIPLINAR - PROGRAMA ARCA
-- DQL - Data Query Language  (PostgreSQL)
-- Consultas que compoem o relatorio gerencial do Programa ARCA.
-- ============================================================================


-- ----------------------------------------------------------------------------
-- QUERY 1 - Relacao de adocoes de caes e gatos por mes
-- ----------------------------------------------------------------------------
-- Considera as solicitacoes de adocao efetivamente CONCLUIDAS (status =
-- 'concluida'), agrupando-as pelo mes da data de conclusao e separando o
-- total por especie do animal adotado.
-- ----------------------------------------------------------------------------
SELECT
    TO_CHAR(sa.data_conclusao, 'YYYY-MM')                                AS mes,
    COUNT(*) FILTER (WHERE a.especie = 'cachorro')                       AS adocoes_caes,
    COUNT(*) FILTER (WHERE a.especie = 'gato')                           AS adocoes_gatos,
    COUNT(*)                                                             AS total_adocoes
FROM solicitacao_adocao sa
JOIN animal a ON a.id_animal = sa.id_animal
WHERE sa.status = 'concluida'
  AND sa.data_conclusao IS NOT NULL
GROUP BY TO_CHAR(sa.data_conclusao, 'YYYY-MM')
ORDER BY mes;


-- ----------------------------------------------------------------------------
-- QUERY 2 - Demanda de castracao de gatos e caes
-- ----------------------------------------------------------------------------
-- Mede a demanda total por castracao registrada na plataforma, agrupando
-- todas as solicitacoes por especie, com o percentual de cada uma e quantas
-- ja foram efetivamente realizadas.
-- ----------------------------------------------------------------------------
SELECT
    sc.especie_animal                                                    AS especie,
    COUNT(*)                                                             AS total_solicitacoes,
    ROUND(100.0 * COUNT(*) / SUM(COUNT(*)) OVER (), 2)                   AS percentual,
    COUNT(*) FILTER (WHERE sc.status = 'realizado')                      AS castracoes_realizadas,
    COUNT(*) FILTER (WHERE sc.status <> 'realizado')                     AS demanda_pendente
FROM solicitacao_castracao sc
GROUP BY sc.especie_animal
ORDER BY total_solicitacoes DESC;


-- ----------------------------------------------------------------------------
-- QUERY 3 - Media mensal de adocoes
-- ----------------------------------------------------------------------------
-- Calcula a media de adocoes concluidas por mes ao longo de todo o periodo,
-- alem do total geral e da quantidade de meses com atividade. Utiliza uma
-- subconsulta que primeiro totaliza as adocoes de cada mes.
-- ----------------------------------------------------------------------------
SELECT
    SUM(total_mes)                                                       AS total_adocoes,
    COUNT(*)                                                             AS meses_com_adocoes,
    ROUND(AVG(total_mes), 2)                                             AS media_mensal_adocoes,
    MIN(total_mes)                                                       AS menor_mes,
    MAX(total_mes)                                                       AS maior_mes
FROM (
    SELECT
        TO_CHAR(sa.data_conclusao, 'YYYY-MM') AS mes,
        COUNT(*)                              AS total_mes
    FROM solicitacao_adocao sa
    WHERE sa.status = 'concluida'
      AND sa.data_conclusao IS NOT NULL
    GROUP BY TO_CHAR(sa.data_conclusao, 'YYYY-MM')
) AS adocoes_mensais;
