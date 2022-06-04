---
title: Calendário - Início
path: /emd/archive/calendario
type: archive
---

# Calendário - Início

```toc

```

## Introdução

### Ano Trópico

O ano trópico corresponde ao período entre duas ocorrências sucessivas do equinócio da Primavera (ou seja, ao período que decorre enquanto a Terra dá uma volta **exata** ao Sol ). 1 ano trópico tem (aproximado aos segundos).

$$
\text{365 dias, 5 horas, 48 minutos e 45 segundos}
$$

Sempre foi interessante aos humanos regular os seus afazeres em função dos astros (devido a períodos de colheitas e outros) pelo que é interessante regular esta informação num calendário. O ano de um calendário deverá então ser o mais próximo possível de um ano trópico.

### Calendário Juliano

- Uma boa aproximação de um ano trópico é $365 + \frac{1}{4}$ dias;
- Cada ano tem 365 dias, com exceção dos anos bissextos que têm 366 dias;
- Os anos bissextos acontecem de 4 em 4 anos.

### Calendário Gregoriano

Calendário usado em Portugal e pela maioria dos países Ocidentais.

- Observa que a diferença entre o ano Juliano e o ano trópico é suficiente para que o primeiro esteja desajustado com os astros ao fim de algumas centenas de anos;

- Propõe uma melhor aproximação: um ano trópico tem $365 + \frac{1}{4} - \frac{1}{100} + \frac{1}{400} = 365 + \frac{97}{400}$ dias;

- Anos de 365 dias e anos bissextos de 366 dias;
- Os anos bissextos acontecem de 4 em 4 anos, mas não de 100 em 100. Contudo, de 400 em 400 temos, novamente, um ano bissexto;
- Em outubro de 1582, foram omitidos 10 dias do calendário.

:::details[Exemplos - Bissexto Gregoriano]

1. Ano 1900 não é bissexto. (1900 % 100 = 0)

---

2. Ano 2000 é bissexto. (2000 % 400 = 0)

:::

## Calcular Dia da Semana

### Número/Letra dominical

O número (ou letra) dominical de um ano, $N$, é o dia do **primeiro** domingo desse ano.  
Abaixo, encontra-se a tabela que associa cada `número dominical` à sua `letra dominical`.

$$
\begin{array}{c|c}
\text{Letra} & \text{Número}\\
\hline
A & 1\\
B & 2\\
C & 3\\
D & 4\\
E & 5\\
F & 6\\
G & 7
\end{array}
$$

Os calendários `Gregoriano` e `Juliano` têm, entre si, uma fórmula diferente para calcular o `número dominical` de um dado ano.
Isto deve-se ao facto de terem anos bissextos diferentes.  
Segue-se a fórmula para cada um destes calendários.

#### Juliano

Para um ano $\lambda_j$, o `número dominical` $N_j$ é dado por:

$$
N_j = 7 - ((\lambda_j + 4)+(\lambda_j \div 4))\%7
$$

Porquê $\lambda_j + 4$? Porque o ano 1 do calendário Juliano começou num sábado (1/1/1 foi um sábado), de forma que o primeiro domingo teve letra B e número dominical 2. Então, o número dominical no geral é dado pelo número dominical no primeiro ano (2) menos o número de regressões (ver nota2) que houve até o ano em consideração:

$$
N_j = 2 - (\lambda_j - 1 + (\lambda \div 4))\%7
$$

que corresponde à fórmula acima.

---

#### Gregoriano

Para um ano $\lambda_g$, o `número dominical` $N_g$ é dado por:

$$
N_g = 7 - ((\lambda_g -1)+(\lambda_g \div 4)-(\lambda_g \div 100)+(\lambda_g \div 400))\%7
$$

Porquê $\lambda_j - 1$? Porque o ano 1 do calendário Gregoriano começou numa segunda-feira (1/1/1 foi uma segunda-feira), de forma que o primeiro domingo teve letra G e número dominical 7. Então, o número dominical no geral é dado pelo número dominical no primeiro ano (7) menos o número de regressões (ver nota2) que houve até o ano em consideração:

$$
N_j = 7 - (\lambda_j - 1 + (\lambda \div 4)-(\lambda_g \div 100)+(\lambda_g \div 400))\%7
$$

que corresponde à fórmula acima. Note-se que isto não conta com os 10 dias que foram omitidos neste calendário. O professor não mencionou este facto pelo que suponho que o facto de o primeiro dia do primeiro ano ter sido uma segunda-feira já seja a contar com este facto.

