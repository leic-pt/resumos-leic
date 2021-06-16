---
title: Teoremas e Cálculo Combinatório
description: Teoremas sobre Combinatória; Problemas de Contagem.
path: /md/calculo-combinatorio
type: content
---

# Teoremas e Cálculo Combinatório

## Teoremas sobre Cálculo Combinatório e Funções Geradoras

### Teorema 1

$$
\text{Para todo o } n, m \in \N \text{ tem-se:}
\sum_{k=0}^{n} {k+m \choose m} = {n+m+1 \choose m+1}
$$

Demonstração:

$$
\text{\textbf{Base da indução:}}\quad n \leftarrow0 \\

\sum_{k=0}^{0}{k+m \choose m} = {0+m \choose m} = {m+1 \choose m+1} = 1
\\
\text{\textbf{Hip. Ind.}}: \sum_{k=0}^{n} {k+m \choose m} = {n+m+1 \choose m+1}\\

\text{\textbf{Passo de indução}}\quad n+1 \leftarrow n\\

\sum_{k=0}^{n+1} {k+m \choose m} = \sum_{k=0}^{n} {k+m \choose m}
+{n+1+m \choose m}=\\
 ={n+1+m \choose m+1}+{n+1+m \choose m} = {n+2+m \choose m+1}
$$

### Teorema 2

$$
\text{Se U é a função geradora da sucessão } u_n\text{, então a função geradora da sucessão}\\ s_n=\sum_{i=0}^{n}u_i\qquad \text{ (somas parciais de }u_n)\\
\text{é:}\\
S(z)=\frac{U(z)}{1-z}
$$

Demonstração:

![Demonstração do segundo teorema](./imgs/0009-soma.png)

### Teorema 3

$$
\text{Para todo o }m \in \N_1,\\
\frac{1}{(1-z)^m}=\sum_{k=0}^{+\infty} {k+m-1 \choose m-1}z^k
$$

Demonstração:

$$
\text{\textbf{Base da indução:}}\quad n \leftarrow0 \\
\frac{1}{(1-z)^1}=\frac 1 {1-z} = \sum_{k=0}^{+\infty}{k+1-1 \choose 1-1}z^k = \sum_{k=0}^{+\infty}z^k\\
\text{\textbf{Hip. Ind.: }}\frac{1}{(1-z)^m}=\sum_{k=0}^{+\infty} {k+m-1 \choose m-1}z^k\\

\text{\textbf{Passo de indução}}\quad m+1 \leftarrow m\\
\frac 1 {(1-z)^{m+1}}=\frac 1 {1-z}\times \frac 1 {(1-z)^m}=\\
= \frac 1 {1-z} \times \sum_{k=0}^{+\infty} {k+m-1 \choose m-1}z^k\qquad(u_k)\\

\sum_{k=0}^{+\infty}\left(
\sum_{i=0}^k{i+m-1 \choose m-1}\right)z^k =\\
= \sum_{k=0}^{+\infty}{k+m \choose m}z^k
$$

exemplos de aplicação:

$$\frac{1}{(1-z)^2} =\sum_{k=0}^{+\infty}{k+2-1 \choose 2-1}z^k=\sum_{k=0}^{+\infty}(k+1)z^k= n+1$$

e generalizando:

$$
\frac 1 {(1-\lambda z)^m} = \sum_{k=0}^{+\infty} \left[{k+m-1 \choose m-1}\lambda^k\right]z^k \text{ onde} \\
u_n={n+m-1 \choose m-1}y^n
$$

## Problemas de Contagem

Seja $n \in \N_1$ e $l \in \N.$ O número de soluções inteiras não negativas da equação:

$$x_1+x_2+x_3+x_4+\dots+x_n=l$$

é dado pela expressão:

$${l+n-1 \choose n-1}$$

Demonstração:

![Demonstração para a fórmula usada para problemas de contagem](./imgs/0009-demonstracao.png)

Exemplos:

![Exemplo 1](./imgs/0009-exemplo1.png)

![Exemplo 2](./imgs/0009-exemplo2.png)

## Dicas para Problemas de Combinatória

:::warning

Esta secção é extra e alguma da informação abaixo não foi lecionada em aula.

:::

### Dividir Bolas por Caixas

