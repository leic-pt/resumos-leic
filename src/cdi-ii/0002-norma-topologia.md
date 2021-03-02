---
description: Norma, Distância, Bola, Topologia em R^n (pontos interiores, exteriores, da fronteira e aderentes)
---

# Norma. Topologia em Rⁿ

[[toc]]

## Diferença entre pontos e vetores

Em $dim > 1$, convém distinguir pontos de vetores.
Podemos pensar em vetores como **diferenças entre pontos**.
Por exemplo:

$$
P=( x,y,z) \quad Q=( x',y',z')\\
\vec{v} =Q-P=( x'-x,y'-y,z'-z)
$$

::: tip
Se tivermos um ponto $P$, também podemos pensar nele como um vetor, fazendo a diferença desse ponto com a origem.

$$
\vec{v} =P-O=(x-0,y-0,z-0)=(x,y,z)
$$

:::

## Funções escalares e Funções vetoriais

**Função escalar:** O seu contra domínio é um valor unidimensional ($\subset \R$)

::: details Exemplos

$$
\begin{array}{ c }
 \begin{array}{l}
h:\mathbb{R}^{2} \longrightarrow \mathbb{R}\\
h( x,y) =x^{2} -2x+1+y^{2}
\end{array}\\
\\
j(x,y)=\sqrt{h(x,y)} =\sqrt{(x-1)^{2} +(y-0)^{2}}
\end{array}
$$

:::

**Função vetorial:** O seu contra domínio é um vetor de dimensão igual ou superior a 2 ($\subset \R^N, N>1$)  
Uma função vetorial é do tipo $F:\ D\ \subseteq \mathbb{R}^{n} \longrightarrow \mathbb{R}^{m}$ com $m>1$.
Se $m=1$, a função é escalar. O valor de $n$ é qualquer (pode ser 1, por exemplo), só interessa o contra domínio.

::: details Exemplo

$$
\vec F(x,y)=\left(h(x,y), j(x,y)\right)
$$

O gráfico de esta função teria 4 dimensões (2 do domínio + 2 do contra domínio)-

:::

## Norma

Anteriormente, foi definido a [distância entre dois pontos](./0001-transicao-para-dim-sup-1#Distância).

Podemos agora extender esta notação/terminologia para vetores, através da definição (muito semelhante) de **norma**.
A norma consiste em medir comprimento de vetores. Caso o vetor não esteja na origem, basta fazer a sua "translação" para a origem.

$$
x=(x_1,x_2,\dotsc,x_n)\\
||x|| = \sqrt{x_1^2+x_2^2+\dotsc +x_N^2}\\

\text{ou mais rigorosamente,}\\

\begin{array}{ c r c l }
||\dotsc ||: & \mathbb{R}^{n} & \longrightarrow  & \mathbb{R}^{+}_{0}\\
 & \vec{v} =( v_{1} ,\dotsc ,v_{N}) & \longrightarrow  & \sqrt{v^{2}_{1} +v^{2}_{2} +\dotsc +v^{2}_{N}}
\end{array}
$$

### Propriedades da Norma

1. $||x|| >= 0$ (é sempre positiva)

2. Multiplicação por um escalar: $||\lambda x|| = |\lambda |\cdot ||x||$[^mult-escalar]

3. Desigualdade Triangular: $||x+y|| \leqslant ||x||+||y||$

[^mult-escalar]:
    $$
    \begin{aligned}
    ||\lambda x|| & =||( \lambda x_{1} ,\lambda x_{2} ,\dotsc ,\lambda x_{N}) ||=\sqrt{( \lambda x_{1})^{2} +\dotsc +( \lambda x_{N})^{2}} =\sqrt{\lambda ^{2}\left( x^{2}_{1} +\dotsc +x^{2}_{N}\right)}\\
    & =\sqrt{\lambda ^{2}}\sqrt{x^{2}_{1} +\dotsc +x^{2}_{N}} =|\lambda |\cdot ||x||
    \end{aligned}
    $$

## Produto interno

Sendo $x,y\in \R^n$, o produto interno entre estes dois vetores está definido por:

$$
x\cdot y = x_1 y_1 + x_2 y_2 + \dotsc + x_n y_n
$$

Assim, encontra-se uma **relação entre a norma e o produto interno**: $||x|| = \sqrt{x^2_1+x^2_2+\dotsc+x^2_n}=\sqrt{x\cdot x}$

## Distâncias centradas num ponto

Em $\R$, dado $a\in\R, r\in \R^+$, tem-se:

$$
V_a(r)=\{x\in\R:|x-a|<r\}
$$

### Bola

Em duas ou mais dimensões, dá-se o nome de **bola de centro $a$ e raio $r$** ao conjunto de pontos
que estão a uma distância inferior a $r$ de um ponto $a$,

Em $\R^2$, dado $a = (a_1,a_2)\in \R^2, r\in\R^+$, tem-se:

$$
B_a(r)=\{(x,y)\in\R^2: ||(x,y)-(a_1,a_2)||<r\}
$$

Em $\R^3$, dado $a = (a_1,a_2,a_3)\in \R^3, r\in\R^+$, tem-se:

$$
B_a(r)=\{x\in\R^3: ||x-a||<r\}
$$

::: tip Caso Geral

Em $\R^N$, dado $a = (a_1,a_2,\dotsc, a_n)\in \R^N, r\in\R^+$, tem-se:

$$
B_a(r)=\{x\in\R^N: ||x-a||<r\}
$$

:::

## Topologia em Rⁿ

::: warning

Página em construção :cry:

:::
