---
description: Fórmulas; Teoremas; Combinatória. Cheat Sheet de Funções Geradoras
---

# Funções Geradoras (Cheat Sheet)

[[toc]]

## Fórmulas

### Funções Geradoras mais Comuns

$$U(z) = \sum_{k=0}^{+\infty}u_kz^k$$

$$ 1,1,1,1,1,...= 1+z+z^2+...+z^n = G(z) = \frac {1}{1-z} = U(n) = 1 $$

$$0, 1, 2, 3, ... =1z+2z^2+3z^3...+nz^n = G(z) = \frac {z}{(1-z)^2} = U(n) = n + 1 $$

$$1,0,1,0,1+.... = 1+z^2+z^4+...+z^{2n} =G(z) = \frac {1}{1-z^2}$$

$$1,0,0,2,0,0,3,0,0,4,... = 1 + 2z^3+ 3z^6+ ... =  G(z) = \frac {1}{(1-z^3)^2}$$

$$u_n=a^n\implies v(z)_{u_n}=\frac 1 {1-az}$$\\

$$\frac 1 {(1-\lambda z)^m} = \sum_{k=0}^{+\infty} {k+m-1 \choose m-1}\lambda^kz^k $$\\

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

## Resolução de Recorrências (TO DO)

- [Resolução (2.2.1 e 2.2.2) (José Félix)](https://drive.google.com/file/d/16V6DPs1HJi8Msfg3vw2XGKMpB-iC-zar/view?usp=sharing)

P.S. Devs implementem uma built-in calculadora de Combinatória sfv.

![P.P.S It ain´t Much but it's Honest Work 👨‍🌾](https://i.imgur.com/jLQT7e1.jpg)
