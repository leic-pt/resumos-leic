---
title: Função Inversa e Função Implícita
description: Teorema da Função Inversa e Teorema da Função Implícita
path: /cdi-ii/funcao-inversa
type: content
---

# Função Inversa e Função Implícita

```toc

```

## Teorema da Função Inversa

Em CDI-I, tínhamos que qualquer $f: \R \to \R$ injetiva, isto é, objetos diferentes têm imagens diferentes,
admitia inversa $f^{-1}: C \to \R$.

Também se sabia que numa vizinhança, se $f$ for diferenciável e $f' \ne 0$, então $f^{-1}$ é diferenciável e que

$$
(f^{-1})'(y)=\frac{1}{f'(f^{-1}(y))}
$$

Como exemplo, temos $f(x) = e^x$, em que

$$
\begin{darray}{c}
f(x)=e^x \quad f'(x) = e^x \ne 0 \implies f^{-1} \text{é diferenciável}\\
(\log y)' = (f^{-1})'(y)=\frac{1}{f'(f^{-1}(y))} = \frac{1}{f'(\log y)} = \frac{1}{e^{\log y}} = \frac{1}{y}
\end{darray}
$$

:::tip[TEOREMA]

Seja $f: \R^n \to \R^n$ uma função de classe $C^1$, e $a\in\R^n$.

Se $\det Df(a) \ne 0$, então $f$ é invertível numa vizinhança de $a$ e está definida a função $f^{-1}$:

$$
\begin{darray}{c}
f^{-1}: V \subset \R^n \to \R^n\\
Df^{-1}(y) = \left(D f(f^{-1}(y))\right)^{-1}, \forall y \in V
\end{darray}
$$

:::

:::warning

Caso tenhamos que $\det D f(a) = 0$, não podemos concluir se a função é inversa ou não.

Por exemplo:

- Com $f: \R \to \R, f(x) = x^2$, então $f'(0) = 0$ e a função não é invertível na vizinhança de 0.  
  ![Origem da Função Quadrática x^2](./assets/0013-quadratica.svg#dark=1)
- Com $f: \R \to \R, f(x) = x^3$, então $f'(0) = 0$ e a função é invertível na vizinhança de 0.  
  ![Origem da Função Cúbica x^3](./assets/0013-cubica.svg#dark=1)

:::

:::details[Exemplos]

Seja

$$
\begin{array}{l l l l}
f(x,y) = (e^x \cos y, e^x \sin y) & x,y \in \R & f:\R^2 \to \R^2 & C^1
\end{array}
$$

Será que $f$ é inversível numa vizinhança de $(1,0)$?

Começamos então por calcular a Jacobiana de $f$, e ver se esta é nula em $(1,0)$.

$$
Df(x,y)=
\begin{bmatrix}
e^x \cos y & - e^x \sin y\\
e^x \sin y & e^x \cos y
\end{bmatrix}
$$

$$
Df(1,0)=
\begin{bmatrix}
e & 0\\
0 & e
\end{bmatrix}
$$

$$
\det Df(1,0) = e^2 \ne 0
$$

Então, pelo {green}(**Teorema da Função Inversa**), $f$ é inversível numa vizinhança de $(1,0)$ e

$$
Df^{-1}(u,v) = \left(Df \left(f^{-1}(u,v) \right) \right)^{-1}
$$

$$
\begin{darray}{c}
f(1,0) = (e,0) \implies f^{-1}(e,0) = (1,0)\\
Df^{-1}(e, 0) = \left(Df\left(f^{-1}(e,0) \right) \right)^{-1} = \left(Df(1,0) \right)^{-1} = \begin{bmatrix}
e & 0\\
0 & e
\end{bmatrix}^{-1}
=
\begin{bmatrix}
\frac{1}{e} & 0 \\
0 & \frac{1}{e}
\end{bmatrix}

\end{darray}
$$

---

[**Este exemplo corresponde ao exercício 1 da ficha 8**](color:orange)

$$
\begin{array}{ll}
f: \{(x,y) \in \R^2, x \ne 0\} \to \R^2\\
f(x,y) = (xy, \frac{y}{x})
\end{array}
$$

**a. Mostre que $f$ não é injetiva.**

Temos de encontrar 2 pontos c/ a mesma imagem.

$$
\begin{cases}
f(1,1)=(1,1)\\
f(-1,-1) = (1,1)
\end{cases}
$$

$$
f(x,0) = (0,0), \quad \forall x \ne 0
$$

**b. Encontrar um subconjunto (aberto) do domínio onde $f$ seja injetiva**

$$
D= \{ (x,y) \in \R^2 : x,y > 0 \}
$$

Será que $f$ é injetiva em $D$?

$$
f(x_1,y_1) = f(x_2, y_2), \quad (x_1,y_1), (x_2, y_2) \in D
$$

Então, será que $(x_1,y_1) = (x_2, y_2)$?

$$
\begin{aligned}
f(x_1, y_1) = f(x_2,y_2) &\Leftrightarrow \begin{cases}
x_1 y_1 = x_2 y_2\\
\frac{y_1}{x_1} = \frac{y_2}{x_2}
\end{cases}\\
&\Rightarrow \begin{cases}
y_1 = \frac{x_2}{x_1} y_2\\
\frac{x_2 y_2}{x_1^2} = \frac{y_2}{x_2}
\end{cases}\\
&\Rightarrow \begin{cases}
y_1 = \frac{x_2}{x_1} y_2\\
\frac{x_2}{x^2_1} = \frac{1}{x_2}
\end{cases}\\
&\Rightarrow \begin{cases}
-\\
x^2_2=x^2_1
\end{cases}\\
&\Rightarrow \begin{cases}
y_1=\frac{x_2}{x_1}y_2\\
x_2=x_1 \lor \underbrace{x_2=-x_1}_{\begin{array}{c}\scriptsize{\text{impossível porque}}\\\scriptsize{ x_1,x_2>0}\end{array}}
\end{cases}\\
&\Rightarrow \begin{cases}
y_1=y_2\\
x_1=x_1
\end{cases}
\end{aligned}
$$

Logo é injetiva

**c. Mostre que $f$ tem inversa local em torno do ponto $(2,2)$**

Sim, porque $(2,2) \in D$ e $f$ é injetiva em $D$.

Aplicando o [**Teorema da Função Inversa**](color:green),

- $f \in C^1$
- $f(x,y) = (xy, \frac{y}{x})$
- $f(2,2) = (4,1)$

$$
\begin{array}{ll}
Df(x,y)=
\begin{bmatrix}
y & x\\
-\frac{y}{x^2} & \frac{1}{x}
\end{bmatrix}
&
Df(2,2) = \begin{bmatrix}
2 & 2\\
-\frac{1}{2} & \frac{1}{2}
\end{bmatrix}
\end{array}
$$

- $\det Df(2,2) = 1-(-1) = 2 \ne 0$

Pelo [**Teorema da Função Inversa**](color:green), a função é localmente invertível em $(2,2)$.

**d. Calcule $Df^{-1} (4,1)$, em que $f^{-1}$ designa uma das funções inversas de $f$**

$f^{-1}(4,1) = (2,2)$

$$
Df^{-1}(4,1) = (Df(2,2))^{-1} = \begin{bmatrix}
2 & 2\\
-\frac{1}{2} & \frac{1}{2}
\end{bmatrix}^{-1} =
\begin{bmatrix}
\frac{1}{4} & -1\\
\frac{1}{4} & 1
\end{bmatrix}
$$

:::

## Teorema da Função Implícita

:::tip[TEOREMA]

Seja $F \in C^1, F: \R^n \times \R^m \to \R^m$ e
considerando a curva de nível $F = 0$ e um ponto $a = (x_0, y_0)$ nessa curva.

Se $\det (D_y F)(a) \ne 0$, então numa vizinhança de $a$, a curva de nível é um gráfico $y=f(x)$ para uma função desconhecida $f$.

[_$D_y F$ é a matriz jacobiana só em relação às variáveis $y$_](color:red)

Além disso, ficamos também a saber que:

$$
D_xf(x) = - (D_yF)^{-1} D_x F(x, f(x))
$$

:::

:::details[Demonstração]

$$
\begin{aligned}
\begin{cases}
F(x,y) = 0\\
y=f(x)
\end{cases}
&
\Rightarrow
F(x,f(x)) = 0,\quad \forall x \text{ na vizinhança}\\
& \Rightarrow D(F(x, f(x))) = 0\\
& \Rightarrow D_xF + D_yF \cdot D_x f = 0\\
& \Rightarrow D_yF \cdot D_xf = - D_xF\\
& \Rightarrow D_xf(x) = - (D_yF)^{-1} D_x F(x, f(x))
\end{aligned}
$$

:::

:::details[Exemplos]

**Mostre que numa vizinhança de $(0, \pi)$ a equação $F(x,y) = x^2y + \sin(x+y) = 0$ define $y$ como função de $x$.**

Começamos por certificar as condições para aplicar o [**Teorema da Função Implícita**](color:green):

- $F \in C^1$
- $F(0, \pi) = 0^2 \times \pi + \sin(0 + \pi) = 0$
- $\frac{\partial F}{\partial y}\big|_{(0,\pi)} = x^2+\cos(x+y) \big|_{(0,\pi)} = \cos(\pi) = -1 \ne 0$  
  [_$\frac{\partial F}{\partial y}$ é a matriz jacobiana relativa às variáveis que vão ficar dependentes_](color:red)

Pelo [**Teorema da Função Implícita**](color:green), numa vizinhança de $(0, \pi)$, existe $y = f(x)$.

$$
\begin{aligned}
f'(0) &= - \left(\frac{\partial F}{\partial y} (0, \pi) \right)^{-1} \cdot \frac{\partial F}{\partial x}(0, \pi)\\
&= -\frac{1}{-1} (2xy+\cos(x+y)) \big|_{(0,\pi)}\\
&= -1
\end{aligned}
$$

---

**Mostre que na vizinhança de $(1,1,1,1)$ as equações**

$$
\begin{cases}
xu + yvu^2 = 2\\
xu^3 + y^2v^4 = 2
\end{cases}
$$

**definem $u$ e $v$ como funções de $x$ e $y$.**  
**Além disso, calcule $\frac{\partial u}{\partial x}(1,1)$**

Podemos então escrever
$F(x,y,u,v) = (xu + yvu^2 - 2, xu^3 + y^2v^4 - 2)$

De seguida, verificamos as condições para a aplicação do teorema:

- $F\in C^1$
- $F(1,1,1,1) = (1+1-2, 1+1-2) = (0,0)$

$$
D_{(u,v)} F = \begin{bmatrix}
x+2yvu & yu^2\\
3xu^2 & 4y^2v^3
\end{bmatrix}
_{\big |_{(1,1,1,1)}} = \begin{bmatrix}
3 & 1\\
3 & 4
\end{bmatrix}
$$

- $\det D_{(u,v)} F = 9 \ne 0$

Pelo [**Teorema da Função Implícita**](color:green), numa vizinhança de $(1,1,1,1)$, existe $(u,v) = f(x,y)$.

$$
\begin{aligned}
D_{(x,y)} f (1,1) &= - [D_{(u,v)} F(1,1,1,1)]^{-1} DF_{(x,y)} (1,1,1,1)\\
&= ...\\
&= \begin{bmatrix}
-\frac{1}{3} & -\frac{2}{9}\\
0 & -\frac{1}{3}
\end{bmatrix}
\end{aligned}
$$

Pelo que $\frac{\partial u}{\partial x} = -\frac{1}{3}$, correspondente à entrada $0,0$ da matriz acima.

$$
(u, v) = f(x,y) = (f_1(x,y) , f_2(x,y))
$$

$$
\begin{cases}
u=f_1(x,y)\\
v=f_2(x,y)
\end{cases}
\Rightarrow
\begin{cases}
u=u(x,y)\\
v=v(x,y)
\end{cases}
$$

---

**Considerando**

$$
\begin{array}{l l}
x^3 + x^2y + e^{y^2-1} = 3 & \text{e } a = (1,1)
\end{array}
$$

**Será que é possível definir $y$ em função de $x$, isto é, existe $y = y(x)$?**

- $F(x,y) = x^3+x^2y+e^{y^2-1} - 3$
- $F \in C^1$
- $F(a) = 0 \Leftrightarrow F(1,1) = 1+1+1-3 = 0$
- $\det D_yF = x^2+2ye^{y^2-1} \big|_{(x,y) = (1,1)} = 1+2=3 \ne 0$

Pelo [**Teorema da Função Implícita**](color:green), numa vizinhança de $(1,1)$, existe $y = y(x)$ e $F(x,y(x)) = 0$

**Qual o valor de $y'(1)$ e $y''(1)$?**

Sabemos que $y(1) = 1$. Logo, pelo [**Teorema da Função Implícita**](color:green), podemos escrever:

$$
y'(1) = -\left(\frac{\partial F}{\partial y} \right)^{-1} \cdot \frac{\partial F}{\partial x} =
- \frac{1}{3} \cdot \frac{\partial F}{\partial x}(1,1) = -\frac{5}{3}
$$

Para descobrirmos o valor de $y''(1)$ precisamos primeiro de descobrir a expressão de $y'(x)$
para podermos usar a regra da cadeia.

$$
\frac{\partial F}{\partial x}(1,1) = 3x^2+2xy \big|_{(1,1)} = 5
$$

Sabendo que $F(x,y(x)) = 0, \forall x$ na vizinhança de 1, podemos usar a
[regra da cadeia](/cdi-ii/derivada-composta#fórmula-da-cadeia-chain-rule) para obter
a expressão de $y'(x)$:

$$
\begin{aligned}
\frac{\d}{\d x} F(x,y(x)) = 0 &\Leftrightarrow \frac{\partial F}{\partial x} (x,y(x)) + \frac{\partial F}{\partial y} (x,y(x)) \cdot \frac{\partial y}{\partial x} = 0\\
&\Leftrightarrow y'=\frac{\partial y}{\partial x} = - \left(\frac{\partial F}{\partial y}\right)^{-1} \frac{\partial F}{\partial x}
\end{aligned}
$$

$$
\begin{darray}{l}
\frac{\d^2}{\d x^2}(F(x,y(x))) = 0\\
\Leftrightarrow \frac{\d}{\d x}\left(\frac{\partial F}{\partial x}(x,y(x)) + \frac{\partial F}{\partial y}(x,y(x)) \cdot y'(x)\right) = 0\\
\Leftrightarrow \frac{\partial^2 F}{\partial x^2} + \frac{\partial^2 F}{\partial x \partial y} \cdot y'(x) +
\left(\frac{\partial^2 F}{\partial x \partial y} + \frac{\partial^2 F}{\partial y^2} \cdot y'(x) \right) \cdot y'(x) +\\
\quad +\frac{\partial F}{\partial y}(x,y(x)) \cdot y''(x) =0
\end{darray}
$$

(1)

Determinando agora os valores necessários:

$$
\begin{darray}{l l l}
\frac{\partial F}{\partial x} = 3x^2 + 2xy &
\frac{\partial F}{\partial y} = x^2 + 2ye^{y^2-1} &
\frac{\partial F}{\partial y}(1,1) = 3\\
\frac{\partial^2 F}{\partial x^2} = 6x +2y &
\frac{\partial^2 F}{\partial x \partial y} = 2x &
\frac{\partial^2 F}{\partial y^2} = 4y^2e^{y^2-1} + 2e^{y^2-1}\\
\frac{\partial^2 F}{\partial x^2}(1,1) = 8 &
\frac{\partial^2 F}{\partial x \partial y}(1,1) = 2 &
\frac{\partial^2 F}{\partial y^2}(1,1) = 6
\end{darray}
$$

Então, substituindo na expressão (1), e relembrando que $y'(1) = -\frac{5}{3}$,

$$
\begin{darray}{l}
\frac{\d^2}{\d x^2}(F(x,y(x))) = 0\\
\Leftrightarrow 8+2y'(1) + (2+6\cdot y'(1)) \cdot y'(1) + 3y''(1) = 0\\
\Leftrightarrow y''(1) = -\frac{1}{3} (8+2y'(1) + 2y'(1) + 6(y'(1))^2)\\
\Leftrightarrow y''(1) = -\frac{1}{3} \left(8+2 \left(-\frac{5}{3} \right) + 2 \left(-\frac{5}{3} \right) + 6\left(-\frac{5}{3} \right) ^2 \right)\\
\Leftrightarrow y''(1) = -6
\end{darray}
$$

---

**Considerando**

$$
F(x,y) = xy \quad, \quad C^1
$$

**podemos descobrir o seguinte**:

$$
F=0 \Leftrightarrow x=0\lor y=0
$$

Podemos aplicar o Teorema da Função implícita quando $x=0$ ou quando $y=0$.

Assim, no ponto $(x_0, y_0) = (0,0)$ sabemos que $F(x_0, y_0) = 0$.

**Será que existe $y = y(x)$ neste ponto?**

$$
\frac{\partial F}{\partial y} = x |_{x_0,y_0 = 0} = 0
$$

[**Não, pois o determinante é nulo.**](color:red)

**E $x = x(y)$?**

$$
\frac{\partial F}{\partial x} = y |_{x_0,y_0 = 0} = 0
$$

[**Não, pois o determinante é nulo.**](color:red)

Considerando agora o ponto $(x_0, y_0) = (0,1)$.

**Será que existe $x = x(y)$ neste ponto?**

$$
\frac{\partial F}{\partial x} = y |_{(x_0,y_0) = (0,1)} = 1
$$

[**Sim, o Teorema da Função Implícita aplica-se.**](color:green)

---

[**Este exemplo corresponde ao exercício 4 da ficha 8**](color:orange)

**Mostre que a equação $2z + x^2z^5 + y^2x^3 + xy = 2$ define implicitamente $z$ como função de $x$ e
de $y$, em torno do ponto $(0, 0, 1)$. Calcule o valor de $\frac{\partial^2 z}{\partial y \partial x}(0,0)$.**

Começamos por definir a função $F$:

$$
F(x,y,z) = 2z + x^2z^5 + y^2x^3 + xy - 2
$$

Verificamos as condições para aplicação do TFI:

- $F \in C^1$
- $F(0,0,1)= 2+0+0+0-2=0$
- $\det D_z F(0,0,1) = \frac{\partial F}{\partial z}(0,0,1) = [2+5x^2z^4]_{\big|_{(0,0,1)}} = 2 \ne 0$

Pelo Teorema da Função Implícita, numa vizinhança de $(0,0,1)$,

$$
\begin{array}{cc}
z = z(x,y) & F(x,y, z(x,y)) = 0
\end{array}
$$

$$
\begin{aligned}
D_{x,y} z &= -(D_zF)^{-1} D_{x,y} F\\
&= -\frac{1}{2+5x^2z^4} \cdot D_{x,y} F\\
&= -\frac{1}{2+5x^2z^4} \begin{bmatrix} 2xz^5 + 3x^2y^2+ y & 2yx^3+x\end{bmatrix}
\end{aligned}
$$

Então,

$$
\frac{\partial z}{\partial x} = - \frac{2xz^5+3x^2y^2+y}{2+5x^2z^4}
$$

E voltando a derivar esta expressão, em ordem a $y$:

$$
\begin{aligned}
\frac{\partial^2 z}{\partial y \partial x} &= \frac{\partial}{\partial y}\left(-\frac{2xz^5+3x^2y^2+y}{2+5x^2z^4}\right)\\
&= -\frac{(10xz^4 \frac{\partial z}{\partial y} + 6x^2y+1) \cdot(2+5x^2z^4) - (2xz^5+3x^2y^2+y)\cdot(20x^2z^3 \frac{\partial z}{\partial y})}{(2+5x^2z^4)^2}
\end{aligned}
$$

Para $(x,y) = (0,0)$ e $z=1$:

$$
\frac{\partial^2 z}{\partial y \partial x}(0,0)=-\frac{2-0}{4} = \frac{1}{2}
$$

:::

---

Slides:

- [Aula 27](https://drive.google.com/file/d/1qTo9pZIwfMRTr8X3kEv1MQ6hqVha6bLy/view?usp=sharing)
- [Aula 28](https://drive.google.com/file/d/1ZGn5YcukL4WcDkqqijbVqdovz_sO0smc/view?usp=sharing)
- [Aula 29](https://drive.google.com/file/d/1S-58MvUFNf4UBb3qN8-rBtBhYz_FdCZc/view?usp=sharing)
- [Aula 30](https://drive.google.com/file/d/12NtXHAqSW9O-cPCLzAoZQ4_2BqAssyzp/view?usp=sharing)
