---
title: Teste de Hipóteses
description: >-
  Inferência Estatística. Conceitos base de estatística.
  Amostragem Aleatória.
  Estimadores. Enviesamento e Erro Quadrático Médio.
  Método da Máxima Verosimilhança.
  Distribuições amostrais.
path: /pe/teste-de-hipoteses
type: content
---

# Teste de Hipóteses

```toc

```

## Hipóteses

Damos o nome de [**hipótese estatística**](color:yellow) a qualquer conjetura sobre um dado estatístico, como por exemplo a distribuição de uma VA de interesse, um parâmetro desconhecido, ou outro.
A uma conjetura sobre um parâmetro damos o nome de [**hipótese paramétrica**](color:orange).  
Este capítulo centra-se no estudo da confiança que podemos dar a uma [hipótese paramétrica](color:orange).  
Normalmente, isto é feito através da confrontação de duas [hipóteses paramétricas](color:orange):

- [**hipótese nula**](color:blue): [$H_0 \in \Theta_0$](color:blue) $\subset \Theta$ que consiste na hipótese principal;
- [**hipótese alternativa**](color:green): [$H_1 \in \Theta_1$](color:green) $\subset \Theta \backslash \Theta_0$ que consiste na hipótese que é confrontada com a [hipótese nula](color:blue).
  Normalmente consideramos 3 tipos de [hipóteses alternativas](color:green):
  - **unilateral inferior** se $\Theta_1 \subset \{ x \in \Theta: x < H_0 \}$, isto é, se todos os valores da [hipótese alternativa](color:green) forem inferiores aos da [hipótese nula](color:blue);
  - **unilateral superior** se $\Theta_1 \subset \{ x \in \Theta: x > H_0 \}$, isto é, se todos os valores da [hipótese alternativa](color:green) forem superiores aos da [hipótese nula](color:blue);
  - **bilateral** caso enquadre valores para ambos os lados de $H_0$.
    Um exemplo comum de uma [hipótese alternativa](color:green) bilateral é
    $$
    H_0: \mu = \mu_0 \text{ e } H_1: \mu \neq \mu_0
    $$

Uma [hipótese paramétrica](color:orange) diz-se ainda [**simples**](color:purple) se especificar um único valor para o parâmetro em caso, dizendo-se [**composta**](color:pink) caso contrário.

:::details[Exemplo]

Considere-se que queremos analisar a altura da população portuguesa.
Assumimos que a distribuição da altura dos portugueses é normal.
Sendo assim, é do nosso interesse saber qual é, por exemplo, o valor esperado da altura de um português.
Seja este parâmetro $\mu$.

Um exemplo de uma [hipótese paramétrica](color:orange) é:

> A média das alturas dos portugueses é $1,75m$.

Esta [hipótese paramétrica](color:orange) é [simples](color:purple) pois especifica um só valor para o parâmetro desconhecido.
Uma [hipótese paramétrica](color:orange) [composta](color:pink) seria, por exemplo:

> A média das alturas dos portugueses está algures entre $1,70m$ e $1,80m$.

Se considerarmos a primeira hipótese apresentada como a [hipótese nula](color:blue) - $H_0: \mu = 1,70$ - temos que a [hipótese alternativa](color:green) é [bilateral](color:green) - $H_1: \mu \neq 1,70$.

Temos que a [hipótese nula](color:blue) $H_0: \mu \geq 1,70$:

> A média das alturas dos portugueses é no mínimo $1,70m$.

Tem uma [hipótese alternativa unilateral inferior](color:green): $H_1: \mu < 1,70$.

Deve agora ser fácil imaginar uma [hipótese nula](color:blue) cuja [hipótese alternativa](color:green) seja [unilateral superior](color:green).

:::

## Testar um Hipótese

[**Testar uma hipótese**](color:red) consiste num processo estatístico que leva à aceitação/rejeição da hipótese nula em prol da alternativa.
Esta decisão pode ou não estar correta: o teste permite-nos atribuir um valor de probabilidade a uma certa hipótese, mas nunca nos permite calcular sem margem de dúvida o valor de um parâmetro.

