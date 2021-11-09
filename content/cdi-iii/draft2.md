Caminho em $\R^n$

$$
\gamma : [a, b] \to \R^n
$$

contínua

um caminho regular é:

$\gamma \to \C^1$ (incluindo os extremos)

$\gamma'(t) \ne 0$

$$
\lim_{\gamma \to 0} \frac{\gamma(t+\delta) - \gamma(t)}{\delta} = \gamma'(t)
$$

---

seccionalmente regular

$\gamma : [a, b] \to \R^n$

$[a,b] = \bigU^n_{j=0} [a_j, b_j]$

$a_0 = a, b_n = b, a_{j + 1} = b_j$

$\gamma : [a_j,b_j] \to \R^n$ é um caminho regular

(imagem de vários caminhos e tal)

---

exemplo de caminho não regular (pela tangente em $x=0$)

$\gamma(x) = (x, x^2 \sin \frac{1}{x})$

existe no ponto, mas não existe o limite

---

comprimento de um caminho

$$
[a, b] = \bigU^{n-1}_{j=0} [a_j, a_{j+1}]
$$

$a_1 = a, a_j < a_{j+1}, a_n = b$

$c = \gamma([a,b])$

$$
l (c) = \sum_{j=0}^{n-1} || \frac{\gamma(a_{i+1}) - \gamma(a_i)}{a_{i+1} - a_i} || (a_{i+1} - a_i)
= \sum || \gamma'(c_i) || (a_{i+1} - a_i) = \int_{a}^{b} ||\gamma'(t)|| \d t = \int_C 1
$$

integral de linha de um campo vetorial $F: U \containseq \R^n \to \R^n$ ao longo da curva $C = \gamma([a,b])$ é

$$
\int_C F = \int_{a}^{b} F(\gamma(t)) \cdot \gamma'(t) \d t
$$

ou se $f: U \containseq \R^n \to \R$:

$$
\int_C f = \int_{a}^{b} f(\gamma(t)) \cdot ||\gamma'(t)|| \d t
$$

---

Dois caminhos $\gamma_1 : [a_1, b_1] \to \R^n$ e $\gamma_2: [a_2, b_2] \to \R^n$ são equivalentes se existe $\phi: [a_2, b_2] \to [a_1, b_1]$
de classe $C_1$ com $\phi' > 0$ tal que

$$
\gamma_2 = \gamma_1 \circ \phi
$$

$$
\int F \cdot \d \gamma_1 = \int F \cdot \d \gamma_2
$$

Se tiveremos $\phi' < 0$, temos

$$
\int F \cdot \d \gamma_1 = - \int F \cdot \d \gamma_2
$$

(depende apenas da curva e do sentido em que se percorre a curva)

---

teorema de green

$$
F: \R^2 \to \R^2\\
F = (P, Q)\\
P: \R^2 \to \R\\
Q: \R^2 \to \R
$$

$
F= (P, Q)
$

$\gamma: [a,b] \to \R^2$

$\gamma (t) = (x(t), y(t))$

$$
\int F \cdot \d \gamma = \int_a^b (P(x(t), y(t)), Q(x(t), y(t))) \cdot (x'(t), y'(t)) \d t
= \int_{a}^{b} P(x(t),y(t)x'(t)) \d t + \int_{a}^{b} Q(x(t),y(t))y'(t) \d t
= \int_{\gamma} P \d x + Q \d y
$$

enunciado teorema de green

Seja $F=(P,Q)$ : $U \to \R^2$ de classe $C^2$

$U \contained \R^2$ aberto $\overline \contained U$

$D$ é um domínio simples

$\partial D$ percorrida no sentido positivo

Então

$$
\iint_D (\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}) \d x \d y = \int_{\partial D} P \dx + Q \d y
$$

---

domínio elementar (acho que é só para a demonstração do teorema de green idk):

$D \subset \R^2$

(idk, letra com | e um ~ ig)

se existe $\phi_1$, $\phi_2$, $\psi_1$, $\psi_2$ contínuas e seccionalmente $C^1$ e $a < b$, $c < d$ tais que

$$
D = \{(x,y) \in \R^2 : a < x < b \land \phi_1(x) < y < \phi_2(x) \} = \{(x,y) \in \R^2 : c < x < d \land \psi_1(x) < y < \psi_2(x) \}
$$

---

demonstração:

Se $Q = 0$ e $P$ tem domínio elementar

$$
-\iint_D \frac{\partial P}{\partial y} = \int_{\partial D} P \d x
$$

$$
\iint_D \frac{\partial P}{\partial y} \d x \d y = \int_{a}^{b} \int_{\phi_1(x)}^{\phi_2(x)} \frac{\partial P(x,y)}{\partial y} \d y \d x
= \int_{a}^{b} (P(x,\phi_2(x)) - P(x, \phi_1(x))) \d x
$$
