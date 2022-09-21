---
title: Machine Learning
description: >-
  O que é Machine Learning?
  Symbolical Learning.
  Statistical Machine Learning.
  Supervised e Unsupervised Machine Learning.
path: /apre/machine-learning
type: content
---

# Machine Learning

```toc

```

Para iniciarmos esta cadeira, temos que ter bem presentes alguns conceitos, sendo o mais significiativo o conceito de _Machine Learning_.

## O que é _Machine Learning_?

Aprender é um conceito fundamental quando quantificamos _inteligência_. Para o ser humano, aprender está na base de tudo pois ninguém nasce ensinado. O mesmo aplica-se a qualquer máquina, daí ter sido criado o conceito [_Machine Learning_](color:pink). Partindo da **psicologia** e **biologia** o principal objetivo desta área de estudo é mimicar o modelo de pensamento humano.

> "Learning is any process by which a system improves performance from experience" - Herbert Simon

Mas como é que é possível pôr uma máquina e racicionar como um ser humano? Temos que começar com [Inteligência Artificial](color:pink). Tal como já tinha sido referido na cadeira, as nossas ações têm várias componentes diferentes por detrás. Todo o nosso raciocínio antes de realizarmos o que quer que seja tem três etapas que são dadas às máquinas para começarem a agir como o ser humano:

- [Razão](color:orange): temos sempre que ter uma justificação para a ação que estamos a realizar; por exemplo, ao fazermos uma jogada num jogo de xadrez temos que saber porque é que estamos a mover a peça para aquela casa especificamente;

- [Adaptabilidade](color:orange): tal como o ser humano, uma máqquina tem que ser capaz de aprender com as suas ações, quer sejam positivas ou negativas. Voltando ao exemplo do jogo de xadrez, ao efetuarmos uma jogada temos que aprender com essa joagada para sabermos se num jogo futuro a podemos usar ou teremos que mudar a nossas estratégia. É assim que as máquinas aprendem!;

- [Criatividade](color:orange): a criatividade nas máquinas tenta modelar as emoções humanas e é uma área muito procurada atualmente. Pretendemos encontrar soluções de maior inteligência sem ser somente com base no raciocínio; queremso encontrar soluções mais _"oustide of the box"_.

### Sistemas

Focando mais na parte de **adaptabilidade**, ou seja, na parte de [aprendizagem](color:pink) de máquinas, sabemos que é uma sub-área dentro de Inteligência Artificial que pode ser registada através de **um sistema ao longo do tempo** ou **múltiplos sistemas registados juntamente com observações de experiência**. Ou seja, sempre que pretendemos aprender precisamos de um [sistema](color:pink), isto é, um conjunto de elementos organizados com um objetivo em comum que é influenciado pelo seu meio (caso seja aberto). Um sistema é descrito pela sua **estrutura**, **objetivo** e **função**.

