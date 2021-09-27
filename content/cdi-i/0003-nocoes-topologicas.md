---
title: Noções topológicas
description: Noções topológicas. Conjunto numerável e contável. Vizinhanças. Interior, exterior, fronteira e fecho de um conjunto. Conjunto aberto, fechado e compacto. Ponto de Acumulação. Ponto Isolado. Derivado de um Conjunto.
path: /cdi-i/nocoes-topologicas
type: content
---

# Noções topológicas

```toc

```

## Conjunto numerável e contável

:::tip[DEFINIÇÃO]

- **Conjunto numerável:** Diz-se que $A$ é um conjunto numerável se existe uma bijeção de $\mathbb N^+$ em $A$.
- **Conjunto contável:** Um conjunto é contável se for finito ou numerável.
  :::

É de salientar que os conjuntos $\mathbb N$, $\mathbb Z$ e $\mathbb Q$ são, embora infinitos, numeráveis e, consecutivamente, contáveis. No entanto, $\mathbb R$ não é numerável.

[**Densidade dos racionais:**](color:yellow) Em qualquer intervalo de números reais existem números racionais e irracionais (na verdade um número infinito de cada um deles).

## Vizinhanças

:::tip[DEFINIÇÃO]
**Vizinhança de raio $r\in\mathbb R^+$ de um ponto $a\in\mathbb R$:**  
Seja $a\in\mathbb R$ e $r\in\mathbb R^+$, chama-se vizinhança de raio $r$ de $a$ ao conjunto

$$
V_r(a)=\{x\in\mathbb R:|x-a|<r\}=]a-r,a+r[
$$

:::

## Interior, exterior, fronteira e fecho de um conjunto

Seja $A\subset\mathbb R$. Diz-se que:

- $a$ é um ponto interior de $A$ se existe uma vizinhança de $a$ contida em $A$
- $a$ é um ponto exterior de $A$ se existe uma vizinhança de $a$ que não contém pontos de $A$
- $a$ é um ponto fronteiro de $A$ se em qualquer vizinhança de $a$ existem pontos de $A$ e pontos que não são de $A$
- $a$ é um ponto aderente a $A$ se em qualquer vizinhança de $a$ existem pontos de $A$, isto é, são pontos do interior ou da fronteira de $A$.

Chama-se:

- Interior de $A$, $\text{int} A$, ao conjunto dos pontos interiores de $A$
- Exterior de $A$, $\text{ext} A$, ao conjunto dos pontos exteriores de $A$
- Fronteira de $A$, $\partial A$, ao conjunto dos pontos fronteiros de $A$
- Fecho ou aderência de $A$, $\overline A$, ao conjunto dos pontos aderentes a $A$

:::details[Exemplo]

Abaixo está a representação do conjunto $B=[3,5[ \cup \{8\}$. A zona representada a azul corresponde ao interior de $B$, enquanto que a zona a verde corresponde ao exterior de $B$.

![Exemplo de interior exterior e fronteira de um conjunto](./assets/0003-interior-exterior-conjunto.png#dark=1)

$$
\begin{array}{ll}
\text{int }B=]3,5[ &
\text{ext }B=]-\infin;3[\cup]5,8[\cup]8;+\infin[\\
\\
\partial B=\{3,5,8\} &
\overline A=[3,5]\cup\{8\}
\end{array}
$$

:::

## Conjunto Aberto. Conjunto Fechado. Conjunto Compacto

Seja $A\subset \mathbb R$, diz-se que:

- $A$ é aberto se $\text{int} A = A$
- $A$ é fechado se $A = \overline A$
- $A$ é compacto se $A$ é fechado e $A$ é limitado

Exemplos de conjuntos abertos, fechados e compactos estão no PDF em anexo.

Existem dois casos em que um conjunto pode ser **simultaneamente aberto e fechado**: $\mathbb R$ e $\empty$.

## Ponto de Acumulação. Ponto Isolado. Derivado de um Conjunto

Seja $A\subset\mathbb R$ um conjunto e $a\in\mathbb R$.
Diz-se que $a$ é um [**ponto de acumulação**](color:orange) de $A$ se existem pontos de $A$ diferentes de $a$ e arbitrariamente próximos de $a$,
ou seja, se dado qualquer raio $r\in\mathbb R^+$: $V_r(a)\cap(A\backslash\{a\})\ne\empty$.

A qualquer ponto de $A$ que não seja um ponto de acumulação de $A$ chama-se [**ponto isolado**](color:orange).

Ao conjunto dos pontos de acumulação de $A$ chama-se derivado de $A$ e representa-se por $A'$.

---

PDFs:

- [Aula 3](https://drive.google.com/file/d/1EFfvY-ky2oTGLccDWyZx940CvnnDJpPy/view?usp=sharing)
