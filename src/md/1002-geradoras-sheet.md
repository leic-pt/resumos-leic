---
description: Fórmulas; Teoremas; Combinatória. Cheat Sheet de Funções Geradoras
---

# Funções Geradoras (Cheat Sheet)

[[toc]]

## Fórmulas

### Funções Geradoras mais Comuns

$$U(z) = \sum_{k=0}^{+\infty}u_kz^k$$

|                Sucessão                |             Polinómio $U(z)$              |           Geradora $G(z)$           | Termo Geral $u_k$ |
| :------------------------------------: | :---------------------------------------: | :---------------------------------: | :---------------: |
|           $1,1,1,1,1,\dots$            |             $1+z+z^2+...+z^n$             |    $\displaystyle\frac{1}{1-z}$     |        $1$        |
|           $1,2,3,4,5,\dots$            |  $1+2z+3z^2+\dots+\allowbreak{(n+1)z^n}$  |  $\displaystyle\frac{1}{(1-z)^2}$   |      $k + 1$      |
|           $0,1,2,3,4,\dots$            | $0+1z+2z^2+\dots+\allowbreak{n\cdot z^n}$ |  $\displaystyle\frac{z}{(1-z)^2}$   |        $k$        |
|           $1,0,1,0,1,\dots$            |         $1+z^2+z^4+\dots+z^{2n}$          |   $\displaystyle\frac{1}{1-z^2}$    |   $1$ de 2 em 2   |
| $1,0,0,2,0,0,\allowbreak3,0,0,4,\dots$ |            $1+2z^3+3z^6+\dots$            | $\displaystyle\frac {1}{(1-z^3)^2}$ |   $k$ de 3 em 3   |
|        $1,a,a^2,a^3,a^4,\dots$         |        $1+az+a^2z^2+a^3z^3+\dots$         |    $\displaystyle\frac{1}{1-az}$    |       $a^k$       |
|        $1,1,1,1,0,0,0,0,\dots$         |               $1+z+z^2+z^3$               |  $\displaystyle\frac{1-z^4}{1-z}$   |   $1$ até $k=3$   |

$$\frac 1 {(1-\lambda z^p)^m} = \sum_{k=0}^{+\infty} {k+m-1 \choose m-1}\lambda^kz^{pk} $$\\

## Teoremas

Teorema do Sudoeste do Triângulo de Pascal

$$
\text{Para todo o } n, m \in \N \text{ tem-se:}
\sum_{k=0}^{n} {k+m \choose m} = {n+m+1 \choose m+1}
$$

Soma dos primeiros termos de uma sucessão

$$
S(z)=\frac{U(z)}{1-z}
$$

Teorema 3 (Alguém que dê nome a isto)

$$\frac 1 {(1-\lambda z)^m} = \sum_{k=0}^{+\infty} {k+m-1 \choose m-1}\lambda^kz^k $$\\

## Combinatória

l = valor da soma \
n = número de incógnitas\
x = incógnitas

### Sem Restrições

$$ x_1+x_2+...+x_n = l \Leftrightarrow {l+n-1 \choose n-1} $$\\

$$ x_1+x_2+...+x_n \leqslant l \Leftrightarrow {l+n \choose n} $$\\

### Restrições

$$
\text{Para restrições onde } x_i \geqslant l_i \\ \text{Se } x_1 \geqslant 2 ,\text{ então } l_1 = 2\\
\text{Se } x_1 \geqslant 4 ,\text{ então } l_1 = 4
$$

$$ x_1+x_2+...+x_n = l \Leftrightarrow {l - (l_1 +l_2 +...+l_n)+ n - 1 \choose n - 1} $$

## Resolução de Recorrências

Para $h_0 = 1$ e $h_1 = 2$

$$
h_n=h_{(n-1)} + 2h_{\color{green}(n-2)}+3^n
$$

$$
{\sum_{k=\color{green}2}^{+\infty}h_kz^k}=z{\sum_{k=\color{green}1}^{+\infty}h_{k-1}z^{k-1}}+ 2z^2{\sum_{k=\color{green}0}^{+\infty}h_{k-1}z^{k-1}}+ {\sum_{k=\color{green}2}^{+\infty}3^kz^k}
$$

$$

H_n - 1 - 2z= z(H_n - 1) + 2z^2H_n + \frac{1}{(1-3z)} - 3^0 - 3z  \\
H_n(1-z-2z^2) = \frac{1}{(1-3z)} - 2z \\
H_n= \frac{1}{(1-3z)(1-z-2z^2)} - \frac{2z}{(1-z-2z^2)}
$$

- [Resolução (2.2.1 e 2.2.2) (José Félix)](https://drive.google.com/file/d/16V6DPs1HJi8Msfg3vw2XGKMpB-iC-zar/view?usp=sharing)

P.S. Devs implementem uma built-in calculadora de Combinatória sfv.

![P.P.S It ain´t Much but it's Honest Work 👨‍🌾](https://i.imgur.com/jLQT7e1.jpg)
