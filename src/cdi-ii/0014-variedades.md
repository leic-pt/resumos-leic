---
description: 'Variedades diferenciáveis de dimensão m. Espaço tangente. Espaço normal.'
---

# Variedades, Espaço Tangente e Normal

[[toc]]

## Variedades

Um conjunto é uma variedade de $\dim m$ se em torno de qualquer ponto posso descrever a variedade como o gráfico de uma função ($C^1$) de $m$ variáveis.

::: tip DEFINIÇÃO
$M \subset \R^n$ é uma variedade diferenciável de dimensão $m$ se $\forall a \in M$ existe
uma vizinhança na qual $M$ é o gráfico de uma função $f: U\subset \R^m \to \R^{n - m}$ de classe $C^1$.
:::

Tomando como exemplo os seguintes conjnutos:

1. $M= \{(x,y) \in \R^2: x^2+y^2=1\}$

<img src="./assets/0014-conj-1.png" alt="Representação do Conjunto 1" class="invert-dark2">

{green}(É variedade de dimensão 1.)

2. $M = \{(x,y,z) \in \R^3: x^2+y^2+z^2 = 1\}$

<img src="./assets/0014-conj-2.png" alt="Representação do Conjunto 2" class="invert-dark2">

{green}(É variedade de dimensão 2.)

3. $M= \{(x,y,z) \in \R^3: x^2 + y^2 = z^2\}$

<img src="./assets/0014-conj-3.png" alt="Representação do Conjunto 3" class="invert-dark2">

{red}(Não é variedade.)

Na origem não é possível escrever nenhuma variável em função das outras duas, pois tem um "bico".

4. $M = \{(x,y,z) \in \R^3: z=x+y\}$ que corresponde a um plano.  
   Logo, qualquer ponto é definido por $z=f(x,y) = x+y$.  
   Então, temos uma {green}(variedade de dimensão 2).

### Relação com o Teorema da Função Implícita

Se considerarmos um conjunto de nível:

$$
\begin{array}{lll}
M = \{x \in \R^n: F(x) = 0\} & F: \R^n \to \R^{n-m} & C^1
\end{array}
$$

