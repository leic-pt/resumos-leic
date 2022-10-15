---
title: Indução Matemática. Majorantes e Minorantes
description: Princípio da Indução Matemática. Definição dos conjuntos dos naturais, dos inteiros e dos racionais.
path: /cdi-i/inducao-supremo
type: content
---

# Indução Matemática. Majorantes e Minorantes

```toc

```

## Números Naturais e Inteiros

:::tip[DEFINIÇÃO]
Um **conjunto é indutivo** se satisfaz a seguinte condição:

$$
\forall x \in A, (x+1)\in A
$$

:::

:::tip[DEFINIÇÃO]

O [**conjunto dos naturais**](color:orange), $\mathbb{N}_0$, define-se como a interseção de todos os _conjuntos indutivos_ que contenham $0$.
Alguns autores consideram os naturais como a interseção de todos os conjuntos indutivos que contêm $1$. É também costume escrever $\mathbb{N}$ ao invés de $\mathbb{N}_0$.

:::

É bom de relembrar, que nem todos os conjuntos indutivos que contenham 0 são o conjunto dos números naturais. O conjunto $C=\{0, \frac{1}{2}, 1, \frac{3}{2}, 2, ...\}$ é indutivo, pois obedece à condição acima, mas não corresponde ao conjunto dos números naturais. Por isso é que o definimos como a interseção de **todos** estes conjuntos que contenham $0$.

Esta definição de conjunto dos naturais não inclui os números inteiros negativos, pois como é a interseção de todos os conjuntos indutivos que contenham $0$, existe um conjunto como $C$ definido acima.

:::tip[DEFINIÇÃO]

Chama-se conjunto dos [**números inteiros**](color:yellow) ao conjunto $\mathbb{Z}$ definido por $\mathbb{Z}=\mathbb{N}_0\cup(-\mathbb{N}^+)$.

Os números inteiros são a reunião dos inteiros com o simétrico dos inteiros.

:::

Através desta definição, podemos concluir que $\mathbb{Z}^+=\mathbb{N}^+$ e $\mathbb{Z}^-=-\mathbb{N}^+$.

## Princípio da Indução Matemática

**Princípio da Indução Matemática:** Sejam $n\in \mathbb{N}_0$ e $P(n)$ uma expressão proposicional, ou seja, uma expressão em que para cada $n\in \mathbb{N}_0$ resulta uma proposição.

Se forem verdadeiras as seguintes proposições:

- $P(0)$ (base da indução)
- $(P(n)\Rightarrow P(n+1))$, para qualquer $n\in \mathbb{N}_0$ (etapa de indução)
  então a proposição $P(n)$ é verdadeira para qualquer $n\in \mathbb{N}_0$.

Resumidamente, o **Princípio da Indução Matemática** permite-nos verificar se uma proposição ($P(0)$) é verdadeira para todos os números naturais ($n\in \mathbb{N}_0$).

:::details[Exemplo 1]

$$
\forall n\in \mathbb{N}_0, 8^n:4^n=2^n
\\
\text{Para } n=0 \rightarrow 8^0:4^0=2^0\Leftrightarrow 1:1=1 \rightarrow \text{ Proposição verdadeira}
\\
\text{Hipótese de indução: }
8^n:4^n=2^n\\
\text{Tese: }
8^{n+1}:4^{n+1}=2^{n+1}\\
\text{ }\\
8^{n+1}:4^{n+1}=\frac{8\times8^n}{4\times4^n}=2\times\underbrace{8^n:4^n}_{\text{Hipótese de indução}}=2\times2^n=2^{n+1}
$$

Logo, como a condição se verifica para $n = 0$ e é hereditária, esta é verdadeira para $n \in \mathbb{N}_0$.

:::

:::details[Exemplo 2]

