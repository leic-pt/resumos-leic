---
description: 'Variedades diferenciáveis de dimensão m. Espaço tangente. Espaço normal.'
---

# Variedades, Espaço Tangente e Normal

[[toc]]

## Variedades

::: tip DEFINIÇÃO
$M \subset \R^n$ é uma variaedade diferenciável de dimensão $m$ se $\forall a \in M$ existe
uma vizinhança na qual $M$ é o gráfico de uma função $f: U\subset \R^m$ \to $\R^{n - m}$ de classe $C^1$.
:::

Tomando como exemplo os seguintes conjnutos:

1. $M= \{(x,y) \in \R^2: x^2+y^2=1\}$

[imagem]

{green}(É variedade de dimensão 1.)

2. $M = \{(x,y,z) \in \R^3: x^2+y^2+z^2 = 1\}$

[imagem]

{green}(É variedade de dimensão 2.)

3. $M= \{(x,y,z) \in \R^3: x^2 + y^2 = z^2\}$

[imagem]

{red}(Não é variedade.)

Na origem não é possível escrever nenhuma variável em função das outras duas.

4. $M = \{(x,y,z) \in \R^3: z=x+y\}$ que corresponde a um plano.  
   Logo, qualquer ponto é definido por $z=f(x,y) = x+y$.  
   Então, temos uma {green}(variedade de dimensão 2).

### Relação com o Teorema da Função Implícita

Se considerarmos um conjunto de nível:

$$
\begin{array}{lll}
M = \{x \in \R^n: F(x) = 0\} & F: \R^n \to \R^{n-m} & C^1
\end{array}
$$

Então, $M$ é variedade de $dim\ m$ se $\forall a \in M$ por possível aplicar o
[Teorema da Função Implícita](./0013-funcao-inversa.md#teorema-da-funcao-implicita) com $m$ variáveis independentes.

Basta encontrar $m$ variáveis para as quais $\det DF \ne 0 \implies \text{característica máxima}$.

::: tip TEOREMA
O conjunto de nível é uma variedade de $dim\ m$ se $DF$ tem sempre [característica](<https://en.wikipedia.org/wiki/Rank_(linear_algebra)>) máxima.
:::

::: details Exemplos

Considerando

$$
M=\{x^2+y^2 = 1\} = \{F(x,y) = x^2+y^2-1=0\}, F \in C^1
$$

$$
DF = \begin{bmatrix}
2x & 2y
\end{bmatrix}
$$

Quando $\car DF \ne 1$, então x,y = 0$. No entanto, este ponto não pretence ao conjunto.

Logo, $\car DF$ é máxima em qualquer ponto do conjunto e $M$ é variedade de dimensão $1$.

---

Considerando

$$
M = \{ x^2+y^2 + z^2 = N \} = {F(x,y,z) = x^2+y^2+z^2-1 = 0}, F \in C^1
$$

$$
DF = \begin{bmatrix}
2x & 2y & 2z
\end{bmatrix}
$$

Quando $\car DF$ não é máxima (neste caso, 1), então $x,y,z=0$. No entanto, este ponto não pertence ao conjunto.

Logo, $DF$ tem sempre característica máxima para qualquer ponto do conjunto e $M$ é uma variedade de $\dim 3-1 = 2$.

---

Considerando

$$
M = \{x^2+y^2-z^2 = 0\}
$$

isto é, um cone.

$$
DF = \begin{bmatrix}
2x & 2y & -2z
\end{bmatrix}
$$

Então, quando $\car = 0$, significa que $x,y,z=0$.

Como este ponto pertence ao conjunto, {red}($M$ não é uma variedade).

:::

---

Slides:

- [Aula 31](https://drive.google.com/file/d/1A-P0lLvEs-y6mfKzjFtb5FpdQgeXP_CF/view?usp=sharing)
