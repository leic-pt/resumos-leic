---
title: Regra de Cauchy
description: >-
  Teorema de Cauchy.
  Semi-vizinhança.
  Regra de Cauchy.
  Regra de Cauchy para limites não laterais.
path: /cdi-i/regra-cauchy
type: content
---

# Regra de Cauchy

```toc

```

É recomendada a visualização do seguinte vídeo, como suporte aos resumos:

::youtube{#kfF40MiS7zA}

## Teorema de Cauchy

Sejam $f$ e $g$ duas funções regulares no intervalo $[a,b]$ tais que [$g'(x)\ne0$](color:red) para $x\in]a,b[$. Então, existe $c\in ]a,b[$ tal que:

$$
\frac{f'(c)}{g'(c)}=\frac{f(a)-f(b)}{g(a)-g(b)}
$$

É de notar que este teorema se obtém a partir do [Teorema de Lagrange](/cdi-i/diferenciabilidade#teorema-de-lagrange), visto que, se considerarmos $g(x)=x$ obtemos:

$$
\frac{f'(c)}{(c)'}=\frac{f(a)-f(b)}{a-b}\iff f'(c)=\frac{f(a)-f(b)}{a-b}
$$

## Semi-vizinhança

O conceito de semi-vizinhança já [tinha sido definido](/cdi-i/diferenciabilidade#semi-vizinhança), mas agora define-se com mais rigor:

Seja $a\in\R$.

Define-se uma [semi-vizinhança direita](color:orange) de $a$ com raio $r\in\R^+$ como sendo o intervalo:

$$
V_r^d(a)=[a,a+r[
$$

No caso de $a=-\infin$ a [vizinhança direita](color:orange) de raio $r$ define-se como sendo:

$$
V_r^d(-\infin)=V_r(-\infin)
$$

Define-se uma [semi-vizinhança esquerda](color:orange) de $a$ com raio $r\in\R^+$ como sendo o intervalo:

$$
V_r^e(a)=]a-r,a]
$$

No caso de $a=+\infin$ a [vizinhança esquerda](color:orange) de raio $r$ define-se como sendo:

$$
V_r^e(+\infin)=V_r(+\infin)
$$

[Note-se que não existem semi-vizinhanças esquerdas de $-\infin$ nem semi-vizinhanças direitas de $+\infin$.](color:orange)

## Regra de Cauchy (ou Regra de L'Hôpital)

Sejam $a\in\R\cup \{-\infin\}$ e $f$ e $g$ definidas e diferenciáveis no interior de uma [semi-vizinhança direita](color:orange) de $a$ tais que $g'(x)\ne 0$ para qualquer $x$ no interior dessa semi-vizinhança.

Se

$$
f(a^+)=g(a^+)=0\quad\text{ou}\quad |f(a^+)|=|g(a^+)|=+\infin
$$

e existe o limite

$$
\lim_{x\to a^+}\frac{f'(x)}{g'(x)}=L\in\overline \R
$$

então existe o limite de $\frac f g$ em $a$ à [direita](color:orange) e

$$
\lim_{x\to a^+}\frac{f(x)}{g(x)}=L
$$

O mesmo aplica-se para o limite à esquerda.

👉 É de salientar que em $a$, o valor de $g'(a)$ pode ser nulo, apenas na semi-vizinhança é que não pode ser.

:::warning

Esta regra existe várias condições. Caso o limite $\lim_{x\to a^+}\frac{f'(x)}{g'(x)}=L\in\overline \R$ não exista, nada de pode concluir sobre o limite em estudo.

:::

## Regra de Cauchy para limites não laterais

**Existe um corolário da Regra de Cauchy que permite calcular limites não laterais**

Seja $a\in\R$ e $f$ e $g$ diferenciáveis em $V_r(a)\backslash \{a\}$, para algum $r\in\R^+$, tais que $g'(x)\ne 0$ para $x\in V_r(a)\backslash\{a\}$.

Então, se:

$$
\lim_{x\to a}f(x)=\lim_{x\to a}g(x)=0\quad\text{ou}\quad\lim_{x\to a} |f(x)|=\lim_{x\to a}|g(x)|=+\infin
$$

e existe o limite

$$
\lim_{x\to a}\frac{f'(x)}{g'(x)}=L\in\overline \R
$$

então o limite de $\frac fg$ em $a$ existe e

$$
\lim_{x\to a}\frac{f(x)}{g(x)}=L.
$$

:::details[Aplicação da Regra de Cauchy]

[**Exemplo 1**](color:orange)

Comece-se pelo cálculo do limite

$$
\lim_{x\to 0^+} \frac{cos x − 1}{x^2}.
$$

Facilmente se verifica que as funções $f(x) = cos x − 1 \text{ e } g(x) = x^2$ satisfazem os requisitos de regularidade do teorema já que ambas são diferenciáveis em $\R$ e a derivada de $g$ só se anula em 0.
Na verdade, estes requisitos são, quase sempre, imediatamente verificados pelo que não são, geralmente, referidos no cálculo, desde que cumpridos.
Também os requisitos dos limites de $f$ e $g$ são cumpridos já que

$$
\lim_{x\to 0^+} (cos x − 1) = 0 \quad \text{e}\quad \lim_{x\to 0^+} x^2 = 0.
$$

Falta, portanto verificar se o limite do quociente das derivadas existe. Tem-se

$$
\lim_ {x\to 0^+} \frac{(cos x - 1)'}{(x^2)'} = \lim_{x\to 0^+} \frac{- sen x}{2x} = − \frac{1}{2} \lim_{x\to 0^+} \frac{sen x}{x} = - \frac{1}{2}.
$$

Como também esta condição é verificada, vem que

$$
\lim_{x\to 0^+} \frac{cos x − 1}{x^2} = - \frac{1}{2}.
$$

[**Exemplo 2**](color:orange)

Seguidamente estuda-se um caso em que a Regra de Cauchy é aplicada sucessivamente. Considere-se, então, o caso do limite

$$
\lim_{x\to 0} \frac{e^x - 1 - x - \frac{x^2}{2}}{x^3}
$$

Novamente, as condições sobre a regularidade e os limites das duas funções são trivialmente verificadas, já que se trata de uma indeterminação $\frac{0}{0}$. Falta, portanto, verificar a condição sobre o limite do quociente das derivadas. Calculando esse limite obtém-se

$$
\lim_{x\to 0} \frac{(e^x - 1 - x - \frac{x^2}{2})'}{(x^3)'} = \lim_{x \to 0} \frac {e^x - 1 - x}{3 x^2}
$$

que ainda é uma indeterminação do mesmo tipo. Esta situação é bastante diferente do exemplo anterior em que o limite não existia. Apesar de não ser possível, para já, aplicar a Regra de Cauchy, obteve-se um quociente de funções que é uma indeterminação do mesmo tipo, mas com funções mais simples, pois os graus dos polinómios baixaram. As observações anteriores sugerem que se tente aplicar a Regra e Cauchy a este novo limite, na esperança de levantar a indeterminação. Verificam-se sumariamente as restantes condições, já que continua a ser um a indeterminação do mesmo tipo, e tenta-se calcular o limite do quociente das derivadas, vindo

$$
\lim_{x\to 0} \frac{(e^x - 1 - x)'}{(3 x^2)'} = \lim_{x \to 0} \frac{e^x - 1}{6x} = \frac{1}{6}.
$$

Como este último limite existe, pode aplicar-se a Regra e Cauchy para obter o limite

$$
\lim_{x\to 0} \frac{e^x - 1 - x}{3 x^2} = \frac{1}{6},
$$

e, como este existe, pode aplicar-se, novamente, a Regra de Cauchy para obter o limite

$$
\lim_{x\to 0} \frac{e^x - 1 - x - \frac{x^2}{ 2}}{x^3} = \frac{1}{6}.
$$

[Existem mais alguns exemplos nas páginas 5 a 10 do PDF da aula 16 abaixo.](color:red)

:::

---

PDFs:

- [Aula 16](https://drive.google.com/file/d/1UqqOcCUyPbVq081faqbpWMOo8ExIBiIQ/view?usp=sharing)
