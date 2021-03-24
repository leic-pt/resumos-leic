---
prev: false
description: Definição. Passagem de Parâmetros
---

# Estruturas

[[toc]]

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

<<< @/src/iaed/assets/0006-def.c

### Declaração de Variáveis

- Definição da estrutura: introduz um novo tipo de dados

<<< @/src/iaed/assets/0006-decl.c

- Declaração de variável: declara variável como estrutura

`struct ponto centro;`

- Inicialização: `<tipo> <variavel> = { <valores> };`

`struct ponto centro = { 12.3, 5.2 };`
ou
`centro.x = 12.3; centro.y = 5.2;`

### Manipulação de Variáveis

- Manipulação: `<variavel>.<membro> };`

<<< @/src/iaed/assets/0006-man.c

::: tip
As estruturas permitem incluir outras estruturas

<<< @/src/iaed/assets/0006-struception.c
:::

::: danger
Estruturas não podem ser comparadas usando
operador de comparação de igualdade

- Para determinar se duas estruturas são iguais, é necessário
  comparar cada campo da estrutura
  :::

## Funções

A funções podem receber e retornar estruturas.

<<< @/src/iaed/assets/0006-f.c

- Função retorna uma cópia da estrutura `res`
- Passagem de argumentos feita por valor
  - Chamada `adicionaPonto(pa, pb)` não altera valores
    de `pa` nem de `pb`.

### Vetores de Estruturas

Permite criar tabelas que guardam estruturas

<<< @/src/iaed/assets/0006-vectored.c

- Inicialização

<<< @/src/iaed/assets/0006-hugetip.c

## Typedef

- `typedef`permite associar um nome a um tipo de dados já existente

- Formato - `typedef <tipo> <nome> ;`

<<< @/src/iaed/assets/0006-typedef.c

Vamos implementar uma função que soma complexos.

## Passagem de Parâmetros

### Passagem por Valor e Passagem por Referência

- Argumentos são copiados para variáveis temporárias
  quando função é executada
- Função não tem acesso aos argumentos (só às cópias)
- Não os pode alterar

  ::: warning Atenção
  Se o argumento for uma tabela, não é
  efectuada a cópia da tabela.

  Se a função alterar o conteúdo da tabela, estas alterações preservam-se.
  :::

  <<< @/src/iaed/assets/0005-loc.c

::: tip Conversão do Tipo de 1 Variável
Para fazer uma divisão entre inteiros, por vezes a parte inteira não chega.
Assim convertemos o divisor para outro tipo de dados (`float`) para que a assim a divisão mostre casas decimais.
`media = soma / (float) num_alunos ;`
:::

### Copiar Tabelas

Para copiar uma tabela, temos de copiar elemento a elemento.

<<< @/src/iaed/assets/0005-copia.c

Slides:

- [Aula 5](https://drive.google.com/file/d/1p2wguxSNAtxRTz8PGN_V-FVC3lbcQ6Go/view?usp=sharing)
