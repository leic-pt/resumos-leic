$f: [0, L] \to \R$

($n \gte 0$) $a_n = \frac{2}{L} \int_0^L f(x) \cos (\frac{2n\pi}{L}x)$
($n \gte 1$) $b_n = \frac{2}{L} \int_0^L f(x) \sin (\frac{2n\pi}{L}x)$

$$
SF(f)(x) = \frac{a_0}{2} + \sum_{n = 1}^{+\infty} (a_n \cos(\frac{2n\pi}{L} x) + b_n \sin (\frac{2n\pi}{L}x))
$$

... bué cenas mas n tenho paciência para passar

:::tip[Teorema]

Se $f(x) = f(x+L)$ é limitada e se $f$ é seccionalmente monónona _ou_ $C^1$, então:

$$
SF(f)(x) = \frac{f(x^-) + f(x^+)}{2} = f(x)
$$

se $f$ é contínua em $x$

:::

Temos agora um exemplo:

Queremos calcular a **Série de Fourier** de:

$$
f(x) = x$, $f: [-\pi, \pi]
$$

Então:

$$
a_n = \frac{1}{\pi} \int_{-\pi}^{\pi} x \cos(nx) \d x = 0
$$

Sabemos que é zero porque $x \cos(nx)$ é uma função ímpar, que está a ser integrada num intervalo simétrico.

$$
\begin{aligned}
b_n &= \frac{1}{\pi} \int_{-\pi}^{pi} x \sin(nx) \d x\\
&= \frac{2}{\pi} \int_{0}^{pi} x\sin(nx) \d x\\
&= \frac{2}{\pi} ([\frac{-x\cos(nx)}{n}]^\pi_0 + \int_{0}^{\pi} \frac{\cos(nx)}{n} \d x)\\
&= \frac{2}{\pi} (\frac{-\pi\cos(n\pi)}{n})\\
&= \frac{-2(-1)^n}{n}
\end{aligned}
$$

Então:

$$
x = \sum_{n = 1}^{+\infty} \frac{2(-1)^{n+1}}{n}\sin (n x)
$$

APARTE: A série de fourier torna a função periódica, em que os pontos tendem para a função original, exceto nos pontos que descontinuidade, que tendem para o ponto intermédio (não sei se isto é importante/relevante, tem de ser ver dps)

## Série de Senos

Patch às notas teóricas:

O $g(x)$ que está lá ímpar, é, por exemplo:

$$
g(x) = \tilde f (x) = \begin{cases}
f(x) & \text{se } x \in ]0, L]\\
0 & \text{se } x = 0\\
-f(-x) & \text{se } x \in [-L, 0[
\end{cases}
$$

## Série de Cossenos

Mesma coisa para função par:

$$
g(x) = \tilde \tilde f (x) = \begin{cases}
f(x) & \text{se } x \in ]0, L]\\
0 & \text{se } x = 0\\
f(-x) & \text{se } x \in [-L, 0[
\end{cases}
$$

:::info[Exemplo]

**Determine a Série de Fourier, Série de Senos e Série de Cossenos de**

$$
f(x) = e^x
$$

**definida em $[0,1]$.**

Vamos começar por determinar a série de cossenos:

$$
\begin{aligned}
a_n &= 2 \int_{0}^{1} e^x \cos(n\pi x) \d x\\
&= 2 \operatorname{Re} \int_{0}^{1} e^x e^{in\pi x} \d x\\
&= 2 \operatorname{Re} [\frac{e^{(1+in\pi)x}}{1+in\pi}]_0^1\\
&= 2 \operatorname{Re} ((e^{1+in\pi} - 1) \frac{1}{1+in\pi} \frac{(1-in\pi)}{1-in\pi})\\
&= 2 \operatorname{Re} (\frac{e(-1)^n - 1}{1+n^2\pi^2}(1-in\pi))\\
&= 2 \frac{e(-1)^n - 1}{1+n^2\pi^2}
\end{aligned}
$$

CA: $e^{1+in\pi} = e(-1)^n$ e $e^{in\pi} = (-1)^n$

Portanto, a série de cossenos é

$$
e-1 + \sum_{n=1}^{+\inf} 2 \frac{e(-1)^n - 1}{1+n^2 \pi} \cos(n\pi x) = e^x \quad \text{se } x \in [0, 1]
$$

Podemos aproveitar os cálculos anteriores para obtermos a série de senos:

$$
b_n = 2 \int_{0}^{1} e^x \sin(n\pi x) \d x = 2 n\pi \frac{e(-1)^n - 1}{1+n^2 \pi^2}
$$

Então, a série de senos é

$$
e^x = \sum_{n=1}^{+\infty} 2n\pi \frac{e(-1)^n - 1}{1+n^2 \pi^2} \sin(n\pi x) \d x \quad \text{se } x \in ]0, 1[
$$

O intervalo ser aberto ou fechado depende se há continuidade ou não (ver gráfico da função). E ANEXO XOURNAL

O mesmo se sucede para a série de fourier:

$$
e^x = e-1+\sum_{n=1}^{+\infty} 2 \frac{e-1}{1+4n^2\pi} (\cos(2n \pi x) + 2n\pi \sin(2n\pi x)) \quad \text{se } x \in ]0, 1[
$$

:::

---

idk anymore, caguei completamente nisto

mas temos um teorema:

:::tip[Teorema]

Se $\int_0^{2\pi} |f|^2 < +\infty$

$$
\lim_{N \to +\infty} ||SF_N(x) - f(x)||^2 = 0
$$

:::
