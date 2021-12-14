---
title: Integrais de Linha e Teorema de Green
description: >-
  Caminhos em R^n: regular, seccionalmente regular.
  Comprimento de um Caminho.
  Caminhos Equivalentes.
  Integral de Linha: de campo vetorial e de campo escalar.
  Teorema de Green.
path: /cdi-iii/integrais-linha-teorema-green
type: content
---

# Integrais de Linha e Teorema de Green

:::warning[Conteúdo Duplicado]

O conteúdo nesta página é duplicado da matéria de CDI-II:

- [Integrais Campos Escalares](/cdi-ii/extremos-condicionados)
- [Campos Vetoriais](/cdi-ii/campos-vetoriais)
- [Teorema de Green](/cdi-ii/teorema-de-green)

Daqui para baixo, apenas irá estar o conteúdo novo dado apenas em CDI-III e definições importantes.
Recomenda-se a leitura das páginas indicadas acima.

Pode ainda ser útil assistir às [Aulas do Calhau](https://drive.google.com/file/d/14Yzlr4939W5MQlrLWIhWF8v97GHaA1l4/view?usp=sharing):

- [Aula 4](https://youtu.be/8yIDYS_R0_o): Integrais sobre variedades. Integrais de campos vetoriais e trabalho.
- [Aula 5](https://youtu.be/l8llkzx-E7c): Teorema de Green. Teorema da Divergência.
- [Aula 6](https://youtu.be/Su1RXp9mbCc): Teorema de Stokes.

:::

```toc

```

## Caminho em $\R^n$

Já se tinha [definido anteriormente em CDI-II a noção de caminho](/cdi-ii/conjunto-de-nivel#caminho-em-rⁿ).
Abaixo definem-se duas noções novas: **caminho regular** e **caminho seccionalmente regular**.

Seja então um caminho contínuo $\gamma$,

$$
\gamma : [a, b] \to \R^n
$$

podemos definir as seguintes noções:

### Caminho Regular

Um caminho (de classe $C^1$) é regular se a sua derivada nunca se anular, ou seja,

$$
\gamma'(t) \ne 0
$$

Para [relembrar](/cdi-ii/conjunto-de-nivel#derivada-de-um-caminho), a derivada de um caminho está definida por

$$
\lim_{\gamma \to 0} \frac{\gamma(t+\delta) - \gamma(t)}{\delta} = \gamma'(t)
$$

:::details[Exemplo de caminho não regular]

O seguinte caminho não é regular, visto que a sua derivada não está definida em $x=0$.

$$
\gamma(x) = \left(x, x^2 \sin \frac{1}{x}\right)
$$

Existe no ponto, mas não existe o limite que define a derivada.

:::

### Caminho Seccionalmente Regular

Um caminho (de classe $C^1$) é seccionalmente regular se for a união de vários caminhos regulares.  
Por exemplo, um quadrilátero é a união de 4 caminhos regulares, formando um caminho seccionalmente regular.

Então, o caminho

$$
\gamma : [a, b] \to \R^n
$$

é regular se

$$
\begin{darray}{c}
[a,b] = \bigcup_{j=0}^n [a_j, b_j] & a_0 = a, b_n = b, a_{j + 1} = b_j
\end{darray}
$$

e, para todo o $a_j$ e $b_j$, $\gamma : [a_j,b_j] \to \R^n$ é um caminho regular.

### Comprimento de um Caminho

O comprimento de um caminho $c$, definido no intervalo $[a,b]$

$$
\begin{darray}{c}
[a, b] = \bigcup^{n-1}_{j=0} [a_j, a_{j+1}] & a_1 = a, a_j < a_{j+1}, a_n = b
\end{darray}
$$

$$
c = \gamma([a,b])
$$

é o seguinte:

$$
\begin{aligned}
l (c) &= \sum_{j=0}^{n-1} \left|\left| \frac{\gamma(a_{i+1}) - \gamma(a_i)}{a_{i+1} - a_i} \right|\right| (a_{i+1} - a_i)\\
&= \sum || \gamma'(c_i) || (a_{i+1} - a_i)\\
&= \int_{a}^{b} ||\gamma'(t)|| \d t\\
&= \int_C 1
\end{aligned}
$$

### Caminhos Equivalentes

Dois caminhos $\gamma_1 : [a_1, b_1] \to \R^n$ e $\gamma_2: [a_2, b_2] \to \R^n$ são equivalentes se existe $\phi: [a_2, b_2] \to [a_1, b_1]$
de classe $C_1$ tal que e $\gamma_2 = \gamma_1 \circ \phi$ e:

- com $\phi' > 0$

  $$
  \int F \cdot \d \gamma_1 = \int F \cdot \d \gamma_2
  $$

- ou com $\phi' < 0$

  $$
  \int F \cdot \d \gamma_1 = - \int F \cdot \d \gamma_2
  $$

Como podemos ver, a relação depende apenas da curva e do sentido em que se percorre a curva.

## Integral de Linha

Abaixo apresentam-se os conceitos de [integral de linha de um campo vetorial](/cdi-ii/campos-vetoriais#integral-de-linha-de-campo-vetorial)
e [integral de linha de um campo escalar](/cdi-ii/extremos-condicionados#integrais-de-campos-escalares-em-variedades),
também definidos anteriormente em CDI-II.

- **Integral de linha de um campo vetorial**

  O integral de linha do campo $F: U \subseteq \R^n \to \R^n$ ao longo da curva $C = \gamma([a,b])$ é

  $$
  \int_C F = \int_{a}^{b} F(\gamma(t)) \cdot \gamma'(t) \d t
  $$

- **Integral de linha de um campo escalar**

  O integral de linha do campo $f: U \subseteq \R^n \to \R$ ao longo da curva $C = \gamma([a,b])$ é

  $$
  \int_C f = \int_{a}^{b} f(\gamma(t)) \cdot ||\gamma'(t)|| \d t
  $$

## Teorema de Green

O Teorema de Green também já foi [anteriormente definido](/cdi-ii/teorema-de-green#teorema-de-green-1) em CDI-II.

Seja $F=(P,Q)$, $F : U \subset \R^2 \to \R^2$ de classe $C^2$

Seja $D$ um domínio simples e $\partial D$ percorrida no sentido positivo, então

$$
\iint_D \left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right) \d x \d y = \int_{\partial D} P \d x + Q \d y
$$
