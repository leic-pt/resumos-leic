---
title: Machine Learning
description: >-
  O que é Machine Learning?
  Symbolical Learning
  Statistical Machine Learning
  Supervised e Unsupervised Machine Learning
path: /apre/machine-learning
type: content
---

# Machine Learning

```toc

```

Nesta secção, vamos introduzir o conceito de _Machine Learning_.

## O que é Machine Learning?

_Machine Learning_ surgiu com base na psicologia e biologia, com o objetivo de
mimicar o modelo de pensamento humano. Existem várias vertentes de _machine
learning_ tais como **symbolical machine learning**, popular entre 1970-1990 e
**statistical machine learning** contendo conceitos como regressões lineares,
_clustering_ e redes neuronais. Estes dois tipos de _machine learning_
diferem principalmente no método através do qual a informação é apresentada:
através de **símbolos** e **vetores**, respetivamente.

## Symbolical Learning

Símbolos são construções criadas pela mente humana, de modo a simplificar a
resolução de problemas. Estes são usados para nos referirmos a coisas do mundo.
O sistema aprende uma representação simbólica através da análise de exemplos
positivos e negativos de um conceito.

## Statistical Machine Learning

Ao contrário da vertente anterior, esta abordagem opta por representar os
objetos diretamente. Ánalogo à biologia, onde os orgãos perceptores capturam
informação através de recetores, optamos por criar vetores, onde cada
**dimensão** representa um certo valor. Podemos também pensar nas várias
dimensões como **atributos**. Por exemplo, podemos comparar dois peixes pelos
seus peso e tamanho. Ao representar objetos desta maneira, podemos comparar
duas entidades medindo a **distância euclidiana** entre os dois vetores que a
representam. O processo de escolher os atributos a representar chama-se
**extração de atributos**.

O objetivo poderá ser, então, descriminar os peixes em dois conjuntos,
consoante as dimensões analisadas. Vários algoritmos de _machine learning_
realizam esta divisão, de maneiras diferentes. O algoritmo _perceptron_ tenta
determinar a linha que separa os dois tipos de peixes, neste exemplo.

Estes algoritmos operam sobre uma amostra estatística. Ao utilizá-lo para
classificar um outro peixe, não há garantias de que a classificação seja de
facto correta, problema conhecido como _overfitting_. Este pode ser também
resultado de _outliers_ estatísticos, em que, por exemplo, um salmão pode ter
atributos muito semelhantes a um peixe de outro espécie, distorcendo a linha de
separação entre as duas espécies. Este fenómeno ocorre devido a uma **pequena
amostra de treino**.

Uma amostra reduzida não é representativa da população. Uma solução poderia ser
aumentar esta amostra, mas muitas vezes é impossível. Faz-se então um
**compromisso**, dando espaço a um pequeno erro. Este compromisso é descrito
pelo presuposto de que a curva de distinção **terá de ser suave**, de acordo
com a **teoria da regularização**.

## Supervised e Unsupervised Machine Learning

Em _supervised learning_, são apresentados ao algoritmo exemplos de inputs e os
seus respetivos outputs. O objetivo é gerar uma **função** que, recebido o
input, gera o output esperado. Este tipo de aprendizagem é também referido como
**aprendizagem com professor**, pois os outputs esperados **têm de ser
indicados** por algum tipo de "professor".

_Unsupervised learning_ é designado de **aprendizagem sem professor**, onde o
algoritmo agrupa informação representada por vetores.
