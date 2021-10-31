---
title: Existência, Unicidade e Intervalo de Definição de Soluções para PVI's
description: >-
  Teorema de Peano.
  Continuidade à Lipschitz.
  Teorema de Picard-Lindelöf.
  Iteradas de Picard.
  Lema de Grönwall.
path: /cdi-iii/existencia-unicidade-continuidade-comparacao
type: content
---

# Existência, Unicidade e Intervalo de Definição de Soluções para PVI's

```toc

```

:::warning[Página Incompleta e/ou com Erros]

Alguns conteúdos nesta página podem estar incompletos ou mesmo incorretos.

Agradece-se contribuições.

:::

Nesta secção estamos interessados em determinar em que situações um determinado PVI tem solução.
Como já vimos nos últimos capítulos, muitas vezes só podemos ambicionar soluções a nível de uma vizinhança do ponto inicial.
Estaremos também interessados em saber em que circunstâncias esta solução pode ser extendida para todo o domínio de definição da
EDO associada ao PVI e, mais genericamente, qual o intervalo máximo de definição da solução de um PVI.

## Teorema de Peano

Este teorema ajuda-nos a dizer que existe uma solução local, exigindo apenas a continuidade de $f(t,y)$.

:::tip[Teorema]

Considere-se $D \subseteq \R^2$ aberto, e $f: D \to \R$, contínua em $(t,y) \in D$. Se $(t_0, y_0) \in D$, o problema de valor inicial

$$
\begin{cases}
y' = f(t, y)\\
y(t_0) = y_0
\end{cases}
$$

admite **pelo menos uma solução** numa vizinhança de $t_0$.

:::

## Continuidade à Lipschitz

