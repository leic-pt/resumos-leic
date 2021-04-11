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

### Somatório de n

$$\sum_{k=0}^{n-1} k =\frac{k(k-1)}{2}  $$

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

$$H_n = \sum_{k=1}^{n}\frac{1}{k} \quad , H_0 = 0 $$

### Fórmula de Abel

$$\sum_{k=0}^{\textbf{n-1}}u_k\Delta v_k = [u_kv_k]_0^\textbf{n} - \sum_{k=0}^{n-1}v_{k+1}\Delta u_k$$

### Diferença Finita do Quociente

$$
\Delta \frac{u_n}{v_n} = \frac{(\Delta u_n)v_n -u_n\Delta v_n}{v_nv_{n+1}}
$$

### Termo geral de uma sucessão pelas duas derivadas em n = 0

$$
u_n = u_0 \cdot n^{\underline 0} + \frac{1}{1!} (\Delta u_0) n^{\underline 1} + \frac{1}{2!} (\Delta^2 u_0) n^{\underline 2} + \dots +
\frac{1}{k!} (\Delta^k u_0) n^{\underline k}
$$

- [Verificação do somatório no WolframAlpha](https://www.wolframalpha.com/input/?i=sum&assumption=%7B%22F%22%2C+%22Sum%22%2C+%22sumlowerlimit%22%7D+-%3E%220%22&assumption=%7B%22C%22%2C+%22sum%22%7D+-%3E+%7B%22Calculator%22%7D&assumption=%7B%22F%22%2C+%22Sum%22%2C+%22sumfunction%22%7D+-%3E%22k%22&assumption=%7B%22F%22%2C+%22Sum%22%2C+%22sumvariable%22%7D+-%3E%22k%22&assumption=%7B%22F%22%2C+%22Sum%22%2C+%22sumupperlimit2%22%7D+-%3E%22n-1%22)

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

Basta agora igualar estes dois resultados e isolar $S_n$.

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

## Exemplos de Exercícios de Cálculo Finito

### Usando apenas a diferença finita (derivada)

{brown}(Retirado da série 1, 1.2.1 a.)

$$
\sum^n_{k=0} 4^k
$$

::: details Resolução

Neste caso, podemos fazer a diferença finita $\Delta 4^k$ e iremos encontrar novamente $4^k$, pelo
que podemos isolar esta parcela.

$$
\Delta 4^k = 4^{k+1} - 4^k = 4^k(4-1) = 3 \times 4^k
$$

$$
4^k = \Delta \frac{4^k}{3}
$$

Então:

$$
\begin{aligned}
\sum^n_{k=0} 4^k &= \sum^n_{k=0} \Delta \frac{4^k}{3}\\
&= \frac{1}{3} \left[ 4^k \right]^{n+1}_0\\
&= \frac{1}{3}(4^{n+1} - 4^0)\\
&= \frac{1}{3}(4^{n+1} - 1)
\end{aligned}
$$

:::

### Usando a Fórmula de Abel

{brown}(Retirado da série 1, 1.2.1 d.)

$$
\sum^n_{k=0} k\times 4^k
$$

::: details Resolução

Neste caso, podemos tomar $u_k=k$ e $\Delta v_k$= $\Delta 4^k$, pois conseguimos transformar o $4^k$ em $\Delta 4^k$ (ver exemplo anterior).

$$
\Delta 4^k = 4^{k+1} - 4^k = 4^k(4-1) = 3 \times 4^k
$$

$$
4^k = \Delta \frac{4^k}{3}
$$

Então:

$$
\begin{aligned}
\sum^n_{k=0} k\times 4^k &= \sum^n_{k=0} k \times \Delta \frac{4^k}{3}\\
&= \frac{1}{3} \left(\left[k\times 4^k \right]^{n+1}_0 - \sum^n_{k=0} 4^{k+1} \cdot \Delta k \right)\\
&= \frac{1}{3} \left((n+1)4^{k+1} - 0 - 4\sum^n_{k=0} 4^{k} \times 1 \right)\\
&= \frac{1}{3} \left((n+1)4^{k+1} - 4\left(\frac{1}{3}\left(4^{n+1}-1\right)\right) \right)\\
\end{aligned}
$$

Este último passo foi feito através do exemplo anterior.

:::

### Usando o Método de "Podar as Pontas"

{brown}(Retirado da série 1, 1.2.3 g.)

Usa-se este método quando não se consegue imediatamente exprimir o quociente numa potência fatorial.

$$
\sum^{n}_{k=2} \frac{1}{(k+2)(k+5)}
$$

::: details Resolução

Ver a resolução do 1.2.3 g., que está na [página 2 deste PDF](https://drive.google.com/file/d/1wshyDqQvCBGUbe01-rTX83Yhn0WIbUef/view?usp=sharing).

:::

### Usando a Fórmula do Quociente

{brown}(Retirado da série 1, 1.2.5 a.)

$$
\sum^{n-1}_{k=0} \frac{k2^k}{(k+1)(k+2)}
$$

::: details Resolução

Começar por tentar "adivinhar" a expressão que ao derivar dá aquilo que está "dentro" do somatório.  
{green}(Em alguns casos, podemos usar variáveis que depois alteramos por um valor, para termos uma maior probabilidade de acertar.)

$$
\Delta \frac{2^k}{k+1} = \frac{(\Delta 2^k)(k+1)-2^k(\Delta k)}{(k+1)(k+2)}=\frac{2^k k + 2^k - 2^k}{(k+1)(k+2)} = \frac{k 2^k}{(k+1)(k+2)}
$$

$$
\sum^{n-1}_{k=0} \frac{k2^k}{(k+1)(k+2)} = \left[\frac{2^k}{k+1} \right]^n_0 = \frac{2^n}{n+1}- \frac{2^0}{0+1} = \frac{2^n}{n+1}-1
$$

- [Verificação da resposta no WolframAlpha](https://www.wolframalpha.com/input/?i=sum&assumption=%7B%22F%22%2C+%22Sum%22%2C+%22sumlowerlimit%22%7D+-%3E%220%22&assumption=%7B%22C%22%2C+%22sum%22%7D+-%3E+%7B%22Calculator%22%7D&assumption=%7B%22F%22%2C+%22Sum%22%2C+%22sumfunction%22%7D+-%3E%22%28k*2%5Ek%29%2F%28%28k%2B1%29%28k%2B2%29%29%22&assumption=%7B%22F%22%2C+%22Sum%22%2C+%22sumupperlimit2%22%7D+-%3E%22n-1%22&assumption=%7B%22FVarOpt%22%7D+-%3E+%7B%7B%22Sum%22%2C+%22sumvariable%22%7D%7D)

:::

![To Infinity and Beyond](https://media1.giphy.com/media/3oEjHH6uarNnFSIEWQ/source.gif)
