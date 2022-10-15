---
title: Fundamentos da Programação em Lógica
description: >-
  Fundamentos da Programação em Lógica.
  Cláusulas de Horn, Predicados, Bases de Dados, Procura.
  Resolução e Árvores SLD.
path: /lp/fundamentos-programacao-logica
type: content
---

# Fundamentos da Programação em Lógica

```toc

```

A programação lógica é um **paradigma de programação** no qual um programa corresponde
à especificação de um problema de forma declarativa, o que contrasta com outros
paradigmas de programação em que são os detalhes correspondentes ao algoritmo que
definem a solução do problema.

Por uma questão meramente ligada à eficiência, utilizamos variações especiais de
cláusulas e de resolução, as **cláusulas de Horn** e a **resolução SLD**,
abordadas mais à frente.

## Cláusulas de Horn

Cláusulas que contêm, no máximo, um literal positivo (isto é, não negado). Se existir,
esse literal positivo será a [**cabeça da cláusula**](color:green). Quaisquer literais negativos
que possam existir farão parte do [**corpo da cláusula**](color:yellow). São exemplos
$\{C, \neg P_{1}, \neg P_{2}\}, \{C\}, \{\neg P_{1}, \neg P_{2}\}$ e $\{\}.$

Dada a equivalência entre $\alpha \to \beta$ e a cláusula de Horn $\{\neg \alpha, \beta\}$,
é vulgar escrever cláusulas de Horn sem ser na forma usual de cláusula (com as chavetas).
Podemos representar cláusulas com o símbolo $\leftarrow$, com o corpo da cláusula à
direita e a cabeça à esquerda. **A cláusula vazia é representada por $\square$**
(sim, é um quadrado).  
Desta feita, os exemplos apresentados anteriormente podem ser apresentados tais que:

$$
C \leftarrow P_{1}, P_{2}\\
C \leftarrow\\
\leftarrow P_{1}, P_{2}\\
\square.
$$

As cláusulas de Horn são divididas em quatro tipos:

- [**Regras/implicações**](color:orange), onde tanto a cabeça como o corpo contêm literais;
- [**Afirmações/factos**](color:yellow), cláusulas onde o corpo não tem literais
  mas a cabeça sim (pode pensar-se, de modo **extremamente informal**, da mesma
  maneira que olhamos para um teorema);
- [**Objetivos**](color:blue), cláusulas cuja cabeça é vazia mas o corpo contém
  pelo menos um literal;
- [**Cláusula vazia**](color:pink).

Se repararmos, os exemplos dados anteriormente são, respetivamente, exemplos de cada um destes tipos.

Tanto as regras como as afirmações chamam-se também [**cláusulas determinadas**](color:blue)
(do inglês _definite clauses_, referindo-se à sua natureza por serem as únicas onde
a cabeça contém um literal). **São elas que vão constituir os nossos programas em Prolog**!

Em resolução com cláusulas de Horn, pelo menos um dos resolventes tem de ser uma
cláusula determinada, visto que só estas contêm literais positivos (caso contrário
nem sequer seria possível aplicar a resolução).

$$
\def\arraystretch{1.5}
\begin{array}{lll}
  1 & Ant(x, y) \leftarrow AD(x, y) && Prem\\
  2 & Ant(x, z) \leftarrow Ant(x, y), AD(y, z) && Prem\\
  3 & AD(Marge, Bart) \leftarrow && Prem\\
  4 & AD(Sr.B, Marge) \leftarrow && Prem\\
  5 & \leftarrow Ant(Sr.B, Bart) && Prem\\
  6 & Ant(Sr.B, Marge) \leftarrow && Res, (1,4), \{Sr.B/x, Marge/y\}\\
  7 & Ant(Sr.B, z) \leftarrow AD(Marge, z) && Res, (2, 6), \{Sr.B/x, Marge/y\}\\
  8 & Ant(Sr.B, Bart) \leftarrow && Res, (3, 7), \{Bart/z\}\\
  9 & \square && Res, (5, 8), \epsilon
\end{array}
$$

## Programas

Em programação em lógica, um **programa** é qualquer conjunto finito de cláusulas
determinadas; um objetivo, aqui, corresponde a uma cláusula cujas instâncias se
pretendam derivar a partir desse programa. Um programa pode ser, por exemplo:

