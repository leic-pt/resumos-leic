---
title: Draft
path: /cdi-iii/draft
type: content
---

horários de dúvidas

terças 18h -> 20h
quartas 19h -> 20h
sexta 19h -> 20h

sala de dúvidas no departamento de matemática
logo qnd se entra à direita

# Equações diferenciais

## Equações diferenciais ordinárias

**Equação diferencial ordinária de 1º ordem:**

$y' = e^t$: $y(t) = e^t + c$

Ou se soubermos um caso específico, e.g. $y(0) = 2$, podemos descobrir $c$: $y(t) = e^t + 1$

**Equação diferencial ordinária de 2º ordem:**

$$
\begin{darray}{c}
\frac{\d^2 x}{d t^2} = e^t\\
\frac{\d x}{\d t} = e^t + c\\
x = e^t + et + d
\end{darray}
$$

## Equações diferenciais parciais (EDP)

---

EDO 2º ordem (escalar)

$y'' + \sin y = 0$

$t, y(t)$

---

EDO 2º ordem

$$
\frac{\d^2 M}{\d t^2} = -\frac{M}{||M||^3}
$$

Força gravítica ^

$M = (x,y,z)$

$$
\begin{darray}{ccc}
\frac{\d^2 x}{\d t^2} = \frac{x}{\sqrt((x^2+y^2+z^2)^3)}\\
\frac{\d^2 y}{\d t^2} = \frac{y}{\sqrt((x^2+y^2+z^2)^3)}\\
\frac{\d^2 z}{\d t^2} = \frac{z}{\sqrt((x^2+y^2+z^2)^3)}
\end{darray}
$$

$F=ma$

$$
\frac{\d^2 x}{\d t^2} = \frac{1}{m} F(\dots)
$$

Próximas aulas: EDO 1º ordem e escalares

$y(t + \delta)$

$$
\frac{y(t + \delta) - y(t)}{\delta} = d(y,t)\\
\frac{\d y}{\d t} (t) = f(y(t), t)
$$

---

% depois do caso b(t) = 0, não sei em que contexto é que isto surgiu

$\frac{1}{x} \frac{\d x}{\d t} = a(t)$, se $x(t_0) \ne 0$, num intervalo aberto $I$ tal que $t_0$ e $I$.

$\frac{\d}{\d t} (\log |x|) = a(t)$

$log|x| = \int a(t) \d t + x$
$|x| = e^{\int a(t) \d t + c}$

$x = \pm e^c e^{\int a(t) \d t}$

$x = k e^{\int a(t) \d t}$, em que $k \ne 0$

Se $x(t_0) = 0$ temos a solução $x(t) = 0$

$e^{\int_e^t a(s) \d s} = e^{\int_e^{t_0} a(s) \d s} + e^{\int_{t_0}^t a(s) \d s}$

$\frac{\d x}{\d t} a(t) x \Leftrightarrow e^{-\int a(t) \d t} \frac{\d x}{\d t} - a(t) x e^{-\int a(t) \d t}$

$\frac{\d}{\d t} (x e^{- \int a(t) \d t}) = 0$

$x e^{-\int a(t) \d t} = k$

$x = k e^{\int a(t) \d t}$

---

CASO GERAL

PRO TIP: saber os casos particulares de cor, não usar o caso geral para chegar lá

$$
\frac{\d x}{\d t} = a(t) x + b(t)
$$

$
a,b \in C
$

$\mu \equiv \mu (t)$

$$
\frac{\d x}{\d t} \mu - a(t) x \mu = b(t) \mu
$$

$$
\frac{\d}{\d t} (x \cdot \mu) =b(t) \mu\\
\frac{\d x}{\d t} \mu + x \frac{\d u}{\d t} = b(t) \mu
$$

$$
\frac{\d \mu}{\d t} = - a(t) \mu
$$

por exemplo

$$
\mu = e^{- \int a(t) \d t}
$$

$$
\frac{\d}{\d t} ( x e^{- \int a(t) \d t}) = b(t) e^{- \int a(t) \d t}
$$

$$
x e^{- \int a(t) \d t} = \int b(t) e^{- \int a(t) \d t} \d t
$$

$$
x = e^{\int a(t) \d t} \int b(t) e^{- \int a(t) \d t} \d t
$$

$\mu \equiv \mu (t)$ fator de integração, que satisfaça a condição e seja diferente de zero

$$
\mu = e^{- \int_{t_0}^{t} a(s) \d s}
$$

$$
x(t) \mu (t) - x(t_0)  \mu'' (?) (t_0) = \int_{t_0}^t b(s) \mu (s) \d s\\
x(t) = \frac{1}{\mu (t)} ( x_0 + \int_{t_0}^t b(s) e^{-\int_{t_0}^s a(z) \d z} \d s)\\
x(t) = e^{\int_{t_0}^t a(s) \d s} (x_0 + \int_{t_0}^t b(s) e^{-\int_{t_0}^s a(z) \d z} \d s)
$$

:::tip[Teorema]

**Variação das constantes**

$$
x(t) = x_0 e^{\int_{t_0}^t a(z) \d z} + \int_{t_0}^t b(s) e^{\int_s^t a(z) \d z} \d s
$$

:::

---

Exemplos

$y' + 2ty = t$ e $y(0) = 1$

$$
\underbrace{\mu y' + 2t}_{(\mu y)'} \mu y = \mu t
$$

$\mu' = 2t\mu$ por exemplo $\mu = e^{t^2}$

$$
(e^{t^2} y)' = e^{t^2} \dot t\\
e^{t^2} = \frac{e^{t^2}}{2} + c\\
y= \frac{1}{2} + c e^{-t^2}
$$

$y(0) = \frac{1}{2} + c e^0 = \frac{1}{2} + c = \frac{1}{2} + c$

$y(t) = \frac{1 + e^{-t^2}}{2}$

---

outro exemplo

$$
\frac{\d y}{\d t} + \frac{1}{1 + t} y = 1, e sabe-se que y(0) = 0\\
\mu \frac{\d y}{\d t} + \frac{\mu}{1 + t} y = \mu\\
\mu' = \frac{\mu}{1 + t}\\
\mu = e^{\log (1 +t)} = 1+ t
$$

$$
(\mu y)' = \mu\\
(1+t) y = \int (1 + t ) \d t\\
y = \frac{t + \frac{t^2}{2} + c}{1+t}
$$

$y(0) = c$,

$y(t) = \frac{t + \frac{t^2}{2}}{1+t}$
