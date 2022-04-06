---
title: Introdução à Programação em C
prev: false
description: Programa de Hello World e Fibonacci. Diferenças entre Python e C.
path: /iaed/introducao-programacao-c
type: content
---

# Introdução à Programação em C

## hello, world

`embed:assets/0001-hello-world.c`

**Todos os programas têm uma função `main`.**
Esta é a primeira função a ser executada no programa.

Podemos, claro, definir outras funções.

A função `main` retorna um inteiro, `int`, correspondente ao _exit code_ do programa.  
Neste caso, `0` significa que o programa acabou com sucesso e sem nenhum erro: uma função `main` **só retornar um número diferente de zero** caso haja erros.

:::warning[]
As funções (e variáveis) em Python não têm um tipo específico.
É possível ter uma função que umas vezes retorna uma string e outras retorna um inteiro.

Por outro lado, C é uma linguagem tipificada, isto é, cada variável/função tem um tipo associado.
Não é possível alterar o tipo de uma variável/função durante a execução do programa.
:::

:::danger[]
Como nota introdutória à linguagem, é importante realçar que apesar de a identação em C poder ser ignorada (ao contrário de Python, onde é obrigatória), **devemos continuar a usá-la**, de modo a facilitar a leitura do programa. **Os nossos programas vão ser lidos por alguém**, e devemos escrever o nosso código de forma a que essa pessoa não encontre dificuldades a lê-los.
:::

## Fibonacci

`embed:assets/0001-fibo.c`

O tipo de dados `int` em C representa um inteiro de 32 bits. O tipo `long long int` já permite guardar mais do que 64 bits. Vamos deparar-nos ao longo da UC (e noutras ocasiões) com casos em que um `int` normal não basta - aplicações bancárias, por exemplo, requerem uma enorme precisão e capacidade para trabalhar com inteiros (e não só) muito grandes, pelo que `int` não é adequado.
