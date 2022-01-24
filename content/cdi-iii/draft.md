Exemplo Equação de Laplace (caso geral)

$$
\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0
$$

$$
\begin{darray}{l}
u(x,0) = f_1(x)\\ % I
u(0,y) = f_2(y)\\ % II
u(x,b) = f_3(x)\\ % III
u(a,y) = f_4(y)   % IV
\end{darray}
$$

Vamos dividir isto em 4 problemas:

**Problema 1:**

$$
\frac{\partial^2 u_1}{\partial x^2} + \frac{\partial^2 u_1}{\partial y^2} = 0
$$

$$
\begin{darray}{l}
u_1(x,0) = f_1(x)\\ % I
u_1(0,y) = 0\\ % II
u_1(x,b) = 0\\ % III
u_1(a,y) = 0   % IV
\end{darray}
$$

**Problema 2:**

$$
\frac{\partial^2 u_2}{\partial x^2} + \frac{\partial^2 u_2}{\partial y^2} = 0
$$

$$
\begin{darray}{l}
u_2(x,0) = 0\\ % I
u_2(0,y) = f_2(x)\\ % II
u_2(x,b) = 0\\ % III
u_2(a,y) = 0 % IV
\end{darray}
$$

**Problema 3:**

$$
\frac{\partial^2 u_3}{\partial x^2} + \frac{\partial^2 u_3}{\partial y^2} = 0
$$

$$
\begin{darray}{l}
u_3(x,0) = 0\\ % I
u_3(0,y) = 0\\ % II
u_3(x,b) = f_3(x)\\ % III
u_3(a,y) = 0 % IV
\end{darray}
$$

**Problema 4:**

$$
\frac{\partial^2 u_4}{\partial x^2} + \frac{\partial^2 u_4}{\partial y^2} = 0
$$

$$
\begin{darray}{l}
u_4(x,0) = 0\\ % I
u_4(0,y) = 0\\ % II
u_4(x,b) = 0\\ % III
u_4(a,y) = f_4(x) % IV
\end{darray}
$$

Resolvendo agora cada um dos problemas:

$$
u_1 = \sum_{n=1}^{+\infty} c_{1,n} \sin \left(\frac{n\pi}{a}x \right) \sh \left(\frac{n\pi}{a}(b-y)\right)
$$

$$
u_2 = \sum_{n=1}^{+\infty} c_{2,n} \sh \left(\frac{n\pi}{b}(a-x)\right) \sin \left(\frac{n\pi}{b}y \right)
$$

$$
u_3 = \sum_{n=1}^{+\infty} c_{3,n} \sin \left(\frac{n\pi}{a}x \right) \sh \left(\frac{n\pi}{a}y\right)
$$

$$
u_4 = \sum_{n=1}^{+\infty} c_{4,n} \sh \left(\frac{n\pi}{b}x\right) \sin \left(\frac{n\pi}{b}y \right)
$$

E cada uma das sucessões:

$$
c_{1,n} = \frac{2}{a \sh \left(\frac{n\pi}{a}b\right)} \int_{0}^{a} f_1(x) \sin \left(\frac{n\pi}{a}x \right) \d x
$$

$$
c_{2,n} = \frac{2}{a \sh \left(\frac{n\pi}{b}a\right)} \int_{0}^{a} f_2(x) \sin \left(\frac{n\pi}{b}y \right) \d x
$$

... (o prof n fez os outros)

Finalmente,

$$
u = u_1 + u_2 + u_3 + u_4
$$
