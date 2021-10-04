## 16h54

Exponencial de matrizes

$$
e^x = \sum_{k = 0} \frac{\alpha ^n }_{n!}
$$

Teorema:

Seja $A$ uma matriz quadrada (constante).
Então, a função matricial $E(t) = e^{tA}$ satisfaz as seguintes propriedades:

- $\frac{\d E(t)}{\d t} = AE(t) = E(t) A$
- $E(0) = Id$

$$
E(t) = Id + tA + \frac{t^2}{2}A^2 + \frac{t^3}{3!} + \dots
$$

demonstração propriedade 1:

$$
\begin{aligned}
\frac{\d E(t)}{\d t} &= \frac{\d }{\d t} (\sum_{k=0}^{+\infty} \frac{t^k}{k!}A^k)\\
&=\sum_{k=0}^{+\infty} \frac{kt^{k-1}}{h!}A^k\\
&=\sum_{k=1}^{+\infty} \frac{t^{k-1}}{(k-1)!} A^k\\
&=\sum_{k=0}^{+\infty} \frac{t^k}{k!} A^{k+1}\\
&=\lim_{n \to +\infty} \left(\sum_{k=0}^{N} \frac{t^k}{k!} A^{k+1}\right)\\
&=\lim_{n \to +\infty} \left(\sum_{k=0}^{N} \frac{t^k}{k!} A^{k}\right)A\\
&=e^{tA}A
\end{aligned}
$$

Corolário:

$$
(e^A)^{-1} = e^{-1}
$$

---

Teorema:

Seja $A$ matriz $nxn$ (constante) e $y_0 \in \R^n$, $t_0 \in \R$, ....?

$$
\frac{\d y}{\d t} = Ay \text{ com } y(t_0) = y_0
$$

tem uma única solução $y(t)$ que pode ser calculada por $y(t) = e^{(t-t_0) A} y_0$

exemplo:

$$
\begin{cases}
\frac{\d x}{\d t} = 2x + y\\
\frac{\d y}{\d t} = 0
\end{cases}
$$

$\frac{\d y}{\d t} = Ay$

$$
y = \begin{bmatrix} x \\ y \end{bmatrix}\\
y_0(t_0) = \begin{bmatrix} x_0 \\ y_0 \end{bmatrix}
$$

...

---

Corolário:
Sejam $A$ e $B$ $n\times n$ tais que $AB = BA$, então $e^{A+B} = e^A e^B$

---

Teorema:

Seja $A$ uma matrix $n \times n$ (constante). Então as soluções de

$$
\frac{\d }{\d t} y = Ay
$$

constituem um espaço linear de dimensão $n$.

---

Proposição:

Um vetor $v$ é um vetor próprio de $A$ e corresponde ao valor próprio $\lambda$ se e só se
$y(t) = e^{t \lambda} v$ é solução de $\frac{\d y}{\d t} = Ay$.

---

Proposição:

Seja $A$ $n\timesn$ com entradas reais.
Então $y: \R \to \C^n$ é solução de $\frac{\d y}{\d t} = Ay$ se e só se

$$
\begin{darray}{ccc}
u(t) = R_e y(t) & \text{e} & v(t) = I_m y(t)
\end{darray}
$$

São soluções reais da mesma equação

$$
(\frac{\d u}{\d t} = Au \land \frac{\d v}{\d t} = Av) \Leftrightarrow \frac{\d u}{\d t} + i \frac{\d v}{\d t} = Au + iAv \Leftrightarrow \frac{\d }{\d t}(u + iv) = A(u + iv)
$$

Exemplo:

$$
\frac{\d }{\d t} (x, y) = ... (x, y)
$$

$$
\frac{\d }{\d t} y = Ay
$$

...
