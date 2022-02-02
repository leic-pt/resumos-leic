---
title: Draft 2
description:
path: /cdi-iii/draft2
type: content
---

$$
\begin{cases}
\frac{\partial^2 u}{\partial t^2} = c^2 \frac{\partial^2 u}{\partial x^2}\\
u(t,0) = 0\\
u(t,L) = 0\\
u(0,x) = u_0 (x)\\
\frac{\partial u}{\partial t} (0, x) = v_0(x)
\end{cases}
$$

Forma geral equação das ondas:

$$
u(t,x) = \sum_{n=1}^{+\infty} (A_n \cos(\frac{c\pi n}{L}t) + B_n \sin(\frac{c\pi n}{L}t)) \sin(\frac{\pi n}{L}x)
$$

$$
A_n = \frac{2}{L} \int_{0}^{L} u_0(x) \sin(\frac{\pi n}{L}x) \d x
$$

$$
B_n = \frac{2}{c\pi n} \int_{0}^{L} v_0(x) \sin(\frac{\pi n}{L}x) \d x
$$

Se $B_n = 0$

$$
u(t,x) = \sum_{n=1}^{+\infty} A_n \cos(\frac{c\pi n}{L}t) \sin(\frac{\pi n}{L}x)
$$

---

outra forma de olhar para isto

$$
\cos(\frac{c\pi n}{L}t) \sin(\frac{\pi n}{L}x) = \frac{1}{2} \sin(\frac{\pi n}{L} (x+ct)) + \frac{1}{2} \sin(\frac{\pi n}{L}(x-ct))\\
\sin(\frac{c\pi n}{L}t) \sin(\frac{\pi n}{L}x) = - \frac{1}{2} \cos(\frac{\pi n}{L} (x+ct)) + \frac{1}{2} \cos(\frac{\pi n}{L}(x-ct))
$$

devido às seguintes igualdades:

$$
\sin(\beta + \alpha) = \sin \alpha \cos \beta + \cos \alpha \sin \beta\\
\sin(\beta - \alpha) = - \sin \alpha \cos \beta + \cos \alpha \sin \beta\\
\sin(\beta + \alpha) + \sin (\beta - \alpha) = 0 + 2\cos \alpha \sin \beta
$$

$$
-\cos(\beta + \alpha) = -\cos \alpha \cos \beta + \sin \alpha \sin \beta\\
\cos(\beta - \alpha) = \cos \alpha \cos \beta + \sin \alpha \sin \beta\\
-\cos(\beta + \alpha) + \cos(\beta - \alpha) = 0 + 2\sin \alpha \sin \beta
$$

$$
\begin{aligned}
u(t,x) &= \sum_{n=1}^{+\infty} (\frac{A_n}{2} \sin(\frac{\pi n}{L} (x+ct)) - \frac{B_n}{2} \cos(\frac{\pi n}{L} (x+ct)) + \frac{A_n}{2} \sin(\frac{\pi n}{L}(x-ct)) + \frac{B_n}{2} \cos(\frac{\pi n}{L}(x-ct)))\\
&= \sum_{n=1}^{+\infty} (\frac{A_n}{2} \sin(\frac{\pi n}{L} (x+ct)) - \frac{B_n}{2} \cos(\frac{\pi n}{L} (x+ct))) + \sum_{n=1}^{+\infty} (\frac{A_n}{2} \sin(\frac{\pi n}{L}(x-ct)) + \frac{B_n}{2} \cos(\frac{\pi n}{L}(x-ct)))
\end{aligned}
$$

depois de muitas contas, podemos dizer que

$$
u(t,x) = p(x+ct) + q(x-ct)
$$

$$
\frac{\partial u}{\partial x} = p'(x + ct) + q' (x-ct)\\
\frac{\partial^2 u}{\partial x^2} = p''(x+ct) + q''(x-ct)\\
\frac{\partial u}{\partial t} = c p'(x+ct) - c q'(x-ct)\\
\frac{\partial^2 u}{\partial t^2} = c^2 p''(x+ct) + c^2 q''(x-ct)
$$

---

Se $u$ é solução de $\frac{\partial^2 u}{\partial t^2} = c^2 \frac{\partial^2 u}{\partial x^2}$, então existem funções $p$ e $q$ tais que $u(t,x) = p(x+ct) + q(x-ct)$.

---

$$
\begin{aligned}
u(t,x) &= U(x+ct, y-ct)
&= U(\alpha, \beta) & \alpha = x+ct , \beta = x-ct\\
&= u(\frac{\alpha - \beta}{2c}, \frac{\alpha + \beta}{2}) & t = \frac{\alpha + \beta}{2c} , x = \frac{\alpha + \beta}{2}
\end{aligned}
$$

$$
\frac{\partial u}{\partial t} = \frac{\partial u}{\partial \alpha} \frac{\partial \alpha}{\partial t} + \frac{\partial u}{\partial \beta} \frac{\partial \beta}{\partial t} = c \frac{\partial u}{\partial \alpha} - c \frac{\partial u}{\partial \beta}
$$