$$
Ant(x, y) \leftarrow AD(x, y)\\
Ant(x, z) \leftarrow Ant(x, y), AD(y, z)\\
AD(Marge, Bart) \leftarrow\\
AD(Sr.B, Marge) \leftarrow\\
$$

Um objetivo pode ser, por exemplo:

$$
\leftarrow Ant(Sr.B, Bart)
$$

Num programa, o conjunto de todas as cláusulas cuja cabeça corresponde a um literal
contendo a letra de predicado $P$ diz-se a [**definição de $P$**](color:orange) -
a definição do predicado $P$, portanto.

Em relação ao exemplo acima, a definição de $Ant$ seria dada por:

$$
\{Ant(x, y) \leftarrow AD(x, y),      Ant(x, z) \leftarrow Ant(x, y), AD(y, z)\}
$$

Uma definição de predicado que contenha apenas cláusulas fechadas, isto é, sem
variáveis, chama-se uma **base de dados para esse predicado** (precisamente
porque não está dependente de nada, são literalmente dados que temos sobre
o predicado em questão).

Ainda em relação ao exemplo anterior, a base de dados de $AD$ pode ser dada por:

$$
\{AD(Marge, Bart) \leftarrow, AD(Sr.B, Marge) \leftarrow \}
$$

:::tip[Definições a reter]

- **Resposta de um programa a um objetivo** - Sendo $\Delta$ um programa e $\alpha$
  um objetivo, uma resposta de $\Delta$ ao objetivo $\alpha$ é uma substituição
  $s$ para as variáveis de $\alpha$.

- **Restrição de uma substituição a variáveis** - Sendo $s$ uma substituição e
  $\{x_{1}, \dots, x_{m}\}$ um conjunto de variáveis, a _restrição de $s$_ ao
  conjunto de variáveis $\{x_{1}, \dots, x_{m}\}$, escrita $s |_{\{x_{1}, \dots, x_{m}\}} = \{t_{i}/x_{i} \in s : x_{i} \in \{x_{1}, \dots, x_{m}\}\}.$

- **Resposta correta de um programa** - Uma resposta $s$ de $\Delta$ ao objetivo
  $\alpha$ diz-se _correta_ se $\Delta \models (\alpha \cdot s)$ ($\models$ lê-se
  "consequência semântica"). É correta caso $\Delta \cup \{\neg\alpha\cdot s\}$ for contraditório.

:::

## Resolução SLD

Do inglês **_Linear Resolution with Selection Function and Definite clauses_**.
É uma estratégia de resolução linear aplicável a **cláusulas determinadas** (isto é,
com cabeça), em conjunto com uma _função de seleção_, a qual dentro dos possíveis
literais aplicáveis de acordo com a resolução escolhe um literal (de modo determinístico).

Esta estratégia é utilizada devido ao princípio da resolução usual não ser determinístico -
não há um caminho específico por onde ir. Para além da resolução "normal", o
algoritmo de unificação também não é determinístico.

:::info[Função de Seleção ($S$)]

Regra para escolher um literal numa cláusula-objetivo como candidato à aplicação do princípio da resolução.
É tal que $S(\leftarrow \alpha = (\alpha_{1}, \dots, \alpha_{n})) \in (\alpha_{1}, \dots, \alpha_{n}).$

:::

Escolhido o literal, é escolhida também uma cláusula do programa cuja cabeça unifique
com o literal escolhido - **regra de procura**. Este passo é muito importante, porque
caso não a apliquemos corretamente podemos correr o risco da prova ser infinita
(ou pelo menos muito mais longa do que precisa de ser).

De um modo não rigoroso, a resolução SLD encontra a resposta de um programa a um
objetivo, substituindo sucessivamente cada literal no objetivo pelo corpo de uma
cláusula cuja cabeça seja unificável com o objetivo escolhido. O processo é sucessivamente
repetido até que ou não existam mais sub-objetivos ou quando nenhum dos restantes
sub-objetivos for unificável com a cabeça de nenhuma das cláusulas do programa.

Resta ainda definir **refutação SLD** e **resposta calculada**:

- [**Refutação SLD**](color:yellow) - uma prova SLD diz-se _refutação_ SLD caso o
  seu último elemento seja a cláusula vazia, $\square$.

