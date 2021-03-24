---
description: Fundamentos da Programação em Lógica, Cláusulas de Horn, Predicados, Bases de Dados, Procura, Resolução e Árvores SLD.
---

# Fundamentos da Programação em Lógica

[[toc]]

A programação lógica é um **paradigma de programação** no qual um programa corresponde à especificação de um problema de forma declarativa, o que contrasta com outros paradigmas de programação em que são os detalhes correspondentes ao algoritmo que definem a solução do problema.

Por uma questão meramente ligada à eficiência, utilizamos variações especiais de cláusulas e de resolução - as _cláusulas de Horn_ e a _resolução SLD_.

## Cláusulas de Horn

Cláusulas que contêm, no máximo, um literal positivo (isto é, não negado). Se existir, esse literal positivo será a **cabeça da cláusula**. Quaisquer literais negativos que possam existir farão parte do **corpo da cláusula**. São exemplos $\{C, \neg P_{1}, \neg P_{2}\}, \{C\}, \{\neg P_{1}, \neg P_{2}\}, \{\}.$

Dada a equivalência entre $\alpha \to \beta$ e a cláusula de Horn $\{\neg \alpha, \beta\}$, é vulgar escrever cláusulas de Horn sem ser na forma usual de cláusula (com as chavetas). Podemos representar cláusulas com o símbolo $\leftarrow$, com o corpo da cláusula à direita e a cabeça à esquerda. **A cláusula vazia é representada por $\square$**(sim é um quadrado Rafa 😎).  
Desta feita, os exemplos apresentados anteriormente podem ser apresentados tais que $C \leftarrow P_{1}, P_{2}; C \leftarrow; \leftarrow P_{1}, P_{2}; \square.$

As cláusulas de Horn são divididas em quatro tipos:

- Regras/implicações, onde tanto a cabeça como o corpo contêm literais;
- Afirmações/factos, cláusulas onde o corpo não tem literais mas a cabeça sim (pode pensar-se da mesma maneira que olhamos para um teorema);
- Objetivos, cláusulas cuja cabeça é vazia mas o corpo contém pelo menos um literal;
- Cláusula vazia.

Se repararmos, os exemplos dados anteriormente são, respetivamente, exemplos de cada um destes tipos.

Tanto as regras como as afirmações chamam-se também **cláusulas determinadas** (do inglês _definite clauses_, referindo-se à sua natureza por serem as únicas onde a cabeça contém literais).

Em resolução com cláusulas de Horn, pelo menos um dos resolventes tem de ser uma cláusula determinada, visto que só estas contêm literais positivos (caso contrário nem sequer seria possível aplicar a resolução).

::: details Resolução com Cláusulas de Horn

O exemplo abaixo é o mesmo que o da [prova por resolução - verdadeiro/falso](https://ist.diogotc.com/lp/0005-logica-primeiraordem-sc.html#resolucao) da matéria anterior, só que utilizando resolução com cláusulas de Horn.

<img src="./assets/0006-res-chorn.png" alt="Resolução com cláusulas de Horn" class="invert-dark">

:::

## Programas

Em programação em lógica, um **programa** é qualquer conjunto finito de cláusulas determinadas; um objetivo, aqui, corresponde a uma cláusula cujas instâncias se pretendam derivar a partir desse programa. Um programa pode ser, por exemplo:

$Ant(x, y) \leftarrow AD(x, y)$  
$Ant(x, z) \leftarrow Ant(x, y), AD(y, z)$  
$AD(Marge, Bart) \leftarrow$  
$AD(Sr.B, Marge) \leftarrow$

Um objetivo pode ser, por exemplo:  
$\leftarrow Ant(Sr.B, Bart).$

- **Definição de um predicado** - num programa, o conjunto de todas as cláusulas cuja cabeça corresponde a um literal contendo a letra de predicado $P$ diz-se a _definição_ de $P$.
