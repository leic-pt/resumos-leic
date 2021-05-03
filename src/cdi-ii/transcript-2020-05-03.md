$M$ variedade de dimensão $m \in R^n$

$g: V \subset \R^m \to \R^n$ é uma parameterização

- $g \in C^n$
- $g$ é injetiva
- $D_g$ tem as colunas linearmente independentes

Uma parametrização é uma forma de percorrer a variedade, descrever a variedade.

Exemplos:

1. $M = \{(x,y) \in \R^2 : x^2+y^2=1 \}$ variedade de $\dim 1$

Quando $x >0 \implies x=\sqrt{1-y^2}$

$g(y) = (\sqrt{1-y^2}, y), g : ]-1, 1[ \to M$

- $g \in C^1$
- $g$ é injetiva

$g(y_1) = g(y_2) \implies (\sqrt{y^2_1}, y_1) = (\sqrt{1-y^2_2}, y_2) \implies y_1=y_2$

$Dg(y)= \begin{bmatrix} \sqrt{1-y^2} & 1\end{bmatrix}$

Usando polares:

$g(\theta) = (\cos \theta, \sin \theta)$, $\theta \in ]-\frac{\pi}{2}, \frac{\pi}{2}[$

- $g \in C^1$
- $g$ é injetiva
- $Dg(\theta) = \begin{bmatrix} - \sin \theta \\ \cos \theta \end{bmatrix}$

$Dg$ não tem colunas linearmente independentes quando $\sin \theta, \cos \theta = 0$
Impossível por $sin^2\theta + cos^2\theta = 1$

2. $M = \{(x,y,z): x^2+y^2+z^2 = 1, z > 0\}$
   $g(\theta, \varphi) = (\cos \theta, \sin \varphi, \sin \theta, \sin \varphi, \cos \varphi)$

$\theta \in ]0, 2\pi[, \varphi \in ]0, \frac{\pi}{2}$

...

- $g \in C^1$
- $g$ é injetiva

$$
Dg(\theta, \varphi) = \begin{bmatrix}
-\sin \theta \sin \varphi & \cos \theta \cos \varphi\\
\cos \theta \sin \varphi & \sin \theta \cos \varphi\\
0 & -\sin \varphi
\end{bmatrix}
$$

...

3. $M = \{(x,y,z) \in \R^3: x^2+y^2+z^2 = 1, x = y \} variedade $\dim 1$

$2x^2+z^2=1$ elipse
$(\sqrt{2} x)^2+z^2 = 1$

$$
\begin{cases}
\sqrt{2} x = \cos \theta\\
z = \sin \theta
\end{cases}
\Leftrightarrow
\begin{cases}
x = \frac{1}{\sqrt{2}} \cos \theta\\
z = \sin \theta
\end{cases}
$$

$y = \frac{1}{\sqrt{2}} \cos \theta$

$g(\theta) = (\frac{1}{\sqrt{2}} \cos \theta, \frac{1}{\sqrt{2}} \cos \theta, \sin \theta), \theta \in ]0, 2\pi[$

---

Def: $M$ variedade de $\dim m \subset \R^n$, $v \in \R^n$, $a \in M$

$v$ é tangente a $M$ no ponto $a$ se existir um caminho $\Gamma$ em $M$
com $\Gamma (0) = a$ e $\Gamma'(0) = v$.

$T_aM = \{\text{vetores tangentes a } M \text{ no ponto } a\}$
é espaço vetorial de dimensão $m$.

$(T_aM)^\perp = \{\text{vetores perpendiculares a } T_aM\} = \text{espaco normal a } M \text{ no ponto } a$

$\dim (T_aM)^\perp = n-m$
