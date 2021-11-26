---
title: Equações Lineares de Ordem Superior
description: >-
  Equações Lineares de Ordem Superior
  Polinómio Característico (Diferencial)
  Solução Geral da Equação Homogénea
  Fórmula da Variação das Constantes
  Método dos Coeficientes Indeterminados
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

:::info[Exemplos]

|    Equação     |      $P(D)$      |
| :------------: | :--------------: |
|  $y^{(5)}=0$   |      $D^5$       |
|  $y'''+y''=0$  |   $D^3 + D^2$    |
|  $y''+3y = 0$  |    $D^2 + 3$     |
| $y'''+2y''+5y$ | $D^3 + 2D^2 + 5$ |

:::

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

### Método dos Coeficientes Indeterminados

Este método pode-se revelar mais fácil de aplicar, mas tem a desvantagem de **apenas ser aplicável** nos casos em que o termo não homogéneo, $h(t)$ é uma função da forma (ou combinação linear, isto é, soma de funções da forma):

$$
\begin{darray}{c}
t^p e^{\lambda t} & \text{ou} & t^p e^{at} \cos (bt) & \text{ou} & t^p e^{at} \sin (bt) &, & p \geq 0
\end{darray}
$$

Dada uma função $h(t)$, define-se [**polinómio aniquilador**](color:orange) de $h$ ao polinómio diferencial $P_A(D)$ que verifica

$$
P_A(D) h = 0
$$

Se $h(t)$ satisfaz as condições indicadas acima, então existe um polinómio aniquilador:

- se $b(t) = t^p e^{\lambda t}$, então o seu **polinómio aniquilador** é da forma

  $$
  P_A (D) = (D-\lambda)^{p + 1}
  $$

- se $b(t) = t^p e^{at} \cos (bt)$ ou $b(t) = t^p e^{at} \sin(bt)$, então o seu **poliómio aniquilador** é da forma

  $$
  P_A(D) =(D-(a+ib))^{p+1} (D-(a-ib))^{p+1} = ((D-a)^2 +b^2)^{p+1}
  $$

Para resolver uma equação do tipo $P(D)y=h(t)$ pelo método dos coeficientes indeterminados, segue-se os seguintes passos:

1. Determinar o polinómio aniquilador, $P_A(D)$, de $b(t)$. Seja $k$ o seu grau.
2. Aplicar $P_A(D)$ a ambos os membros da equação inicial, donde resulta:

   $$
   P(D)y=h(t) \implies P_A(D)P(D)y=P_A(D)h(t) \implies P_A(D)P(D)y=0
   $$

   Note-se que a aplicação de $P_A(D)$ [**não**](color:red) produz uma equação equivalente à inicial.
   Embora qualquer solução de $P(D)y = h(t)$ seja solução de $P_A(D)P(D)y =0$, nem todas as equações da segunda
   equação resolvem a primeira.

   Assim, obtivemos uma equação linear homogénea de coeficientes constantes de ordem $n + k$.

3. A solução geral da equação $P_A(D)P(D)y=0$ é dada por

   $$
   y(t) = \alpha_1 y_1 + \dots + \alpha_n y_n + \beta_1 w_1 + \dots + \beta_p w_p
   $$

   em que $y_1, \dots, y_n$ são as soluções linearmente independentes da equação $P(D)y= 0$
   determinadas previamente, ou seja:

   $$
   y_G(t) = \alpha_1 y_1 + \dots + \alpha_n y_n
   $$

   Tem-se então que existem $\beta_1, \dots, \beta_n \in \R$ tais que

   $$
   y_P = \beta_1 w_1 + \dots + \beta_p w_p
   $$

   é uma solução particular de $P(D)y=h(t)$.

4. Determinam-se os coeficientes $\beta_1, \dots, \beta_p$ de modo a que $w = \beta_1 w_1 + \dots + \beta_p w_p$ verifique $P(D) w = h(t)$.

:::info[Exemplo]

**Determinar a solução do PVI**

$$
\begin{darray}{c}
y'' + 3y' + 2y = e^{-x} & y(0) = 0, y'(0) = 1
\end{darray}
$$

Como já [vimos anteriormente](#obter-a-solução-geral), a solução da equação diferencial irá ser da forma

$$
y(x) = y_G(x) + y_P(x)
$$

- **Cálculo de $y_G$**

  A equação homogénea associada é $y'' + 3y' + 2y = 0$.

  O seu polinómio característico é

  $$
  P(D) = D^2 + 3D + 2 = (D+1)(D+2)
  $$

  Então, [como explicado anteriormente](#solução-geral-da-equação-homogénea), vamos ter

  $$
  y_G(x) = c_1 e^{-t} + c_2 e^{-2t}
  $$

- **Cálculo de $y_P$**

  Começamos por determinar o **polinómio aniquilador** de $h(t)$, que neste caso será

  $$
  P_A(D) = D + 1
  $$

  Vamos então multiplicar ambos os membros da equação por $P_A(D)$:

  $$
  (D+1)(D+2)y = e^{-x} \implies (D+1)^2(D+2) = 0
  $$

  Resolvendo a equação homogénea, obtêm-se

  $$
  y(x) = c_1 e^{-x} + \underbrace{c_2 x e^{-x}}_{\text{solução particular}} + c_3 e^{-2x}
  $$

  Ambos os termos $c_1 e^{-x}$ e $c_3 e^{-2x}$ fazem parte da solução geral da equação homogénea.  
  Assim, a solução particular é $w(x) = \alpha x e^{-x}$

  Temos então de determinar o valor de $\alpha$ de forma a que $w(x)$ seja uma solução da equação do enunciado.
  Para isso, substituímos esta solução na expressão inicial:

  $$
  \begin{aligned}
  \left(\alpha x e^{-x}\right)'' + 3\left(\alpha x e^{-x}\right)' + 2\left(\alpha x e^{-x}\right) &= e^{-x}\\
  \left(\alpha \left(1-x\right)e^{-x}\right)' + 3\left(\alpha \left(1-x\right)e^{-x}\right) + 2\left(\alpha x e^{-x}\right) &= e^{-x}\\
  \left(\alpha \left(x-2\right)e^{-x}\right) + 3\left(\alpha \left(1-x\right)e^{-x}\right) + 2\left(\alpha x e^{-x}\right) &= e^{-x}\\
  \alpha \left(x-2 + 3\left(1-x\right) + 2x\right) &= 1\\
  \alpha &= 1
  \end{aligned}
  $$

  Conclui-se que

  $$
  y_P (x) = x e^{-x}
  $$

- **Cálculo da solução do PVI**

  Juntando o que calculámos até agora, temos a solução geral da equação:

  $$
  y(x) = y_G(x) + y_P(x) = c_1 e^{-x} + c_2e^{-2x} + xe^{-x}
  $$

  Então, para que as soluções iniciais se verifiquem:

  $$
  y'(x) = -c_1 e^{-x} -2 c_2 e^{-2x} + (1-x)e^{-x}
  $$

  $$
  \begin{cases}
  y(0) = 0\\
  y'(0) = 1
  \end{cases} \Leftrightarrow \begin{cases}
  c_1+c_2= 0\\
  -c_1-2c_2 + 1= 1
  \end{cases} \Leftrightarrow \dots \Leftrightarrow \begin{cases}
  c_1 = 0\\
  c_2 = 0
  \end{cases}
  $$

  Assim, a solução do PVI é:

  $$
  y(x) = xe^{-x}
  $$

:::
