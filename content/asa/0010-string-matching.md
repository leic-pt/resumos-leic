---
title: String Matching
description: String Matching.
  Naive Approach.
  Automatos finitos.
  Rabin Karp.
  Knuth Morris Pratt.
path: /asa/string-matching
type: content
---

# String Matching

``` toc

```

:::tip[Motivação]

- Identificacao de padroes dentro de um texto
- Identificacao de sequencias de DNA semelhantes
- Detecao de copias
- Filtros de spam

:::

## Naive Approach

Dado um texto de tamanho $$m$$ e um padrao de tamanho $$n$$.

- A naive approach geralmente utilizada seria algo do genero:

  - Comparar padrao com cada substring do texto e verificar se sao iguais
  
  - Caso nao sejam, verificar proxima substring do texto

Esta approach tem uma complexidade temporal de $$\Theta(nm)$$


## Rabin-Karp

O algoritmo Rabin-Karp utiliza uma rolling hash function para fazer comparacoes eficientes entre padrao e substrings do texto.

- Na sua essencia o algoritmo funciona da seguinte forma:
  
    - Hash function: Dada uma hash function calculamos o hash value do padrao.

    - Calcula-se o hash value da substring do texto e compara-se com o do padrao.
  
    - Se derem match entao comparam-se os caracteres um a um para verificar se houve padrao encontrado, ou foi match espurio (match por acaso)
  
    - Se nao houve padrao encontrado, cria-se uma nova substring de tamanho n a partir do proximo indice e volta-se a comparar


A complexidade do Rabin-Karp depende da qualidade da hash function.

Uma ma hash function resulta em complexidade $$O(nm)$$, semelhante a approach naive.


Uma boa hash function resulta em complexidade $$O(n + m)$$, pois evita maior parte dos matches espurios.


## Knuth-Morris-Pratt (KMP)

O KMP e um algoritmo parecido com a Naive Approach, mas evita comparacoes desnecessarias baseado numa aplicacao do conceito dos automatos finitos, que permite evitar verificar caracteres que a partida sabemos que sao aproveitaveis.

- O algoritmo consiste em:
    - Pre-processamento, ao calcular a funcao de prefixos: $$O(m)$$.

    - Aplicacao do KMP-Matcher: $$O(n + m)$$.

Complexidade global: $$O(n + m)$$.