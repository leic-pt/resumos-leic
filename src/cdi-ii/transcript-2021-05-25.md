$S \in \R^3$ superfície orientável (tem uma normal definida continuamente "indica qual o lado de dentro e o de fora")

$F : \R^3 \to \R^3$

fluxo de $F$ através de $S$ = $\int_S F \cdot \vec n$ (integral de superfície de um campo escalar)

$= \int\int_D F(g(u,v)) \cdot (\frac{\partial g}{\partial u} \times \frac{\partial g}{\partial v}) \d u \d v$

Se $F = m \vec v$, fluxo = quantidade de massa (carga elétrica) que atravessa $S$ num instante de tempo

- O integral depende só da orientação da parametrização:
  - orientação certa: OK
  - orientação errada -> troco o sinal do integral

---

Divergência de um campo vetorial

$F : \R^3 \to \R^3$

$\div F = \frac{\partial F_1}{\partial x} + \frac{\partial F_2}{\partial y} + \frac{\partial F_3}{\partial z}$

$D \subset \R^3$ (aberto e limitado) domínio regular $\iff$ $\partial D$ é união finita de superfícies orientáveis.

Teorema de Divergência:

Se $D \subset \R^3$ for em domínio regular, seja $\vec n$ a normal em $\partial D$ que aponta para fora de $D$.

Então:

$$
\int_{\partial D} F \cdot \vec n = \int\int\int_D \dev F
$$

Exemplo:

$F(x,y,z) = (x,y, -2z)$

$S = \{x^2+y^2 = 1 + 2z^2, 0 \leq z \leq 1 \}$

oriendata para "fora"

**Qual o valor de $\int_S F \cdot \vec n$?**

$\div F = 1+1-2 = 0$

$\partial D = $ hiperboloíde + tampa de cima + tampa de baixo

Teorema Div:

$$
\int_{\partial D} F \cdot \vec n_{ext} = \int\int\int_D \div F = 0
$$

$$
\begin{array}{l}
\int_S F \cdot \vec n_{ext} + \int_{T_1} F \cdot \vec n_{ext} + \int_{T_2} F \cdot \vec n_{ext}\\
\implies \int_S F \cdot \vec n_{ext} = - \int_{T_1} F \cdot \vec n_{ext} - \int_{T_2} F \cdot \vec n_{ext}
\end{array}
$$

Em $T_1$, $F \cdot \vec n_{ext} = -2z$

$$
\int_{T_1} - 2z \d S = \int_{T_1} - 2 \d S = -2 \int_{T_1} 1 \d S = -2 \times 3 \pi
$$

Em $T_0$, $F \cdot \vec n_{ext} = 2z = 0$

$$
\int_{T_0} F \cdot \vec n_{ext} \d S = 0
$$

$$
\int_S F \cdot \vec n_{ext} = -(-6\pi ) - 0 = 6 \pi
$$

---

Exemplo:

$$
F(x,y,z) = \frac{(x,y,z)}{(x^2+y^2 +z^2)^{\partial{3}{2}}} \cdot (x,y,z)
$$

$\div F$:

$$
\begin{aligned}
\frac{\partial}{\partial x}(\frac{x}{(x^2+y^2+z^2)^{\frac{3}{2}}})
&= \frac{1 \cdot (x^2+y^2+z^2)^{\frac{3}{2}} - x \cdot \frac{3}{2}(x^2+y^2+z^2)^{\frac{1}{2}} \cdot 2x}{(x^2+y^2+z^2)^3}\\
&= \frac{(x^2+y^2+z^2)^{\frac{3}{2}} - 3x^2(x^2+y^2+z^2)^{\frac{1}{2}}}{(x^2+y^2+z^2)^3}\\
&= \frac{x^2+y^2+z^2 - 3x^2}{(x^2+y^2+z^2)^{\frac{5}{2}}}
\end{aligned}
$$

$$
\frac{\partial}{\partial y} (\frac{y}{(x^2+y^2+z^2)^{\frac{3}{2}}}) = \frac{x^2+y^2+z^2-3y^2}{(x^2+y^2+z^2)^{\frac{5}{2}}}
$$

$$
\frac{\partial}{\partial z} (\frac{z}{(x^2+y^2+z^2)^{\frac{3}{2}}}) = \frac{x^2+y^2+z^2-zy^2}{(x^2+y^2+z^2)^{\frac{5}{2}}}
$$

- Se $S$ for superfície fechada e $(0,0,0) \notin$ região delimitada por $S$.

$$
\int_S F \cdot \vec n_{ext} = \int\int\int_D \div F = 0
$$

....