- [**Resposta Calculada**](color:green) - sendo $\Delta$ um programa, $\alpha$ um objetivo e $S$
  uma função de seleção. Se a prova SLD para $\alpha$ usando $\Delta$ for finita,
  $[\gamma_{0}, \dots, \gamma_{n}]$ (sequência de objetivos), a composição das substituições
  $s_{0},\dots,s_{n-1}$ restringida às variáveis que ocorrem em $\alpha~(s_{0} \circ \dots \circ s_{n-1})|_{vars(\alpha)}$,
  diz-se uma resposta calculada de $\Delta$ a $\alpha$ via $S$.
  Diz-se também que $n$ é o comprimento da prova SLD.

:::details[Exemplo - Resolução SLD]

No exemplo seguinte, temos uma resolução SLD, com objetivo $\leftarrow Ant(Sr.B, Bart)$,
não tendo sub-objetivos. Assim sendo, procuramos a sua resolução com uma **cabeça** de
uma cláusula do programa. Escolhemo-la, aplicamos o unificador e temos agora o resultado
dessa resolução - um objetivo com dois sub-objetivos. Assim vamos prosseguindo até uma
altura em que temos $AD(Sr.B, Marge)$ tanto no corpo como na cabeça das cláusulas que
restam como objetivo e programa. Assim sendo, chegamos à cláusula vazia, concluindo
que estamos na verdade na presença de uma **refutação SLD**.

![Resolução SLD](./assets/0006-resolucao-sld.svg#dark=2)

Nesta prova, temos:

$$
\begin{aligned}
  \gamma_{0} & = \quad \leftarrow Ant(Sr.B, Bart)\\
  \gamma_{1} & = \quad \leftarrow Ant(Sr.B, y), AD(y, Bart)\\
  \gamma_{2} & = \quad \leftarrow Ant(Sr.B, Marge)\\
  \gamma_{3} & = \quad \leftarrow AD(Sr.B, Marge)\\
  \gamma_{4} & = \quad \square
\end{aligned}
$$

A **resposta calculada** é, então:

$$
(\{Sr.B/x, Bart/z\} \circ \{Marge/y\} \circ \{Sr.B/x, Marge/y\} \circ \epsilon)|_{\{\}} = \epsilon
$$

:::

## Árvores SLD

A mesma função de seleção oferece várias alternativas para a construção de uma refutação SLD,
consoante a cláusula escolhida. As árvores SLD são úteis para mostrar todas as alternativas
em simultâneo.

:::info[Árvore SLD]

Sendo $\Delta$ um programa, $\alpha$ um objetivo e $S$ uma função de seleção, a
árvore SLD de $\Delta$ via $S$ é uma árvore rotulada, construída do seguinte modo:

- o rótulo de cada nó é um objetivo;
- o rótulo da raiz é $\alpha$;
- cada nó com rótulo $\leftarrow \beta_{1},\dots,\beta_{n}$, tem um ramo por
  cada cláusula $\delta \leftarrow \gamma_{1},\dots,\gamma_{p} \in \Delta$ cuja
  cabeça é unificável com $S(\leftarrow \beta_{1},\dots,\beta_{n})$. O rótulo
  da raiz deste ramo corresponde ao resolvente entre as duas cláusulas.

Numa árvore SLD, os ramos que terminam em $\square$ dizem-se **bem sucedidos**,
sendo que os que terminam em objetivos dizem-se **falhados** e os restantes **ramos infinitos**.

:::

Tenhamos o programa:

$$
P(x, z) \leftarrow Q(x, y), P(y, z)\\
P(x, x) \leftarrow\\
Q(a, b) \leftarrow\\
$$

e o objetivo:

$$
\leftarrow P(x, b)
$$

![Árvore SLD](./assets/0006-arvore-sld.svg#dark=3)

Como podemos observar, existem dois nós [**bem sucedidos**](color:green) e um
[**falhado**](color:red), sem qualquer ramo infinito.

Resta ainda enunciar uma propriedade muito importante, a [**independência da função de seleção**](color:purple):
tendo um programa $\Delta$ e um objetivo $\alpha$, independentemente da função de seleção,
todas as árvores SLD de $\Delta$ e $\alpha$ têm o mesmo número (finito ou infinito) de ramos **bem sucedidos**.
