---
title: Lab 05
description: Enunciado e resolução dos exercícios do Laboratório 5 de IAED
path: /iaed/lab05
type: labsProg
---

# Lab 05

```toc

```

## Exercício 1

_(Tabelas bidimensionais)_ Considere constantes `ALUNOS=10` e `DISCIPLINAS=5`.
Cada aluno é identificado por um número `0..ALUNOS-1` e cada disciplina é identificada por um número `0..DISCIPLINAS-1`.
Implemente um programa que calcule a disciplina mais popular (na média) e o aluno que na média mais gosta de estudar.

O input é dado no standard input da seguinte forma: um número inteiro positivo `N`, e `N` triplos `A D V`,
onde `A` é um número de um aluno, `D` um número de uma disciplina, e `V` um número inteiro entre `-100..100`,
representando o nível de entusiasmo do aluno `A` pela disciplina `D`.
Se uma certa combinação de `A`, `D` não aparece no input, então `V` deve assumir-se com valor `0`.

O resultado deve ser impresso com a disciplina mais popular na primeira linha e o aluno mais entusiástico na segunda linha.
Caso existam duas disciplinas/alunos com o mesmo score, deverá ser impresso o que tiver menor identificador.

Sugestão: Guardar os valores numa matriz `int valores[ALUNOS][DISCIPLINAS]` e implementar
funções `long score_disciplina(int disciplina, int valores[ALUNOS][DISCIPLINAS])` e
`long score_aluno(int aluno, int valores[ALUNOS][DISCIPLINAS])`.

:::details[Resolução]
<code-group>
<code-block
title="Diogo Correia">
<<< @/src/iaed/labs/lab05/ex01_dc.c
</code-block>

</code-group>
:::

## Exercício 2

_(Números complexos - estruturas)_ Implemente um programa que leia dois números complexos e imprima a soma deles.
Os números devem ser lidos no formato `x+yi` (ex: `5+3i`).
Os números do tipo float devem ser impressos usando "%.2f".

Sugestão: Consultar os slides da aula teórica sobre estruturas.

:::warning
Atenção aos números com parte imaginária negativa (e.g. `5-3i`).  
Por alguma razão, o Mooshak não tem `\n` no final do output deste teste.
:::

:::details[Resolução]
<code-group>
<code-block
title="Diogo Correia">
<<< @/src/iaed/labs/lab05/ex02_dc.c
</code-block>

</code-group>
:::

## Exercício 3

_(Portfólio financeiro - estruturas)_ Considere uma estrutura representando um título financeiro (`Stock`) composta
por um nome (máximo 10 caracteres sem espaços), valor (float), e percentagem de rendimento anual (float).
Implemente um programa que leia uma sequencia de títulos e imprima o título com o maior rendimento.

O input é dado no standard input da seguinte forma: um número inteiro positivo `N`, e `N` triplos `Nome Valor Taxa`.
O título deve ser impresso numa única linha em que os atributos do título são separados por espaços e
os números do tipo float são impressos usando `"%.2f"`.
Pode assumir que o portfólio não tem mais do que 1000 títulos, e que não é vazio.

:::details[Resolução]
<code-group>
<code-block
title="Diogo Correia">
<<< @/src/iaed/labs/lab05/ex03_dc.c
</code-block>

</code-group>
:::

## Exercício 4

_(Tabelas bidimensionais - jogo do galo)_ Considere um tabuleiro de jogo do galo de tamanho `DxD`, `D<=MAXDIM`, com `MAXDIM=100`.
Um jogador ganha se prencher 3 em linha, diagonal ou coluna.
Implemente um programa que decida qual dos dois jogadores ganhou.

O input é dado no standard input da seguinte forma:
um número inteiro positivo `D` - a dimensão do tabuleiro,
um número inteiro positivo `N` - o número de entradas preenchidas,
e `N` triplos `H V C`, onde `H` é a coordenada horizontal, `V` a coordenada vertical, com `H` e `V` números inteiros no intervalo `0..D-1`,
e `C` o carácter `'x'` ou `'o'`.

O programa deve imprimir o carácter `'x'` se ganhou o jogador `'x'`, o carácter `'o'` se ganhou o jogador `'o'`, ou o carácter `'?'` se os jogadores empataram.

:::tip[Sugestão]
Guarde o tabuleiro numa matriz `char tab[MAXDIM][MAXDIM]` e implemente a função `int ganha(int dim, char tab[MAXDIM][MAXDIM], char jogador)`
que devolve 1 se jogador ganha, e que devolve 0 no caso contrário.
:::

:::details[Resolução]
<code-group>
<code-block
title="Diogo Correia">
<<< @/src/iaed/labs/lab05/ex04_dc.c
</code-block>
</code-group>
:::