Então, $M$ é variedade de $dim\ m$ se $\forall a \in M$ for possível aplicar o
[Teorema da Função Implícita](./0013-funcao-inversa.md#teorema-da-funcao-implicita) com $m$ variáveis independentes.

Basta encontrar $m$ variáveis para as quais $\det DF \ne 0 \implies \text{característica máxima}~n - m$.

::: tip TEOREMA
O conjunto de nível é uma variedade de $dim\ m$ se $DF$ tem sempre [característica](<https://en.wikipedia.org/wiki/Rank_(linear_algebra)>) máxima.
:::

::: details Exemplos

Considerando

$$
M=\{x^2+y^2 = 1\} = \{F(x,y) = x^2+y^2-1=0\}, F \in C^1
$$

$$
DF = \begin{bmatrix}
2x & 2y
\end{bmatrix}
$$

Quando $\car DF \ne 1$, então $x,y = 0$. No entanto, este ponto não pretence ao conjunto.

Logo, $\car DF$ é máxima em qualquer ponto do conjunto e $M$ é variedade de dimensão $1$.

---

Considerando

$$
M = \{ x^2+y^2 + z^2 = N \} = {F(x,y,z) = x^2+y^2+z^2-1 = 0}, F \in C^1
$$

$$
DF = \begin{bmatrix}
2x & 2y & 2z
\end{bmatrix}
$$

Quando $\car DF$ não é máxima (neste caso, 1), então $x,y,z=0$. No entanto, este ponto não pertence ao conjunto.

Logo, $DF$ tem sempre característica máxima para qualquer ponto do conjunto e $M$ é uma variedade de $\dim 3-1 = 2$.

---

Considerando

$$
M = \{x^2+y^2-z^2 = 0\}
$$

isto é, um cone.

$$
DF = \begin{bmatrix}
2x & 2y & -2z
\end{bmatrix}
$$

Então, quando $\car = 0$, significa que $x,y,z=0$.

Como este ponto pertence ao conjunto, {red}($M$ não é uma variedade).

---

Considerando

$$
A = \{(x,y,z) \in \R^3: x^2+y^2+z^2 = 1, x+y-z=0 \}
$$

Então, podemos escrever a função:

$$
\begin{array}{ll}
F(x,y,z) = (x^2+y^2+z^2-1, x+y-z)
& F: \R^3 \to \R^2
\end{array}
$$

A matriz $DF$ desta função é:

$$
DF(x,y,z) = \begin{bmatrix}
2x & 2y & 2z\\
1 & 1 & -1
\end{bmatrix}
$$

Pelo que:

- $\car = 0$ é impossível de obtermos
- $\car = 1$ quando a linha de cima é múltipla da de baixo

$$
(2x, 2y, 2z) = \lambda (1, 1, -1)
$$

$$
\begin{array}{lll}
x=\frac{\lambda}{2} &
y=\frac{\lambda}{2} &
z=-\frac{\lambda}{2}
\end{array}
$$

Substituindo no conjunto:

$$
\begin{cases}
\left(\frac{\lambda}{2} \right)^2 + \left(\frac{\lambda}{2} \right)^2 + \left(\frac{\lambda}{2} \right)^2 = 1\\
\frac{\lambda}{2} + \frac{\lambda}{2} + \frac{\lambda}{2} = 0
\end{cases}
\Leftrightarrow
\begin{cases}
\lambda = 0\\
0 = 1
\end{cases}
\Leftrightarrow
\text{impossível}
$$

Então, o ponto $(\frac{\lambda}{2},\frac{\lambda}{2},\frac{\lambda}{2})$ nunca pertence ao conjunto $A$.

Logo, $\forall x,y,z \in A$, $\car DF(x,y,z) = 2$

{green}($A$ é uma variedade de $\dim 3 -2 = 1$.)

$A$ é uma curva em $\R^3$

:::

## Parametrização

::: tip DEFINIÇÃO

Seja $M$ uma variedade de $\dim m \subset R^n$.  
Uma parametrização é uma função $g: V \to M$, em que:

- $V \in \R^m$ aberto
- $g \in C^1$
- $g$ é injetiva
- $Dg$ tem as colunas linearmente independentes

:::

**Pode não ser possível parameterizar de uma só vez toda a variedade.**

Como exemplo, temos o seguinte conjunto (circunferência de raio 1):

<img src="./assets/0014-circulo.svg" alt="Circunferência de Raio 1" class="invert-dark2">

A sua parameterização é $g(t) = (\cos t, \sin t), t \in ]0, 2\pi[$.

::: details Exemplos

Seja $f \in C^1$ em $]a,b[$ e

$$
M = \{(x,y) \in \R^2: y = f(x)\} \subset \R^2
$$

Podemos então descrever este conjunto pela função $g$:

$$
g(t) = (t, f(t)), t \in ]a,b[
$$

Será que $g$ é parametrização?

- $g$ é $C^1$ porque $t \in t$ é $C^1$ e $f \in C^1$
- será que $g$ é injetiva?

  $g(t_1) = g(t_2) \Leftrightarrow (t_1, f(t_1)) = (t_2, f(t_2)) \Rightarrow t_1 = t_2$
  Então é injetiva

- $Dg(t) = \begin{bmatrix}1\\f'(t)\end{bmatrix}$  
  $Dg$ tem 1 coluna linearmente independente

{green}(Logo, $g$ é uma parametrização de $M$.)

---

Considerando

$P = \{(x,y,z) \in \R^3, z=x^2+y^2, z <1\}$

Sabemos que $P$ é o gráfico de $f(x,y) = x^2+y^2$, para $x^2+y^2 < 1$

Então podemos escrever a função $g$ como parameterização de $P$:

$g(x,y) = (x,y,f(x,y)), \quad x^2+y^2 < 1$

Outra parametrização possível, é usar as coordenadas cilíndricas:

$$
\begin{cases}
x = r \cos \theta\\
y = r \sin \theta\\
z = z
\end{cases}
$$

- $z = r^2$

Então obtemos:

$g(r,\theta) = (r \cos \theta, r \sin \theta, r^2), \quad r \in ]0, 1], \theta \in ]0, 2\pi[$

---

Considerando

$$
M = \{(x,y) \in \R^2 : x>0, x^2+y^2=1 \}
$$

variedade de $\dim 1$, que representa um **semi-circulo**.

Como $x >0 \implies x=\sqrt{1-y^2}$, podemos obter a parameterização:

$$
\begin{array}{ll}
g(y) = (\sqrt{1-y^2}, y) & g : ]-1, 1[ \to M
\end{array}
$$

Verificando agora as condições da parametrização:

- $g \in C^1$
- $g$ é injetiva  
  $g(y_1) = g(y_2) \implies (\sqrt{y^2_1}, y_1) = (\sqrt{1-y^2_2}, y_2) \implies y_1=y_2$
- $Dg(y)= \begin{bmatrix} -\frac{y}{\sqrt{1-y^2}} \\ 1\end{bmatrix}$ tem uma coluna linearmente independente

Alternativamente, podemos usar coordenadas polares:

$$
\begin{array}{ll}
g(\theta) = (\cos \theta, \sin \theta) &
\theta \in \left]-\frac{\pi}{2}, \frac{\pi}{2}\right[
\end{array}
$$

Verificando novamente as condições da parametrização:

- $g \in C^1$
- $g$ é injetiva
- $Dg(\theta) = \begin{bmatrix} - \sin \theta \\ \cos \theta \end{bmatrix}$  
  $Dg$ não tem colunas linearmente independentes quando $\sin \theta, \cos \theta = 0$  
  Impossível em $M$ porque $\sin^2\theta + \cos^2\theta = 1$

{green}(Logo, $g$ é uma parametrização de $M$.)

---

Considerando

$M = \{(x,y,z): x^2+y^2+z^2 = 1, z > 0\}$

Utilizando as coordenadas esféricas, com $r=1$, podemos obter a seguinte parametrização:

$$
\begin{array}{ll}
g(\theta, \varphi) = (\cos \theta \sin \varphi, \sin \theta \sin \varphi, \cos \varphi) &
\theta \in \left]0, 2\pi\right[, \varphi \in \left]0, \frac{\pi}{2}\right[
\end{array}
$$

- $g \in C^1$
- $g$ é injetiva
- $Dg$ tem duas colunas linearmente opostas:

  $$
  Dg(\theta, \varphi) = \begin{bmatrix}
  \textcolor{#F4AC45}{-\sin \theta \sin \varphi} & \cos \theta \cos \varphi\\
  \textcolor{#F4AC45}{\cos \theta \sin \varphi} & \sin \theta \cos \varphi\\
  0 & \textcolor{#C8553D}{-\sin \varphi}
  \end{bmatrix}
  $$

  Em $\varphi \in \left]0, \frac{\pi}{2}\right[$, temos que $\textcolor{#C8553D}{-\sin \varphi} < 0$

  Também temos que

  $$
  \begin{cases}
  \textcolor{#F4AC45}{-\sin \theta \sin \varphi} = 0\\
  \textcolor{#F4AC45}{\cos \theta \sin \varphi} = 0
  \end{cases}
  \Rightarrow
  \sin\theta, \cos\theta = 0
  $$

  que é impossível em $M$, pois $\sin^2 \theta + \cos^2 \theta = 1$.

{green}(Logo, $g$ é uma parametrização de $M$.)

---

Considerando

$$M = \{(x,y,z) \in \R^3: x^2+y^2+z^2 = 1, x = y \}$$

que se sabe ser uma variedade de $\dim 1$.

Podemos substituir $y$ por $x$, obtendo assim a equação
$2x^2+z^2=1 \Leftrightarrow (\sqrt{2} x)^2+z^2 = 1$, correspondente a uma elipse.

Podemos agora aplicar coordenadas cilindricas modificadas:

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

Como $x = y$, então $y = \frac{1}{\sqrt{2}} \cos \theta$.

Obtemos assim a parametrização:

$$
\begin{array}{ll}
g(\theta) = \left(\frac{1}{\sqrt{2}} \cos \theta, \frac{1}{\sqrt{2}} \cos \theta, \sin \theta\right) & \theta \in ]0, 2\pi[
\end{array}
$$

:::

## Espaço Tangente e Espaço Normal

::: tip DEFINIÇÃO

$M$ variedade de $\dim m \subset \R^n$, $v \in \R^n$, $a \in M$

$v$ é tangente a $M$ no ponto $a$ se existir um caminho $\gamma$ em $M$
com $\gamma (0) = a$ e $\gamma'(0) = v$.

:::

{orange}(**Espaço Tangente** a $M$ no ponto $a$)

$$
T_aM = \{\text{vetores tangentes a } M \text{ no ponto } a\}
$$

é espaço vetorial de dimensão $m$.

{yellow}(**Espaço Normal** a $M$ no ponto $a$)

$(T_aM)^\perp = \{\text{vetores perpendiculares a } T_aM\}$

é espaço vetorial de dimensão $n-m$.

---

Slides:

- [Aula 31](https://drive.google.com/file/d/1A-P0lLvEs-y6mfKzjFtb5FpdQgeXP_CF/view?usp=sharing)
- [Aula 32](https://drive.google.com/file/d/1ezOnPt6jcVTSpJEB8tmPyoSn9cUrLZzz/view?usp=sharing)
- [Aula 33](https://drive.google.com/file/d/1PWd668ykP597L8UD8ToRE38QJvDykPMb/view?usp=sharing)