![Sistema](./assets/0001-sistema.png#dark=3)

Estes sistemas estão em todo o lado, e podem ser sistemas:

- [biológicos](color:orange);
- [ecológicos](color:orange);
- [societários](color:orange);
- [mecânicos](color:orange);
- [digitais](color:orange);
- [quantum](color:orange);
- [hibrídos](color:orange);
- [astrofísicos](color:orange);
- [urbanos](color:orange);

Entre muitos outros. É através destes sistemas, tal como já foi referido acima, que as nossas máquinas **aprendem**, pois, através da experiência, são registados vários tipos de dados, que oferecem múltiplas observações que dão-nos acesso a reconhecimento de dados! Esse reconhecimento de dados é o que nos ajuda a perceber o comportamento de um determinado sistema ([_descriptive learning_](color:pink)) e apoia decisões e recomendações futuras ([_predictive learning_](color:pink)).

## _Machine Learning_

| [**_Machine Learning_**](color:pink)                                      | [**Data Science**](color:orange)                                                          |
| ------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| serve para **melhorar** as decisões tomadas a partir dos dados adquiridos | serve para **descobrir** o que não sabemos a partir dos dados adquiridos                  |
| conjunto de conceitos, princípios e métodos computacionais                | extração não trivial de conhecimentos implícitos, importantes e anteriormente não sabidos |
| parte de estatística, álgebra, matemática e algoritmos                    | parte de _Machine Learning_                                                               |

Depois de vermos as diferenças entre _Machine Learning_ e Data Science, temos que comparar este primeiro a Inteligência Artificial. De facto, ambos são parecidos, contudo, enquanto em Inteligência Artificial é dado como input **dados e uma heurística** de procura de modo a termos um output determinado, em _Machine Learning_ temos que fornecer ao nosso computador **dados e um output prévio** de modo a termos um programa como output.

![Machine Learning](./assets/0001-ml.png#dark=3)

### Aprendizagem

Contudo, de que forma é que estas máquinas podem aprender? Existem três formas diferentes:

- [Aprendizagem supervisionada](color:orange): com um professor ou através de dados de treino e outputs desejados, isto é, etiquetas, quantidades ou estruturas;
- [Aprendizagem não supervisionada](color:orange): sem um professor e através de dados de treino sem outputs desejados;
- [Aprendizagem com reenforço](color:orange): sem um porfessor designado para dar exemplos negativos ou positivos, através de prémios e penalidades observadas através da sequência de ações dentro de um ambiente específico.

O processo de aprendizagem também se caracteriza por ser feito em diferentes etapas. A primeira etapa, [pre-processamento de dados](color:pink), refere-se a aquisição de dados e integração, limpeza dos mesmo, isto é, duplicar e remover o _outlier_, e transformar os dados, isto é, normalização, redução de dimensão e amostragem; de seguida passamos a uma etapa de [mineração de dados](color:pink) recorrente em _Machine Learning_ que se retrata por, através de uns dados, ter que enocntrar associações locais, padrões, que satisfaçam critérios estatísticos significantes (número mínimo de observações de modo a contrariar expectativas) e poder descriminatório de alvos qualitativos ou correlação entre critérios; por fim temos uma fase de [pós-processamente de dados](color:pink) que serve para extrair a informação e conhecimento (**_descriptive stance_**) assim como os modelos aprendidos (**_predictive stance_**), podendo desta forma interpretar e validar os resultados e consolidar os conhecimentos descobertos.

## Symbolic Learning

Dentro das várias vertentes existentes em _Machine Learning_, uma das principais é [_Symbolic Learning_](color:pink). Popular entre 1970 e 1990, esta área de estudo refere-se principalmente a como símbolos são construções criadas pela mente humana, de modo a simplificar a resolução de problemas, que, posteriormente, são usados para nos referirmos a várias partes do mundo. O sistema **aprende uma representação simbólica** através da análise de exemplos positivos e negativos de um conceito. O nome parte do facto que a informação é apresentada através de [símbolos](color:orange).

![Symbolical Learning](./assets/0001-symbolic-learning.png#dark=2)

## Statistical Machine Learning

A segunda vertente mais relevante é [**statistical machine learning**](color:pink) contendo conceitos como regressões lineares, _clustering_ e redes neuronais. Estes dois tipos de _Machine Learning_ diferem principalmente no método através do qual a informação é apresentada: através de **símbolos** e **vetores**, respetivamente.

Ao contrário da vertente anterior, esta abordagem opta por representar os objetos diretamente. Análogo à biologia, onde os órgãos perceptores capturam informação através de recetores, optamos por criar vetores, onde cada **dimensão** representa um certo valor. Podemos também pensar nas várias dimensões como **atributos**. Por exemplo, podemos comparar dois peixes pelos seus peso e tamanho. Ao representar objetos desta maneira podemos comparar duas entidades medindo a [distância euclidiana](color:pink) entre os dois vetores que a representam. O processo de escolher os atributos a representar chama-se [extração de atributos](color:pink).

O objetivo poderá ser, então, discriminar os peixes em dois conjuntos, consoante as dimensões analisadas. Vários algoritmos de _Machine Learning_ realizam esta divisão, de maneiras diferentes. O algoritmo [_Perceptron_](color:orange) tenta determinar a linha que separa os dois tipos de peixes, neste exemplo.

Estes algoritmos operam sobre uma amostra estatística. Ao utilizá-lo para classificar um outro peixe, não há garantias de que a classificação seja de facto correta, problema conhecido como _overfitting_. Este pode ser também resultado de _outliers_ estatísticos, em que, por exemplo, um salmão pode ter atributos muito semelhantes a um peixe de outra espécie, distorcendo a linha de separação entre as duas espécies. Este fenómeno ocorre devido a uma [pequena amostra de treino](color:pink).

Uma amostra reduzida não é representativa da população. Uma solução poderia ser aumentar esta amostra, mas muitas vezes é impossível. Faz-se então um **compromisso**, dando espaço a um pequeno erro. Este compromisso é descrito pelo pressuposto de que a curva de distinção **terá de ser suave**, de acordo com a **teoria da regularização**.

:::tip[Espaços destacados]

Aprender através de uma base de dados é obter **relações de dados** relevantes, estas relações são padrões ou abstrações que equivalem a distribuições de interesse em observações específicas e atributos que podem ser inesperadamente informativos ou inesperadamente discriminativos.

Quandos as nossas variáveis visualizadas são numéricas, um espaço destacado representa um **vetor espaço**, por exemplo o espaço de Euclides, e as observações representão pontos dos dados.

![Espaços destacados](./assets/0001-espaços.png#dark=3)

:::
