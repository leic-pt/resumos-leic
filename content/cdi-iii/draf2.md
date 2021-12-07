# Série de Fourier

Vamos estudar a equação do calor para perceber como surgiram as Séries de Fourier.

Vamos chamar $u(t,x)$ à temperatura no ponto $(t,x)$, em que $x \in \R^3$.

A ideia é fazer o balanço de energia térmica num certo volume $\omega$. A energia vai ser proporcional à temperatura.

$$
\frac{\d }{\d t} \int_{\omega} u = k \int_{\partial \omega} \nabla u \cdot n = k \int_\omega \div(\nabla u)\\
\int_\omega (\frac{\partial u}{\partial t} - k\div(\nabla u)) = 0
$$

Se a temperatura for menor no domínio do que no exterior, vai entrar energina no domínio.
Nesta situação, o gradiente é para fora (?)

Se quisermos saber a energia que entra/sai do domínio, temos de calcular o fluxo.

O fluxo de energia local é $k \nabla u$ (Lei de Fourier).

Para qualquer ponto, com uma bola a tender para tamanho zero, vamos obter (pela equação anterior):

$$
\frac{\partial u}{\partial t} = k \div(\nabla u)
$$

$k >0$ é a constante de difusão teórica (?)

$$
\div(\nabla u) = \div(\frac{\partial u}{\partial x}, \frac{\partial u}{\partial y}, \frac{\partial u}{\partial z})
 = \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} + \frac{\partial^2 u}{\partial z^2}
 = \operatorname{lap} u = \triangleup u
$$

lap = laplaciano

$$
\frac{\partial u}{\partial t} = k \triangleup u
$$

## Equação do Calor

Então, depois do que vimos, a equação do calor, para uma única dimensão, é

$$
\frac{\partial u}{\partial t} = k \frac{\partial^2 u}{\partial x^2}
$$

Propriedades:

- É linear: Se $u_1$ e $u_2$ são soluções da equação do calor, então $\alpha u_1 + \beta u_2$ também é uma solução

:::details[Demonstração]

$$
\begin{aligned}
\frac{\partial }{\partial t} (\alpha u_1 + \beta u_2) &= \alpha \frac{\partial u_1}{\partial t} + \beta \frac{\partial u_2}{\partial t}\\
&= \alpha k \frac{\partial^2 u_1}{\partial x^2} + \beta k \frac{\partial^2 u_2}{\partial x^2}\\
&= k \frac{\partial^2}{\partial x^2} (\alpha u_1 + \beta u_2)
\end{aligned}
$$

:::

### Soluções de Equilíbrio

Se tivermos que $\frac{\partial u}{\partial t} = 0$, então temos uma de duas situações:

- $u(x) = C$
- $u(x) = Ax + B$

### Soluções Separáveis

Tentar descobrir várias soluções, depois tentar fazer várias combinações lineares, e, por fim, chegar à nossa solução.

Vamos suport que a nossa função é o produto de duas funções (cada uma só depende de uma das variáveis):

$$
u(t,x) = T(t) X(x)
$$

Substituir na equação do calor, pelo que obtemos:

$$
T'(t) X (x) = k T(t) X''(x)
$$

