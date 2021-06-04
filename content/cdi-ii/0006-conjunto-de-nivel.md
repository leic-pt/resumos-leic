---
title: Conjunto de Nível e Caminho
description: Curvas de Nível, Conjunto de Nível, Ponto de Sela, Caminho em Rⁿ, Derivada de um Caminho, Vetor Tangente a um Caminho, Gradiente de um Campo Escalar
path: /cdi-ii/conjunto-de-nivel
---

# Conjunto de Nível e Caminho

```toc

```

## Curvas de Nível

Tomando uma função escalar, $f: D \subseteq \R^n \to \R$ e $a \in D$.
Suponha que $f$ é diferenciável em $a$.
Então,

$$
\frac{\partial f}{\partial v} (a)=J^{f}_{a} v=\nabla f( a) \cdot v=||\nabla f( a) ||\cdot ||v||\cdot \cos\widehat{( \nabla f( a) ,v)}
$$

pois podemos chamar à Jacobiana de uma função escalar, o [gradiente](0004-diferenciabilidade.md#gradiente-de-uma-funcao), $\nabla f(a)$, da função.

Se $||v|| = 1$, então $\frac{\partial f}{\partial v} (a) = ||\nabla f( a) ||\cdot \cos\widehat{( \nabla f( a) ,v)}$, ou ainda
$v=\frac{\nabla f(a)}{|| \nabla f(a)||}$.

Podemos concluir duas coisas:

- Quando nos afastamos de $a$ no sentido de $\nabla f (a)$, a função tem variação máxima.
- Quando $\cos\widehat{( \nabla f( a) ,v)}= 0$ (ou seja $v \perp \nabla f(a)$), a função "não varia localmente", dando origem a **curvas de nível**: pontos da função com o mesmo valor.

![Curvas de Nível em 3D](./assets/0006-curvas-nivel.svg#dark=1)

O gradiente dá a direção e sentido segundo os quais se dá a variação máxima da função.

:::tip
Para funções diferenciáveis vetoriais $f: D \subseteq \R^n \to \R^m$
(portanto existem $f_i: D \subseteq \R^n \to \R$ diferenciáveis para $i = 1, 2, \dots, m$),
estas considerações são válidas para cada uma das $f_i$'s.
:::

:::details[Exemplo]

Seja $f(x,y) = x^2+xy$.
Obtendo o gradiente da função, podemos descobrir qual a direção a seguir para maximixar a variação da mesma.

$$
\begin{darray}{c}
\nabla f (x,y) = \left(\frac{\partial f}{\partial x} (x,y) \frac{\partial f}{\partial y} (x,y)\right) = (2x+y, x)\\\\
\nabla f(1,1) = (2\cdot 1 + 1, 1) = (3,1)
\end{darray}
$$

Em $(1,1)$ devo afastar-me no sentido $(3,1)$ para sentir a variação máxima da função junto a $(1,1)$.

Por outro lado para não sentir variação de $f$ junto a $(1,1)$, calcula-se o vetor perpendicular,
$(3,1) \cdot (v_1,v_2) = 3v_1 + v_2 \implies v=(1, -3)$.  
Assim, ao me afastar de $(1,1)$ no sentido $(1,-3)$, a função não varia localmente.

:::

## Conjunto de Nível

Os conjuntos de nível são a generalização das curvas de nível a $dim > 2$.

:::tip[DEFINIÇÃO]

Seja $f: D \subseteq \R^n \to \R$ e $k \in \R$,  
define-se o conjunto de nível de $f$ de valor $k$ como

$$
N(k) = \{x\in D: f(x) = k\}
$$

Podemos dar nomes concretos ao conjunto de nível, caso estejamos numa das dimensões:

- Se $n = 2$: curvas de nível
- Se $n = 3$: superfíceis de nível

:::

Se tomarmos como exemplo $f(x,y)=x^2-y^2$, podemos calcular as suas curvas de nível (conjuntos de nível),
de forma a obtermos um esboço do gráfico da função.

$$
\begin{darray}{l}
N(0) = \{(x,y) \in D: x^2-y^2= 0\} = \{(x,y) \in D: x^2=y^2\} =\\
= \{(x,y) \in D: y=x \lor y=-x\}\\
\\
N(1) = \{(x,y) \in D: x^2-y^2 = 1\} \implies y= \pm \sqrt{x^2-1}\\
\\
N(-1) = \{(x,y) \in D: x^2-y^2=-1\} \implies y= \pm \sqrt{x^2+1}
\end{darray}
$$

Podemos visualizar as curvas de nível que acabámos de calcular no plano:

![Curvas de Nível da Função Exemplo](./assets/0006-ex-conjunto-nivel.svg#dark=1)

Podemos continuar a calcular as curvas de nível $N(k)$ e $N(-k)$, com $k > 0$, de forma a obtermos uma melhor ideia da função.

### Ponto de Sela

A este fenómeno, em que a derivada é nula mas não é nem um máximo nem um mínimo da função, chamamos **ponto de sela**[^saddle-point]:

[^saddle-point]: [Saddle Point na Wikipedia](https://en.wikipedia.org/wiki/Saddle_point)

Também podemos pensar que ao longo de uma direção a função cresce, e ao longo de outra decresce.

![Ponto de Sela (Saddle Point)](./assets/0006-saddle-point.svg#dark=1)

## Caminho em Rⁿ

:::tip[DEFINIÇÃO]
Caminho em $\R^n$ é uma função $c: \R \to \R^n$.  
A imagem de $c$ diz-se linha ou curva e denota-se $\Gamma$.
:::

Como exemplo, tomemos o caminho $c(t)=(\cos t, \sin t), \forall t \in \R$.  
A imagem deste caminho é $\Gamma = \{(x,y) \in \R^2: x^2+y^2=1\}$.

### Derivada de um Caminho

Se um caminho é $C^1$ (isto é, as derivadas parciais são contínuas)
a derivada é dada por

$$
c'(t)=\lim_{h \to 0} \frac{c(t+h)-c(t)}{h}
$$

:::tip[DEFINIÇÃO]
Seja $c: \R \to \R^n$, $C^1$ e $\Gamma$ a linha descrita por $c$.  
O vetor $c'(t)$ diz-se o **vetor tangente** à linha $\Gamma$ no ponto $c(t)$.
:::

Se considerarmos cada função componente de $c$, a função $c_i: \R \to \R$, podemos derivar
indidualmente cada uma destas componentes, de forma a obter o vetor tangente, $c'(t)$, à curva $\Gamma$ em $c(t)$.

:::details[Exemplos]

Se tivermos $c(t) = (\cos t, \sin t), \forall t \in \R$, podemos calcular as suas derivadas em vários pontos:

$$
\begin{darray}{l}
c' (t) = (-\sin t, \cos t), \quad \forall t \in \R\\
c'\left(\frac{\pi}{2}\right)=\left(-\sin\frac{\pi}{2}, \cos \frac{\pi}{2}\right)=(-1,0)\\
c'(0) = (-\sin 0, \cos 0) = (0, 1)\\
\end{darray}
$$

---

Tendo $c(t)=(\cos t, \sin t, t), \forall t \in \R$, obtemos:

$$
\begin{darray}{l}
c'(t)=(-\sin t, \cos t, 1)\\
c'\left(\frac{\pi}{2}\right) = \left(-\sin \frac{\pi}{2}, \cos \frac{\pi}{2}, 1\right) = (-1,0,1)
\end{darray}
$$

:::

### Vetor Tangente a um Conjunto

:::tip[DEFINIÇÃO]

Um vetor $v\in \R^n$ diz-se **tangente** a um conjunto $M \subset \R^n$ num ponto $a \in M$
se existir um caminho $C^1, c:\R \to M$ tal que $c(0) = a$ e $c'(0) = v$.

:::

:::details[Exemplo]

Sejam $f: D \subseteq \R^n \to \R$, uma função escalar e $k \in \R$  
Sejam $M = N(k) = \{x \in D: f(x)= k\}$  
Seja $a \in M, v \in \R^n$, então $c: \R \to M$ com $c(0) = a, c'(0) = v$.

Então, para $t=0$,  
$f(c(t)) = k \implies 0=(f\circ c)'(0) = \nabla f(c(t)) = \nabla f(a) \cdot v \implies v \perp \nabla f(a)$,  
ou seja, $v$ é ortogonal a $\nabla f(a)$

Portanto se $M$ é conjunto de nível e $a\in M$, $\nabla f(a)$ é ortogonal à tangente a $M$ em $a$.
:::

### Gradiente de um Campo Escalar

:::tip[DEFINIÇÃO]
O gradiente de um campo escalar $f$ em $a$ é ortogonal ao conjunto de nível de $f$.
:::

:::details[Exemplos]

Qual o vetor perpendicular ao plano de equação $ax + by + cz = d$ ?

O plano é conjunto de nível com valor $d$ da função $f(x,y,z)=ax+by+cz$,

$$
N(d)=\{(x,y,z)\in \R^3: ax+by+cz=d\}
$$

$\nabla f(x,y,z) = \begin{pmatrix}a & b & c\end{pmatrix}, \forall (x,y,z) \in \R^3$ é $\perp$ a $N(a)$ em qualquer ponto de $N(a)$

---

**Determine uma equação do plano tangente à esfera $x^2+y^2+z^2=9$ no ponto $(2,2,1)$.**

A esfera pode ser representada por $N(9) = \{(x, y,z) \in \R^3: x^2+y^2+z^2=9\}$ com $f(x,y,z) = x^2+y^2+z^2$,
pelo que:

$$
\begin{array}{l}
\nabla f(x,y,z) = (2x, 2y, 2z)\\
\nabla f(2,2,1) = (4, 4, 2)
\end{array}
$$

Pegando agora no vetor que representa o ponto,  
$v=(x,y,z)-(2,2,1)=(x-2,y-2,z-1) \perp \nabla f(2,2,1) = (4, 4, 2)$

Podemos obter a equação do plano tangente (a $N(9)$) à esfera em $(2,2,1)$:
$0=(4, 4, 2) \cdot (x-2, y-2, z-1) = 4(x-2) + 4(y-2) + 2(z-1)$

$4x+4y+2z=8+8+2 \Leftrightarrow 2x+2y+z=9$

**Calcule agora a reta normal à esfera nesse ponto.**

$$
\begin{aligned}
R& = \{(x,y,z) \in \R^3: (x,y,z) = (2,2,1) + \lambda \nabla f(2,2,1), \lambda \in \R\}\\
&=\{(x,y,z) \in \R^3: (x,y,z) = (2,2,1) + \lambda (4,4,2), \lambda \in \R\}
\end{aligned}
$$

:::

---

Slides:

- [Aula 11](https://drive.google.com/file/d/1gmfl3glC8lIOvPEvZdrrv5RH_yTMhpTW/view?usp=sharing)
- [Aula 12](https://drive.google.com/file/d/1HsBSnbK5_vzGnnGcwFNRgvRIIvZLdrRL/view?usp=sharing)
