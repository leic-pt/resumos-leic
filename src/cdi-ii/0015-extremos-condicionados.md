---
description: Extremos Condicionados. Integrais de Campos Escalares em Variedades.
---

# Extremos Condicionados

[[toc]]

## Extremos Condicionados

$M$ variedade de $\dim m \subset \R^n$

$$
\begin{array}{ll}
M = \{x \in \R^n: F(x) = 0\} & F: \R^n \to \R^{n-m}
\end{array}
$$

$f: \R^n \to \R$

Como calcular máximo (ou mínimo) de $f$ em $M$?

Seja $\gamma$ caminho em $M$ e $x_0$ um máximo local em $M$

$\gamma(0) =x_0$, $f(\gamma(t))$ atinge o máximo em $t=0$

$$
\frac{\d}{\d t} f(\gamma(t)) \big|_{t=0} = 0
$$

$$
\begin{array}{ll}
\nabla f(\gamma (0)) \cdot \gamma'(0) = 0 & \nabla f(x_0) \cdot \gamma'(0) = 0 \forall \gamma \text{ caminho com } \gamma(0) = 0
\end{array}
$$

$$
\implies \nabla f(x_0) \in (T_{x_0}M)^{\perp} = \mathcal{L}\{\text{linhas de } DF(x_0)\}
$$