**NOTA1:** $\%$ representa o resto da divisão e $\div$ a divisão inteira.

**NOTA2:** Todos os anos "normais" (com 365 dias) o número dominical recua em uma unidade. Isto deve-se ao facto que $365 \% 7 = 1$. Nos anos com 366 dias (tanto num calendário como outro) o número dominical recua em duas unidades já que há mais um dia no ano.

---

### Número/Letra Calêndrica

Seja $C$ o `número calêndrico` do dia $d$ do mês $m$,

$$
C = 1 + (R-2)\%7
$$

onde,

$$
R = d + F_m \newline
F_m \rightarrow \text{número calêndrico do 1º dia do mês } m
$$

Na seguinte tabela, encontra-se a `letra calêndrica` do primeiro dia de cada mês ($L_m$).

![Letras calêndricas](./assets/0009-calendAux.png#dark=3)

Passa-se de $L_m$ para $F_m$ com a ajuda da [tabela 1](#numero-letra-dominical).

Recomenda-se a consulta desta tabela durante os testes, já que isso é permitido.  
Contudo, existe um método para calcular $F_m$ **sem consulta**.

:::details[Método sem consulta]

Seja $m$ o mês que queremos calcular, $n_m$ o número desse mês no calendário e $k_m$ o número de dias do mês $m$,

1. Se $m$, **em inglês**, tem vogal no início ou no fim:

$$
F_m = 11 - n_m
$$

---

2. Caso geral,

$$
F_m = (F_{m-1} + k_{m-1})\% 7
$$

Relembrar que $F_{\text{janeiro}} = A.$

**Exemplos:** <br>

1. Abril ( _April_ ) <br>
   Como o mês em inglês começa com vogal, <br>
   $$F_{\text{abril}}=11-4=7$$
   Podemos verificar na [tabela 2](#numero-letra-calendrica)
   que a `letra calêndrica` do 1º dia de abril é G $\checkmark$.

1. Maio ( _May_ ) <br>
   Como o mês em inglês não começa, nem acaba, em vogal, usamos o método recursivo.

$$F_{\text{maio}}=(F_{\text{abril}} + k_{\text{abril}})\% 7 = (7+30)\% 7 = 2$$

Podemos verificar na [tabela 2](#numero-letra-calendrica) que a `letra calêndrica` do 1º dia de maio é B $\checkmark$.

:::

---

### Cálculo do dia da semana

Seja $W$ o dia da semana de uma certa data de mês $m$ e ano $\lambda$, com `número calêndrico` $C$ e `número dominical` $N$, $W$ é dado por:

Caso $\lambda$ seja bissexto e $m$ janeiro ou fevereiro:

$$
W = 1 + (C-N+6)\% 7
$$

Caso contrário:

$$
W = 1 + (C-N+7)\% 7
$$

Faz sentido, pois janeiro e fevereiro, em anos bissextos, decorrem **antes** do dia extra (29 de fevereiro).

:::details[Exemplo]

1. Queremos determinar o dia da semana de `7 de setembro de 2021`, no Calendário `Gregoriano`.

$$
N = 7 - ((2021 -1)+(2021 \div 4)-(2021 \div 100)+(2021 \div 400))\%7 \\
= 7 - (2020 + 505 - 20 + 5)\% 7 = 7 - 4 = 3
$$

(Usando método sem consulta para calcular $F_{\text{setembro}}$)  
Como setembro (_September_) não começa nem acaba em vogal em inglês, temos de usar o método recursivo para calcular $F_{\text{setembro}}$ <br>
Agosto (_August_), por outro lado, começa com vogal em inglês, logo,

$$
F_{\text{setembro}} = (F_{\text{agosto}} + k_{\text{agosto}})\% 7 = ((11-8) + 31)\% 7 = 6
$$

Logo,

$$
C = 1 + (R-2)\%7  = 1 + ((6+7)-2)\%7 = 1 + 4 = 5
$$

Por fim, como não estamos a calcular uma data de janeiro ou fevereiro num ano bissexto,

$$
W = 1 + (C-N+7)\% 7  = 1 + (5-3+7)\% 7 = 1 + 9\%7 = 3
$$

Podemos concluir que `7 de setembro de 2021` calha a uma **3ªfeira**, no calendário `Gregoriano`.

![Setembro 2021](./assets/0009-setembro7.png#dark=3)

:::