Dizemos que ocorreu um:

- [**erro de primeira espécie**](color:purple) se $H_0$ for verdadeira mas for rejeitada pelo teste. Designamos por $\alpha$ como a probabilidade de ocorrer um erro destes;
- [**erro de segunda espécie**](color:pink) se $H_0$ for falsa mas for aceite pelo teste. Designamos por $\beta$ como a probabilidade de ocorrer um erro destes;

Quando fazemos um teste, queremos que a probabilidade de ocorrer um erro seja o menor possível.
É, então, normal colocar um limite superior para a probabilidade de ocorrência de erro de primeira espécie. A este limite dá-se o nome de [**nível de significância**](color:brown) ([n.s.](color:brown)) e representa-se por [$\alpha_0$](color:brown) $\in ]0,1[$.  
Para calcular a probabilidade de erro, definimos uma [**estatística de teste**](color:yellow) como uma estatística a utilizar no confronto entre um par de hipóteses sobre o parâmetro $\theta$.
Esta estatística:

- reflete a discrepância entre o estimador de $\theta$ e o valor conjeturado para o mesmo em $H_0$ ($\theta_0$);
- tem distribuição (exata ou aproximada) conhecida, sob a validade de $H_0$;
- obtém-se, normalmente, à custa de uma certa VA fulcral, substituindo $\theta$ por $\theta_0$ na sua expressão.

A partir desta estatística $T$, fica então a faltar definir o conjunto de valores que deverão levar à rejeição de $H_0$.
A estes valores damos o nome de [**valores críticos**](color:red) e a este conjunto [**região de rejeição**](color:red) ou [**rejeição crítica**](color:red) de $H_0$.
Esta região é designada por $\omega$ e é tal que $P(T \in \omega) = \alpha \leq \alpha_0$, dependendo também da hipótese alternativa.

A decisão em relação a $H_0$ é então a seguinte, para uma estatística teste $T$:

- $T \in \omega \Rightarrow$ rejeição;
- $T \not\in \omega \Rightarrow$ aceitação.

Mais uma vez, relembra-se que aceitação não significa que $H_0$ seja verdadeira: pode ocorrer um erro de primeira ou segunda espécie.
Podemos, no entanto, concluir, em caso de aceitação da hipótese nula, que a probabilidade de um erro destes acontecer é inferior ao [nível de significância](color:brown) $\alpha_0$.
Desta forma, quanto menor $\alpha_0$, maior o conjunto de valores rejeitados.

Observamos ainda que, se $H_0$ for uma hipótese nula $H_0: \theta = \theta_0$ com alternativa bilateral $H_1: \theta \neq \theta_0$, averiguar $H_0$ com n.s. $\alpha_0$ equivale a averiguar se o valor $\theta_0$ proposto por $H_0$ pertence ao intervalo de confiança $1-\alpha_0$.
Temos então que $\theta_0 \in IC_{1-\alpha_0}(\theta)$ leva à aceitação de $\theta_0$ com n.s. $\alpha_0$ e $\theta_0 \not\in IC_{1-\alpha_0}(\theta)$ leva à rejeição com esse mesmo n.s.

## Procedimentos para Testar uma Hipótese

Para testar uma hipótese seguimos, então, o seguinte procedimento:

1. Escolhemos a **VA de interesse** $X$;
2. Identificamos a **situação**: qual a distribuição de $X$, o parâmetro em questão, outros parâmetros em causa, etc;
3. Especificamos as **hipóteses**: [nula](color:blue) ($H_0$) e [alternativa](color:green) ($H_1$);
4. Escolhemos o [**nível de significância**](color:brown) $\alpha_0$;
5. Escolhemos a [**estatística de teste**](color:yellow) $T$ e identificamos a sua distribuição sob a validade de $H_0$;
6. Obtemos a [**região de rejeição**](color:red) $\omega$
7. Calculamos o valor observado $t$ da estatística $T$ e **decidimos** pela rejeição ou não de $H_0$ com n.s. $\alpha_0$.

## Função Potência

Por vezes, além da probabilidade de rejeição para uma hipótese verdadeira, podemos querer essa probabilidade para uma hipótese falsa.
Definimos a [**função potência**](color:pink) de um teste como a probabilidade de rejeição da hipótese nula.
Temos que

$$
\alpha = P(T \in \omega | \theta), \theta \in \Theta_0 \\
\beta = P(T \not\in \omega | \theta), \theta \in \Theta_1
$$

pelo que

$$
p(\theta) = P(\text{Rejeitar } H_0 | \theta) = \begin{cases}
\alpha, &\theta \in \Theta_0 \\
1-\beta, &\theta \in \Theta_1
\end{cases}
$$

## $p$-value

Até agora, temos estudado a decisão sobre uma hipótese para um [n.s.](color:brown) fixo.
No entanto, podemos seguir o sentido contrário: dado o valor observado $t$ de uma estatística, determinar para que [níveis de significância](color:brown) é que rejeitamos/aceitamos a hipótese nula.
Definimos, então, o [**p-value**](color:purple) como o maior nível de significância que leva à aceitação de $H_0$.
Nomeadamente, se tivermos um teste:

- unilateral inferior, $\omega = ]-\infty, c[$, então $c = P(T<t | H_0) = F_{T|H_0}(t)$;
- unilateral superior, $\omega = ]c, \infty[$, então $c = P(T>t | H_0) = 1 - F_{T|H_0}(t)$;
- bilateral, $\omega = ]-\infty, c[ \cup ]c, \infty[$ em que $T | H_0$ tem distribuição simétrica em relação à origem, então $c = P(T<-|t| \vee T>|t| | H_0) = 2\left(1 - F_{T|H_0}(|t|) \right)$

## Testes de Hipóteses Paramétricas

### Determinação de $\mu$ para $\sigma^2$ conhecido

Neste caso, estamos interessados em determinar a zona de rejeição para uma hipótese paramétrica em relação ao valor esperado de uma VA arbitrária $X$ cuja variância já conhecemos.

Consideramos, então, a [hipótese nula](color:blue) $H_0: \mu = \mu_0$.

Se $X \sim \op{normal}(\mu, \sigma^2)$, temos então que

$$
Z = \frac{\overline{X} - \mu_0}{\frac{\sigma}{\sqrt{n}}} \sim_{H_0} \op{normal}(0,1)
$$

Sendo assim, a região de rejeição é exatamente

- $\omega = \space]-\infty, -\Phi^{-1}(1-\frac{\alpha}{2})[\space \cup \space]\Phi^{-1}(1-\frac{\alpha}{2}), \infty[$  
  para uma [hipótese alternativa](color:green) bilateral $H_1: \mu \neq \mu_0$;
- $\omega = \space]\Phi^{-1}(1-\alpha), \infty[$  
  para uma [hipótese alternativa](color:green) unilateral superior $H_1: \mu > \mu_0$;
- $\omega = \space]-\infty, -\Phi^{-1}(1-\alpha)[$  
  para uma [hipótese alternativa](color:green) unilateral inferior $H_1: \mu < \mu_0$;

Se $X$ não seguir uma distribuição normal, invocamos o TLC para obter que

$$
\frac{\overline{X} - \mu_0}{\frac{\sigma}{\sqrt{n}}} \sima_{H_0} \op{normal}(0,1)
$$

e portanto podemos obter as mesmas regiões de rejeição indicadas acima, desta vez com nível de significância aproximado.

### Determinação de $\mu_1 - \mu_2$ para $\sigma_1^2, \sigma_2^2$ conhecidos

:::danger[]

Esta determinação não é lecionada no programa de 2021/22.

:::

Neste caso, estamos interessados em determinar a zona de rejeição para uma hipótese paramétrica em relação à diferença entre os valores esperados de duas VA arbitrárias $X_1$ e $X_2$ cuja variância já conhecemos.

Consideramos, então, a [hipótese nula](color:blue) $H_0: \mu_1 - \mu_2 = \mu_0$.

Se $X_i \sim \op{normal}(\mu_i, \sigma_i^2)$ ($i \in \{1,2\}$), temos que

$$
Z = \frac{(\overline{X_1} - \overline{X_2}) - (\mu_1 - \mu_2)}{\sqrt{\frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}}} \sim_{H_0} \op{normal}(0,1)
$$

