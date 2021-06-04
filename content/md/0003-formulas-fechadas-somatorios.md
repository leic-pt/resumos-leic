---
title: Fórmulas Fechadas de Somatórios
description: >-
  Números de Stirling; Primeira e Segunda Espécie.
  Aplicações no cálculo da soma fechada de polinómios.
  Método de Horner (Ruffini).
  Derivada de uma Sucessão Aritmética;
  Soma da Sucessão Aritmética como Polinómio Fatorial;
  Polinómios Fatoriais Negativos;
path: /md/formulas-fechadas-somatorios
---

# Fórmulas Fechadas de Somatórios

```toc

```

## Números de Stirling

### Números de Stirling de Primeira Espécie

:::tip[DEFINIÇÃO]

Sabe-se que $n^{\underline{r}} = n(n-1)(n-2)\cdot\cdot\cdot(n-r+1)$. Tem-se então que:

$$
n^{\underline{r}} = \sum_{k=0}^{r} \begin{bmatrix}
r \\
k
\end{bmatrix}n^k
$$

:::

**Ou seja, os números de Stirling de primeira espécie dão-nos os coeficientes da expansão de um polinómio fatorial.**

:::tip[DE NOTAR]

O sinal dos números de Stirling **de primeira espécie** depende da paridade de $n+k$, ou seja, sendo $s(n,k)$ um número de Stirling, tem-se:

$$s(n,k) = (-1)^{n+k}\left|\begin{bmatrix}n \\ k \end{bmatrix}\right|$$

:::

:::details[Exemplo]

É possível relacionar os polinómios usuais com os fatoriais através da primeira espécie, como feito no exemplo seguinte:

$$
\begin{aligned}
n^{\underline{3}} & =n( n-1)( n-2)\\
 & =\left( n^{2} -n\right)( n-2)\\
 & =n^{3} -2n^{2} -n^{2} +2n\\
 & =0n^{0} +2n^{1} +( -3) n^{2} +n^{3}\\
 & =\begin{bmatrix}
3\\
0
\end{bmatrix} n^{0} +\begin{bmatrix}
3\\
1
\end{bmatrix} n^{1} +\begin{bmatrix}
3\\
2
\end{bmatrix} n^{2} +\begin{bmatrix}
3\\
3
\end{bmatrix} n^{3}
\end{aligned}
$$

:::

### Calcular os Números de Stirling de Primeira Espécie

É possível calcular todos os números de Stirling de primeira espécie através da **construção de uma tabela**, de forma
semelhante à construção do Triângulo de Pascal.

Abaixo está a tabela das primeiras 6 linhas.

$$
\begin{array}{ c c c c c c c c }
 &  & 0 & 1 & 2 & 3 & 4 & 5\\
 &  & k^{0} & k^{1} & k^{2} & k^{3} & k^{4} & k^{5}\\
0 & k^{\underline{0}} & 1 & 0 & 0 & 0 & 0 & 0\\
1 & k^{\underline{1}} & 0 & 1 & 0 & 0 & 0 & 0\\
2 & k^{\underline{2}} & 0 & -1 & 1 & 0 & 0 & 0\\
3 & k^{\underline{3}} & 0 & 2 & -3 & 1 & 0 & 0\\
4 & k^{\underline{4}} & 0 & -6 & 11 & -6 & 1 & 0\\
5 & k^{\underline{5}} & 0 & 24 & -50 & 35 & -10 & 1
\end{array}
$$

A diagonal da tabela é composta por $1$. A parte acima dessa diagonal tem sempre o valor $0$,
e muitas vezes nem é representada na tabela.
A coluna mais à esquerda é composta também apenas por $0$, exceto na primeira linha, onde tem um $1$.

Por fim, todos os outros números se **geram através de um algoritmo**, representado abaixo.
Para obter o número ($d$), faz-se a subtração entre o número na linha acima e uma coluna à esquerda ($a$) e
o produto entre o número na linha acima ($b$) e o índice da linha ($c$).  
O número que se pretende calcular no exemplo abaixo é o $d$, que se pode obter em função de $a$, $b$ e $c$.

$$
d = a - bc
$$