$$
\forall n\in \mathbb{N}_0, \sum_{k=0}^{n}(2^k)=2^{n+1}-1
\\
\text{Para } n=0 \rightarrow \sum_{k=0}^{0}(2^k)=1\text{ e }2^{0+1}-1=1\rightarrow \text{ Proposição verdadeira}
\\
\text{Hipótese de indução: }\sum_{k=0}^{n}(2^k)=2^{n+1}-1
\\
\text{Tese: }
\sum_{k=0}^{n+1}(2^k)=2^{n+2}-1\\
\text{ }\\
\sum_{k=0}^{n+1}(2^k)=\overbrace{\sum_{k=0}^{n}(2^k)}^{\text{Hipótese de indução}}+2^{n+1}
=2^{n+1}-1+2^{n+1}=\\
=2\times2^{n+1}-1
=2^{n+2}-1
$$

Logo, como a condição se verifica para $n = 0$ e é hereditária, esta é verdadeira para $n \in \mathbb{N}_0$.

:::

Visto que o Princípio da Indução Matemática é recursivo, podemos utilizá-lo para definir várias operações, tais como **potências de base $a$ e expoente natural**, **fatoriais** e **somatórios**.

:::tip[DEFINIÇÃO]
**Potência de base $a$ e expoente natural $n$**

Sejam $a\in\mathbb{R}\backslash\{0\}$ e $n\in\mathbb{N}_0$:

$a^n=\begin{cases}
1 &\quad\text{se } n=0\\
a\cdot a^{n-1} &\quad\text{se } n>0
\end{cases}$
:::

:::tip[DEFINIÇÃO]
**Fatorial de um número natural**

Seja $n\in\mathbb{N}_0$:

$$
n! =
\begin{cases}
1 &\quad\text{se } n=0\\
n\cdot (n-1)! &\quad\text{se } n>0
\end{cases}
$$

:::

:::tip[DEFINIÇÃO]
**Somatório desde $p$ até $n$ de termo geral $u_k$**

Sejam $p,n\in\mathbb{Z}$ e $u_k$ uma expressão designatória para que cada $k\in\mathbb{Z}$ tal que $p\le k\le n$ se transforma num número real:

$$
\displaystyle\sum_{k=p}^n u_k=
\begin{cases}
u_p &\quad\text{se } n=p\\
u_n+\displaystyle\sum_{k=p}^{n-1}u_k &\quad\text{se } n>p
\end{cases}
$$

:::

## Números racionais

O [**conjunto dos racionais**](color:pink) pode ser definido por:

$$
\mathbb{Q}=\{x\in\mathbb{R}:x=\frac{p}{q},p\in\mathbb{Z}, q\in\mathbb{Z}^+\}
$$

## Majorantes e minorantes

Definição de majorantes, minorantes, conjunto majorado, conjunto minorado, conjunto limitado, supremo, ínfimo, máximo e mínimo.  
Seja $A \subset \mathbb{R}$:

- $M\in\mathbb{R}$ é um majorante de $A$ se para qualquer $x \in A$ se tem $x \le M$
- $A$ é um conjunto majorado se o conjunto dos majorantes de $A$, $\text{Maj}(A)$, é
  não vazio
- $m \in \mathbb{R}$ é um minorante de $A$ se para qualquer $x \in A$ se tem $x \ge m$
- $A$ é um conjunto minorado se o conjunto dos minorantes de $A$, $\text{Min}(A)$, é
  não vazio
- Quando um conjunto é majorado e minorado, diz-se **limitado**
- Se $A$ for majorado e existir um majorante menor que todos os outros chama-se a esse majorante supremo de $A$, $\text{sup } A$
- Se $A$ for minorado e existir um minorante maior que todos os outros chama-se a esse minorante ínfimo de $A$, $\text{inf } A$
- Se existe $\text{sup } A$ e $\text{sup } A\in A$ diz-se que $\text{sup } A$ é o máximo de $A$, $\text{max } A$
- Se existe $\text{inf } A$ e $\text{inf } A\in A$ diz-se que $\text{inf } A$ é o mínimo de $A$, $\text{min } A$

[**Axioma do supremo**](color:orange): Qualquer subconjunto dos reais majorado e não vazio tem supremo

---

PDFs:

- [Aula 2](https://drive.google.com/file/d/1SyE4MoAze4zWmglC3CyNWxwMKNbXgpGF/view?usp=sharing)
