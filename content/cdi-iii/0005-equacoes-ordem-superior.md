---
title: Equações Lineares de Ordem Superior
description: >-
  Equações Lineares de Ordem Superior
path: /cdi-iii/equacoes-ordem-superior
type: content
---

# Equações Lineares de Coeficientes Constantes de Ordem Superior

```toc

```

Uma equação diferencial é **linear de coeficientes constantes** se poder ser escrita na forma

$$
y^{(n)} + a_{n-1} y^{(n - 1)} + \dots + a_1 y' + a_0 y = h(t)
$$

em que:

- $a_0, a_1, a_{n-1}$ são constantes reais;
- $h: I \subseteq \R \to \R$, uma função contínua em $I$.

## Polinómio Característico (Diferencial)

Podemos reescrever a equação acima de outra forma, utilizando a notação $Dy = y'$ (e consequentemente $D^2 y = y'', \dots, D^n y = y^{(n)}$):

$$
\left(D^n + a_{n-1} D^{n-1} + \dots + a_1 D + a_0 \right) y = h(t)
$$

ou ainda, definindo $P(D) = D^n + a_{n-1} D^{n-1} + \dots + a_1 D + a_0$, como

$$
P(D) y = h(t)
$$

O [**polinómio característico**](color:orange) desta equação é $P(D)$.

É preciso notar que $P(D)$ é um operador, isto é, uma função cujo domínio é um conjunto de
funções de classe $C^n$, sendo $n$ o grau de $P$.
O termo $P(D)$ designa um **polinómio diferencial** que pode ser factorizado da mesma forma que um polinómio numérico.

Por exemplo, se $y$ é uma função de classe $C^2$:

$$
(D^2 - 4) y = (D - 2)(D + 2)y = (D + 2)(D - 2)y
$$

## Obter a Solução Geral

Por ser uma equação linear, a sua solução geral é dada na forma

$$
y(t) = y_G(t) + y_P(t)
$$

em que:

- $y_G(t)$ é a solução geral da equação homogénea associada (ou seja, a solução de $P(D)y = 0$);
- $y_P(t)$ é uma solução particular de $P(D)y = h(t)$.

Queremos então seguir dois passos para obtermos a solução geral de qualquer equação linear de ordem superior:

1. Descobrir a solução geral da equação homogénea associada, $y_G(t)$.
2. Se $h(t) \ne 0$, descobrir a(s) solução(ões) particular(es) da equação.
   Em alguns casos, pode ser possível separar $h(t)$ em $h(t) = h_1(t) + \dots + h_k(t)$ de forma a facilitar os cálculos.

   De seguida, usar um dos métodos abaixo. O mais indicado de aplicar vai depender da equação em causa.

   - Fórmula da Variação das Constantes
   - Método dos Coeficientes Indeterminados

### Solução Geral da Equação Homogénea

O espaço das soluções da equação

$$
P(D) y = 0
$$

tem dimensão $n$, e como tal, a sua solução geral é da forma

$$
y(t) = \alpha_1 y_1 + \dots + \alpha_n y_n
$$

em que:

- $\alpha_1, \dots , \alpha_n$ são constantes reais;
- $y_1, \dots, y_n$ são $n$ soluções linearmente independentes da equação.

As soluções $y_1, \dots, y_n$ podem ser calculadas da seguinte forma.

1. Obter o polinómio caracteristico $P(D)$ da equação.
2. Fatorizar o polinómio obtido, na forma

   $$
   P(D) = (D - \lambda_1)^{m_1} \dots (D - \lambda_k)^{m_k}
   $$

   em que $\lambda_j$ com $j = 1, 2, \dots, k$ são raízes distintas de $P(D)$

3. Cada uma das soluções admitirá $m_j$ ($j = 1, \dots, k$) soluções linearmente independentes, obtidas do seguinte modo:

   - se $\lambda_j$ é uma [**raíz real**](color:green) de multiplicidade $m_j$ de $P(D)$, então a equação

     $$
     (D - \lambda_j) ^{m_j} y = 0
     $$

     admite $m_j$ soluções linearmente independentes

     $$
     e^{\lambda_j t} , te^{\lambda_j t}, \dots, t^{m_j - 1} e^{\lambda_j t}
     $$

   - se $\lambda_j = a_j + ib_j$ é uma [**raíz complexa**](color:pink) de multiplicidade $m_j$ de $P(D)$, então a equação

     $$
     (D - a_j - ib_j)^{m_j} (D - a_j + i b_j)^{m_j} y = 0
     $$

     admite $2m_j$ soluções linearmente independentes

     $$
     \begin{darray}{c}
     e^{a_j t} \cos(b_j t), t e^{a_j t} \cos (b_j t), \dots, t^{m_j - 1} e^{a_j t} \cos (b_j t)\\
     e^{a_j t} \sin(b_j t), t e^{a_j t} \sin (b_j t), \dots, t^{m_j - 1} e^{a_j t} \sin (b_j t)
     \end{darray}
     $$

### Fórmula da Variação das Constantes

:::tip[Quando usar]

Este método é o mais geral, ou seja, é aplicável a todos os problemas em que $h(t)$ é somente uma função contínua.
No entanto, pode não ser fácil de aplicar, e caso seja possível, pode ser benéfico aplicar outro método.

Este método requer a inversão de uma matriz, pelo que se a matriz for de dimensão $3 \times 3$ ou superior, pode-se revelar trabalhoso.

:::