Admita-se que temos um problema em que queremos dividir $n$ bolas por $m$ caixas de forma que todas as bolas são iguais,
mas que as caixas são diferentes.
Ou seja, se a caixa 1 tiver duas bolas, não interessa QUE bolas são, mas a caixa 1 tiver duas bolas é diferente da caixa 2 ter duas bolas.  
Exemplos de enunciados deste tipo (referir ao [exercício 2.2 da série 1](./exercicios/fichas-aulas-praticas.md)):

- Exercício 2: **bolas** = chocolates; **caixas** = pessoas;
- Exercício 3: **bolas** = 29 unidades; **caixas** = $n_i$;
- Exercício 4: **bolas** = lugares parlamentares; **caixas** = partidos;
- Exercício 7: **bolas** = chocolates; **caixas** = variedades.

Este tipo de enunciados pode ser descrito por uma equação matemática:

$$
x_1 + x_2 + \cdots + x_m = n
$$

As variáveis $x_1, x_2, \cdots, x_m$ têm um domínio (normalmente $\mathbb{N}_0$ ou $\mathbb{N}^+$) e
estamos interessados no número de soluções da equação, para $x_1, x_2, \cdots, x_m$ nesse domínio.  
Vamos recuperar a ideia de bolas em caixas. Considere-se um conjunto de 10 bolas. Alinhamos as bolas:

$$
\circ \circ \circ \circ \circ \circ \circ \circ \circ \circ
$$

Admita-se que queremos dividir estas 10 bolas por 3 caixas. Fazer isto equivale a dividir as bolas a cima em 3 secções, como por exemplo, da seguinte forma:

$$
\circ \circ \circ | \circ \circ \circ \circ \circ | \circ \circ
$$

O que a divisão a cima representa é que vão 3 bolas para a primeira caixa, 5 bolas para a terceira e 2 bolas para a última caixa.  
Note-se que cada posicionamento das barras define uma única divisão possível das 10 bolas pelas 3 caixas.
Desta forma, o nosso problema de descobrir o número de formas de dividir 10 bolas por 3 caixas equivale a
descobrir o número de formas de colocar 2 barras nos espaços entre as 10 bolas.
Como entre as 10 bolas há 9 espaços, esta quantidade é dada por

$$
{9 \choose 2}
$$

Mais genericamente, o número de formas de distribuir $n$ bolas por $m$ caixas,
é igual ao número de formas de meter $m-1$ barras em $n-1$ espaços, que é dado por:

$$
{n-1 \choose m-1}
$$

CONCLUSÃO:
O número de soluções para a equação

$$
x_1 + x_2 + \cdots + x_m = n
$$

para $x_1, x_2, \cdots, x_m \in \mathbb{N}^+$ é dado pelo coeficiente binomial acima.

{red}(**CUIDADO**: A explicação até aqui só é válida se cada caixa tiver no mínimo uma bola. E se este não for o caso?)

**Caso importante:** As variáveis têm domínio em $\mathbb{N}_0$ e não em $\mathbb{N}^+$.  
Recuperemos o caso em que queremos distribuir as 10 bolas por 3 caixas, mas queremos que haja a possibilidade de haver caixas vazias.  
Vamos usar um clever big brain trick para transformar este problema no que tinhamos anteriormente:
Adicionamos 3 bolas ao nosso conjunto de bolas e resolvermos o nosso problema como anteriormente.

$$
\circ \circ \circ \circ | \circ | \circ  \circ \circ \circ \circ \circ \circ \circ
$$

Como já vimos isto vai dar ${12 \choose 2}$ soluções. Now here's the clever part:
como adicionámos 3 bolas que não deviam estar aqui e cada caixa tem pelo menos uma bola, podemos tirar uma bola a cada caixa:

$$
\cdot \circ \circ \circ | \cdot | \cdot  \circ \circ \circ \circ \circ \circ \circ
$$

Note-se que, por exemplo, a caixa 2 já ficou sem bola nenhuma.
Chegamos então à conclusão que o número de soluções neste caso é:

$$
{ n+m-1 \choose m-1}
$$

(o $+m$ vem das $m$ bolas que acrescentamos, e depois retiramos).

