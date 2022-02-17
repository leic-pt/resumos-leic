---
title: Estruturas
description: Definição. Funções. Typedef
path: /iaed/estruturas
type: content
---

# Estruturas

```toc

```

## Definição

### Porquê uma estrutura?

Para uma inscrição de um aluno numa disciplina é preciso saber:

- o seu número de aluno
- a sigla da disciplina (máx: 6 caracteres)
- nota obtida

- Exemplo: `42069 IAED 20`

Como podemos representar em C ?

- Vector? Todos os dados precisam de ser do mesmo tipo!
- 3 Vectores do mesmo tamanho? Muito complexo!

Solução: Estruturas para representar dados agregados de tipos diferentes.

### Exemplos

Uma estrutura permite definir estruturas de dados sofisticadas, as quais possibilitam a agregação de diferentes tipos de declarações.

`embed:assets/0006-def.c`

### Declaração de Variáveis

- Definição da estrutura: introduz um novo tipo de dados

`embed:assets/0006-decl.c`

- Declaração de variável: declara variável como estrutura

`struct ponto centro;`

- Inicialização: `<tipo> <variavel> = { <valores> };`

`struct ponto centro = { 12.3, 5.2 };`
ou
`centro.x = 12.3; centro.y = 5.2;`

### Manipulação de Variáveis

- Manipulação: `<variavel>.<membro> ;`

`embed:assets/0006-man.c`

:::tip
As estruturas permitem incluir outras estruturas.

`embed:assets/0006-struception.c`
:::

:::danger
Estruturas não podem ser comparadas usando
operador de comparação de igualdade

- Para determinar se duas estruturas são iguais, é necessário
  comparar cada campo da estrutura
  :::

## Funções

A funções podem receber e retornar estruturas.

`embed:assets/0006-f.c`

- Função retorna uma cópia da estrutura `res`
- Passagem de argumentos feita por valor
  - Chamada `adicionaPonto(pa, pb)` não altera valores
    de `pa` nem de `pb`.

### Vetores de Estruturas

Permite criar tabelas que guardam estruturas

`embed:assets/0006-vectored.c`

- Inicialização

`embed:assets/0006-hugetip.c`

## Typedef

- `typedef`permite associar um nome a um tipo de dados já existente

- Formato - `typedef <tipo> <nome> {...} "Alcunha";`

`embed:assets/0006-typedef.c`

Para criar as variáveis:
`"Alcunha" <nome da variavel>; ` ou `struct <nome> <nome da variavel> ;`

Existem 2 exemplos dados sobre estas funções que se encontram no slides da aula.
