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

3. Cada uma das soluções de $P(R) y = 0$ admitirá $m_j$ ($j = 1, \dots, k$) soluções linearmente independentes, obtidas do seguinte modo:

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

     Dá para simplificar estas soluções:

     $$
     \begin{darray}{l}
     t^k e^{at} \sin (bt) = \frac{1}{2i} t^k e^{at} \left(e^{i bt} - e^{i bt} \right) = \frac{1}{2i} t^k e^{(a+ib)t} + \frac{1}{2i} t^k e^{(a - ib)t}\\
     t^k e^{at} \cos (bt) = \frac{1}{2} t^k e^{at} \left(e^{ibt} + e^{-ibt} \right) = \frac{1}{2} t^k e^{(a+ib) t} + \frac{1}{2} t^k e^{(a-ib)t}
     \end{darray}
     $$

:::info[Exemplo]

**Determinar a solução geral da equação**

$$
y''' + 4y'' + 4y' = 0
$$

Começamos por escrever o **polinómio característico**:

$$
P(D) = D^3 + 4D^2 + 4D = D(D+2)^2
$$

- Para $Dy = 0$, temos a solução $e^0t$;
- Para $(D+2)^2 y = 0$ temos as soluções $e^{-2t}$ e $te^{-2t}$.

Assim, a solução geral é

$$
y(t) = c_1 + c_2 e^{-2t} + c_3 t e^{-2t}
$$

:::

:::details[Mais exemplos (complexos e PVI)]

[**Exemplo com complexos**](color:yellow)

**Determinar a solução geral da equação**

$$
y'' + 2y' + 2y = 0
$$

Começamos por escrever o **polinómio característico**:

$$
P(D) = D^2 + 2D + 2 = (D - (-1+i))(D-(-1-i))
$$

Temos assim duas soluções complexas, $e^{-t} \cos t$ e $e^{-t} \sin t$.

Assim, a solução geral é

$$
y(t) = c_1 e^{-t} \cos t + c_2 e^{-t} \sin t
$$

---

[**Exemplo PVI**](color:yellow)

**Determinar a solução do Problema de Valor Inicial (PVI)**

$$
\begin{darray}{ccc}
y'' + 8y' + 12y = 0 & y(0) = 3 & y'(0) = -14
\end{darray}
$$

O primeiro passo é determinar a solução geral da equação, como feito anteriormente.  
Começamos por determinar o **polinómio característico**:

$$
P(D) = D^2 + 8D + 12 = (D+6)(D+2)
$$

A solução geral é então

$$
y(t) = c_1 e^{-6t} + c_2 e^{-2t}
$$

Vamos agora determinar $c_1$ e $c_2$ de forma a respeitarem as condições iniciais.

$$
y'(t) = -6c_1e^{-6t} -2c_2e^{-2t}
$$

$$
\begin{cases}
y(0) = 3\\
y'(0) = -14
\end{cases} \implies \begin{cases}
c_1 + c_2 = 3\\
-6c_1 - 2c_2 = -14
\end{cases} \implies \begin{cases}
c_1 = 2\\
c_2 = 1
\end{cases}
$$

Assim, a solução é

$$
y(t) = 2e^{-6t} + e^{-2t}
$$

:::

### Fórmula da Variação das Constantes

:::tip[Quando usar]

Este método é o mais geral, ou seja, é aplicável a todos os problemas em que $h(t)$ é somente uma função contínua.
No entanto, pode não ser fácil de aplicar, e caso seja possível, pode ser benéfico aplicar outro método.

Este método requer a inversão de uma matriz, pelo que se a matriz for de dimensão $3 \times 3$ ou superior, pode-se revelar trabalhoso.

:::

Para a aplicação desta fórmula, precisamos de definir a [**matriz Wronskiana**](color:orange).  
Sendo $y_1, \dots, y_n$ as [soluções linearmente independentes da equação homogénea associada](#solução-geral-da-equação-homogénea), define-se a **matriz Wronskiana** como:

$$
W(t) = \begin{bmatrix}
y_1 & \dots & y_n\\
y'_1 & \dots & y'_n\\
\vdots & \vdots & \vdots\\
y_1^{(n-1)} & \dots & y_n^{(n-1)}
\end{bmatrix}
$$

A expressão que define as soluções particulares é:

$$
y_P(t) = \begin{bmatrix}
y_1(t) & \dots & y_n(t)
\end{bmatrix}
\int^t W^{-1}(s) \begin{bmatrix}
0 \\ \vdots \\ 0 \\ h(s)
\end{bmatrix} \d s
$$

Como se pode notar, é necessário inverter a matriz $W(t)$, algo que se pode mostrar bastante trabalhoso.

:::details[Exemplo]

**Pegando num exemplo da secção anterior, queremos determinar a solução geral da equação**

$$
y'' + 2y' + 2y = 2e^t
$$

[Como explicado acima](#obter-a-solução-geral), sabemos que a solução geral da equação é da forma

$$
y(t) = y_G(t) + y_P(t)
$$

Temos de calcular tanto $y_G$ como $y_P$ para obtermos a solução geral.

- **Cálculo de $y_G$**

  Pelo exemplo anterior, a solução geral de

  $$
  y'' + 2y' + 2y = 0
  $$

  é $y(t) = c_1 e^{-t} \cos t + c_2 e^{-t} \sin t$, pelo que vamos ter $y_G$:

  $$
  y_G(t) = c_1 e^{-t} \cos t + c_2 e^{-t} \sin t
  $$

- **Cálculo de $y_P$**

  O primeiro passo é determinar a **matriz Wronskiana**:

  $$
  W(t) = \begin{bmatrix}
  e^{-t} \cos t & e^{-t} \sin t\\
  (e^{-t} \cos t)' & (e^{-t} \sin t)'
  \end{bmatrix} = \begin{bmatrix}
  e^{-t} \cos t & e^{-t} \sin t\\
  -e^{-t} (\cos t + \sin t) & e^{-t} (-\sin t + \cos t)
  \end{bmatrix}
  $$

  De seguida, determinar a inversa da matriz $W$, isto é, $W^{-1}$.  
  Podemos otimizar este processo, reparando que apenas necessitamos da coluna direita, visto a esquerda irá sempre multiplicar por zero.

  $$
  W^{-1} = \dots = \begin{bmatrix}
  ? & -e^t \sin t\\
  ? & e^t \cos t
  \end{bmatrix}
  $$

  Assim, podemos determinar $y_P(t)$:

  $$
  \begin{aligned}
  y_P(t) &= \begin{bmatrix}
  e^{-t} \cos t & e^{-t} \sin t
  \end{bmatrix} \int^t \begin{bmatrix}
  ? & -e^s \sin s\\
  ? & e^s \cos s
  \end{bmatrix} \begin{bmatrix}
  0 \\ 2e^{-s}
  \end{bmatrix} \d s\\
  &= \begin{bmatrix}
  e^{-t} \cos t & e^{-t} \sin t
  \end{bmatrix} \int^t \begin{bmatrix}
  -2 \sin s\\
  2 \cos s
  \end{bmatrix} \d s\\
  &= \begin{bmatrix}
  e^{-t} \cos t & e^{-t} \sin t
  \end{bmatrix} \begin{bmatrix}
  2 \cos t\\
  2 \sin t
  \end{bmatrix}\\
  &= 2 e^{-t} \cos^2 t + 2 e^{-t} \sin^2 t\\
  &= 2 e^{-t}
  \end{aligned}
  $$

Então, a solução geral é:

$$
y(t) = c_1 e^{-t} \cos t + c_2 e^{-t} \sin t + 2 e^{-t}
$$

:::
