---
description: Calendários
---

# Calendários (Cheat Sheet)

[[toc]]

## Calendário

$$
\begin{array}{|c|c|c|}
\hline
Dia da Semana & Letra & Número
\\

\hline
 Domingo & A & 1 \\
\hline
 Segunda-Feira & B & 2 \\
\hline
 Terça-Feira & C & 3 \\
\hline
 Quarta-Feira & D & 4 \\
\hline
 Quinta-Feira & E & 5 \\
\hline
 Sexta-Feira & F & 6 \\
\hline
 Sábado & G & 7 \\
\hline
\end{array}
$$

$$

{
\begin{array}{|c|c|c|c|}
\hline
 JAN & A & JUL & G \\
\hline
 FEV & D & AGO & C \\
\hline
 MAR & D & SET & F \\
\hline
 ABR & G & OUT & A \\
\hline
 MAI & B & NOV & D \\
\hline
 JUN & E & DEZ & F \\
 \hline
\end{array}}
$$

Um ano é Bissexto se é divisível por 4 e não for divisível por 100,\
 a não ser que seja também divisível por 400.

### Calendário Gregoriano

$\mathcal{D}$ = Dia Do Mês

$\mathcal{F}$ = Número do 1º Dia Do Mês

$\mathcal{Y}$ = Ano

$\mathcal{C}$ = 1 + ($\mathcal{D}+ \mathcal{F} -2$)%7

$\mathcal{N}$ = 7 - ($\mathcal{Y} - 1 +  \mathcal{Y}$ % 4 $- \mathcal{Y}$ % 100 + $\mathcal{Y}$ % 400) % 7

Se for Janeiro ou Fevereiro e é Ano Bisssexto:

$\mathcal{W}$ = 1 + ($\mathcal{C} - \mathcal{N} + 6$) % 7

Se não:

$\mathcal{W}$ = 1 + ($\mathcal{C} - \mathcal{N} + 7$) % 7

### Calendário Juliano

$\mathcal{D}$ = Dia Do Mês

$\mathcal{F}$ = Número do 1º Dia Do Mês

$\mathcal{Y}$ = Ano

$\mathcal{C}$ = 1 + ($\mathcal{D}+ \mathcal{F} -2$)%7

$\mathcal{N}$ = 7 - ($\mathcal{Y} + 4 + \mathcal{Y}$ % 4)% 7

Se for Janeiro ou Fevereiro e é Ano Bisssexto:

$\mathcal{W}$ = 1 + ($\mathcal{C} - \mathcal{N} + 6$) % 7

Se não:

$\mathcal{W}$ = 1 + ($\mathcal{C} - \mathcal{N} + 7$) % 7

$$
$$