$$
\frac{\partial^2 u}{\partial t^2} = c(\frac{\partial^2 u}{\partial \alpha^2} \frac{\partial \alpha}{\partial t} + \frac{\partial^2 u}{\partial \beta \partial \alpha} \frac{\partial \beta}{\partial t}) - c(\frac{\partial^2 u}{\partial \alpha \partial \beta} \frac{\partial \alpha}{\partial t} + \frac{\partial^2 u}{\partial^2 \beta} \frac{\partial \beta}{\partial t})\\
= c^2 (\frac{\partial^2 u}{\partial \alpha^2} - \frac{\partial^2 u}{\partial \alpha \partial \beta} - \frac{\partial^2 u}{\partial \beta \partial \alpha} + \frac{\partial^2 u}{\partial \beta^2})
$$

$$
\frac{\partial^2 u}{\partial x^2} = \frac{\partial^2 u}{\partial \alpha^2} + \frac{\partial^2 u}{\partial \alpha \partial \beta} + \frac{\partial^2 u}{\partial \beta \partial \alpha} + \frac{\partial^2 u}{\partial \beta^2}
$$

$$
0 = \frac{\partial^2 u}{\partial t^2} - c^2 \frac{\partial^2 u}{\partial x^2} = -2 c^2 (\frac{\partial^2 U}{\partial \alpha \partial \beta} + \frac{\partial^2 U}{\partial \beta \partial \alpha})
$$

$$
0 = -4c^2 \frac{\partial^2 U}{\partial \alpha \partial \beta}
$$

$$
\frac{\partial^2 U}{\partial \alpha \partial \beta} = 0 \implies \frac{\partial U}{\partial \beta} = \psi (\beta)
$$

$$
U = \int \psi (\beta) \d \beta + p(\alpha)
$$

---

$$
\begin{cases}
u_{tt} = c^2 u_{xx}\\
u(t,0) = 0\\
u(t,L) = 0\\
u(0,x) = u_0 (x)\\
u_t (0, x) = v_0(x)
\end{cases}
$$

$$
u(t,x) = p(x+ct) + q(x-ct)
$$

$$
u(t,0) = 0 \implies p(ct) = -q(-ct) , \forall t
$$

$$
u(t,L) = 0, p(L+ct) = -q(L-ct)
$$

$$
p(s+2L) = p(s)\\
q(s+2L) = q(s)\\
q(s) = -p(s)
$$

$$
p(x) = \frac{1}{2} u_0(x) + \frac{1}{2c} \int_{0}^{x} v_0(s) \d s, x \in [0, L]\\
q(x) = \frac{1}{2} u_0(x) - \frac{1}{2c} \int_{0}^{x} v_0(s) \d s, x \in [0, L]
$$

---

exemplo (D'Alembert)

$$
v_0 (x) \equiv 0, u(0,x) = \sin x, L = \pi
$$

$$
p(x) = q(x) = \sin x
$$

$$
u(t, x) = \frac{\sin(x+ct) + \sin(x-ct)}{2}
$$

---

exercício (de exame)

**1. Considere a equação diferencial parcial**

$$
\frac{\partial^2 u}{\partial t^2} = x^2 \frac{\partial^2 u}{\partial x^2} + x \frac{\partial u}{\partial x}, (t,x) \in \R^2
$$

(1)

**a) Sejam $p$ e $q$ duas funções de classe $C^2$ definidas em $\R$. Mostre que a função**

$$
u(t,x) = p(x e^t) + q(x e^{-t})
$$

(2)

**é solução de (1).**

É só substituir:

$$
\begin{aligned}
\frac{\partial u}{\partial t} &= p'(x e^t) \frac{\partial (xe^t)}{\partial t} + q'(xe^{-t}) \frac{\partial (xe^{-t})}{\partial t}\\
&= p'(x e^t) xe^t - q'(xe^{-t}) x e^{-t}
\end{aligned}
$$

$$
\frac{\partial^2 u}{\partial t^2} = x(p'(xe^t) e^t + q'(x e^{-t})e^{-t}) + p''(x e^t) x^2 e^{2t} + q''(xe^{-t}) x^2 e^{-2t}
$$

$$
\begin{aligned}
\frac{\partial u}{\partial x} &= p'(xe^t) \frac{\partial (xe^t)}{\partial x} + q'(xe^{-t}) \frac{\partial (xe^{-t})}{\partial x}\\
&= p'(xe^t)e^t + q'(x e^{-t}) e^{-t}
\end{aligned}
$$

$$
\frac{\partial^2 u}{\partial x^2} = p''(xe^t) e^{2t} + q''(xe^{-t}) e^{-2t}
$$

Logo, provámos que

$$
\frac{\partial^2 u}{\partial t^2} = x^2 \frac{\partial^2 u}{\partial x^2} + x \frac{\partial u}{\partial x}
$$

**b) Baseando-se no resultado da alínea anterior determine a solução de (1) que satisfaz as seguintes condições iniciais:**

$$
\forall x \in \R, u(0, x) = e^{-x^2}, \frac{\partial u}{\partial t} (0,x) = 0
$$

Derivar em ordem a $t$, que já fizemos na alínea anterior:

$$
\frac{\partial u}{\partial t} (0, x) = x(p'(x) - q'(x)) = 0
$$

$$
p'(x) - q'(x) = 0 \implies p(x) = q(x) + k
$$

$$
2q(x) + k = e^{-x^2}
$$

$$
q(x) = \frac{1}{2} e^{-x^2} - \frac{k}{2}
$$

Então:

$$
p(x) = \frac{1}{2} e^{-x^2} + \frac{k}{2}
$$

Podemos agora escrever a nossa solução:

$$
u(t, x) = \frac{1}{2} e^{-(x e^t)^2} + \frac{1}{2} e^{-(x e^{-t})^2}
$$
