---
prev: false
description: Programa de Hello World e Fibonacci. Diferenças entre Python e C.
---

# Introdução à Programação em C

## hello, world

<<< @/src/iaed/assets/0001-hello-world.c

**Todos os programas têm uma função `main`.**
Esta é a primeira função a ser executada no programa.

Podemos definir outras funções.

A função `main` retorna um inteiro (`int`), correspondente ao _exit code_ do programa.  
Neste caso, `0` significa que o programa acabou com sucesso e sem nenhum erro.  
Qualquer número diferente de zero indica erro.

::: warning
As funções (e variáveis) em Python não têm um tipo específico.
É possível ter uma função que umas vezes retorna uma string e outras retorna um inteiro.

Por outro lado, C é uma linguagem tipificada, isto é, cada variável/função tem um tipo associado.
Não é possível alterar o tipo de uma variável/função durante a execução do programa.
:::

## Fibonacci

<<< @/src/iaed/assets/0001-fibo.c

O tipo de dados `int` em C representa um inteiro de 32 bits.  
O tipo `long long int` já permite guardar mais do que 64 bits.

Slides:

- [Aula 1](https://drive.google.com/file/d/1puIqalY73XaG7XlAsSYQEG6Zg6ZylJAV/view?usp=sharing)
