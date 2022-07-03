---
title: Lógica Proposicional II - Diagramas de Decisão Binários
description: >-
  Lógica Proposicional II - Sistema Semântico.
  Diagramas de Decisão Binários (des)Ordenados.
  Algoritmos de Manipulação de OBDDs.
path: /lp/logica-proposicional-ii-bdds
type: content
---

# Lógica Proposicional II - Diagramas de Decisão Binários

```toc

```

O grande problema do algoritmo baseado em tabelas de verdade é o seu [**crescimento exponencial**](color:yellow).
Assim sendo, foram desenvolvidos outros algoritmos que permitem aferir de modo mais
eficiente os valores lógicos de uma _fbf_. Nesta secção serão abordados os Diagramas
de Decisão Binários, desordenados e ordenados, e na secção seguinte os Algoritmos de SAT.

## Diagramas de Decisão Binários - (O)BDDs

Precisamos, para falar de BDDs, de definir primeiro **árvore de decisão**.

:::tip[Árvore de Decisão]

Uma [**árvore de decisão**](color:green) para uma _fbf_ é uma árvore onde os [**nós**](color:yellow) contêm símbolos
de proposição e as [**folhas**](color:orange) contêm valores lógicos. A cada nível de profundidade
da árvore os nós correspondem _sempre_ ao mesmo símbolo de proposição, ou seja, [**no
nível $n$ o símbolo de proposição é necessariamente o mesmo em todos os nós**](color:red).  
Cada nó [**_domina_ duas árvores de decisão abaixo dele**](color:blue):

- uma à esquerda, ligada por uma linha a tracejado, indicando que segue o caminho onde o valor do nó é falso;
- uma à direita, ligada por uma linha "cheia", indicando que segue o caminho onde o valor do nó é verdadeiro;

O valor da folha atingida é o mesmo valor atingido na última coluna da tabela de verdade correspondente.

Abaixo podemos observar um exemplo para a árvore de decisão de $P \wedge ((Q \wedge R) \vee (R \wedge \neg Q))$:

