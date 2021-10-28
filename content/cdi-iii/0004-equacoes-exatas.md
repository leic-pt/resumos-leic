---
title: Equações Exatas e Redutíveis a Exatas
description: >-
  Equações Exatas.
  Equações Redutíveis a Exatas. Fator Integrante.
path: /cdi-iii/equacoes-exatas
type: content
---

# Equações Exatas e Redutíveis a Exatas

## Equações Exatas

Uma equação diferencial do tipo

$$
M(t,y) + N(t,y) \frac{\d y}{\d t} = 0
$$

diz-se exata se o seguinte for verdade:

$$
\frac{\partial M}{\partial y} = \frac{\partial N}{\partial t}
$$

Além disso, podemos resolver um problema de valor inicial do tipo

$$
\begin{cases}
M(t,y) + N(t,y) \frac{\d y}{\d t} = 0\\
y(t_0) = y_0
\end{cases}
$$

que satisfaz as condições

1. $\frac{\partial M}{\partial y} = \frac{\partial N}{\partial t}$ (ou seja, é exata)
2. $N(t_0, y_0) \ne 0$

em que a sua solução é definida implicitamente por $\phi: A \to \R$ de classe $C_1$ tal que

$$
\begin{darray}{cc}
\phi (t,y) = C, &\text{com } C = \phi (t_0, y_0)\\
M = \frac{\partial \phi}{\partial t} & N = \frac{\partial \phi}{\partial y}
\end{darray}
$$

---

:::info[Exemplo Não Exata]

**Considerando o PVI**

$$
\begin{darray}{cc}
\frac{\d y}{\d t} = \frac{t-y^2}{ty} &, & y(1) = \sqrt{\frac{2}{3}}
\end{darray}
$$

Podemos reescrever para ficar com a forma que queremos:

$$
y^2 - t + ty \frac{\d y}{\d t} = 0
$$

E assim temos que

$$
\begin{darray}{ccc}
M = y^2 - t & , & N = ty
\end{darray}
$$

Podemos então agora verificar que [não é exata](color:red):

$$
\begin{darray}{ccc}
\frac{\partial M}{\partial y} = 2y & \ne & \frac{\partial N}{\partial t} = y
\end{darray}
$$

:::

:::info[Exemplo Exata]

**Considerando o PVI**

$$
\begin{cases}
\underbrace{ty^2 - t^2}_{M} + \underbrace{t^2 y}_{N} \frac{\d y}{\d t} = 0\\
y(1) = \sqrt{\frac{2}{3}}
\end{cases}
$$

Temos então que

$$
\begin{darray}{ccc}
\frac{\partial M}{\partial y} = 2ty & = & \frac{\partial N}{\partial t} = 2ty
\end{darray}
$$

pelo que a equação [é exata](color:green).

Podemos ainda determinar a solução da equação.

$$
\frac{\partial \phi}{\partial t} = ty^2 -t^2 \implies \phi = \frac{t^2 y^2}{2} - \frac{t^3}{3} + C(y)
$$

$$
\frac{\partial \phi}{\partial y} = t^2 y + C'(y) = t^2 y, \text{então temos que }C'(y) = 0
$$

Consequentemente, podemos assumir também que (embora possa ser qualquer constante) $C(y) = 0$

Temos assim que a solução da equação é definida implicitamente por:

$$
\begin{darray}{c}
\frac{t^2 y^2}{2} - \frac{t^3}{3} = c
\end{darray}
$$

Substituindo $y$ por $\sqrt{\frac{2}{3}}$ e $t$ por $1$, de acordo com o valor inicial, obtemos:

$$
c = \frac{t^2 y^2}{2} - \frac{t^3}{3} = \frac{\sqrt{\frac{2}{3}}^2}{2} - \frac{1}{3} = 0
$$

Pelo que (y tem de conter $\sqrt{\frac{2}{3}}$, logo retirar o quadrado do $y$, fica positivo):

$$
\begin{darray}{cc}
y^2 = \frac{t^3}{3} \times \frac{2}{t^2} \implies y= \sqrt{\frac{2t}{3}}
\end{darray}
$$

:::

## Equações Redutíveis a Exatas

Nem todas as equações são exatas, mas **todas as equações escalares de primeira ordem** são [redutíveis a exatas](color:orange).  
Para transformarmos uma equação não exata numa equação exata, temos de a multiplicar por uma função $\mu (t,y)$, denominada **fator integrante**.

Assim, passamos a ter uma equação (exata) do tipo:

$$
\mu M + \mu N y' = 0
$$

Para descobrirmos o fator integrante $\mu (t,y)$, temos de resolver a equação diferencial parcial, o que pode ser muito difícil (e normalmente impossível).

Por essa razão, trabalhamos apenas com situações onde $\mu$ depende apenas de uma variável.

$$
\frac{\partial  (\mu M)}{\partial y} = \frac{\partial (\mu N)}{\partial t}
$$

Se trabalharmos esta igualdade, obtemos o seguinte:

$$
\begin{darray}{cc}
\frac{\partial \mu}{\partial y} M + \mu \frac{\partial M}{\partial y} = \frac{\partial M}{\partial t} N + \mu \frac{\partial N}{\partial t}\Leftrightarrow\\
\Leftrightarrow\frac{\partial \mu}{\partial t} N - \frac{\partial \mu}{\partial y} M = \left(\frac{\partial M}{\partial y} - \frac{\partial N}{\partial t}\right) \mu
\end{darray}
$$

Ficamos assim com dois casos:

- Se $\frac{\partial \mu}{\partial y} = 0$, então $\mu$ vai depender apenas de $t$ e pode ser calculado através da equação diferencial

  $$
  \frac{\d \mu}{\d t} = \frac{\frac{\partial M}{\partial y} - \frac{\partial N}{\partial t}}{N} \mu
  $$

- Se $\frac{\partial \mu}{\partial t} = 0$, então $\mu$ vai depender apenas de $y$ e pode ser calculado através da equação diferencial

  $$
  \frac{\d \mu}{\d y} = -\frac{\frac{\partial M}{\partial y} - \frac{\partial N}{\partial t}}{M} \mu
  $$