Nas cadeiras de cálculo anteriores fomos habituados a um conceito de continuidade que,
intuitivamente, corresponde ao conceito de "não haver saltos" no gráfico de uma função.
No entanto, sendo mais/menos restritivos nas condições de continuidade que definimos,
podemos definir continuidade de formas diferentes.
Uma noção de continuidade que surge muito em Cálculo III é a [continuidade à Lipschitz](https://en.wikipedia.org/wiki/lipschitz_continuity).

:::tip[Definição]

Seja uma função $f: D \R^n \to \R^m$.
Diz-se que $f$ é Lipschitz ou Lipschitziana ou contínua à Lipschitz se e só se existe um $L \in \R^+$ tal que

$$
|f(y_1) - f(y_2) | \leq L |y_1 - y_2|
$$

em que se diz que $L$ é a constante de Lipschitz.

Nesta secção vamos estar interessados em funções $f: D \R \times \R^n \to \R^n$. Dizemos que $f$ é contínua à Lipschitz em relação a $y$ se $f(t,y)$ for lipschitziana como função de $\R^n$ em $\R^n$ para cada $t$ fixo.

:::

Por exemplo, se tivermos a função $f(y) = |y|$, temos a seguinte expressão (pela desigualdade triangular):

$$
\begin{darray}{ccc}
\Big| |y_1| - |y_2| \Big| \leq |y_1 - y_2|
& , & L = 1
\end{darray}
$$

Podemos também dizer que uma função é **localmente de Lipschitz** se,
$\forall (t_0,y_0) \in D$, então existe uma vizinhança $B_\epsilon (t_0,y_0)$, tal que,
$f$ é lipschitziana nessa vizinhança.

Isto equivale, embora seja difícil de o provar, a $f$ ser contínua à Lipschitz em qualquer subconjunto compacto $K$ de $D$.

$$
\exists L > 0: \forall (t, y_1), (t, y_2) \in k \implies \left|f(y_1) - f(y_2) \right| \leq L |y_1 - y_2|
$$

:::details[Exemplos]

**Considerando $f(t, y) = | y - \sqrt(t) |$, verifique se a função é Lipschitziana.**

$$
\begin{aligned}
| f(t, y_1) - f(t, y_2) | = \Big||y_1-\sqrt{t} | - |y_2 - \sqrt{t}|\Big| \leq |y_1 - \sqrt{t} - (y_2 - \sqrt{t})| = |y_1 - y_2|
\end{aligned}
$$

(pelo que $L = 1$)

Logo, $f$ é Lipschitz em relação a $y$ em $\R^2$.

---

**Considerando $f(t,y) = \sqrt{|y|} - \sqrt{|t|}$, em que $y_1, y_2 \geq 0$, verifique se a função é Lipschitziana.**

$$
f(t,y_1) - f(t,y_2) = \sqrt{y_1} - \sqrt{y_2} = \frac{(\sqrt{y_1} - \sqrt{y_2}) (\sqrt{y_1} + \sqrt{y_2})}{\sqrt{y_1} + \sqrt{y_2}} = \frac{y_1 - y_2}{\sqrt{y_1} + \sqrt{y_2}}
$$

Se assumirmos, por exemplo, $y_1 = 0$, temos que:

$$
| f(t, 0) - f(t, y_2)| = \frac{1}{\sqrt{y_2}} | 0 - y_2| \leq L |y_1 - y_2| \implies \frac{1}{\sqrt{y_2}} \leq L
$$

Precisaríamos que $\frac{1}{\sqrt{y_2}} \leq L$, o que é impossível porque precisamos de $t_2 \to 0$, visto que pela definição $t_1 - t_2 \to 0$.

Logo, $f(t,y)$ não é localmente Lipschitziana em relação a $y$ em $\R \times \R$.

:::

Pode no entanto ser difícil verificar se $f$ é lipschitziana em relação a $y$. Por vezes, podemo-nos servir do seguinte facto para facilitar esse estudo:

### Lema

Qualquer função $f \in C^1(D \subset \R)$ num aberto $D$ é localmente contínua à Lipschitz nesse aberto.

:::details[Prova]

Como $f$ tem derivada contínua em $D$, temos que, $\forall x,y \in D$

$$
\frac{f(x) - f(y)}{x-y} = f'(c) \Rightarrow | f(x)-f(y) | = |f'(c)||x,y|
$$

para algum $c \in \left]x,y\right[$. No entanto, como $f'$ é contínua, a restrição de $f'$ a qualquer compacto $K \subset D$ é limitada pelo que, tirando $L = \sup | f'(c) |$, para $c \in K$, temos que

$$
|f(x)-f(y)| \leq L|x,y|
$$

pelo que $f$ é lipschitziana em qualquer compacto de $D$, o que, como já vimos, equivale a ser localmente lipschitziana em $D$.

:::

## Teorema de Picard-Lindelöf

:::tip[Teorema]

Seja $D \subset \R \times \R^n$ um conjunto aberto e
$f: D \to \R^n$ e $(t_0, y_0) \in D$ contínua em relação a $t$ e localmente Lipschitz em relação a $y$ no seu domínio.

Então o problema de valor inicial

$$
\begin{darray}{cc}
\frac{\d y}{\d t} = f(t, y) & y(t_0) = y_0
\end{darray}
$$

tem uma única solução $y(t)$ que está definida numa vizinhança de $t_0$.

:::

Note-se como este teorema oferece uma forma muito simples de verificar a existência de uma solução para um PVI. Basta verificar a continuidade em relação a $t$ e continuidade à Lipschitz em relação a $y$.

No entanto, ainda não temos nem se quer uma ideia de como será uma sua solução. Como já foi referido, definir explicitamente uma solução vai ser geralmente impossível. No entanto, o Teorema de Picard-Lindelof permite-nos definir uma sucessão de funções que converge para a solução do PVI.

Note-se que o problema de valor inicial

$$
\begin{cases}
\frac{\d y}{\d t} = f(t,y)\\
y(t_0) = y_0
\end{cases}
$$

é equivalente à equação integral

$$
y(t) = y_0 + \int_{t_0}^{t} f(s,y(s)) \d s
$$

com $y \in C^1 (I)$, sendo $I$ qualquer intervalo aberto contendo $t_0$ ($f$ é integrável pois é contínua em $t$ e lipschitziana em $y$).

### Iteradas de Picard

A equação integral, motiva-nos a definir as **iteradas de Picard**, que é uma sucessão de funções contínuas $y_n: I \to \R$ definida recursivamente por:

$$
\begin{aligned}
y_0(t) &= y_0\\
y_1(t) &= y_0 + \int_{t_0}^{t} f(s,y_0(s)) \d s\\
y_2(t) &= y_0 + \int_{t_0}^{t} f(s,y_1(s)) \d s\\
&\vdots\\
y_{n+1}(t) &= y_0 + \int_{t_0}^{t} f(s,y_n(s)) \d s
\end{aligned}
$$

Esta sucessão vai então convergir para uma solução $y$ tal que

$$
y(t) = y_0 + \int_{t_0}^t f(s, y_n(x)) \d s
$$

:::details[Prova]

A prova não vai ser escrita aqui por ser muito extensa, mas ficam aqui os pontos principais para os mais curiosos:

- Provar que existe $\epsilon$ tão pequeno como quisermos tal que todas as iterações da sucessão $y_n$
  são tais que $t \in \left[ t_0 - \epsilon, t_0 + \epsilon \right], (t,y_n(t)) \in D$ (e portanto a sucessão está bem definida);
- Provar que $y_n$ é uma sucessão de Cauchy e portanto converge em $\R^n$
  (por $\R^n$ ser um [espaço métrico completo](https://en.wikipedia.org/wiki/Complete_metric_space));
- Provar que a função $T(y) = y_0 + \int_{x_0}^x f(t, y(t)) \, \d t$ tem exatamente um ponto fixo
  (aplicar [Teorema do Ponto Fixo de Banach](https://en.wikipedia.org/wiki/Banach_fixed-point_theorem));
- Provar que a sucessão $y_n$ converge para esse ponto fixo.

:::

### Prolongamento de soluções

Note-se que o Teorema de Picard-Lindelof só nos oferece solução numa vizinhança do ponto inicial. No entanto podemos estar interessados em extender essa solução para o domínio todo. O próximo teorema afirma que isso possível:

:::tip[Teorema]

Sejam $D$ e $f$ tal que que o PVI

$$
\begin{darray}{cc}
\frac{\d y}{\d t} = f(t,y) & y(t_0) = y_0
\end{darray}
$$

tem solução $y(t)$ num compacto de $K = \left[ t_0 - \epsilon , t_0 + \epsilon \right] \times \left[ y_0 - h, y_0 + h \right]$ segundo o Teorema de Picard-Lindelof.

Então essa solução pode ser prolongada para um intervalo máximo de definição $\left] a, b \right[$
tal que $V_\epsilon(t_0) \subset \left] a,b \right[$ e $y(t)$ de forma que:

1. $b = + \infty$
2. $y(t) \to \pm \infty$ quando $t \to b$
3. $\lim_{t\to b} y(t) = \beta$ tal que $(b, \beta) \in \partial D$

Sendo que $a$ satisfaz propriedades análogas

:::

## Comparação

O teorema acima permite-nos extender a solução dada numa vizinhança por Picard-Lindelof "até não ser mais possível".
No entanto, por vezes pode ser difícil verificar diretamente se uma solução tem intervalo de definição infinito ou se explode num intervalo limitado.
Abaixo introduzimos um critério que permite fazer esse estudo por comparação com funções mais simples.

:::tip[Teorema]

Sejam $D \subset \R \times \R$ e funções $f,g: D \to \R$ nas condições do Teorema de Picard-Lindelöf.

Suponha-se que

$$
\begin{darray}{cr}
f(t,y) \leq g(t,y) & \forall (t,y) \in D\\
u_0 \leq v_0 & (t_0, u_0) \in D, (t_0, v_0) \in D
\end{darray}
$$

Considere-se $u(t)$ e $v(t)$ soluções dos seguintes PVI:

$$
\begin{cases}
\frac{\d u}{\d t} = f(t,u)\\
u(t_0) = u_0
\end{cases}
$$

$$
\begin{cases}
\frac{\d v}{\d t} = g(t,v)\\
v(t_0) = v_0
\end{cases}
$$

definidas no intervalo $\left[ t_0, b \right[$, com $b > t_0$.

Então,

$$
\forall t \in \left[t_0, b\right[, u(t) \leq v(t)
$$

:::

## Continuidade de Problemas do Valor Inicial

Já sabemos verificar se uma EDO tem solução única para um dado valor inicial. No entanto, não sabemos como estas soluções variam para variações pequenas do valor inicial. Na prática, a existência de solução para um PVI não teria qualquer utilidade se uma alteração mínima ao valor inicial resultaria numa solução completamente diferente. No mundo real, as coisas nunca podem ser feitas com precisão absoluta e têm sempre um erro. É então necessário estudar a continuidade de soluções de PVI's em função do seu valor inicial.

:::tip[Teorema]

Sejam $D \subset \R \times \R^n$ um aberto e $f: D \to \R^n$ nas condições de Picard-Lindelof.

Considere-se o domínio $E$ de definição de soluções para a equação $y' = f(t,y)$.

Seja ainda $\left]a(t_0, y_0), b(t_0, y_0) \right[$ o intervalo máximo de definição do PVI associado à equação anterior e ao valor inicial $y(t_0) = y_0$,
e $Y(t,t_0,y_0)$ a função que a cada ponto $(t,t_0,y_0)$ atribui o valor da função solução do PVI no ponto $t \in \left]a(t_0, y_0), b(t_0, y_0) \right[$.

Então, $E$ é um conjunto aberto e a função $Y$ é contínua em $E$.

:::

Por outras palavras, se pensarmos nas funções solução de

$$
y' = f(t,y), \quad y(t_0) = y_0
$$

como uma função do valor inicial $(t_0, y_0)$, essa função é contínua (ou seja, uma pequena alteração no valor inicial origina uma pequena alteração na função solução).

A prova deste teorema é complexa mas tira partido do seguinte lema:

:::tip[Lema de Grönwall]

Sejam $u, v: I \to \R$ tais que $u, v \geq 0$, $t_0 \in I$

$$
\forall t \in I, \quad u(t) \leq \alpha + \left| \int_{t_0}^{t} v(s)u(s) \d s\right|
$$

Então

$$
u(t) \leq \alpha e^{\left| \int_{t_0}^{t} v(s) \d s\right|}
$$

:::
