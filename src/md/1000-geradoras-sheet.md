---
description: Funções Geradoras, Exemplos.
---

# Funções Geradoras

$$U(z) = \sum_{k=0}^{+\infty}u_kz^k$$

$$1+z+z^2+...+z^n = G(z) = \frac {1}{1-z}$$

$$1z+2z^2+3z^3...+nz^n = G(z) = \frac {z}{(1-z)^2}$$

$$1+0+1+0+1+.... = G(z) = \frac {1}{1-z^2}$$

$$1+0+0+2+0+0+3+0+0+4+... = G(z) = \frac {1}{(1-z^3)^2}$$

$$\frac 1 {(1-\lambda z)^m} = \sum_{k=0}^{+\infty} {k+m-1 \choose m-1}\lambda^kz^k $$\\

l = valor da soma \
n = número de incógnitas\
x = incógnitas

$$
\text{Sem Restrições }\\
$$

$$ x_1+x_2+...+x_n = l = {l+n-1 \choose n-1} $$\\

$$
\text{Sem Restrições }\\
$$

$$ x_1+x_2+...+x_n <= l = {l+n \choose n} $$\\

$$
\text{Para restrições onde } x_i >= l_i :
$$

$$ x_1+x_2+...+x_n = l = {l - (l_1 +l_2 +...+l_n)+ n - 1 \choose n - 1} $$

- [Resolução (2.2.1 e 2.2.2) (José Félix)](https://drive.google.com/file/d/16V6DPs1HJi8Msfg3vw2XGKMpB-iC-zar/view?usp=sharing)

P.S. Devs implementem uma built-in calculadora de Combinatória