Se tivermos uma restrição do tipo $x_k \geq 3$ (a caixa $k$ tem de ter pelo menos 3 bolas) a solução é muito simples: começamos por colocar 2 das nossas bolas na caixa $k$, e resolvemos o problema do costume para $n-2$ bolas.

Conjugando estas duas técnicas a cima, ficamos capazes de resolver qualquer tipo de restrições do tipo $x_k \geq t$:

1. adicionar bolas A TODAS AS CAIXAS até todas as variáveis terem domínio em $\mathbb{N}^+$;
2. colocar bolas nas caixas que precisam de ter pelo menos $t$ bolas para $t>1$;
3. distribuir as restantes bolas como no problema inicial.

:::tip[NOTA DO AUTOR (João Rocha)]

Se o que acabaste de ler te deixa confuso de alguma forma, das duas uma:

1. apaga completamente esta informação da tua cabeça. O objetivo deste texto é dar intuição para este tipo de problemas que podem aparecear no teste mas não é de todo necessário saber isto. Pessoalmente isto ajuda-me a identificar a resposta mais rápido mas só vai piorar a tua situação se te deixar confuso;
2. se achares que há alguma coisa que podia estar melhor explicada, ou encontrares algum erro, fala comigo e eu tento melhorar isso.

Caso contrário fico feliz por ajudar :)

:::

**BÓNUS:**

Para problemas do tipo

$$
x_1 + x_2 + \cdots + x_m \leq n
$$

é-nos dito que o número de soluções (em $\mathbb{N}^+)$ é

$$
{ n+m \choose m }
$$

Porquê? Esta resposta parece bastante parecida á fórmula para o problema de igualdade (variáveis de domínio em $\mathbb{N}_0$)...
Será que isto é curiosidade?  
Claro que não. O truque é adicionar uma variável $x_{m+1}$ que "deitamos ao lixo". Ou seja:

$$
x_1 + x_2 + \cdots + x_m \leq n \Leftrightarrow x_1 + x_2 + \cdots + x_m + x_{m+1} = n
$$

com $x_{m+1} \in \mathbb{N}_0$.

Chegamos então à solução esperada:

$$
{ n+m+1-1 \choose m+1-1} = {n+m \choose m }
$$

### Funções Geradoras com mais do que uma variável

Pode ser algo overkill para aprender mas reparem que não há nehuma razão para uma função geradora ser só numa variável.

Não há muito que eu posso dizer sobre isto na teoria, portanto vou só dar um exemplo:  
No [exercício 2.2.17 da série 1](./exercicios/fichas-aulas-praticas.md),
as nossas sequências são da seguinte forma:

$$
1^{x_1} 0^{y_1} 1^{x_2} 0^{y_2} \cdots 1^{x_k} 0^{y_k} 1^{x_{k+1}}
$$

De forma que:

$$
y_1 + y_2 + \cdots + y_k = n \quad \wedge \quad x_1 + x_2 + \cdots + x_{k+1} = m
$$

com $x_1, x_{k+1} \in \mathbb{N}_0, y_1, x_2, y_2, \cdots, x_k, y_k \in \mathbb{N}^+$.
Neste ponto podemos ir buscar do nosso génio combinatório e usar os métodos discutidos na secção a cima,
mas aqui queremos falar de geradoras portanto isso fica como exercício para o leitor :P.
Vamos então representar a geradora deste problema:

$$
\begin{aligned}
G(x,y) &= \frac{1}{1-x} \left( y\frac{1}{1-y} \right) \left( x\frac{1}{1-x} \right) \left( y\frac{1}{1-y} \right) \cdots \left( x\frac{1}{1-x} \right) \left( y\frac{1}{1-y} \right) \frac{1}{1-x} = \\
&= x^{k-1} y^k \left( \frac{1}{1-x} \right)^{k+1} \left( \frac{1}{1-y} \right)^k = \\
&= x^{k-1} y^k \left(\sum_{i=0}^\infty {k+i \choose i} x^i \right) \left( \sum_{j=0}^\infty {k-1+i \choose i} y^j \right)
\end{aligned}
$$

Estamos interessados no coeficiente em $x^m y^n$ que é portanto dado por:

$$
{k+m-k+1 \choose m-k+1}{k-1+n-k \choose n-k} = {m+1 \choose k}{n-1 \choose k-1}
$$
