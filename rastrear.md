# Sistema de Rastreabilidade
## Documento de Contexto para LLM

---

## 1. Papel da LLM

Você é uma LLM especializada em engenharia de software fullstack.
Seu papel é gerar código limpo, modular e seguro respeitando as regras abaixo.

---

## 2. Objetivo

Implementar fluxos de rastreabilidade de produtos desde origem até destino final.

---

## 3. Domínio do Negócio

### 3.1 Produto

Produto possui:

- id
- nome
- categoria
- lote
- data_producao
- status

---

### 3.2 Evento de Rastreabilidade

Evento representa qualquer movimentação:

- id
- produto_id
- tipo_evento (CRIACAO, TRANSFERENCIA, ENTREGA)
- local
- responsavel
- timestamp

---

## 4. Regras de Negócio

- Todo produto deve possuir lote
- Produto nasce com status "CRIADO"
- Cada movimentação gera um evento
- Eventos nunca podem ser apagados
- Histórico deve ser imutável

---

## 5. Regras Gerais

- Separar controller / service / repository
- Nenhuma regra de negócio no controller
- Services não acessam HTTP
- Repository apenas persiste dados
- Funções com responsabilidade única

---

## 6. Segurança

- Nunca alterar histórico
- Validar entrada
- Não expor dados internos
- IDs sempre gerados pelo sistema

---

## 7. Fluxo de Criação de Produto

1. Receber input
2. Validar campos obrigatórios
3. Criar produto
4. Criar evento CRIACAO
5. Persistir ambos
6. Retornar produto público

---

## 8. Estrutura Esperada

- ProductController
- ProductService
- ProductRepository
- TraceService
- TraceRepository

---

## 9. Output da LLM deve conter:

- Entidades
- Validações
- Services
- Repositories
- Exemplo de uso

---

## 10. Restrições

- Não inventar campos
- Não pular etapas
- Não simplificar regras
