---
description: Números de Stirling; Primeira e segunda espécie. Aplicações no cálculo da soma fechada de polinómios. Método de Horner (Ruffini).
---

# Fórmulas Fechadas de Somatórios

[[toc]]

## Números de Stirling

### Números de Stirling de Primeira Espécie

::: tip DEFINIÇÃO

Sabe-se que $n^{\underline{r}} = n(n-1)(n-2)\cdot\cdot\cdot(n-r+1)$. Tem-se então que:

$$
n^{\underline{r}} = \sum_{k=0}^{n} \begin{bmatrix}
n \\
k
\end{bmatrix}x^k
$$

:::

**Ou seja, os números de Stirling de primeira espécie dão-nos os coeficientes da expansão de um polinómio fatorial.**

::: tip DE NOTAR

O sinal dos números de Stirling **de primeira espécie** depende da paridade de $n+k$, ou seja, sendo $s(n,k)$ um número de Stirling, tem-se:

$$s(n,k) = (-1)^{n+k}\begin{bmatrix}n \\ k \end{bmatrix}$$

:::

::: details Exemplo

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
\mathbf{c} & k^{\underline{1}} & \mathbf{a} & \mathbf{b} & 0 & 0\\
2 & k^{\underline{2}} & 0 & \mathbf{d} & 1 & 0\\
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

::: tip DEFINIÇÃO

$$\sum_{k=0}^{m}n^{p} = \sum_{k=0}^{m}\left( \sum_{k=0}^{m} \begin{Bmatrix}m\\k\end{Bmatrix}n^{\underline{k}}\right) $$

onde $\begin{Bmatrix}m\\k\end{Bmatrix}$ é o número de Stirling de segunda espécie.

:::

# Calcular os Números de Stirling de Segunda Espécie

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
 &  & 0 & 1 & \mathbf{b} & 3\\
 &  & k^{\underline{0}} & k^{\underline{1}} & k^{\underline{2}} & k^{\underline{3}}\\
0 & k^{0} & 1 & 0 & 0 & 0\\
1 & k^{1} & 0 & 1 & 0 & 0\\
2 & k^{2} & 0 & \mathbf{c} & \mathbf{a} & 0\\
3 & k^{3} & 0 & 1 & \mathbf{d} & 1
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
