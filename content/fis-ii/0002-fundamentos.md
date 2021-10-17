---
title: Fundamentos e Campos
description: >-
  Fundamentos e Campos
path: /fis-ii/fundamentos
type: content
---

## Conceitos a Relembrar (CDI-II)

- [Gradiente](/cdi-ii/diferenciabilidade#gradiente-de-uma-função)
- [Coordenadas Esféricas](/cdi-ii/integracao-mudanca-var#coordenadas-esféricas)
- [Coordenadas Cilíndricas](/cdi-ii/integracao-mudanca-var#coordenadas-cilíndricas)
- [Divergência](/cdi-ii/fluxo-teorema-divergencia#divergência-de-um-campo-vetorial)
- [Rotacional](/cdi-ii/rotacional-teorema-stokes#rotacional)
- [Teorema de Stonks](/cdi-ii/rotacional-teorema-stokes#teorema-de-stokes)

# Campo

Um campo ($\phi$) é uma zona do espaço em que em cada ponto está definida uma quantidade.

Essa quantidade pode ser escalar ou vetorial.

Por exemplo, o campo gravítico é um campo vetorial ($\vec \phi: \mathbb{R}^3 \to \mathbb{R}^3$):

$$
\vec\phi (\vec r) = -G\cfrac{M}{r^2} \vec e_r
$$

## Operadores

### Campos Escalares

Para saber como um campo escalar varia com a posição temos de calcular o seu [Gradiente](/cdi-ii/diferenciabilidade#gradiente-de-uma-função)

$$
\vec\nabla \phi(\vec r) = \cfrac{\partial \phi}{\partial x_1}\vec e_1 + \cfrac{\partial \phi}{\partial x_2}\vec e_2 + \cfrac{\partial \phi}{\partial x_3}\vec e_3 = \sum\limits_{i =1}^{3} \dfrac {\partial \phi}{\partial x_i}\vec e_i = (\frac{\partial \phi}{\partial x_1}, \frac{\partial \phi}{\partial x_2}, \frac{\partial \phi}{\partial x_3})
$$

Geometricamente a maior variação de $\phi$ ocorre quando $\vec\nabla \phi$ é paralelo a $d \vec l$, para $|d\vec l|$ fixo.

$$
d \phi = \sum\limits_{i =1}^{3} \dfrac {\partial \phi}{\partial x_i} dx_i
= \vec\nabla \phi \cdot d \vec l
= |\vec\nabla \phi| \ |d \vec l|\ \cos(\vec\nabla \phi,d \vec l)
$$

$\vec\nabla \phi$ aponta na direção da máxima variação de $\phi$;\
O módulo de $\vec\nabla \phi$ fornece a taxa de variação ao longo
desta direção.

### Campos Vetoriais

O operador $\vec \nabla$ funciona como um vetor, com $\vec \nabla = \sum_{i=1}^n\frac{\partial}{\partial x_i}\vec{e_i}$

Se a quantidade ($\vec\phi(\vec r)$) for um vetor podemos realizar 2 operações com o gradiente ($\vec\nabla$)

#### Divergência (Produto Escalar)

$$
\vec\nabla \cdot \phi(\vec r) = \sum_{i=1}^3 \frac{\partial \phi_i}{\partial x_i}
$$

O resultado será um número.

#### Rotacional (Produto Externo)

$$
\vec\nabla \times \phi(\vec r) = (\frac{\partial \phi_2}{\partial x_3} - \frac{\partial \phi_3}{\partial x_2}, \frac{\partial \phi_3}{\partial x_1} - \frac{\partial \phi_1}{\partial x_3}, \frac{\partial \phi_1}{\partial x_2} - \frac{\partial \phi_2}{\partial x_1})
$$

O resultado será um (pseudo-)vetor, isto porque para dois vetores $\vec a$ e $\vec b$, o rotacional de $\vec a \times \vec b$ vai ser igual ao rotacional de $- \vec a \times - \vec b$

## Exemplo de Campos

### Campo Uniforme

![Uniforme](./imgs/0002-campo-uniforme.jpg#dark=1)

Para $\phi _i$ constantes:

$$
\begin{darray}{c}
\phi(\vec r) = \sum\limits_{i =1}^{3} \phi_i \vec e_i = (\phi_1, \phi_2, \phi_3)\\
\vec\nabla \cdot \phi(\vec r) = 0\\
\vec\nabla \times \phi(\vec r) = 0
\end{darray}
$$

### Campo Radial

![Radial](./imgs/0002-campo-radial.png#dark=1)

Com $A$ constante:

$$
\begin{darray}{c}
\phi(\vec r) = \sum\limits_{i =1}^{3} Ax_i \vec e_i = (Ax_1, Ax_2, Ax_3)\\
\vec\nabla \cdot \phi(\vec r) = 3A\\
\vec\nabla \times \phi(\vec r) = 0
\end{darray}
$$

### Campo Rotacional

![Rotacional](./imgs/0002-campo-rotacional2.png#dark=1)

Com $\phi _1(\vec r) = \cfrac{x_2}{x_3},\ \phi _2(\vec r) = -\cfrac{x_1}{x_3},\ \phi _3(\vec r) = 0$:

$$
\phi(\vec r) = \sum\limits_{i =1}^{3}  \phi_i (\vec r)  \vec e_i = (\frac{x_2}{x_3}, -\frac{x_1}{x_3}, 0)
$$

$$
\begin{darray}{c}
\vec\nabla \cdot \phi(\vec r) = 0 &&
\vec\nabla \times \phi(\vec r) = - \cfrac{x_1\vec e_1 + x_2\vec e_2+  x_3\vec e_3 }{x_3 ^2}
\end{darray}
$$

## Linhas de Campo

![Linhascampo](./imgs/0002-linhas-campo.jpg#dark=1)

Uma linha de campo é uma curva tal que em cada ponto o
campo é tangente à curva.\
 Dirigem-se de (+ $\rightarrow$ - ).
As linhas de campo não se podem cruzar.

## Função $\delta$ de Dirac

A função de Dirac é uma função que em que é nula em todo o seu domínio exceto num único ponto em que tem o valor infinito.

$$
\delta (x-a) =
\begin{cases}
0,\text{ se }x \neq a\\
\infty ,\text{ se }x = a
\end{cases}
$$

$$
\int^\infty_{-\infty} \delta (x-a) \d x = 1
$$

### Teorema de Helmholtz

Se tivermos um campo $\vec \phi$ :

$$
\vec \nabla \cdot \vec \phi = f,
$$

$$
\vec \nabla \times \vec \phi = \vec \Theta, (\implies \vec \nabla \cdot \vec \Theta = 0)
$$

em que $f$ é uma função escalar e $\vec \Theta$ uma função vetorial.

É impossível calcular $\vec \phi$, a menos que nos sejam fornecidas as condições de fronteira.
Isto corresponde a como os campos se comportam longe de todas as cargas (no $\infty$)

### Potencial Escalar

Se $\vec \nabla \times \vec \phi = 0$ então:

$$
\vec \phi = - \vec\nabla V
$$

Onde $V$ é o potencial escalar.

Assim, $\int^B_A \vec \phi \d \vec r$ entre os pontos $A$ e $B$ não depende do caminho e num caminho fechado o valor é sempre 0.

### Potencial Vetorial

Se $\vec \nabla \cdot \vec \phi = 0$ então:

$\vec \phi = \vec\nabla \times \vec A$

Onde $\vec A$ é o potencial vetorial.

Assim, $\int \vec \phi \d\vec S $ para superfícies fechadas com a mesma fronteira e numa superfíce fechada o valor é sempre 0.

Qualquer campo pode ser escrito na forma $\vec \phi = - \vec\nabla V + \vec\nabla \times \vec A$

---

Slides:

- [Slides Módulo 1](https://drive.google.com/file/d/1JJ0hvtzRHPiJwS3mNjP8ffPkbRe7FWDs/view?usp=sharing)