$$
\frac{\partial T'(t)}{\partial k T(t)} = \frac{X''(x)}{X(x)} = \lamba
$$

Para os dois membros da equação serem iguais, visto que um depende apenas de $t$ e outro apenas de $x$,
então têm necessariamente de ser funções constantes.

Daqui sai que

$$
T'(t) = \lambda k T(t) \Leftrightarrow T(t) = c e^{\lambda k t}
$$

(A constante irá ser irrelevante no futuro quando fizermos combinações lineares, desde que seja não nula)

$$
X'' = \lambda X
$$

O polinómio característico é $P(Z) = Z^2 - \lambda$

Pelo que

$$
\begin{cases}
X(x) = A e^{\sqrt{\lambda} x} + B e^{-\sqrt{\lambda} x} & \text{se } \lambda > 0\\
X(x) = A \cos(\sqrt{-\lambda} x) + B \sin(\sqrt{-\lambda} x) & \text{se \lambda < 0}\\
X(x) = Ax + B & \text{se } \lambda = 0
\end{cases}
$$

---

### Problema Homogéneo

Imaginando agora um caso em que temos um fio circular (ver figura xournal)

$$
\begin{cases}
u(t, 0) = u(t, L)\\
\frac{\partial u}{\partial x} (t, 0) = \frac{\partial u}{\partial x} (t,L)
\end{cases}

\text{condições fronteira periófidicas}
$$

Então: $X(0) = X(L)$ e $X'(0) = X(L)$

(um problema com equações fronteira em vez de condições iniciais aparece na semana 5, exercício 3)

- Se $\lambda = 0$:

  $$
  X(0) = B = AL + B = X(L)\\
  X'(x) = A
  $$

  Temos a solução constante, pois para ser verdade, $A = 0$.

- Se $\lambda > 0$:

  $$
  X(0) = A + B = A e^{\sqrt{\lambda} L} + B e^{-\sqrt{\lambda} L} = X(L)\\
  X'(x) = A \sqrt{\lambda} e^{\sqrt{\lambda} x} - B\sqrt{\lambda} e^{-\sqrt{\lambda} x}\\
  X'(0) = A \sqrt{\lambda} - B \sqrt{\lambda} = A \sqrt{\lambda} e^{\sqrt{\lambda} x} - B\sqrt{\lambda} e^{-\sqrt{\lambda} x}
  $$

  Resolvemos agora o sistema:

  $$
  \begin{cases}
  A(1-e^{\sqrt{\lambda} L}) + B(1-e^{-\sqrt{\lambda}L}) = 0 & \text{(sai da primeira equação)}\\
  A\sqrt{\lambda} (1- e^{\sqrt{\lambda} L}) + B \sqrt{\lambda} (1-e^{-\sqrt{\lambda} L})
  \end{cases}
  $$

  queremos que

  $$
  -2(1-e^{\sqrt{\lambda} L})(1- e^{-\sqrt{\lambda}L}) = 0
  $$

  isto só acontece quando $e^{\sqrt{\lambda} L} = 1$, que é impossível se $\lambda > 0$

- Se $\lambda < 0$:

  $$
  e^{\sqrt{\lambda} L} = e^{i\sqrt{-\lambda} L} = \cos(\sqrt{-\lambda} L) + i\sin(\sqrt{-\lambda} L)
  $$

  $$
  e^{\sqrt{\lambda} L} = 1\\
  \sqrt{-\lambda} L = 2\pi n, n\in \Z
  $$

  $$
  \begin{darray}{c}
  \sqrt{-L} = \frac{2\pi n}{L} & \lambda = - \frac{4\pi^2 n^2}{L^2} & n \in \Z^+
  \end{darray}
  $$

  $$
  X(x) = A \cos \frac{2\pi n}{L}x + B \sin \frac{2\pi n}{L}x
  $$

  $$
  X(0) = X(L)\\
  X'(0) = X'(L)
  $$

  $$
  u(t,x) = T(t)X(t) = e^{-\frac{4\pi^2 n^2}{L^2}t} (a_n \cos \frac{2\pi n}{L} + b_n \sin \frac{2\pi n}{L})
  $$

  $$
  u(t,x) = B + \sum_{n = 1}^N e^{-\frac{4\pi^2 n^2}{L^2}t} (a_n \cos \frac{2\pi n}{L} + b_n \sin \frac{2\pi n}{L})
  $$

  Dando agora uma função à temperatura inicial:

  $$
  u(0, x) = f(x)
  $$

  $$
  f(x) = B + \sum_{n = 1}^N (a_n \cos \frac{2\pi n x}{L} + b_n \sin \frac{2\pi n x}{L})
  $$

---

## Série de Fourier

$$
f(x + L) = f(x)\\
f(x) = \underbrace_{\text{Série de Fourier de } f(x)}{\frac{a_0}{2} + \sum_{n=1}^{+\infty} a_n \cos(\frac{2n \pi x}{L}) + b_n \sin(\frac{2n\pi x}{L})}
$$

Calcular $a_n$ e $b_n$.

$$
\int_{n=1}^{+\infty} |a_n| + |b_n| < +\infty
$$

$$
\int_0^L f(x) \d x = \int_0^L \frac{a_0}{2} \d x + \sum_{n=1}^{+\infty} a_n \int_{0}^{L} \cos \frac{2n\pi x}{L} \d x + b_n \int_{0}^{L} \sin \frac{2n\pi x}{L} \d x
= \frac{a_0}{2}L
$$

$$
a_0 = \frac{2}{L} \int_{0}^{L} f(x) \d x\\
a_m = \frac{2}{L} \int_{0}^{L} f(x) \cos(\frac{2m\pi x}{L}) \d x\\
m,n \in \Z^+
$$

$$
\int_0^L f(x) \cos(\frac{2m\pi x}{L}) \d x = \int_0^L \frac{a_0}{2} \cos(\frac{2m\pi x}{L}) \d x + \sum_{n=1}^{+\infty} a_n \int_{0}^{L} \cos \frac{2n\pi x}{L} \cos(\frac{2m\pi x}{L}) \d x + b_n \int_{0}^{L} \sin \frac{2n\pi x}{L} \cos(\frac{2m\pi x}{L}) \d x
= \frac{a_m}{2}L
$$

$$
\int_{0}^{L} \cos(\frac{2m\pi x}{L}) \cos(\frac{2n \pi x}{L}) \d x = \int_{0}^{L} \sin(\frac{2m\pi x}{L}) \cos(\frac{2n \pi x}{L}) \d x = \begin{cases}
0 & \text{se} m \ne n\\
\frac{1}{2} \text{se} m = n
\end{cases}\\
\int_{0}^{L} \cos(\frac{2m\pi x}{L}) \sin(\frac{2n \pi x}{L}) \d x = 0
$$

$$
\int_0^L \cos(\frac{2m\pi x}{L}) \cos(\frac{2n\pi 2}{x}) \d x = \frac{L}{2\pi} = \int_{0}^{2\pi} \cos(mz)\cos(nz) \d z = ... = \frac{L}{2}
$$

---

:::tip[Teorema]

Seja $f$ definida em $\R$ tal que $f(x+L) = f(x) \forall x$. Se $f$ é seccionalmente monótona então

$$
S F(f) (x) = \frac{1}{2} (f(x^+) + f(x^-))
$$

:::

:::tip[Teorema]

Seja $f$ definida em $\R$ é tal que $f(x + L) = f(x) \forall x \in \R$. Se $f$ é seccionalmente $C^1$, então

$$
SF_f(x) = \frac{1}{2} (f(x^+) + f(x^-))
$$

:::

Temos de ter os dois teoremas, pois existem funções que apenas satisfazem um deles.

Por exemplo:

$f(x) = \sqrt{x(1-x)}$ para $x \in [0, 1]$ e $f(x+1) = f(x)$, não é seccionalmente $C^1$ (nas extremidades, a derivada é infinita).
