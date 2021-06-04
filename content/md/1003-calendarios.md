---
title: Calendários (Cheat Sheet)
description: Calendário. Calendário Gregoriano. Calendário Juliano.
path: /md/cheatsheet/calendarios
---

# Calendários (Cheat Sheet)

```toc

```

:::danger
Tenham EXTREMA atenção aos símbolos de divisão que se encontram nos resumos

`/` ou `÷` - significa a divisão inteira sempre arrendonda para baixo

`%` - significa a divisão pelo `mod`

:::

## Calendário

$$
\begin{array}{|c|c|c|}
\hline
\text{Dia da Semana} & \text{Letra} & \text{Número}
\\

\hline
 \text{Domingo} & A & 1 \\
\hline
 \text{Segunda-Feira} & B & 2 \\
\hline
 \text{Terça-Feira} & C & 3 \\
\hline
 \text{Quarta-Feira} & D & 4 \\
\hline
 \text{Quinta-Feira} & E & 5 \\
\hline
 \text{Sexta-Feira} & F & 6 \\
\hline
 \text{Sábado} & G & 7 \\
\hline
\end{array}
$$

$$

{
\begin{array}{|c|c|c|c|}
\hline
 \text{JAN} & A & \text{JUL} & G \\
\hline
 \text{FEV} & D & \text{AGO} & C \\
\hline
 \text{MAR} & D & \text{SET} & F \\
\hline
 \text{ABR} & G & \text{OUT} & A \\
\hline
 \text{MAI} & B & \text{NOV} & D \\
\hline
 \text{JUN} & E & \text{DEZ} & F \\
 \hline
\end{array}}
$$

Um ano é Bissexto se é divisível por 4 e não for divisível por 100,\
 a não ser que seja também divisível por 400 (Só se aplica para o Calendário Gregoriano)

:::details[At Dover Dwell George Brown Esquire, Good Christopher Finch And David Friar]
![completo](./imgs/1003-calendario.jpeg#dark=1)
:::

## Calendário Gregoriano (Calendário usado por Todos Nós)

### Dia da Semana

$\mathcal{D}$ = Dia Do Mês

$\mathcal{F}$ = Número do 1º Dia Do Mês (Tabela no início do Resumo)

$\mathcal{Y}$ = Ano

:::details[Gregoriano]
![gregoriano](./imgs/1003-gregoriano.jpeg#dark=1)
:::

$\mathcal{C} = 1 + (\mathcal{D}+ \mathcal{F} -2)$ % 7 (corresponde ao **número calêndrico**)

$\mathcal{N} = 7 - (\mathcal{Y} - 1 +  \mathcal{Y} / 4 - \mathcal{Y} / 100 + \mathcal{Y} / 400)$ % 7 (corresponde ao **número dominical**)

Se for Janeiro ou Fevereiro e é Ano Bissexto:

$\mathcal{W} = 1 + (\mathcal{C} - \mathcal{N} + 6)$ % 7

Se não:

$\mathcal{W} = 1 + (\mathcal{C} - \mathcal{N} + 7)$ % 7

Aqui, $\mathcal{W}$ corresponde ao **dia da semana**.

### Dia da Páscoa

${Y}$ = Ano

:::details[Gregoriano]
![pascoa_gregoriano](./imgs/1003-pascoag.jpeg#dark=1)
:::

${S} = {Y}$ / 100 (corresponde ao **"século - 1"**)

${G} = 1 + {Y}$ % 19 (corresponde ao **número de ouro do calendário**)

${E} = (57 + 11G - S + \lfloor{\frac {S} {4}}\rfloor + \lfloor{\frac {S - \lfloor{\frac {S - 17} {25}}\rfloor} {3}}\rfloor)$ % 30 (corresponde à **epacta**)

${V} = (E / 24 - E / 25) + (G / 12) * (E / 25 - E / 26)$ (corresponde à **correção de Clavius**)

(talvez saia na pergunta teórica) - A Epacta Final corresponde a somar a epacta à correção de Clavius.

${R} = 20 + (54 - ({E}+ V))$ % 30 (corresponde ao **dia da Lua Cheia Pascal**)

${C} = 1 + ({R} + 2)$ % 7 (corresponde ao **dia calêndrico da Lua Cheia Pascal**)

${N} = 7 - ({Y} - 1 +  {Y} / 4 - {Y} / 100 +  {Y} / 400 )$ % 7 (corresponde ao **Número Dominical**)

Se ${C} < {N}$

${S} = {R} + {N} - {C}$

Se não

${S} = {R} + 7 - ({C} - {N})$ % 7

Dia da páscoa = dia 1 de março + S

## Calendário Juliano

### Dia da Semana

$\mathcal{D}$ = Dia Do Mês

$\mathcal{F}$ = Número do 1º Dia Do Mês (Tabela no início do Resumo)

$\mathcal{Y}$ = Ano

:::details[Juliano]
![julaino](./imgs/1003-juliano.jpeg#dark=1)
:::

$\mathcal{C} = 1 + (\mathcal{D}+ \mathcal{F} -2)$ % 7 (corresponde ao **número calêndrico**)

$\mathcal{N} = 7 - (\mathcal{Y} + 4 + \mathcal{Y}$ / 4 $)$ % 7 (corresponde ao **número dominical**)

Se for Janeiro ou Fevereiro e é Ano Bissexto:

$\mathcal{W} = 1 + (\mathcal{C} - \mathcal{N} + 6)$ % 7

Se não:

$\mathcal{W} = 1 + (\mathcal{C} - \mathcal{N} + 7)$ % 7

Aqui, $\mathcal{W}$ corresponde ao **dia da semana**.

### Dia da Páscoa

${Y}$ = Ano

:::details[Juliano]
![pascoa_julaino](./imgs/1003-pascoaj.jpeg#dark=1)
:::

${G} = 1 + {Y}$ % 19 (corresponde ao **número de ouro do calendário**)

${E} = (11 {G} - 3)$ % 30 (corresponde à **epacta**)

${D} = 20 + (54 - {E})$ % 30 (corresponde ao **dia da Lua Cheia Pascal**)

${C} = 1 + ({D} + 2)$ % 7 (corresponde ao **dia calêndrico da Lua Cheia Pascal**)

${N} = 7 - ({Y} - 4 + {Y} / 4)$ % 7 (corresponde ao **Número Dominical**)

Se ${C} < {N}$

${S} = {D} + {N} - {C}$

Se não

${S} = {D} + 7 - ({C} - {N})$ % 7

Dia da páscoa = dia 1 de março + S

![desISTo](./imgs/1003-cal.jpg#dark=1)