![Árvore de Decisão](./assets/0012-arvore-decisao.svg#dark=4)

:::

As árvores de decisão e as tabelas de verdade são, contudo, bastante semelhantes
em relação ao seu tamanho e quantidade de pontos de decisão. Podemos, no entanto,
**transformá-las** em grafos acíclicos dirigidos e rotulados para representar, de
modo mais condensado, a mesma informação.

É, então, interessante definir algumas propriedades que nos serão úteis:

:::info[Propriedades de Grafos]

Um [**grafo dirigido**](color:orange) corresponde a uma estrutura $(N, A)$ em que
$N$ é um conjunto finito e $A$ relação binária definida sobre $N$.
Aqui, $N$ corresponderá aos **nós** do grafo e $A$ aos seus **arcos**.
Dado um grafo dirigido, um nó para o qual não existe um arco que nele termina
diz-se a **raiz**, enquanto que um nó que não tem um arco que dele parte diz-se uma **folha**.
Um nó "intermédio" diz-se **não terminal**.

---

Por outro lado, um [**grafo acíclico**](color:yellow) é um grafo onde não é possível
construir um caminho que comece e termine no mesmo nó.

---

Por fim, um grafo diz-se [**dirigido e rotulado**](color:green) caso seja uma estrutura
$(N, A)$, em que cada relação em $A$ é um conjunto de arcos com um dado rótulo.

:::

Um **BDD** é um grafo acíclico, dirigido e rotulado em que os rótulos dos
nós podem tanto ser proposições (em nós iniciais/não terminais) como valores lógicos
(folhas). Continuamos a ter os tais arcos a "cheio" e tracejado.

![BDD](./assets/0012-bdd.svg#dark=4)

Um [**diagrama de decisão binário ordenado**](color:green), OBDD, é um BDD que satisfaz alguma
relação de ordem total para os símbolos de proposição que contém. Num OBDD não
podem existir caminhos que contenham mais que uma vez o mesmo símbolo de proposição.

- O **nível**, $i$, de um OBDD é o conjunto de todos os seus nós de profundidade $i$.
- Dois OBDDs dizem-se compatíveis caso exista uma ordem aplicada aos seus símbolos de
  proposição tal que ambos os OBDDs a satisfaçam - se $P$ vem antes de $Q$ em $OBDD_{1}$,
  $P$ não pode vir depois de Q em $OBDD_{2}$.

:::details[Exemplos de OBDDs incompatíveis]

Os exemplos abaixo não são compatíveis, visto que não há uma ordem clara - no primeiro,
$R$ vem antes de $Q$; no segundo $R$ vem depois de $Q$. Não podendo estabelecer uma
relação de ordem entre os símbolos de proposição, dizemos que são incompatíveis.

![OBDDs: Compativeis](./assets/0012-compativeis.svg#dark=4)

:::

Dada a importância dos resultados obtidos pelos testes de verificação de propriedades
de _fbfs_ que utilizam OBDDs, devemos olhar para os algoritmos que nos ajudam a manipulá-los.

### Algoritmo [**reduz**](color:yellow)

Percorre, por níveis, o grafo correspondente ao OBDD, [**começando pelas folhas**](color:green). Atribui
um identificador a cada OBDD tal que:

- todas as folhas F têm o _id_ 0 e todas as folhas V têm o _id_ 1;

- a atribuição dos identificadores de um nível é feita considerando que todos os OBDDs
  abaixo já foram identificados. Assim sendo:

  - caso dois sub-OBDDs positivo e negativo (em relação ao "pai") tenham o mesmo
    identificador, esse identificador é dado também ao OBDD "pai".

  - caso entre os OBDDs já identificados exista um OBDD tal que o OBDD a identificar
    e ele têm raízes com rótulos iguais, com OBDDs positivos e negativos com os
    mesmos identificadores, então o identificador do OBDD a identificar é o mesmo desse que estamos a comparar.

  - caso contrário, atribuímos um novo identificador.

Só teoricamente este algoritmo pode ser díficil de entender à primeira, pelo que
talvez o exemplo seguinte (e a sua explicação) ajudem a entender:

:::details[Exemplo - Algoritmo Reduz]

Ora, vamos por partes:

- o primeiro passo consiste em atribuir os identificadores 0 e 1 às folhas F e V, respetivamente;

- passamos para o OBDD de raiz R mais à direita - os "sub-OBDDs" não têm o mesmo
  identificador, nem existem outros OBDDs identificados com raízes de rótulo igual
  que possamos considerar; assim sendo, atribuímos um novo identificador, 2;

- olhamos agora para o OBDD de raiz R mais à esquerda: de facto os seus "sub-OBDDs"
  continuam sem ter o mesmo identificador, mas existe um OBDD já identificado com
  rótulo R, que por acaso tem OBDDs positivo e negativo iguais. Assim sendo, podemos
  atribuir o mesmo identificador a este OBDD, 2;

- temos agora o OBDD de raiz Q mais à direita - os seus "filhos" têm ambos o mesmo
  rótulo e o mesmo identificador, pelo que podemos atribuir esse identificador ao "pai" - 2;

- passando para o OBDD de raiz Q mais à esquerda, podemos reparar que não só os seus
  filhos não têm rótulos iguais como o OBDD de raiz Q já identificado não tem OBDDs
  positivo e negativo iguais aos seus. Não nos resta, portanto, outra alternativa
  senão atribuir um novo identificador, 3;

- por fim, olhando para a raiz P, podemos perceber que os seus "filhos" não têm o
  mesmo identificador, e que os seus OBDDs positivo e negativo são claramente distintos,
  levando-nos portanto à atribuição de um novo identificador, 4!

Temos, então, o nosso OBDD todo identificado, pronto para aplicação do algoritmo seguinte, o _compacta_!

![Algoritmo Reduz](./assets/0012-reduz.svg#dark=4)

:::

### Algoritmo [**compacta**](color:orange)

Com o nosso OBDD identificado, fruto do trabalho realizado com o _reduz_, passamos à fase de compactação do OBDD.

O algoritmo recebe um OBDD já identificado e a sua lista associativa, substituindo
cada sub-OBDD cujo identificador é $i$ pela correspondente chave na lista associativa.
Por exemplo, a lista associativa do exemplo acima tem chaves de 1 a 4 e os valores
associados tal como demonstrados abaixo (o OBDD à esquerda é o resultado final):

![Lista associativa - Compacta](./assets/0012-compacta-lista.svg#dark=4)

Note-se que, começando pela raiz, P tem sub-OBDDs 3 e 2, com raizes Q e R, respetivamente;
Q está ligado a R e a falso, R ligado a falso e a verdadeiro, originando o OBDD compactado tal como o temos à direita.

**Cada _fbf_ $\alpha$ tem um único OBDD reduzido que segue uma dada ordem de relação**.
Podemos, a partir do que foi visto até agora, retirar algumas noções interessantes:

- Uma _fbf_ é [**tautológica**](color:green) apenas se o seu OBDD reduzido é $V$.

- Uma _fbf_ é [**satisfazível**](color:blue) apenas se o seu OBDD reduzido não é $F$.

- Uma _fbf_ é [**não satisfazível/contraditória**](color:red) apenas se o seu OBDD reduzido é $F$.

- Duas _fbfs_ são [**equivalentes**](color:yellow) apenas se os seus OBDDs são estruturalmente semelhantes.
  Dizemos que dois OBDDs são estruturalmente semelhantes se as raízes tiverem o mesmo rótulo e
  os respetivos OBDDs positivo e negativo forem estruturalmente semelhantes.

### Algoritmo [**aplica**](color:red)

O algoritmo em questão recebe um operador lógico binário (_op_) e dois OBDDs reduzidos
e compatíveis de duas _fbfs_ distintas, $\alpha$ e $\beta$, devolvendo o OBDD reduzido
da _fbf_ que correspondente a $\alpha$ _op_ $\beta$. Se quisermos que o operador
seja $\neg$, faremos a disjunção exclusiva (vulgo [XOR](https://cutt.ly/jbRivIx)).

A intuição utilizada durante o algoritmo é:

- Se ambos os OBDDs considerados forem folhas, aplicamos a operação aos correspondentes
  valores lógicos (i.e $V \vee F$ resulta em $V$, etc.);

- Caso contrário, escolhemos o símbolo de proposição com mais prioridade entre
  $\alpha$ e $\beta$, que será a raiz de pelo menos um dos OBDDs, dividindo o problema
  em 2 subproblemas, um onde o símbolo de proposição é verdadeiro e no outro falso:

  - se o símbolo de proposição for a raiz de ambos os OBDDs, o resultante tem esse
    símbolo de proposição como raiz - o OBDD negativo resulta de aplicar o algoritmo
    recursivamente aos negativos, os positivos aos positivos;

  - caso contrário, o resultante terá esse símbolo de proposição como raiz. O OBDD
    negativo resulta de aplicar o algoritmo ao seu OBDD negativo e ao OBDD que não
    contém o símbolo de proposição (o mesmo para o positivo).

Mais uma vez, provavelmente fica mais fácil a ver o exemplo e ler a explicação.

Vejamos então o que acontece com $aplica(\wedge, O_{\neg P \wedge \neg R}, O_{P \vee (Q \wedge R)})$.

![Aplica pt.1](./assets/0012-lp-aplica-1.svg#dark=4)

(Acima encontram-se os OBDDs reduzidos de cada _fbf_)

![Aplica pt.2](./assets/0012-lp-aplica-2.svg#dark=4)

Podemos notar que em ambos os OBDDs o símbolo de proposição com maior prioridade é
$P$, raiz de ambos os OBDDs, pelo que o seu OBDD negativo resulta de aplicar o algoritmo
aos respetivos OBDDs negativos e o positivo aos positivos (o "resultante" tem como linhas
a cheio as linhas originalmente ligadas por $P$ a cheio, a tracejado as originalmente
ligadas a tracejado). Num dos caminhos temos a conjunção de verdadeiro e falso, que é
falso, mas ainda temos de olhar para o outro caminho, visto que não sabemos se nos pode dar uma resposta diferente.

![Aplica pt.3](./assets/0012-lp-aplica-3.svg#dark=4)

Aplicar o algoritmo ao OBDD negativo é diferente, visto que os sub-OBDDs não têm a
mesma raiz. Assim sendo, pegamos no símbolo de proposição com mais prioridade na
relação de ordem total (neste caso Q ou vem antes de R ou não aparece, pelo que
escolhemos Q) e fazemos dele a raiz. Temos, então, que o seu OBDD negativo resulta
de aplicar _op_ ao OBDD que não contém Q e ao OBDD negativo de Q; o seu OBDD positivo
resulta de aplicar _op_ ao OBDD que não contém Q e ao OBDD positivo de Q. Aqui podemos
verificar que ambos os caminhos resultam em falso, pelo que o resultado final é
também falso (todos os caminhos levam a falso) e a conjunção das 2 _fbfs_ é uma contradição.
