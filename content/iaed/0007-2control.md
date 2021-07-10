---
title: Controlo da Execução
description: Instruções e Blocos. Execução Condicional (if, switch). Ciclos Genéricos (while, for, do-while, continue, break).
path: /iaed/controlo-execucao
type: content
---

# Controlo da Execução

```toc

```

## Instruções e Blocos

### Instrução

- Instrução
- Expressão terminada por `;`
- Caracter `;` denota o fim de uma instrução
- Exemplo: `x = 0; i++; `

### Blocos

- Chavetas, `{ }`, permitem agrupar declarações e instruções
- instruções de uma função
- conjuntos de instruções em `if, for, while`, etc.
- Exemplo:
  `{ int x, i = 1; x = 0; i++; printf("%d %d\n"); }`

## Execução Condicional

### if

- Permite exprimir decisões:

- Se `<expressao1>` tem valor diferente de 0
  então `<instrucao1>` é executada
- Se `<expressao1>` tem valor igual a 0, e `<expressao2>` é diferente de 0
  então `<instrucao2>` é executada

`embed:assets/0007-cond1.c`

### Switch

- Decisão com opções múltiplas; testa se uma expressão
  assume um de um conjunto de valores constantes

`embed:assets/0007-switch.c`

- default é opcional e é executado se a expressão é
  diferente de qualquer dos outros casos

## Ciclos Genéricos

### While

`embed:assets/0007-while.c`

Enquanto `<expressao>` for diferente de zero, a
`<instrucao>` é executada
Ciclo termina quando valor de `<expressao>` for zero

### For

`embed:assets/0007-for.c`

- Expressão de inicialização: `<expr1>`
- Condição de ciclo: `<expr2>`
- Expressão de incremento: `<expr3>`
- Ciclos com inicialização e incremento simples

### Do-while

`embed:assets/0007-do.c`

- Enquanto `<expressao>` for diferente de zero, as
  `<instrucoes>` são executadas
- Ciclo termina quando valor de `<expressao>` for zero
- Note-se que `<instrucoes>` são executadas sempre
  pelo menos uma vez

### Break e Continue

- A instrução `break` permite terminar a execução de um
  `for`, `while`, `do-while` ou `switch`
- A instrução `continue` desencadeia a execução da \
  próxima iteração de um `for`, `while` ou `do-while`
  - Num ciclo `for`, a execução continua com a expressão de
    incremento

Exemplo com algumas das funções dadas:

`embed:assets/0007-ex.c`

Slides:

- [Aula 7](https://drive.google.com/file/d/1Qflt6mId0-75znhCgwscN2v7aLKrStTC/view?usp=sharing)