Sendo assim, a região de rejeição é exatamente

- $\omega = \space]-\infty, -\Phi^{-1}(1-\frac{\alpha}{2})[\space \cup \space]\Phi^{-1}(1-\frac{\alpha}{2}), \infty[$  
  para uma [hipótese alternativa](color:green) bilateral $H_1: \mu \neq \mu_0$;
- $\omega = \space]\Phi^{-1}(1-\alpha), \infty[$  
  para uma [hipótese alternativa](color:green) unilateral superior $H_1: \mu > \mu_0$;
- $\omega = \space]-\infty, -\Phi^{-1}(1-\alpha)[$  
  para uma [hipótese alternativa](color:green) unilateral inferior $H_1: \mu < \mu_0$;

Se $X$ não seguir uma distribuição normal, invocamos o TLC para obter que

$$
\frac{(\overline{X_1} - \overline{X_2}) - (\mu_1 - \mu_2)}{\sqrt{\frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}}} \sima_{H_0} \op{normal}(0,1)
$$

e portanto podemos obter as mesmas regiões de rejeição indicadas acima, desta vez com nível de significância aproximado.

### Determinação de $\mu$ para $\sigma^2$ desconhecido

Neste caso, estamos interessados em determinar a zona de rejeição para uma hipótese paramétrica em relação ao valor esperado de uma VA arbitrária $X$ cuja variância não conhecemos.

