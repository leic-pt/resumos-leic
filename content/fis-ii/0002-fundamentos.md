---
title: Fundamentos
description: >-
  Fundamentos
path: /fis-ii/fundamentos
type: content
---

# Campo

Um campo ($\phi$) é uma zona do espaço em que em cada ponto está definida uma quantidade.

Essa quantidade pode ser escalar ou vetorial.

Por exemplo, o campo gravítico é um campo vetorial:

$ \vec\phi (\vec r) = -G\cfrac{M}{r^2} \vec e_r $

## Operadores

Para saber como o campo varia com a posição temos de calcular o seu [Gradiente]

$\vec\bigtriangledown \phi(\vec r) = \cfrac{\partial \phi}{\partial x_1}\vec e_1 + \cfrac{\partial \phi}{\partial x_2}\vec e_2 + \cfrac{\partial \phi}{\partial x_3}\vec e_3 = \sum\limits_{i =1}^{3} \dfrac {\partial \phi}{\partial x_i}\vec e_i$

Se $\vec\bigtriangledown \phi(\vec r)$ for um vetor podemos realizar 2 operações com o gradiente ($ \vec\bigtriangledown$)

Divergência (Produto Escalar)

$\vec\bigtriangledown \cdot \phi(\vec r)$\
 O resultado será 1 número.

Rotacional (Produto Externo)

$\vec\bigtriangledown \times \phi(\vec r)$\
 O resultado será 1 (pseudo-)vetor, isto porque para 2 vetores $\vec a$ e $\vec b$, o rotacional de $\vec a \times \vec b$ vai ser igual ao rotacional de $- \vec a \times - \vec b$

## Exemplo de Campos

### Campo Uniforme

$\phi(\vec r) = \sum\limits_{i =1}^{3}  \phi_i  \vec e_i$

$\vec\bigtriangledown \cdot \phi(\vec r) = 0$

$\vec\bigtriangledown \times \phi(\vec r) = 0$

### Campo Radial

$\phi(\vec r) = \sum\limits_{i =1}^{3}  Ax_i  \vec e_i$

$\vec\bigtriangledown \cdot \phi(\vec r) = 3A$

$\vec\bigtriangledown \times \phi(\vec r) = 0$

### Campo Rotacional

$\phi(\vec r) = \sum\limits_{i =1}^{3}  \phi_i (\vec r)  \vec e_i$

$\vec\bigtriangledown \cdot \phi(\vec r) = 0$

$\vec\bigtriangledown \times \phi(\vec r) = - \cfrac{x_1\vec e_1 + x_2\vec e_2+  x_3\vec e_3 }{x_3 ^2}$

## Linhas de Campo

Uma linha de campo é uma curva tal que em cada ponto o
campo é tangente à curva.\
 Dirigem-se de + $\rightarrow$ -.
As linhas de campo não se podem cruzar.

![graph](./imgs/0001-photoeletric-grap.png)

Como podemos reparar pelo gráfico o declive das retas é igual e tem o valor da Constante de Planck ($h$).\
Isto porque podemos reescrever a fórmula dada anteriormente da seguinte maneira
$\cfrac{E}{v} = h$\
O ponto em que a recta corta o eixo das abcissas é $v_0$\
Também podemos escrever a fórmula da seguinte maneira:
$K = hv - \varphi \ $onde $\varphi = hv_0$
