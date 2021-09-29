---
title: Equações Diferenciais Ordinárias
description: >-
  Equações Diferenciais Ordinárias
path: /cdi-iii/equacoes-diferenciais-ordinarias
type: content
---

# Equações Diferenciais

```toc

```

Uma equação diferencial é uma equação em que a incógnita é uma função ($y(x)$), e que estão presentes
as suas derivadas ($y'(x)$, $y''(x)$, etc) assim como uma variável independente ($x$).

Existem dois tipos de **Equações Diferenciais**:

- **Equações Diferenciais Ordinárias:** Uma equação diferencial é **ordinária** quando o domínio da função $y(x)$ está contido em $\R$, isto é, tem apenas 1 dimensão. Por exemplo:

  $$
  y' = xy
  $$

- **Equações Diferenciais Parciais:** Uma equação diferencial é **parcial** quando o domínio da função $u(x_1,x_2,\dots,x_n)$ está contido em $\R^n$, isto é, tem dimensão superior a 1. Por exemplo:

  $$
  \begin{darray}{c}
  \text{Tomando a função } u(x,y),\\
  \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0
  \end{darray}
  $$

## Equações Diferenciais Ordinárias

- **Equações Diferencias Ordinárias (EDO) de $X$ª ordem**: A ordem de uma EDO é dada pela maior ordem da derivada que existe na equação.  
  Por exemplo, a equação
  $$
  x'' + t^2 x' + \sin x = \arctan t
  $$
  é de [2ª ordem](color:orange) (a incognita é uma função $x(t)$), enquanto a equação
  $$
  \frac{\d u}{\d s} = u e^5 + s^2 + u^2
  $$
  é de [1ª ordem](color:green) (a incognita é uma função $u(s)$).

:::info[Exemplo]
**O volume $v(t)$ de líquido num tanque ($v$ em litros, $t$ em segundos) é, no instante inicial $t = 0$, igual a $3$ litros.**  
**Sabendo que o tanque enche à razão de $0.1$ litros por segundo, determine o volume de líquido no tanque ao fim de 10 segundos.**

Este exercício é muito simples e pode-se resolver facilmente de cabeça: $3 + 0.1 \times 10 = 4 \operatorname{L}$.  
No entanto, podemos também aplicar cálculo diferencial e rescrever o problema numa EDO:

$$
\begin{darray}{c}
v'(t) = 0.1\\
v(t) = \int_0^t \frac{\d v}{\d t} \d t = \int_0^t 0.1 \d t = 0.1t + c
\end{darray}
$$

Como sabemos que $v(0) = 3$, temos que $v(t) = 3 + 0.1t$, o que já tínhamos concluido de uma forma mais simples.

**No entanto, o que acontece agora se alterarmos a razão para $\frac{t}{100}$?**

Tentar calcular agora intuitivamente não é fácil, visto que a razão inclui uma variável.  
Temos assim de aplicar o mesmo raciocínio que usámos anteriormente, com uma EDO:

$$
\begin{darray}{c}
v'(t) = \frac{t}{100}\\
v(t) = \int_0^t \frac{\d v}{\d t} \d t = \int_0^t \frac{t}{100} \d t = \frac{t^2}{200} + c
\end{darray}
$$

Obtemos então $v(t) = 3 + \frac{t^2}{200}$, sendo que com $t = 10$, temos $v(10) = 3 + \frac{10^2}{200} = 3.5$

**Alterando agora a razão para $\frac{t}{100} - \frac{v}{100}$ (como se tivesse um "furo")**

$$
v'(t) = \frac{t}{100} - \frac{v}{100}
$$

Esta equação é uma **EDO escalar de 1º ordem linear**, ou seja, é do tipo $\frac{\d x}{\d t} = a(t) x + b(t)$.  
Neste caso, $a = -\frac{1}{100}$ e $b = \frac{t}{100}$

Temos então de descobrir $v(t)$:

$$
\begin{cases}
\frac{\d v}{\d t} &= \frac{t}{100} - \frac{v}{100}\\
v(0) &= 3
\end{cases}
$$

$$
v(t) = \int_0^t \frac{\d v}{\d s} \d s = \int_0^t \frac{s}{100} - \frac{v}{100} \d s = \frac{t^2}{200} - \frac{vt}{100}
$$

No entanto, não conseguimos isolar $v(t)$. Mais à frente veremos como podemos resolver equações deste tipo.

$% HELP, provavelmente dá para resolver sem usar a fórmula, mas não percebi como$

:::

## EDO Lineares

:::tip[Definição]
Uma EDO de primeira ordem é [**linear**](color:yellow) se se pode escrever na forma

$$
\frac{\d x}{\d t} = a(t) x + b(t)
$$

:::

Consoante a nulidade de $a(t)$ e $b(t)$, temos várias formas de resolver uma equação deste tipo.

### Caso $a(t) \equiv 0$

Neste caso, como $a(t) \equiv 0$, temos que $\frac{\d x}{\d t} = b(t)$.  
Este é o caso mais simples, pelo que podemos obter

$$
x'(t) = b(t) \Leftrightarrow x(t) = \int b(t) \d t + c
$$

Se soubermos um valor que pertence à função, por exemplo, $x(t_0) = x_0$, podemos descobrir diretamente a função $x(t)$:

$$
\int_{t_0}^t \frac{\d x}{\d s} \d s = \int_{t_0}^t b(s) \d s
$$

$$
x(t) = \int_{t_0}^t b(s) \d s + x_0
$$

### Caso $b(t) \equiv 0$

Neste caso, como $b(t) \equiv 0$, temos que $\frac{\d x}{\d t} = a(t) x$.  
Assim obtemos a seguinte fórmula:

$$
x(t) = k e^{\int a(t) \d t}
$$

Novamente, se soubermos um valor que pertence à função, por exemplo, $x(t_0) = x_0$, podemos descobrir diretamente a função $x(t)$:

$$
x(t) = x_0 e^{\int_{t_0}^t a(s) \d s}
$$

### Caso Geral

:::tip[PRO TIP]
É recomendado saber os casos particulares de cor em vez de usar o caso geral para lá chegar,
pois são consideravelmente mais simples.
:::

O caso geral ocorre quando nada se pode assumir sobre a nulidade de $a(t)$ e $b(t)$.  
Ficamos assim com a expressão, em que $a,b \in \C$:

$$
\frac{\d x}{\d t} = a(t) x + b(t)
$$

Para resolver este tipo de equações, utilizamos uma função auxiliar, denomidada [**fator de integração**](color:orange)
$\mu \equiv \mu (t)$ ([a letra grega "mu"](<https://en.wikipedia.org/wiki/Mu_(letter)#Mathematics>)).

1. Começamos por multiplicar todos os membros da equação por $\mu$:

   $$
   x' \mu - a(t) x \mu = b(t) \mu
   $$

2. Utilizar as regras de derivação para simplificar a expressão:

   Sabe-se que $\mu x' + \mu' x = (\mu x)'$, pelo que podemos escrever que $\mu' = -a(t) \mu$, obtendo

   $$
   (x \cdot \mu)' = b(t) \mu
   $$

3. Descobrir $\mu$, pela fórmula do [caso $b(t) \equiv 0$](#caso-bt-equiv-0).

4. Substituir os valores na expressão

   $$
   (x \cdot \mu)' = b(t) \mu
   $$

   e determinar $x(t)$.

:::details[Exemplo]

**Tomando a equação e um ponto,**

$$
\begin{darray}{cc}
y' + 2ty = t & y(0) = 1
\end{darray}
$$

**queremos determinal a expressão que define $y(t)$.**

1. Começamos por multiplicar todos os membros por $\mu$:

   $$
   \underbrace{\mu y' + \overbrace{\mu \cdot 2t}^{\mu'}y}_{(\mu y)' = \mu y' + \mu' y} = \mu t
   $$

2. Simplificando agora a expressão, ficamos com $\mu' = 2t\mu$ e

   $$
   (\mu y)' = \mu t
   $$

3. Queremos agora descobrir $\mu$, pelo que podemos usar a fórmula do [caso $b(t) \equiv 0$](#caso-bt-equiv-0).

   $$
   \mu' = 2t\mu \Leftrightarrow \mu = e^{t^2}
   $$

   Não é necessário incluir a constante porque essa é adicionada na expressão abaixo.

4. Substituindo agora os valores na expressão em (2), obtemos:

   $$
   \begin{darray}{c}
   (e^{t^2} y)' = e^{t^2} \cdot t\\
   e^{t^2} y = \int e^{t^2} \cdot t \d t\\
   e^{t^2} y = \frac{e^{t^2}}{2} + c\\
   y= \frac{1}{2} + c \cdot e^{-t^2}
   \end{darray}
   $$

5. Por fim, descobrimos o valor de $c$:

   $$
   y(0) = \frac{1}{2} + c \cdot e^0 = \frac{1}{2} + c \underset{y(0)=1}{\Leftrightarrow} c = \frac{1}{2}
   $$

   Pelo que temos como resposta final

   $$
   y(t) = \frac{1 + e^{-t^2}}{2}
   $$

:::

Alternativamente, pode-se utilizar o seguinte teorema, mas nem sempre se justifica aplicá-lo:

:::tip[Teorema]

**Variação das constantes**

$$
x(t) = x_0 e^{\int_{t_0}^t a(z) \d z} + \int_{t_0}^t b(s) e^{\int_s^t a(z) \d z} \d s
$$

:::
