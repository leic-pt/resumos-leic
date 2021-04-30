Variedade de dim $m$ significa que em torno de qualquer ponto posso descrever a variedade como o gráfico de uma função ($C^1$) de $m$ variáveis.

Coso de conjunto de nível: $\{x \in \R^n: F(x)=0 \}$
com $F: \R^n \to \R^{n-m}$

Neste caso, ser variedade é consequência de eu poder aplicar TFImplícita para alguma escolha de $m$ variáveis independentes,
ou seja,

$DF(a)$ tem $n-m$ colunas que formam uma matriz com $det \ne 0$
ou seja, $DF(a)$ tem caracteristica máxima $n-m$.

---

$C = \{(x,y,z) \in \R^3, F=x^2+y^2- z^2\}$

....

....

$$
DF (x,y,z) = \begin{bmatrix}
2x & 2y & -2z
\end{bmatrix}
$$

$$
\car DF \ne 1 \Leftrightarrow x,y,z = 0
$$

que prtence ao cone

Logo, $C$ não é uma variedade

$$
A = \{(x,y,z) \in \R^3: x^2+y^2+z^2 = 1, x+y-z=0 \}
$$

$$
F(x,y,z) = (x^2+y^2+z^2-1, x+y-z)
$$

$$
DF(x,y,z) = \begin{bmatrix}
2x & 2y & 2z\\
1 & 1 & -1
\end{bmatrix}
$$

- $\car = 0$ impossível
- $\car = 1$

(característica = # linhas linearmente independentes, ou # colunas linearmente dependentes)

$$
(2x, 2y, 2z) = \lambda (1, 1, -1)
$$

$$
x=\frac{\lambda}{2},
y=\frac{\lambda}{2},
z=-\frac{\lambda}{2}
$$

...

Então $\forall x,y,z \in A$, $\car DF(x,y,z) = 2$

$A$ é uma variedade de $\dim 3 -2 = 1$.

$A$ é uma curva em $\R^3$

---

Definição:

$M$ variedade de $dim m \subset R^n$, uma parametrização é uma função $g: V \to M$, $V \in \R^m$ aberto e

- $g \in C^1$
- $g$ é injetiva
- $Dg$ tem as colunas linearmente independentes

[imagem]

$g(t) = (\cos t, \sin t), t \in ]0, 2\pi[$

Obs. Pode não ser possível parameterizar de uma só vez toda a variedade.

Exemplos: Gráficos de funções: $f \in C^1$

$M = \{(x,y) \in \R^2: y = f(x)\} \subset \R^2$

$g(t) = (t, f(t)), t \in ]a,b[$

será que $g$ é parametrização?

- $g$ é $C^1$ porque $t \in t$ é $C^1$ e $f \in C^1$
- $g$ é injetiva?

$g(t_1) = g(t_2) \Leftrightarrow (t_1, f(t_1)) = (t_2, f(t_2)) \Rightarrow t_1 = t_2$

$$
Dg(t) = \begin{bmatrix}
1\\
f'(t)
\end{bmatrix}
$$

tem 1 coluna linearmente independente

Logo, $g$ é uma parametrização de $M$.

$M = \{(x,y) \in \R^m \times \R^{n - m}, y = f(x)\}, f\in C^1 (V)$ aberto

variedade de $\dim n$

$g(t) = (t, f(t)), t \in V$.

$g$ é uma parametrização (igual ao caso anterior)

Exemplo:

$P = \{(x,y,z) \in \R^3, z=x^2+y^2, z <1\}$

é o gráfico de $f(x,y) = x^2+y^2$, $x^2+y^2 < 1$

$g(x,y) = (x,y,f(x,y)), x^2+y^2 < 1$

[imagem]

Outra parametrização:

$$
\begin{cases}
x = r \cos \theta\\
y = r \sin \theta\\
z = z
\end{cases}
$$

$z = r^2$

$g(r,\theta) = (r \cos \theta, r \sin \theta, r^2)$

$r \in ]0, 1], \theta \in ]0, 2\pi[$

será que $g$ é parametrização?