$$
\begin{array}{ c c c c c c }
 &  & 0 & 1 & 2 & 3\\
 &  & k^{0} & k^{1} & k^{2} & k^{3}\\
0 & k^{\underline{0}} & 1 & 0 & 0 & 0\\
\textcolor{#C8553D}{\mathbf{c}} & k^{\underline{1}} & \textcolor{#C8553D}{\mathbf{a}} & \textcolor{#C8553D}{\mathbf{b}} & 0 & 0\\
2 & k^{\underline{2}} & 0 & \textcolor{#C8553D}{\mathbf{d}} & 1 & 0\\
3 & k^{\underline{3}} & 0 & 2 & -3 & 1
\end{array}
$$

## Números de Stirling de Segunda Espécie

Os números de Stirling de segunda espécie servem para relacionar polinómios (usuais) com os polinómios fatoriais. São sempre positivos.  
Por exemplo:

$$
\begin{aligned}
n^{3} & =n^{\underline{3}} +3n^{\underline{2}} +n^{\underline{1}}\\
 & =0n^{\underline{0}} +1n^{\underline{1}} +3n^{\underline{2}} +1n^{\underline{3}}\\
 & =\begin{Bmatrix}
3\\
0
\end{Bmatrix} n^{\underline{0}} +\begin{Bmatrix}
3\\
1
\end{Bmatrix} n^{\underline{1}} +\begin{Bmatrix}
3\\
2
\end{Bmatrix} n^{\underline{2}} +\begin{Bmatrix}
3\\
3
\end{Bmatrix} n^{\underline{3}}
\end{aligned}
$$

o que facilita imenso a avaliação da soma de $n^{3}$.

:::tip[DEFINIÇÃO]

$$\sum_{k=0}^{m}n^{p} = \sum_{k=0}^{m}\left( \sum_{k=0}^{p} \begin{Bmatrix}p\\k\end{Bmatrix}n^{\underline{k}}\right) $$

onde $\begin{Bmatrix}m\\k\end{Bmatrix}$ é o número de Stirling de segunda espécie.

:::

### Calcular os Números de Stirling de Segunda Espécie

Tal como com os números de primeira espécie, é possível calcular, através de uma tabela, os números de segunda espécie.

Abaixo está a tabela dos números de Stirling de segunda espécie:

$$
\begin{array}{ c c c c c c c c }
 &  & 0 & 1 & 2 & 3 & 4 & 5\\
 &  & k^{\underline{0}} & k^{\underline{1}} & k^{\underline{2}} & k^{\underline{3}} & k^{\underline{4}} & k^{\underline{5}}\\
0 & k^{0} & 1 & 0 & 0 & 0 & 0 & 0\\
1 & k^{1} & 0 & 1 & 0 & 0 & 0 & 0\\
2 & k^{2} & 0 & 1 & 1 & 0 & 0 & 0\\
3 & k^{3} & 0 & 1 & 3 & 1 & 0 & 0\\
4 & k^{4} & 0 & 1 & 7 & 6 & 1 & 0\\
5 & k^{5} & 0 & 1 & 15 & 25 & 10 & 1
\end{array}
$$

O algoritmo para encontrar um número de Stirling da segunda espécie consiste em multiplicar o que se encontra diretamente acima ($a$) pelo número da coluna ($b$), e somar ao valor que se encontra uma casa à esquerda e acima ($c$).  
Visualmente, e querendo calcular $d$, isto fica:

$$
\begin{array}{ c c c c c c }
 &  & 0 & 1 & \textcolor{#C8553D}{\mathbf{b}} & 3\\
 &  & k^{\underline{0}} & k^{\underline{1}} & k^{\underline{2}} & k^{\underline{3}}\\
0 & k^{0} & 1 & 0 & 0 & 0\\
1 & k^{1} & 0 & 1 & 0 & 0\\
2 & k^{2} & 0 & \textcolor{#C8553D}{\mathbf{c}} & \textcolor{#C8553D}{\mathbf{a}} & 0\\
3 & k^{3} & 0 & 1 & \textcolor{#C8553D}{\mathbf{d}} & 1
\end{array}
$$

### Método de Horner (Ruffini)

Os números de Stirling de segunda espécie também podem ser calculados através do **método de Horner** (Ruffini).  
Para conhecermos a soma fechada de $n^{3}$, divide-se por $n$, $n-1$ e $n-2$:

$$
\begin{array}{ c|c c c c }
 & 1 & 0 & 0 & 0\\
0 & \downarrow  & 0 & 0 & 0\\
\hline
 & 1 & 0 & 0 & \textcolor{#6488A6}{0}
\end{array}\\
\\
\begin{array}{ c|c c c }
 & 1 & 0 & 0\\
1 & \downarrow  & 1 & 1\\
\hline
 & 1 & 1 & \textcolor{#C8553D}{1}
\end{array}\\
\\
\begin{array}{ c|c c }
 & 1 & 1\\
2 & \downarrow  & 2\\
\hline
 & 1 & \textcolor{#F4AC45}{3}
\end{array}\\
\\
n^{3} =n( n-1(( n-2) +3) +\textcolor{#C8553D}{1}) +\textcolor{#6488A6}{0}\\
n^{3} =1n^{\underline{3}} +\textcolor{#F4AC45}{3}n^{\underline{2}} +\textcolor{#C8553D}{1}n^{\underline{1}} +\textcolor{#6488A6}{0}n^{\underline{0}}
$$

Assim, é fácil encontrar a expressão para a soma de qualquer polinomial.

## Derivada de uma Sucessão Aritmética na Forma de Polinómio Fatorial

Tal como já foi [visto anteriormente](./0002-introducao-calculo-finito.md#derivada-do-polinomio-fatorial), sabemos que:

$$
\Delta u_n^{\underline r} = u_n^{\underline{r-1}}\left(u_{n+1}-u_{n-r+1}\right)
$$

Trocando isto agora por uma sucessão aritmética, isto é, $u_n = an+b$, ficamos com:

$$
\begin{aligned}
\Delta (an+b)^{\underline r} &= u_n^{\underline{r-1}}\left(a(n+1)+b-(a(n-r+1)+b)\right)\\
&= a\cdot r\cdot u_n^{\underline{r-1}}
\end{aligned}
$$

Escrevendo em ordem a $(an+b)^{\underline{r}}$

$$
(an+b)^{\underline{r}} = \Delta\frac{1}{a(r+1)}(an+b)^{\underline{r+1}}
$$

:::details[Exemplo 1]

Através desta fórmula é possível achar a soma fechada para expressões do tipo:

$$\sum_{k=0}^{n}(2k+3)^{\underline{2}}$$

$$
\begin{aligned}
\sum ^{n}_{k=0}( 2k+3)^{\underline{2}} & =\sum ^{n}_{k=0} \Delta \frac{(2k+3)^{\underline{3}}}{3\times 2}\\
 & =\left[\frac{( 2k+3)^{\underline{3}}}{6}\right]^{n}_{0}\\
 & =\frac{( 2n+3)( 2n+1)( 2n-1)}{6} -\frac{2\times 0+3}{6}\\
 & =\frac{( 2n+3)( 2n+1)( 2n-1) -3}{6}\\
 & =\frac{( n+1)\left( 4n^{2} +2n-3\right)}{3}
\end{aligned}
$$

:::

:::details[Exemplo 2]

Um comboio de mercadorias viaja durante $5\ h$ à velocidade de $3\ km\ h^{-1}$; três comboios de mercadorias viajam
durante $7\ h$ à velocidade de $5\ km\ h^{-1}$; cinco comboios de mercadorias viajam $9\ h$ à velocidade de $7\ km\ h^{−1}$; e
assim sucessivamente, até que, finalmente, vinte e um comboios de mercadorias viajam durante $25\ h$ à velocidade
de $23\ km\ h^{−1}$. Qual é a distância total coberta por todos os comboios?

$$
\begin{aligned}
\sum_{k=0}^{n}(2 k+5)^{\underline 3} &=\left[\frac{1}{4 \times 2}(2 k+5)^{\underline 4}\right]_{0}^{n+1} \\
&=\left[\frac{1}{8}(2 k+5)(2 k+3)(2 k+1)(2 k-1)\right]_{0}^{n+1} \\
&=\frac{(2n+7)(2 n+5)(2 n+3)(2 n+1)+15}{8} .
\end{aligned}
$$

Como $n = 10$, a resposta é $40 755\ km$.

:::

## Polinomial Fatorial com Expoente Negativo

:::tip[DEFINIÇÃO]

Define-se um polinomial fatorial com valor negativo $(n^{\underline{-r}})$ como:

$$u_{n}^{\underline{-r}} = \frac{1}{u_{n+1} \cdot \cdot \cdot u_{n+r}}$$

:::

Como mnemónica, escreve-se o último termo no denominador primeiro porque coincide com o expoente fatorial e depois conta-se o número de fatores (existem $r$ fatores).

:::details[Exemplos]

$$u_{n}^{\underline{-2}} = \frac{1}{(n+1)(n+2)}$$

---

$$\frac{1}{(n+2)(n+3)(n+4)} = (n+1)^{\underline{-3}}$$

---

$$\frac{1}{(2n+1)(2n+3)(2n+5)} = \frac{1}{(2(n+1)-1)(2(n+2)-1)(2(n+3)-1)} = (2n-1)^{\underline{-3}}$$

:::

## Somas Fechadas do tipo aⁿ para n Negativo

A [fórmula anteriormente conhecida](./0002-introducao-calculo-finito.md#somas-fechadas-do-tipo-an) para polinómios elevados a fatoriais positivos pode-se prolongar, funcionando da mesma maneira para os de expoente negativo, ou seja:

:::tip[DEFINIÇÃO]

$$\sum_{k=0}^{n-1}k^{\underline{r}} = \left[\frac{k^{\underline{r+1}}}{r+1}\right]_{0}^{n}\quad,\quad r \in \mathbb{Z}\backslash \{-1\}$$

$$\sum_{k=0}^{n-1}u_{k}^{\underline{r}} = \left[\frac{u_{k}^{\underline{r+1}}}{a(r+1)}\right]_{0}^{n}\quad,\quad r \in \mathbb{Z}\backslash \{-1\}\quad,\quad u_k=ak+b$$

:::

:::details[Exemplo]

$$
\begin{aligned}
\sum ^{n}_{k=0}\frac{1}{k^{2} +3k+2} & =\sum ^{n}_{k=0}\frac{1}{( k+1)( k+2)}\\
 & =\sum ^{n}_{k=0} k^{\underline{-2}}\\
 & =\left[\frac{1}{-2+1} k^{\underline{-2+1}}\right]^{n+1}_{0}\\
 & =\left[ -\frac{1}{k+1}\right]^{n+1}_{0}\\
 & =-\left(\frac{1}{n+2} -1\right)\\
 & =\frac{n+1}{n+2}
\end{aligned}
$$

:::

## Derivada do Polinómio Fatorial de Expoente Negativo

:::tip[DEFINIÇÃO]

$$
\Delta n^{\underline{-r}}=-r\cdot n^{\underline{-r-1}}\quad,\quad r>0
$$

:::

:::details[Demonstração]

$$
\begin{aligned}
\Delta n^{\underline{-r}} & =( n+1)^{\underline{-r}} -n^{\underline{-r}}\\
 & =\frac{1}{( n+2) \dotsc ( n+r)( n+r+1)} -\frac{1}{( n+1)( n+2) \dotsc ( n+r)}\\
 & =\frac{1}{( n+2) \dotsc ( n+r)}\left(\frac{1}{n+r+1} -\frac{1}{n+1}\right)\\
 & =\frac{1}{( n+2) \dotsc ( n+r)} \times \frac{( n+1) -( n+r+1)}{( n+1)( n+r+1)}\\
 & =\frac{-r}{( n+1)( n+2) \dotsc ( n+r)( n+r+1)}\\
 & =-r\times n^{\underline{-( r+1)}}\\
 & =-r\times n^{\underline{-r-1}}
\end{aligned}
$$

:::

Podemos também obter a derivada em função do polinómio fatorial, tal como feito anteriormente:

$$
n^{\underline{-r}}=\frac{1}{-r+1} \Delta n^{\underline{-r+1}}\quad,\quad r\ne 1
$$
