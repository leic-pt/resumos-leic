---
title: Transformada de Laplace
description: >-
  Transformada de Laplace.
  Função de Heaviside.
  Propriedades Elementares da Transformada de Laplace.
  Transformada de Laplace de Funções Comuns.
  Inversa da Transformada de Laplace.
  Aplicação da Transformada de Laplace às Equações Diferenciais.
  Distribuição Delta de Dirac.
path: /cdi-iii/transformada-laplace
type: content
---

# Transformada de Laplace

```toc

```

## Definição de Transformada de Laplace

:::warning
Esta primeira parte não é particularmente útil para a maioria dos exercícios, mas pode dar jeito
para deduzir algumas expressões não frequentemente utilizadas e em exercícios mais complicados.
:::

Seja $f: [0, +\infty[ \to \R$. Define-se a [**Transformada de Laplace**](color:green) de $f$ como sendo a função de variável complexa

$$
\lapt{f} (s) = F(s) = \int_{0}^{+\infty} f(t) \ e^{-st} \d t
$$

### Domínio da Transformada de Laplace

Se a função $f$ for seccionalmente contínua em qualquer $[0, T]$ com $T \in \R^+$ e verificar

$$
|f(t)| \leq M e^{\alpha t} \quad,\quad \forall t \geq 0
$$

para certas constantes $M >0$ e $\alpha \in \R$, então a transformada de Laplace de $f$ está
bem definida no semi-plano complexo $\operatorname{Re} s > \alpha$.

:::details[Demonstração]

Para qualquer $t > 0 $ e $s \in \C$ tal que $\operatorname{Re} s > \alpha \Leftrightarrow \alpha - \operatorname{Re} s < 0$:

$$
\left|e^{-st} f(t) \right| = \left| e^{(-\operatorname{Re} s)t}\right| \left| e^{-i(\operatorname{Im} s)t} \right| \left| f(t) \right | \leq e^{(-\operatorname{Re} s) t} M e^{\alpha t} = M e^{(\alpha - \operatorname{Re}s)t}
$$

Então, para $\operatorname{Re} s > \alpha$:

$$
\left| \int_{0}^{+\infty} e^{-st} f(t) \d t \right| \leq \int_{0}^{+\infty} M e^{(\alpha - \operatorname{Re}s)t} \d t =
M \lim_{R \to +\infty} \frac{e^{(\alpha -\operatorname{Re}s)t}}{\alpha-\operatorname{Re}s} \bigg|^R_0 = \frac{M}{\operatorname{Re}s-\alpha}
$$

:::

:::info{Exemplo}

Sendo $f(t) = e^{at}, a \in \R$, (ou $a \in \C$) tem-se que

$$
\lapt{e^{at}} (s) = \int_{0}^{+\infty} e^{at} e^{-st} \d t = \lim_{R \to +\infty} \frac{e^{(a-s)t}}{a-s} \bigg |^R_{t=0} = \frac{1}{s-a}, \quad \operatorname{Re} s > a
$$

Como caso particular

$$
\lapt{1}(s) = \lapt{e^{0t}} (s) = \frac{1}{s} , \operatorname{Re}s > 0
$$

:::

### Função de Heaviside

Tal como já tínhamos [visto em CDI-I](/cdi-i/continuidade-limites#função-heaviside), a **função Heaviside** (centrada em $c$) é definida por:

$$
H_c(t) = \begin{cases}
0 & \text{se} & t < c\\
1 & \text{se} & t \geq c
\end{cases}
$$

:::info[Exemplo]

**Transformada de Laplace da função de Heaviside**

Se $c \geq 0$

$$
\lapt{H_c(t)}(s) = \int_{0}^{+\infty} H(t-c)e^{-ts} \d t = \int_{c}^{+\infty} e^{-ts} \d t = \lim_{N\to +\infty} -\frac{e^{-ts}}{s} \bigg|^N_c = \frac{e^{-cs}}{s}, \operatorname{Re} s > 0
$$

:::

## Propriedades Elementares da Transformada de Laplace

- **Linearidade**

  $$
  \lapt{f+g} (s) = \lapt{f} (s) + \lapt{g}(s)
  $$

  e para $\alpha \in \R$

  $$
  \lapt{\alpha f}(s) = \alpha \lapt{f}(s)
  $$

  Consequentemente, para $\alpha,\beta \in \R$:

  $$
  \lapt{\alpha f + \beta g}(s) = \alpha \lapt{f}(s) + \beta \lapt{g}(s)
  $$

- **Translação da Transformada de Laplace**

  Para $a \in \R$,

  $$
  \lapt{e^{-at} f(t)} (s) = \lapt{f(t) } (s+a)
  $$

- **Derivada da Transformada de Laplace**

  Para $n \in \N$,

  $$
  \frac{\d^n}{\d s^n} \left(\lapt{f(t)} (s) \right) = (-1)^n \lapt{t^n f(t)}(s)
  $$

- **Transformada de Laplace da Translação**

  Para $c \in \R^+$,

  $$
  \lapt{H(t-c) f(t-c)}(s ) = e^{-cs} \lapt{f(t)} (s)
  $$

- **Transformada de Laplace da Derivada**

  Se $f$ admite derivada seccionalmente contínua em $[0, +\infty[$ e $\operatorname{Re} s > 0$ então,

  $$
  \lapt{f'(t)}(s) = - f(0) + s\lapt{f(t)}(s)
  $$

  E para uma derivada de ordem $n$,

  $$
  \lapt{f^{(n)}(t)}(s) = -f^{(n-1)}(0) - sf^{(n-2)}(0) - \dots - s^{n-1} f(0) + s^n \lapt{f(t)}(s)
  $$

## Transformada de Laplace de Funções Comuns

Através da definição e propriedades, é possível obter as Transformadas de Laplace de várias funções comuns.

Uma tabela pode ser encontrada na [Cheat Sheet](/cdi-iii/cheatsheet/laplace-cheat).

## Inversa da Transformada de Laplace

Para mais tarde conseguirmos resolver equações diferenciais através da Transformada de Laplace,
necessitamos de conseguir inverter a transformação de Laplace.  
Tal como fizemos com primitivas em CDI-I, este método requer conhecer as funções mais comuns.

$$
f(t) = \mathcal{L}^{-1} \{F(s)\} \Leftrightarrow \lapt{f(t)} = F(s)
$$

Vejamos alguns exemplos

:::info[Exemplo]

**Calcule a inversa da Transformada de Laplace da seguinte função**

$$
F(s) = \frac{1}{s^2+4s+5}
$$

Podemos reescrever a função numa forma que corresponde a uma transformada conhecida:

$$
F(s) = \frac{1}{s^2+4s+5} = \frac{1}{(s+2)^2 + 1}
$$

Facilmente conseguimos reconhecer a transformada de $e^{at} \sin(\omega t)$, pelo que:

$$
F(s) = \frac{1}{(s+2)^2 + 1} = \lapt{e^{-2t} \sin t}
$$

E, finalmente, obtemos a inversa:

$$
f(t) = e^{-2t} \sin t
$$

:::

:::details[Exemplos Variados]

[**Exemplo 1**](color:yellow)

Algo que pode acontecer é aparecer um termo $e^{as}$ na transformada.
Se tal acontecer, o mais provável é ser necessário utilizar a função de Heaviside.

**Calcule a inversa da Transformada de Laplace da seguinte função**

$$
F(s) = \frac{e^{-3s}}{s+3}
$$

Podemos reparar na existência da transformada de $e^{at}$, pelo que:

$$
F(s) = e^{-3s} \times \frac{1}{s+3} = e^{-3s} \lapt{e^{-3t}}
$$

Se relembrarmos a [propriedade da Transformada de Laplace da Translação](#propriedades-elementares-da-transformada-de-laplace),
reparamos que temos de usar a função de Heaviside.

$$
F(s) = e^{-3s} \lapt{e^{-3t}} = \lapt{H(t-3) e^{-3(t-3)}}
$$

Pelo que a inversa é:

$$
f(t) = H(t-3) e^{-3(t-3)}
$$

---

[**Exemplo 2**](color:yellow)

Pode ser necessário aplicar o [método da decomposição em frações simples](/cdi-i/primitivacao#decomposição-em-frações-simples),
aprendido em CDI-I, de forma a conseguirmos identificar certas expressões.

**Calcule a inversa da Transformada de Laplace da seguinte função**

$$
F(s) = \frac{1}{s^3+2s^2+s}
$$

Podemos começar por fatorizar o denominador:

$$
F(s) = \frac{1}{s(s+1)^2}
$$

Aplicado agora o [método da decomposição em frações simples](/cdi-i/primitivacao#decomposição-em-frações-simples),
omitido aqui para brevidade, obtermos

$$
F(s) = \frac{1}{s(s+1)^2} = \frac{1}{s} - \frac{1}{s+1} - \frac{1}{(s+1)^2}
$$

Assim, identificamos as transformadas de $1$, $e^{at}$ e $t^n e^{at}$, pelo que:

$$
\begin{aligned}
F(s) &= \lapt{1} - \lapt{e^{-t}} - \lapt{te^{-t}}\\
&= \lapt{1-e^{-t}-te^{-t}}
\end{aligned}
$$

Pelo que a inversa é:

$$
f(t) = 1-e^{-t}-te^{-t}
$$

:::

## Aplicação da Transformada de Laplace às Equações Diferenciais

É possível resolver problemas de valor inicial (PVI) para uma equação linear de ordem $n$,
de coeficientes constantes, através da Transformada de Laplace.
Para se aplicar este método, a equação diferencial tem de ser do tipo:

$$
\begin{cases}
y^n + a_{n-1}y^{(n-1)} + \dots + a_1y' + a_0y = b(t)\\
y(0) = b_0\\
y'(0) = b_1\\
\quad \vdots\\
y^{(n-1)}(0) = b_{n-1}
\end{cases}
$$

Este método consiste nos seguintes passos:

1. Aplicar a Transformada de Laplace a ambos os membros da equação diferencial do problema:

   $$
   \lapt{y^n + a_{n-1}y^{(n-1)} + \dots + a_1y' + a_0y}(s) = \lapt{b(t)}(s)
   $$

2. Aplicando as propriedades da transformada de Laplace, determinar $Y(s)$, sendo que

   $$
   Y(s) = \lapt{y(s)}
   $$

3. Finalmente, determinar a função $y(t)$ tal que

   $$
   \lapt{y(t)}(s) = Y(s)
   $$

   ou seja,

   $$
   y(t) = \mathcal{L}^{-1} \{Y(s)\}(t)
   $$

   Diz-se que $y(t)$ é a Transformada de Laplace inversa de $Y(t)$.

Assim, obtém-se a solução $y(t)$ do PVI.

:::info[Exemplo]

**Resolva o seguinte problema de valor inicial**

$$
y'' - 2y' + y = t^5 e^t, y(0) = 1, y'(0) = 3
$$

1. Começamos por calcular a Transformada de Laplace de ambos os membros da equação.

   $$
   \lapt{y''} - 2\lapt{y'} + \lapt{y} = \lapt{t^5 e^t}
   $$

2. Queremos agora descobrir $Y(s) = \lapt{y}$, pelo que continuamos a desenvolver a expressão acima,
   até isolarmos o termo $Y(s)$.

   $$
   \begin{aligned}
   s^2 Y(s) - s y(0) - y'(0) - 2(s Y(s) - y(0)) + Y(s) &= \frac{5!}{(s-1)^6}\\
   (s^2 - 2s + 1) Y(s) - sy(0) - y'(0) + 2y(0) &= \frac{5!}{(s-1)^6}\\
   (s-1)^2 Y - s - 1 &= \frac{5!}{(s-1)^6}\\
   Y(s) &= \frac{s+1}{(s-1)^2} + \frac{5!}{(s-1)^8}\\
   \end{aligned}
   $$

3. Finalmente, temos de calcular a inversa da Transformada de Laplace de $Y(s)$:

   $$
   \begin{aligned}
   Y(s) &= \frac{s-1+2}{(s-1)^2} + \frac{5!}{7!}\frac{7!}{(s-1)^8}\\
   &= \frac{1}{s-1} + \frac{2}{(s-1)^2} + \frac{1}{7 \times 6} \frac{7!}{(s-1)^8}\\
   &= \mathcal{L} \{e^t + 2 te^t + \frac{1}{42} t^7 e^t\}
   \end{aligned}
   $$

Então, a solução geral da equação é

$$
y(t) = e^t + 2te^t + \frac{t^7}{42} e^t = (1+2t + \frac{t^7}{42}) e^t
$$

:::

:::details[Exemplos]

**Resolva o seguinte problema de valor inicial**

$$
\begin{array}{c}
y'' - 2y' + y = \begin{cases}
e^t &\text{se } 0 \leq t < 1\\
-e^t &\text{se } 0 \leq t
\end{cases} & y(0) = y'(0) = 0
\end{array}
$$

Antes de começarmos a aplicar o método de resolução, temos de converter o "membro direito" da equação
numa expressão única.
Para isso, podemos usar a função Heaviside, pelo que obtemos

$$
\begin{cases}
e^t &\text{se } 0 \leq t < 1\\
-e^t &\text{se } 0 \leq t
\end{cases} = e^t - 2e^t H(t-1)
$$

Ficamos assim com a equação:

$$
y'' - 2y' + y = e^t - 2e^t H(t-1)
$$

1. Começamos por calcular a Transformada de Laplace de ambos os membros.

   $$
   \lapt{y''} -2 \lapt{y'} + \lapt{y} = \lapt{e^t} - 2 \lapt{e^t H(t-1)}
   $$

2. Queremos agora descobrir $Y(s) = \lapt{y}$, pelo que continuamos a desenvolver a expressão acima,
   até isolarmos o termo $Y(s)$.

$$
\begin{aligned}
s^2 Y(s) - s y(0) - y'(0) - 2s (Y(s) - y(0)) + Y(s) &= \frac{1}{s-1} + 2e \mathcal{L} \{e^{t-1} H(t-1)\}\\
(s^2 - 2s + 1) Y(s) &= \frac{1}{s-1} - 2e \times e^{-s} \times \frac{1}{s-1}\\
Y(s) &= \frac{1}{(s-1)^3} - e\times e^{-s} \frac{2}{(s-1)^3}\\
\end{aligned}
$$

3. Finalmente, temos de calcular a inversa da Transformada de Laplace de $Y(s)$:

   $$
   \begin{aligned}
   Y(s) &= \frac{1}{2} \mathcal{L} \{t^2 e^t \} - e \times e^{-s} \mathcal{L} \{t^2 e^t\}\\
   Y(s) &= \frac{1}{2} \mathcal{L} \{t^2 e^t \} - e \mathcal{L} \{(t-1)^2 e^{t-1} H(t-1)\}\\
   Y(s) &= \lapt{\frac{t^2}{2} e^t - e (t-1)^2 e^{t-1} H(t-1)}
   \end{aligned}
   $$

Então, a solução geral da equação é:

$$
\begin{aligned}
y(t) &= \frac{t^2}{2}e^t - e(t-1)^2 e^{t-1} H(t-1)\\
y(t) &= \left(\frac{t^2}{2} - H(t-1) (t-1)^2\right) e^t
\end{aligned}
$$

Opcionalmente, podemos dividir em dois casos para remover a função de Heaviside:

$$
y(t) = \begin{cases}
\frac{t^2}{2} e^t & \text{se } 0 \leq t < 1\\
\left(\frac{t^2}{2} - (t-1)^2\right) e^t & \text{se } t \geq 1
\end{cases}
$$

:::

## Distribuição Delta de Dirac

A delta de Dirac é a distribuição que verifica

$$
\begin{darray}{c}
\delta(t) = 0 & \forall t \in \R \backslash \{0\}
\end{darray}
$$

$$
\int_{-\infty}^{+\infty} \delta(x) \d x = 1
$$

Se $f$ é contínua em $t=0$, então existe a propriedade:

$$
\int_{-\infty}^{+\infty} \delta(t) f(t) \d t = f(0)
$$

Mais genericamente, podemos definir a distribuição delta de Dirac centrada num dado $c \in \R$ por:

$$
\delta_c(t) = \delta(t-c)
$$

A distribuição $\delta_c(t)$ verifica, então:

- $\delta_c(t) = 0$ para qualquer $t \in \R \backslash \{c\}$

- $\displaystyle \int_{-\infty}^{+\infty} \delta_c(t) \d t = 1$

- Se $f$ é contínua em $c$ então $\displaystyle \int_{-\infty}^{+\infty} \delta_c(t)f(t) \d t = f(c)$

Desta forma, **obtemos a Transformada de Laplace da delta de Dirac**:

:::tip[Transformada de Laplace da Delta de Dirac]

$$
\lapt{\delta_c(t)} = \int_{-\infty}^{+\infty} \delta_c(t)e^{-st} \d t = e^{-cs}
$$

:::

:::details[Exemplo]

**Resolva o seguinte problema de valor inicial**

$$
\begin{darray}{c}
y'' + 2y' + y = 2\delta(t-2) & y(0) = y'(0) = 0
\end{darray}
$$

1. Começamos por calcular a Transformada de Laplace de ambos os membros.

   $$
   \lapt{y''+2y'+y} = \lapt{2\delta(t - 2)}
   $$

2. Queremos agora descobrir $Y(s) = \lapt{y}$, pelo que continuamos a desenvolver a expressão acima,
   até isolarmos o termo $Y(s)$.

   $$
   \begin{aligned}
   -y'(0) - sy(0) + s^2 Y(s) + 2(-y(0) + sY(s)) + Y(s) &= 2e^{-2s}\\
   (s^2+2s+1)Y(s) &= 2e^{-2s}\\
   Y(s) &= e^{-2s} \frac{2}{(s+1)^2}
   \end{aligned}
   $$

3. Finalmente, temos de calcular a inversa da Transformada de Laplace de $Y(s)$:

   $$
   \begin{aligned}
   Y(s) &= e^{-2s} \lapt{2te^t}\\
   &= \lapt{2H(t-2)(t-2)e^{-(t-2)}}
   \end{aligned}
   $$

Então, a solução geral da equação é

$$
y(t) = 2H(t-2)(t-2)e^{-(t-2)}
$$

:::