Consideramos, então, a [hipótese nula](color:blue) $H_0: \mu = \mu_0$.

Se $X \sim \op{normal}(\mu, \sigma^2)$, temos que

$$
Z = \frac{\overline{X} - \mu}{\frac{s}{\sqrt{n}}} \sim_{H_0} t_{(n-1)}
$$

em que $s$ é um estimador para a variância - a variância corrigida.

Sendo assim, a região de rejeição é exatamente

- $\omega = \space]-\infty, -F_{t_{(n-1)}}^{-1}(1-\frac{\alpha}{2})[\space \cup \space]F_{t_{(n-1)}}^{-1}(1-\frac{\alpha}{2}), \infty[$  
  para uma [hipótese alternativa](color:green) bilateral $H_1: \mu \neq \mu_0$;
- $\omega = \space]F_{t_{(n-1)}}^{-1}(1-\alpha), \infty[$  
  para uma [hipótese alternativa](color:green) unilateral superior $H_1: \mu > \mu_0$;
- $\omega = \space]-\infty, -F_{t_{(n-1)}}^{-1}(1-\alpha)[$  
  para uma [hipótese alternativa](color:green) unilateral inferior $H_1: \mu < \mu_0$;

Se $X$ não seguir uma distribuição normal, invocamos o TLC para obter que

$$
\frac{\overline{X} - \mu}{\frac{s}{\sqrt{n}}} \sima_{H_0} \op{normal}(0,1)
$$

e portanto podemos obter as mesmas regiões de rejeição indicadas acima, desta vez com nível de significância aproximado.

### Determinação de $\mu_1 - \mu_2$ para $\sigma_1^2, \sigma_2^2$ desconhecidos

:::danger[]

Esta determinação não é lecionada no programa de 2021/22.

:::

Neste caso, estamos interessados em determinar a zona de rejeição para uma hipótese paramétrica em relação à diferença entre os valores esperados de duas VA arbitrárias $X_1$ e $X_2$ cuja variância não conhecemos.

Consideramos, então, a [hipótese nula](color:blue) $H_0: \mu_1 - \mu_2 = \mu_0$.

Se $X_i \sim \op{normal}(\mu_i, \sigma_i^2)$ ($i \in \{1,2\}$), temos que

$$
Z = \frac{(\overline{X_1} - \overline{X_2}) - (\mu_1 - \mu_2)}{\sqrt{\frac{(n_1-1)s_1^2 + (n_2-1)s_2^2}{n_1+n_2-2}\left(\frac{1}{n_1} + \frac{1}{n_2} \right)}} \sim_{H_0} t_{(n_1+n_2-1)}
$$

em que $s$ é um estimador para a variância - a variância corrigida.

Sendo assim, a região de rejeição é exatamente

- $\omega = \space]-\infty, -F_{t_{(n_1+n_2-1)}}^{-1}(1-\frac{\alpha}{2})[\space \cup \space]F_{t_{(n_1+n_2-1)}}^{-1}(1-\frac{\alpha}{2}), \infty[$  
  para uma [hipótese alternativa](color:green) bilateral $H_1: \mu \neq \mu_0$;
- $\omega = \space]F_{t_{(n_1+n_2-1)}}^{-1}(1-\alpha), \infty[$  
  para uma [hipótese alternativa](color:green) unilateral superior $H_1: \mu > \mu_0$;
- $\omega = \space]-\infty, -F_{t_{(n_1+n_2-1)}}^{-1}(1-\alpha)[$  
  para uma [hipótese alternativa](color:green) unilateral inferior $H_1: \mu < \mu_0$;

Se $X_1$ e $X_2$ não seguirem uma distribuição normal, invocamos o TLC para obter que

$$
\frac{(\overline{X_1} - \overline{X_2}) - (\mu_1 - \mu_2)}{\sqrt{\frac{s_1^2}{n_1} + \frac{s_2^2}{n_2}}} \sima_{H_0} \op{normal}(0,1)
$$

e portanto podemos obter as mesmas regiões de rejeição indicadas acima, desta vez com nível de significância aproximado.

### Determinação de $\sigma^2$ para $\mu$ desconhecido

Neste caso, estamos interessados em determinar a zona de rejeição para uma hipótese paramétrica em relação à variância de uma VA $X$ com distribuição normal cujo valor esperado não conhecemos.

Consideramos, então, a [hipótese nula](color:blue) $H_0: \sigma^2 = \sigma_0^2$.

Como $X \sim \op{normal}(\mu, \sigma^2)$, temos que

$$
Z = \frac{(n-1)s^2}{\sigma^2} \sim_{H_0} \chi_{(n-1)}^2
$$

Sendo assim, a região de rejeição é exatamente

- $\omega = \space]-\infty, -{\chi_{(n-1)}^2}^{-1}(1-\frac{\alpha}{2})[\space \cup \space]{\chi_{(n-1)}^2}^{-1}(1-\frac{\alpha}{2}), \infty[$  
  para uma [hipótese alternativa](color:green) bilateral $H_1: \sigma^2 \neq \sigma_0^2$;
- $\omega = \space]{\chi_{(n-1)}^2}^{-1}(1-\alpha), \infty[$  
  para uma [hipótese alternativa](color:green) unilateral superior $H_1: \sigma^2 > \sigma_0^2$;
- $\omega = \space]-\infty, -{\chi_{(n-1)}^2}^{-1}(1-\alpha)[$  
  para uma [hipótese alternativa](color:green) unilateral inferior $H_1: \sigma^2 < \sigma_0^2$;

### Determinação de $p$ numa Prova de Bernoulli

Neste caso, estamos interessados em determinar a zona de rejeição para uma hipótese paramétrica em relação ao parâmetro de uma Prova de Bernoulli.

Consideramos, então, a [hipótese nula](color:blue) $H_0: p = p_0$.

Como $X \sim Bernoulli(p)$, temos, segundo o TLC, que para $n>>$

$$
Z = \frac{\overline{X} - p}{\sqrt{\frac{p(1-p)}{n}}} \sima_{H_0} \op{normal}(0,1)
$$

Sendo assim, a região de rejeição é aproximadamente

- $\omega = \space]-\infty, -\Phi^{-1}(1-\frac{\alpha}{2})[\space \cup \space]\Phi^{-1}(1-\frac{\alpha}{2}), \infty[$  
  para uma [hipótese alternativa](color:green) bilateral $H_1: p \neq p_0$;
- $\omega = \space]\Phi^{-1}(1-\alpha), \infty[$  
  para uma [hipótese alternativa](color:green) unilateral superior $H_1: p > p_0$;
- $\omega = \space]-\infty, -\Phi^{-1}(1-\alpha)[$  
  para uma [hipótese alternativa](color:green) unilateral inferior $H_1: p < p_0$;

### Exemplos

:::details[Exemplo]

(Exemplo retirado do [Teste 2B de 2017/2018 de PE](https://fenix.tecnico.ulisboa.pt/homepage/ist13114/1o-semestre-2017-18))

O diâmetro ($X$ , em cm) dos tapetes de rato produzidos por determinada fábrica possui
distribuição normal com parâmetros desconhecidos $\mu$ e $\sigma^2$ . A concretização de uma amostra aleatória
de dimensão 10 conduziu aos seguintes resultados: $\sum_{i=1}^{10} x_i = 846$ e $\sum_{i=1}^{10} x_i^2 = 71607$.

Caso queiramos testar as seguintes hipóteses (decidindo com base no valor-p)

$$
\begin{aligned}
  H_0&: \sigma^2 = \sigma_0^2 = 4\\
  H_1&: \sigma^2 > 4
\end{aligned}
$$

Devemos, em primeiro lugar, escolher a nossa estatística de teste: sendo que estamos
a testar $\sigma^2$ de uma população normal, com $\mu$ desconhecido, faz sentido escolher:

$$
T = \frac{(n - 1)S^2}{\sigma_0^2} \sim_{H_0} \chi_{(n - 1)}^2
$$

Devemos, ainda, definir inicialmente a região de rejeição de $H_0$: tratando-se
de um teste unilateral superior (com $H_1: \sigma^2 > 4$), dizemos que a região
de rejeição de $H_0$ é dada por $W = (c, +\infty)$.

Note-se que, para a amostra considerada, tem-se:

$$
\begin{aligned}
  s^2 &= \frac{1}{n - 1} \sum_{i=1}^{n} (x_i - \overline{x})^2 \\
  &= \frac{1}{n - 1} \sum_{i=1}^{n} x_i^2 - n \overline{x}^2 \\
  &= \frac{1}{9}\biggl(71607 - \frac{846^2}{10}\biggr)\\
  &= 3.9(3)^{\smartcolor{orange}{*}}
\end{aligned}
$$

O valor observado, tendo em conta a estatística de teste, é dado por:

$$
\begin{aligned}
t &= \frac{(n - 1)s^2}{\sigma_0^2} \\
&= \frac{(10 - 1) \cdot 3.9(3)^{\smartcolor{orange}{*}}}{4} \\
&= 8.85
\end{aligned}
$$

Sendo a região de rejeição um intervalo à direita, vamos ter:

$$
\begin{aligned}
  \text{valor-p} &= P(T > t | H_0)\\
  &= 1 - F_{\chi^2_{(n-1)}}(t) \\
  &= 1 - F_{\chi^2_{(9)}}(8.85)
\end{aligned}
$$

Ora, não existe tabela que nos possibilite encontrar o valor específico de $F_{\chi^2_{(9)}}(8.85)$.
Conseguimos, contudo, enquadrar o valor-p, tal que:

$$
\begin{aligned}
F_{\chi^2_{(9)}}^{-1}(0.50) &= 8.343 < t = 8.85 < 9.414 = F_{\chi^2_{(9)}}^{-1}(0.60) \\
0.50 &< F_{\chi^2_{(9)}}(8.85) < 0.60\\
0.40 &< \text{valor-p} < 0.50
\end{aligned}
$$

Podemos, assim, recorrendo ao valor-p, afirmar que devemos rejeitar $H_0$ a qualquer
nível de significância superior a $50\%$, e não devemos rejeitar $H_0$ a qualquer nível de
significância igual ou inferior a $40\%$.

:::
