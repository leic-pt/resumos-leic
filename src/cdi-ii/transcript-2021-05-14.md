$C$ surva $\subset \R^n$, $F: \R^n \to \Rn$ campo vetorial

$$
\int_C F \cdot \d \gamma = \int^b_a F(g(t)) \cdot g'(t) \d t
$$

$$
g: ] a, b [ \to \R^n
$$

parametrização de $C$

1. Duas parametrizações dão o mesmo integral (a menos de sinal que depende do sentido)

Exemplo:

$F$ é constante, $F = (F_1, \dots F_n)$ fixo

$$
\begin{aligned}
\int_C F \cdot \d \gamma &= \int^b_a F \cdot g'(t) \d t\\
&= \int^b_a (F_1 g_1'(t) + \dots F_n g_n'(t)) \d t\\
&= F_1 \int^b_a g'(t) \d t + \dots + F_n \int^b_a g_n'(t) \d t\\
&= F_1 [g_1(b) - g_1(a)] + \dots + F_n [g_n(b) - g_n(a)]\\
&= F \cdot (g(b) - g(a))\\
&= F\cdot (B-A)
\end{aligned}
$$

O valor do integral só depende dos extremos da curva

Def: Um campo vetorial cujo integral sobre qualquer curva depende só dos
extremos da curva diz-se **conservativo**.

Teorema (T. F. Cálculo para integrais de linha)

Se $\phi : \R^n \to \R, C^1$ e uma curva $C$ com extremos $A$ e $B$, parametrizada
por $g: [a,b] \to \R^n$, então

$$
\int_C \nabla \phi \d g = \phi(B) - \phi(A)
$$

Dem:

$$
\begin{aligned}
\int_C \nabla \phi \d g &= \int^b_a \nabla \phi (g(t)) \cdot g'(t) \d t\\
&= \int^b_a \frac{\d}{\d t}(\phi \circ g)(t) \d t\\
&= (\phi \circ g)(b) - (\phi \circ g)(a)\\
&= \phi(g(b)) - \phi(g(a))\\
&= \phi(B) - \phi(A)
\end{aligned}
$$

Corolário:

Se $\phi: \R^n \to \R$, $C^1$, $\nabla \phi$ é conservativo, $\nabla \phi: \R^n \to \R^n$

Se $\phi: \R^n \to \R$, $C^1$, e $C$ for uma curva fechada ($B = A$, ou seja, ponto inicial é o mesmo que o ponto final)
então $int_C \nabla \phi \d \gamma = 0$

Dado $F: \R^n \to \R^n$ campo vetorial, será que existe $\phi: \R^n \to \R$, $C^1$ tal que $\nabla \phi = F$?
($\phi$ é um potencial de $F$)

Neste caso dizemos que $F$ é um **campo gradiente**.

Gradiente implica conservativo.

Definição:

$F: \R^n \to \R^n$ é fechado se $\frac{\partial F_j}{\partial x_1} = \frac{\partial F_i}{\partial x_j}, i,j = 1, \dots, n$

Exemplo:

$F(x,y,z) = (y,x,1)$

$$
\begin{array}{lll}
\frac{\partial F_1}{\partial y} = 1 &
\frac{\partial F_2}{\partial x} = 1 &
\frac{\partial F_1}{\partial z} = 0\\
\frac{\partial F_3}{\partial x} = 0 &
\frac{\partial F_2}{\partial z} = 0 &
\frac{\partial F_2}{\partial y} = 0
\end{array}
$$

Logo, $F$ é fechado.

Teorema: Se $F$ for campo gradiente $F \nabla \phi, \phi \in C^2$ então $F$ é fechado

Demonstração: Fixamos $i,j$

$$
\frac{\partial F_i}{\partial x_j} = \frac{\partial}{\partial x_j}(\frac{\partial \phi}{\partial x_i}) = \frac{\partial}{\partial x_i}(\frac{\partial \phi}{\partial x_j}) = \frac{\partial F_j}{\partial x_i}
$$

Logo $F$ é fechado

Se é gradiente então é conservativo e fechado.

Exemplos:

$F(x,y) = (x^2 y, \frac{x^3}{3})$

$F$ é gradiente?

1. $F$ é fechado?

$$
\begin{array}{ll}
\frac{\partial(x^2y)}{\partial y} = x^2 &
\frac{\partial(\frac{x^3}{3})}{\partial x} = x^2
\end{array}
$$

Então $F$ é fechado.

2. $F$ é gradiente? $F = \nabla \phi$

$$
\begin{cases}
\frac{\partial \phi}{\partial x} = x^2 y \Leftrightarrow \phi(x,y) = \frac{x^3y}{3} + C(y)\\
\frac{\partial \phi}{\partial y} = \frac{x^3}{3} \Leftrightarrow \phi(x,y) = \frac{x^3}{3} \cdot y + D(x)
\end{cases}
$$

Por exemplo, pondo? $C,D \equiv 0$, $\phi(x,y) = \frac{x^3y}{3}$ é um potencial de $F$.

b) Calcule $\int_C F \d g$, tal que $g:[0,1] \to \R^2$ é uma curva fechada

$$
\int_C F \d g = \phi(B) - \phi (A) = 0
$$

Nota: Se $C$ é fechado, às vezes escreve-se

$$
\int_C F \d g
$$

como

$$
\oint_C F \d g
$$
