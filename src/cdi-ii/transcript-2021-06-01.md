$F(x,y,z) = (x e^y, -2e^y, z e^y)$

$F = \rot A, A = (-z e^y, 0, x e^y)$

$S = \{x^2+z^2 = y^2: 1 < z < 2 \}$

[imagem]

$$
\int_S F \cdot \vec n = \int_S \rot A \cdot \vec n = \int_{\partial S} A \d g
$$

$C_1: x^2+z^2 = 1, y = 1$

$$
\begin{array}{ll}
g(t) = (\cos t, 1, \sin t) & g'(t) = (-\sin t, 0, \cos t)\\
A(g(t)) = (-e \sin t, 0, e\cos t) &
\end{array}
$$

$$
\int_{C_1} A \d g = - \int_0^{2 \pi} A(g(t)) \cdot g'(t) \d t = - 2\pi e
$$

$C_2: x^2+z^2 = 4, y = 2$

$$
\begin{array}{ll}
g(t) = (2\cos t, 2, 2\sin t) & g'(t) = (-2\sin t, 0, 2\cos t)\\
A(g(t)) = (-2e^2 \sin t, 0, 2e^2\cos t) &
\end{array}
$$

$$
\int_{C_2} A \d g = \int_0^{2 \pi} A(g(t)) \cdot g'(t) \d t = \int_0^{2 \pi} 4 e^2 \d t = 8\pi e^2
$$

$$
\int_S F \cdot \vec n = 8\pi e^2 - 2\pi e
$$

---

Significado geométrico da divergência

$$
F: \R^3 \to \R^3, C^1, x_0 \in \R^3
$$

$$
\int_{\partial B_{\epsilon} (x_0)} F \cdot \vec n = \int_{\partial B_{\epsilon} (x_0)} \div F \aprox \div F(x_0) \int_{\partial B_{\epsilon} (x_0)} 1
= \div F(x_0) \cdot \text{volume}(B_{\epsilon} (x_0))
$$

$$
\div_F(x_0) = \lim_{\epsilon \to 0} \frac{1}{\text{vol}(B_{\epsilon} (x_0))} \int_{\partial B_{\epsilon} (x_0)} F \cdot \vec n
$$

- Se $\div F(x_0) > 0$, então $\int_{\partial B_{\epsilon} (x_0)} F \cdot \vec n > 0$
  Em $x_0$ estamos a introduzir fluxo
- Se $\div F(x_0) < 0$, então $\int_{\partial B_{\epsilon} (x_0)} F \cdot \vec n < 0$
  Em $x_0$ estamos a retirar fluxo
- Se $\div F(x_0) = 0$

---

Significado geométrico do rotacional

$$
\begin{array}{lll}
F: \R^3 \to \R^3 & C^1 & x_0 \in \R^3
\end{array}
$$

$$
\int_{S_{\epsilon}} \rot F \cdot \vec n = \int_{\partial S_{\epsilon}} F \d g
$$

$$
\rot F(x_0) \cdot \vec n \int_{S_{\epsilon}} 1 \d S = \rot F(x_0) \cdot \vec n \text{ área}(S_{\epsilon})
$$

$$
\rot F(x_0) \cdot \vec n = \lim_{\epsilon \to 0} \frac{1}{\text{área}(S_{\epsilon})} \int_{\partial S_{\epsilon}} F \d g
$$

$\rot F(x_0) \cdot \vec n$ é máximo quando $\vec n$ tem a mesma direção e sentido de $\rot F(x_0)$

$$
\rot F(x_0) \cdot \frac{\rot F(x_0)}{|| \rot F(x_0)||} = \frac{||\rot F(x_0)||^2}{|| \rot F(x_0)||} = ||rot F(x_0)||
$$

Intensidade do trabalho
