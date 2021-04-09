---
description: Fórmulas;  Números de Stirling ; Método das Pertubações; Indução Matemática;
---

# Cálculo Finito (Cheat Sheet)

[[toc]]

## Fórmulas

### Derivada de 1 Sucessão

$$
(u_{n})' = \Delta u_{n} = u_{n+1}-u_{n}
$$

### Teorema Fundamental do Cálculo Finito

$$\sum_{k=0}^{n-1} \Delta u_{k} = [u_{n}]_{0}^{n}$$

### Somas fechadas do tipo aⁿ

$$\sum_{k=0}^{n-1} a^{k} =\frac{[a^k]^n_0}{a-1} = \frac{a^n-1}{a -1} \quad, \quad a\ne 0,1 $$

### Polinómios Fatoriais

$$
n^{\underline{3}} = n(n-1)(n-2)
$$

$$
(n+1)^{\underline{-3}} = \frac{1}{(n+2)(n+3)(n+4)}
$$

### Derivada de uma Sucessão Aritmética na Forma de Polinómio Fatorial

$$
(an+b)^{\underline{r}} = \frac{\Delta(an+b)^{\underline{r+1}}}{a(r+1)}
$$

### Série Harmónica

$$H_n = \sum_{k=1}^{n}\frac{1}{k}$$

### Fórmula de Abel

$$\sum_{k=0}^{\textbf{n-1}}u_k\Delta v_k = [u_kv_k]_0^\textbf{n} - \sum_{k=0}^{n-1}v_{k+1}\Delta u_k$$

### Diferença Finita do Quociente

$$
\frac{(\Delta u_n)v_n -u_n\Delta v_n}{v_nv_{n+1}}
$$

## Números de Stirling

### Números de Stirling de 1ª Espécie

Calcular os números de Stirling de 1ª espécie:

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

### Números de Stirling de 2ª Espécie

Calcular os números de Stirling de 2ª espécie:

$$
d = c + ab
$$

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

## Método das Pertubações

### Perturbação Direta

$$
S_{n+1} = \sum^{n+1}_{k=0} 2^k = \sum^n_{k=0} 2^k + 2^{n+1} = S_n + 2^{n+1}
$$

$$
S_{n+1} =\sum ^{n+1}_{k=0} 2^{k} =2^{0} +\sum ^{n+1}_{k=1} 2^{k} =1+\sum ^{n}_{k=0} 2^{k+1} =1+\sum ^{n}_{k=0}\left( 2^{k} \times 2\right) =\\
=1+2\sum ^{n}_{k=0} 2^{k} =1+2S_{n}
$$

### Perturbação Indireta

Fazer a Perturbação Direta mas dentro do Somatório multiplicar a expressão por k .

Para calcularmos o valor de $\displaystyle \sum^n_{k=0}k$

calculamos o valor de $\displaystyle \sum^n_{k=0}k^2$

## Indução Matemática

- Que $P(0)$ é verdadeiro;
- $\forall_{n \in \mathbb N} \ (P(n) \text{ é verdadeiro}\implies P(n+1) \text{  é verdadeiro })$

### Tipos de indução

Definição de **indução simples:**

> Se $P(m), P(m+1), P(m+2),\dots ( m \in \mathbb N)$ é uma sequência infinita de enunciados tal que:

- $P(m)$ é verdadeiro;
- $\forall_{n \in \mathbb N}$ $(P(n)$ é verdadeiro $\longrightarrow P(n+1)$ é verdadeiro$)$;

Definição de **indução completa:**

> Se $P(m), P(m+1), \dots$ são enunciados, então se:

- $P(m), P(m+1), \dots$ são verdadeiros;
- $\forall_{n \in \mathbb N}, P(m), \dots, P(m+ \gamma), P(m+\gamma+1), \dots, P(m+\gamma+n) \longrightarrow P(m+\gamma+n+1)$;

então $\forall_{n \in \mathbb N} P(n)$ é verdadeiro.

![To Infinity and Beyond](https://media1.giphy.com/media/3oEjHH6uarNnFSIEWQ/source.gif)
