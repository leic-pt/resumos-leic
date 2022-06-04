---
title: Introdução ao Cálculo Finito
description: >-
  Introdução ao Cálculo Finito: derivada de uma sucessão, teorema fundamental do cálculo finito, 
  somas fechadas do tipo aⁿ, polinómios fatoriais.
path: /emd/archive/introducao-calculo-finito
type: archive
---

# Introdução ao Cálculo Finito

```toc

```

## Derivada de uma sucessão

Dada uma sucessão $u_{n}$, tem-se que

$$
(u_{n})' = \Delta u_{n} = u_{n+1}-u_{n}
$$

Neste caso, toma-se a definição usual de derivada (razão incremental), mas define-se $h = 1$ sempre.

### Teorema Fundamental do Cálculo Finito

A soma de todas as derivadas desde zero até $n-1$ é igual a $u_{n} - u_{0}$. Assim, tem-se

:::tip[DEFINIÇÃO]

$$
\sum_{k=0}^{n-1} \Delta u_{k} = u_{n} - u_{0}
$$

:::

É de notar que $u_{n} - u_{0} = [u_{n}]_{0}^{n} = u_{n}|_{0}^{n}$ (notação de integral).

:::details[Demonstração]

$$
\Delta u_{0} =u_{1} -u_{0}\\
\Delta u_{1} =u_{2} -u_{1}\\
\Delta u_{2} =u_{3} -u_{2}\\
\Delta u_{3} =u_{4} -u_{3}\\
\vdots \\
\Delta u_{n-2} =u_{n-1} -u_{n-2}\\
\Delta u_{n-1} =u_{n} -u_{n-1}
$$

Somando todos os termos, vemos que quase todos se anulam, ficando assim apenas com duas parcelas:

$$
\begin{aligned}
\sum ^{n-1}_{k=0} \Delta u_{k} & =u_{1} -u_{0} +u_{2} -u_{1} +u_{3} -u_{2} +u_{4} -u_{3} +\dotsc +u_{n-1} -u_{n-2} +u_{n} -u_{n-1}\\
 & =-u_{0} +u_{n} \\
 & =u_{n} -u_{0}
\end{aligned}
$$

:::

Tal como em cálculo diferencial, existe uma sucessão cuja "derivada" é igual à própria sucessão.  
Em calculo finito, esta é a sucessão $u_{n} = 2^{n}$.

:::details[Demonstração]

$$
\begin{aligned}
\Delta 2^k &= 2^{k+1}-2^k\\
& =2^k(2-1)\\
& =2^k
\end{aligned}
$$

:::

## Somas fechadas do tipo aⁿ

Tome-se

$$
\sum_{k=0}^{n-1} 2^{k}
$$

. Sabe-se que $2^{k} = \Delta2^{k}$ logo, tem-se

$$
\sum_{k=0}^{n-1} 2^{k} = \sum_{k=0}^{n-1} \Delta2^{k} = [2^{k}]_{0}^{n} = 2^{n} - 1
$$

e, generalizando, tem-se:

:::tip[DEFINIÇÃO]

$$
\sum_{k=0}^{n-1} a^{k} =\frac{[a^k]^n_0}{a-1} = \frac{a^n-1}{a -1} \quad, \quad a\ne 0,1
$$

:::

## Polinómios fatoriais

Note-se, primeiro, a definição de polinómio fatorial:

:::tip[DEFINIÇÃO]

Para cada $r \in \mathbb{N}$, a polinómio fatorial de uma sucessão $u_{n}$ define-se como se segue:

$$
(u_{n})^{\underline{r}} =
\begin{cases}\ 1 & \text{se } r = 0 \\
u_{n}u_{n-1}\dotsc u_{n-(r-1)} & \text{se } r \geq 1
\end{cases}
$$

:::

De uma forma muito informal, nota-se que em vez de decrementar a expressão na sua totalidade,
decrementa-se o valor de $n$.

Assim, como exemplo, tem-se

$$
n^{\underline{3}} = n(n-1)(n-2)
$$

$$
\begin{aligned}
(2n+1)^{\underline{3}} &= (2n+1)\left(2(n-1)+1\right)\left(2(n-2)+1\right)\\
& =(2n+1)(2n−1)(2n−3)
\end{aligned}
$$

### Derivada do polinómio fatorial

$$
\begin{aligned}
\Delta n^{\underline{r}} & =(n+1)^{\underline{r}} -(n)^{\underline{r}}\\
 & =(n+1)(n)\dotsc (n-(r-2))-(n)\dotsc (n-(r-2))(n-(r-1))\\
 & =n( n-1) \dotsc ( n-( r-2))\times ( n+1-( n-r+1))\\
 & =r\cdot n^{\underline{r-1}}
\end{aligned}
$$

:::tip[DEFINIÇÃO]

Derivada do polinómio fatorial

$$
\Delta n^{\underline{r}} = r\cdot n^{\underline{r-1}}
$$

:::

Pode-se também tirar o valor de $n^r$ desta expressão:

$$
\Delta n^{\underline{r+1}} = (r+1)n^{\underline r}\Leftrightarrow
n^{\underline r} = \Delta \left(\frac{n^{\underline {r+1}}}{r+1}\right)
$$

Como exemplo, determina-se a soma fechada para $\displaystyle \sum_{k=0}^{n-1}k$:

Pega-se na função $k^{\underline{2}}$:

$$
\begin{aligned}
\Delta k^{\underline{2}} & =( k+1)^{\underline{2}} -k^{\underline{2}}\\
 & =( k+1) k-k( k-1)\\
 & =k( k+1-( k-1))\\
 & =2k
\end{aligned}
$$

\(ou, alternativamente, pela forma direta na definição acima\)  
donde se tira que $k = \frac{1}{2}\Delta k^{\underline{2}}$.

Logo, pode-se reescrever o somatório para algo com que já se sabe trabalhar:

$$
\sum_{k=0}^{n-1}k =\frac{1}{2}\sum_{k=0}^{n-1}\Delta k^{\underline{2}} = \frac{1}{2}(n)(n-1)
$$
